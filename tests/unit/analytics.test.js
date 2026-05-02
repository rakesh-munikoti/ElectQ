'use strict';
/**
 * tests/unit/analytics.test.js
 * Unit tests for ElectIQ analytics event schema validation.
 * Tests: event naming conventions, required parameters, safe fallbacks.
 */

// ── Inline analytics helpers (mirrors firebase-init.js contract) ─────────
const VALID_EVENTS = new Set([
  'app_opened', 'step_viewed', 'quiz_started', 'quiz_completed',
  'quiz_answered', 'language_changed', 'voice_toggled', 'timeline_opened',
  'checklist_opened', 'emergency_protocol_opened', 'share_card_downloaded',
  'region_selected', 'phase_completed', 'guide_restarted',
]);

function isValidEventName(name) {
  return typeof name === 'string' &&
    /^[a-z][a-z0-9_]{0,39}$/.test(name) &&  // GA4 naming rules
    VALID_EVENTS.has(name);
}

function buildStepViewedParams(stepNumber, phase, stepTitle) {
  if (typeof stepNumber !== 'number' || stepNumber < 1 || stepNumber > 12)
    throw new Error('stepNumber must be 1–12');
  if (!['pre_election', 'election_day', 'post_election'].includes(phase))
    throw new Error('invalid phase');
  if (!stepTitle || typeof stepTitle !== 'string')
    throw new Error('stepTitle required');
  return { step_number: stepNumber, phase, step_title: stepTitle };
}

function buildQuizCompletedParams(score, total, language) {
  if (typeof score !== 'number' || score < 0) throw new Error('invalid score');
  if (typeof total !== 'number' || total <= 0) throw new Error('invalid total');
  if (score > total) throw new Error('score cannot exceed total');
  return { score, total, percentage: Math.round((score / total) * 100), language };
}

function safeLogEvent(fn, name, params) {
  // Should never throw — must be resilient
  try {
    if (typeof fn !== 'function') return false;
    fn(name, params);
    return true;
  } catch(e) {
    return false;
  }
}

// ════════════════════════════════════════════════════════════════════════════
describe('isValidEventName()', () => {
  test('app_opened is a valid event', () => {
    expect(isValidEventName('app_opened')).toBe(true);
  });

  test('step_viewed is a valid event', () => {
    expect(isValidEventName('step_viewed')).toBe(true);
  });

  test('quiz_completed is a valid event', () => {
    expect(isValidEventName('quiz_completed')).toBe(true);
  });

  test('all 14 defined events pass validation', () => {
    VALID_EVENTS.forEach(ev => {
      expect(isValidEventName(ev)).toBe(true);
    });
  });

  test('undefined event name is invalid', () => {
    expect(isValidEventName('user_clicked_button')).toBe(false);
  });

  test('event names with spaces are invalid', () => {
    expect(isValidEventName('app opened')).toBe(false);
  });

  test('empty string is invalid', () => {
    expect(isValidEventName('')).toBe(false);
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('buildStepViewedParams()', () => {
  test('returns correct params for step 1', () => {
    const p = buildStepViewedParams(1, 'pre_election', 'Voter Eligibility');
    expect(p.step_number).toBe(1);
    expect(p.phase).toBe('pre_election');
    expect(p.step_title).toBe('Voter Eligibility');
  });

  test('throws if step number out of range', () => {
    expect(() => buildStepViewedParams(0, 'pre_election', 'Test')).toThrow();
    expect(() => buildStepViewedParams(13, 'pre_election', 'Test')).toThrow();
  });

  test('throws if phase is invalid', () => {
    expect(() => buildStepViewedParams(1, 'wrong_phase', 'Test')).toThrow();
  });

  test('throws if stepTitle is missing', () => {
    expect(() => buildStepViewedParams(1, 'election_day', '')).toThrow();
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('buildQuizCompletedParams()', () => {
  test('calculates percentage correctly', () => {
    const p = buildQuizCompletedParams(4, 5, 'EN');
    expect(p.percentage).toBe(80);
  });

  test('includes all required fields', () => {
    const p = buildQuizCompletedParams(3, 5, 'HI');
    expect(p).toHaveProperty('score');
    expect(p).toHaveProperty('total');
    expect(p).toHaveProperty('percentage');
    expect(p).toHaveProperty('language');
  });

  test('throws if score exceeds total', () => {
    expect(() => buildQuizCompletedParams(6, 5, 'EN')).toThrow();
  });

  test('handles perfect score', () => {
    const p = buildQuizCompletedParams(5, 5, 'EN');
    expect(p.percentage).toBe(100);
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('safeLogEvent()', () => {
  test('returns true when fn succeeds', () => {
    const mockFn = jest.fn();
    expect(safeLogEvent(mockFn, 'app_opened', {})).toBe(true);
    expect(mockFn).toHaveBeenCalledWith('app_opened', {});
  });

  test('returns false when fn is not a function', () => {
    expect(safeLogEvent(null, 'app_opened', {})).toBe(false);
    expect(safeLogEvent(undefined, 'app_opened', {})).toBe(false);
  });

  test('returns false when fn throws', () => {
    const throwFn = () => { throw new Error('network error'); };
    expect(safeLogEvent(throwFn, 'app_opened', {})).toBe(false);
  });

  test('never throws itself', () => {
    expect(() => safeLogEvent(null, null, null)).not.toThrow();
  });
});
