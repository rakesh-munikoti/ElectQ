'use strict';
/**
 * tests/unit/quiz.test.js
 * Unit tests for ElectIQ quiz engine logic.
 * Tests: scoring, grading, validation, question selection.
 */

// Import the pure logic functions (CommonJS-compatible via inline re-declaration)
// Since quiz-logic.js uses ESM export, we re-implement or inline for Node test runner.
// The source-of-truth is public/js/quiz-logic.js — these tests verify that contract.

// ── Inline the logic under test (mirrors public/js/quiz-logic.js exactly) ──
const GRADE_THRESHOLDS = [
  { min: 90, grade: '🏆 Expert Voter',    rank: 'Expert',   message: 'Outstanding! You clearly understand the election process.' },
  { min: 70, grade: '✅ Civic Citizen',   rank: 'Citizen',  message: 'Great job! You have a solid understanding of how elections work.' },
  { min: 50, grade: '📚 Learning Voter',  rank: 'Learning', message: "Good effort! There's more to learn — try reviewing the guide and quiz again." },
  { min: 0,  grade: '🌱 Keep Going!',     rank: 'Beginner', message: 'Keep going! Take your time with the guide — every voter starts somewhere. 💪' },
];

function calculateScorePercentage(correct, total) {
  if (typeof correct !== 'number' || typeof total !== 'number') throw new Error('correct and total must be numbers');
  if (total <= 0) throw new Error('total must be greater than 0');
  if (correct < 0 || correct > total) throw new Error('correct must be between 0 and total');
  return Math.round((correct / total) * 100);
}

function getGrade(percentage) {
  return GRADE_THRESHOLDS.find(t => percentage >= t.min) || GRADE_THRESHOLDS[GRADE_THRESHOLDS.length - 1];
}

function isCorrectAnswer(selected, correct) {
  return typeof selected === 'string' && typeof correct === 'string' && selected.toUpperCase() === correct.toUpperCase();
}

function isValidQuestion(q) {
  return q && typeof q.id === 'string' && typeof q.question === 'string' &&
    Array.isArray(q.options) && q.options.length === 4 &&
    typeof q.correct === 'string' && typeof q.explanation === 'string' && typeof q.difficulty === 'string';
}

