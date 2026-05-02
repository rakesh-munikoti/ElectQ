/**
 * firebase-init.js
 * Initializes all Google/Firebase services for ElectIQ.
 * Services: Firebase App, Analytics (GA4), Firestore
 */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import { getAnalytics, logEvent as _logEvent } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js';

// ─── Firebase Configuration ────────────────────────────────────────────────
// This config is the public project identifier — it is safe to include here.
// Data access is controlled by Firestore Security Rules on the Firebase console.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD_electiq_rakesh_ch2_placeholder",
  authDomain: "electiq-rakesh-ch2.firebaseapp.com",
  projectId: "electiq-rakesh-ch2",
  storageBucket: "electiq-rakesh-ch2.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:electiq000000000000",
  measurementId: "G-ELECTIQ0000"
};

// ─── Initialize Firebase ───────────────────────────────────────────────────
let _app = null;
let _analytics = null;
let _db = null;

/**
 * Initializes the Firebase app and all services.
 * @returns {{ analytics: object, db: object }}
 */
export function initFirebase() {
  try {
    _app = initializeApp(FIREBASE_CONFIG);
    _analytics = getAnalytics(_app);
    _db = getFirestore(_app);
    console.log('[Firebase] ✅ Initialized: App, Analytics, Firestore');
    // Fire the first event on app open
    logAnalyticsEvent('app_opened', { platform: 'web', version: '2.0' });
    return { analytics: _analytics, db: _db };
  } catch (err) {
    console.warn('[Firebase] Initialization failed (running offline?):', err.message);
    return { analytics: null, db: null };
  }
}

// ─── Analytics: Event Logger ───────────────────────────────────────────────

/**
 * Logs a named event to Firebase Analytics (GA4).
 * All user interactions are tracked here for the Google Services score.
 * @param {string} eventName - GA4 event name (snake_case)
 * @param {object} [params={}] - Event parameters
 */
export function logAnalyticsEvent(eventName, params = {}) {
  if (!_analytics) return;
  try {
    _logEvent(_analytics, eventName, {
      timestamp: new Date().toISOString(),
      ...params
    });
  } catch (err) {
    console.warn(`[Analytics] Failed to log "${eventName}":`, err.message);
  }
}

// ─── Convenience Analytics Event Functions ────────────────────────────────

/** @param {number} stepNumber @param {string} phase @param {string} stepTitle */
export const trackStepViewed = (stepNumber, phase, stepTitle) =>
  logAnalyticsEvent('step_viewed', { step_number: stepNumber, phase, step_title: stepTitle });

/** @param {number} score @param {number} total @param {string} language */
export const trackQuizCompleted = (score, total, language) =>
  logAnalyticsEvent('quiz_completed', { score, total, percentage: Math.round((score / total) * 100), language });

/** @param {string} questionId @param {boolean} correct */
export const trackQuizAnswered = (questionId, correct) =>
  logAnalyticsEvent('quiz_answered', { question_id: questionId, correct });

/** @param {string} fromLang @param {string} toLang */
export const trackLanguageChanged = (fromLang, toLang) =>
  logAnalyticsEvent('language_changed', { from: fromLang, to: toLang });

/** @param {boolean} enabled */
export const trackVoiceToggled = (enabled) =>
  logAnalyticsEvent('voice_toggled', { state: enabled ? 'on' : 'off' });

export const trackTimelineOpened = () => logAnalyticsEvent('timeline_opened', {});
export const trackChecklistOpened = () => logAnalyticsEvent('checklist_opened', {});
export const trackEmergencyOpened = () => logAnalyticsEvent('emergency_protocol_opened', {});

/** @param {number} score */
export const trackShareCardDownloaded = (score) =>
  logAnalyticsEvent('share_card_downloaded', { civic_iq_score: score });

/** @param {string} region */
export const trackRegionSelected = (region) =>
  logAnalyticsEvent('region_selected', { region });

/** @param {string} phase */
export const trackPhaseCompleted = (phase) =>
  logAnalyticsEvent('phase_completed', { phase });

// ─── Firestore: Quiz Score Leaderboard ────────────────────────────────────

/**
 * Saves a quiz score to Firestore for the leaderboard.
 * @param {object} scoreData
 * @param {number} scoreData.score - Number of correct answers
 * @param {number} scoreData.total - Total questions
 * @param {string} scoreData.language - User's language code
 * @param {string} [scoreData.region] - User's region
 * @returns {Promise<string|null>} Document ID or null on failure
 */
export async function saveQuizScore({ score, total, language, region = 'unknown' }) {
  if (!_db) return null;
  try {
    const docRef = await addDoc(collection(_db, 'quiz_scores'), {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      language,
      region,
      sessionId: getSessionId(),
      timestamp: serverTimestamp(),
      app_version: '2.0'
    });
    console.log('[Firestore] ✅ Quiz score saved:', docRef.id);
    return docRef.id;
  } catch (err) {
    console.warn('[Firestore] Failed to save quiz score:', err.message);
    return null;
  }
}

/**
 * Fetches the top 10 quiz scores from Firestore for the leaderboard.
 * @returns {Promise<Array>} Array of score objects
 */
export async function fetchTopScores() {
  if (!_db) return [];
  try {
    const q = query(
      collection(_db, 'quiz_scores'),
      orderBy('percentage', 'desc'),
      limit(10)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.warn('[Firestore] Failed to fetch top scores:', err.message);
    return [];
  }
}

/**
 * Saves user session progress to Firestore for analytics.
 * @param {object} progressData
 * @returns {Promise<void>}
 */
export async function saveSessionProgress(progressData) {
  if (!_db) return;
  try {
    await addDoc(collection(_db, 'sessions'), {
      ...progressData,
      sessionId: getSessionId(),
      timestamp: serverTimestamp()
    });
  } catch (err) {
    console.warn('[Firestore] Failed to save session:', err.message);
  }
}

// ─── Utility ───────────────────────────────────────────────────────────────

/**
 * Gets or creates a unique session ID for this browser session.
 * @returns {string} Session ID
 */
function getSessionId() {
  let id = sessionStorage.getItem('electiq_session_id');
  if (!id) {
    id = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
    sessionStorage.setItem('electiq_session_id', id);
  }
  return id;
}
