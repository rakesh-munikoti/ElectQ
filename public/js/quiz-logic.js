/**
 * quiz-logic.js
 * Pure, testable quiz logic functions for ElectIQ.
 * These functions have NO side effects and NO DOM dependencies.
 * They are exported for use by the app and by Jest unit tests.
 */

// ─── Grade Thresholds ──────────────────────────────────────────────────────
export const GRADE_THRESHOLDS = [
  { min: 90, grade: '🏆 Expert Voter',    rank: 'Expert',   message: 'Outstanding! You clearly understand the election process.' },
  { min: 70, grade: '✅ Civic Citizen',   rank: 'Citizen',  message: 'Great job! You have a solid understanding of how elections work.' },
  { min: 50, grade: '📚 Learning Voter',  rank: 'Learning', message: "Good effort! There's more to learn — try reviewing the guide and quiz again." },
  { min: 0,  grade: '🌱 Keep Going!',     rank: 'Beginner', message: 'Keep going! Take your time with the guide — every voter starts somewhere. 💪' },
];

/**
 * Calculates the quiz score as a percentage.
 * @param {number} correct - Number of correct answers
 * @param {number} total - Total number of questions
 * @returns {number} Percentage score (0–100)
 * @throws {Error} If inputs are invalid
 */
export function calculateScorePercentage(correct, total) {
  if (typeof correct !== 'number' || typeof total !== 'number') {
    throw new Error('correct and total must be numbers');
  }
  if (total <= 0) throw new Error('total must be greater than 0');
  if (correct < 0 || correct > total) throw new Error('correct must be between 0 and total');
  return Math.round((correct / total) * 100);
}

/**
 * Determines the grade label and message for a given percentage score.
 * @param {number} percentage - Score percentage (0–100)
 * @returns {{ grade: string, rank: string, message: string }}
 */
export function getGrade(percentage) {
  const threshold = GRADE_THRESHOLDS.find(t => percentage >= t.min);
  return threshold || GRADE_THRESHOLDS[GRADE_THRESHOLDS.length - 1];
}

/**
 * Checks whether a given answer is correct for a quiz question.
 * @param {string} selected - The option letter selected by the user (e.g., "A")
 * @param {string} correct - The correct option letter (e.g., "B")
 * @returns {boolean}
 */
export function isCorrectAnswer(selected, correct) {
  return typeof selected === 'string' &&
         typeof correct === 'string' &&
         selected.toUpperCase() === correct.toUpperCase();
}

/**
 * Selects a random subset of quiz questions.
 * @param {Array} allQuestions - The full question pool
 * @param {number} count - How many questions to select
 * @returns {Array} Shuffled subset of questions
 */
export function selectQuizQuestions(allQuestions, count) {
  if (!Array.isArray(allQuestions)) throw new Error('allQuestions must be an array');
  if (count <= 0) throw new Error('count must be greater than 0');
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Validates that a quiz question object has the required shape.
 * @param {object} question - Quiz question to validate
 * @returns {boolean}
 */
export function isValidQuestion(question) {
  return (
    question &&
    typeof question.id === 'string' &&
    typeof question.question === 'string' &&
    Array.isArray(question.options) &&
    question.options.length === 4 &&
    typeof question.correct === 'string' &&
    typeof question.explanation === 'string' &&
    typeof question.difficulty === 'string'
  );
}

/**
 * Checks if ALL questions in the QUIZ array are valid.
 * @param {Array} questions - Array of quiz questions
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateQuizBank(questions) {
  const errors = [];
  if (!Array.isArray(questions)) return { valid: false, errors: ['questions must be an array'] };
  questions.forEach((q, i) => {
    if (!isValidQuestion(q)) errors.push(`Question at index ${i} (id: ${q?.id}) is invalid`);
  });
  return { valid: errors.length === 0, errors };
}

/**
 * Returns quiz result summary object.
 * @param {Array} answers - Array of { qid, correct } objects
 * @param {Array} questions - The quiz questions array
 * @returns {{ correct: number, total: number, percentage: number, grade: object }}
 */
export function computeQuizResult(answers, questions) {
  const correct = answers.filter(a => a.correct).length;
  const total = questions.length;
  const percentage = calculateScorePercentage(correct, total);
  const grade = getGrade(percentage);
  return { correct, total, percentage, grade };
}