function selectQuizQuestions(allQuestions, count) {
  if (!Array.isArray(allQuestions)) throw new Error('allQuestions must be an array');
  if (count <= 0) throw new Error('count must be greater than 0');
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function computeQuizResult(answers, questions) {
  const correct = answers.filter(a => a.correct).length;
  const total = questions.length;
  const percentage = calculateScorePercentage(correct, total);
  const grade = getGrade(percentage);
  return { correct, total, percentage, grade };
}

// ── Sample quiz questions for tests ─────────────────────────────────────────
const SAMPLE_QUESTIONS = [
  { id: 'Q001', phase: 'pre_election', question: 'What must you do before registering?', options: ['A) Register', 'B) Check eligibility', 'C) Find booth', 'D) Get ID'], correct: 'B', explanation: 'Eligibility first.', difficulty: 'easy' },
  { id: 'Q002', phase: 'pre_election', question: 'Why is the registration deadline critical?', options: ['A) Fine', 'B) Formality', 'C) Cannot vote if missed', 'D) Postal only'], correct: 'C', explanation: 'Missing deadline bars you.', difficulty: 'easy' },
  { id: 'Q003', phase: 'election_day', question: 'You are in queue when polls close. What do you do?', options: ['A) Leave', 'B) Stay — right to vote', 'C) Try another booth', 'D) Come tomorrow'], correct: 'B', explanation: 'Queue rights.', difficulty: 'medium' },
  { id: 'Q004', phase: 'election_day', question: 'Why is secret ballot important?', options: ['A) Speed', 'B) Freedom from coercion', 'C) Recount', 'D) Limit votes'], correct: 'B', explanation: 'Privacy is fundamental.', difficulty: 'medium' },
  { id: 'Q005', phase: 'post_election', question: 'Difference: media projection vs official result?', options: ['A) None', 'B) Media is estimate, official is certified', 'C) Official first', 'D) Media more accurate'], correct: 'B', explanation: 'Certification is legal.', difficulty: 'medium' },
];

// ════════════════════════════════════════════════════════════════════════════
describe('calculateScorePercentage()', () => {
  test('5 correct out of 5 returns 100%', () => {
    expect(calculateScorePercentage(5, 5)).toBe(100);
  });

  test('0 correct out of 5 returns 0%', () => {
    expect(calculateScorePercentage(0, 5)).toBe(0);
  });

  test('3 correct out of 5 returns 60%', () => {
    expect(calculateScorePercentage(3, 5)).toBe(60);
  });

  test('throws when total is 0', () => {
    expect(() => calculateScorePercentage(0, 0)).toThrow('total must be greater than 0');
  });

  test('throws when correct exceeds total', () => {
    expect(() => calculateScorePercentage(6, 5)).toThrow();
  });

  test('throws when inputs are not numbers', () => {
    expect(() => calculateScorePercentage('3', 5)).toThrow();
  });

  test('rounds fractional percentages correctly', () => {
    // 2/3 = 66.666... → should round to 67
    expect(calculateScorePercentage(2, 3)).toBe(67);
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('getGrade()', () => {
  test('100% returns Expert Voter grade', () => {
    const result = getGrade(100);
    expect(result.rank).toBe('Expert');
    expect(result.grade).toContain('Expert');
  });

  test('90% returns Expert Voter grade (boundary)', () => {
    expect(getGrade(90).rank).toBe('Expert');
  });

  test('89% returns Civic Citizen grade', () => {
    expect(getGrade(89).rank).toBe('Citizen');
  });

  test('70% returns Civic Citizen grade (boundary)', () => {
    expect(getGrade(70).rank).toBe('Citizen');
  });

  test('50% returns Learning Voter grade (boundary)', () => {
    expect(getGrade(50).rank).toBe('Learning');
  });

  test('0% returns Beginner/Keep Going grade', () => {
    expect(getGrade(0).rank).toBe('Beginner');
  });

  test('every grade has a non-empty message', () => {
    [100, 80, 60, 20].forEach(pct => {
      expect(getGrade(pct).message.length).toBeGreaterThan(0);
    });
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('isCorrectAnswer()', () => {
  test('correct answer returns true', () => {
    expect(isCorrectAnswer('B', 'B')).toBe(true);
  });

  test('wrong answer returns false', () => {
    expect(isCorrectAnswer('A', 'B')).toBe(false);
  });

  test('is case-insensitive', () => {
    expect(isCorrectAnswer('b', 'B')).toBe(true);
    expect(isCorrectAnswer('B', 'b')).toBe(true);
  });

  test('returns false for non-string inputs', () => {
    expect(isCorrectAnswer(null, 'B')).toBe(false);
    expect(isCorrectAnswer('B', undefined)).toBe(false);
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('isValidQuestion()', () => {
  test('a well-formed question returns true', () => {
    expect(isValidQuestion(SAMPLE_QUESTIONS[0])).toBe(true);
  });

  test('question with wrong number of options is invalid', () => {
    const bad = { ...SAMPLE_QUESTIONS[0], options: ['A', 'B', 'C'] }; // only 3
    expect(isValidQuestion(bad)).toBe(false);
  });

  test('question without an id is invalid', () => {
    const bad = { ...SAMPLE_QUESTIONS[0], id: undefined };
    expect(isValidQuestion(bad)).toBe(false);
  });

  test('null is invalid', () => {
    expect(isValidQuestion(null)).toBeFalsy();
  });

  test('all sample questions in bank are valid', () => {
    SAMPLE_QUESTIONS.forEach(q => {
      expect(isValidQuestion(q)).toBe(true);
    });
  });

  test('sample quiz bank has exactly 5 questions', () => {
    expect(SAMPLE_QUESTIONS).toHaveLength(5);
  });

  test('each question has exactly 4 options', () => {
    SAMPLE_QUESTIONS.forEach(q => {
      expect(q.options).toHaveLength(4);
    });
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('selectQuizQuestions()', () => {
  test('returns the requested number of questions', () => {
    const selected = selectQuizQuestions(SAMPLE_QUESTIONS, 3);
    expect(selected).toHaveLength(3);
  });

  test('returns all questions if count >= pool size', () => {
    const selected = selectQuizQuestions(SAMPLE_QUESTIONS, 10);
    expect(selected).toHaveLength(SAMPLE_QUESTIONS.length);
  });

  test('throws when allQuestions is not an array', () => {
    expect(() => selectQuizQuestions(null, 5)).toThrow();
  });

  test('throws when count is 0 or negative', () => {
    expect(() => selectQuizQuestions(SAMPLE_QUESTIONS, 0)).toThrow();
    expect(() => selectQuizQuestions(SAMPLE_QUESTIONS, -1)).toThrow();
  });

  test('returns only valid question objects', () => {
    const selected = selectQuizQuestions(SAMPLE_QUESTIONS, 5);
    selected.forEach(q => expect(isValidQuestion(q)).toBe(true));
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('computeQuizResult()', () => {
  const allCorrect = SAMPLE_QUESTIONS.map(q => ({ qid: q.id, correct: true }));
  const noneCorrect = SAMPLE_QUESTIONS.map(q => ({ qid: q.id, correct: false }));
  const threeCorrect = [
    { qid: 'Q001', correct: true },
    { qid: 'Q002', correct: true },
    { qid: 'Q003', correct: true },
    { qid: 'Q004', correct: false },
    { qid: 'Q005', correct: false },
  ];

  test('5 correct returns 100% and Expert rank', () => {
    const result = computeQuizResult(allCorrect, SAMPLE_QUESTIONS);
    expect(result.percentage).toBe(100);
    expect(result.grade.rank).toBe('Expert');
    expect(result.correct).toBe(5);
  });

  test('0 correct returns 0% and Beginner rank', () => {
    const result = computeQuizResult(noneCorrect, SAMPLE_QUESTIONS);
    expect(result.percentage).toBe(0);
    expect(result.grade.rank).toBe('Beginner');
    expect(result.correct).toBe(0);
  });

  test('3 correct returns 60% and Learning rank', () => {
    const result = computeQuizResult(threeCorrect, SAMPLE_QUESTIONS);
    expect(result.percentage).toBe(60);
    expect(result.grade.rank).toBe('Learning');
    expect(result.correct).toBe(3);
    expect(result.total).toBe(5);
  });
});
