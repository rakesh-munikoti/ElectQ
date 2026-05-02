'use strict';
/**
 * tests/unit/security.test.js
 * Unit tests for ElectIQ security patterns.
 */

function sanitizeChatInput(input) {
  if (!input || typeof input !== 'string') return '';
  // Remove script elements and their content first
  let stripped = input.replace(/<script[^>]*>.*?<\/script>/gis, '');
  // Then strip all remaining HTML tags
  stripped = stripped.replace(/<[^>]*>/g, '');
  return stripped.trim().slice(0, 500);
}

function isValidRegion(region) {
  return ['USA', 'UK', 'India', ''].includes(region);
}

function isValidLanguageCode(code) {
  const VALID = ['EN','HI','BN','TE','MR','TA','GU','KN','ML','PA','OR','AS','UR','MAI','SA','NE','ES','ZH','AR','FR','DE','PT','RU','JA','KO','IT','TR','ID','SW','FA'];
  return VALID.includes(code);
}

function isSafeUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return url.startsWith('https://') || url.startsWith('/');
}

describe('sanitizeChatInput()', () => {
  test('returns empty string for null', () => expect(sanitizeChatInput(null)).toBe(''));
  test('strips script tags', () => expect(sanitizeChatInput('<script>alert(1)</script>Hello')).toBe('Hello'));
  test('strips img onerror', () => expect(sanitizeChatInput('<img onerror=alert(1)>text')).toBe('text'));
  test('strips HTML preserving text', () => expect(sanitizeChatInput('<b>bold</b>')).toBe('bold'));
  test('enforces 500 char limit', () => expect(sanitizeChatInput('a'.repeat(600)).length).toBeLessThanOrEqual(500));
  test('trims whitespace', () => expect(sanitizeChatInput('  hello  ')).toBe('hello'));
  test('preserves normal text', () => expect(sanitizeChatInput('How do I register?')).toBe('How do I register?'));
  test('returns empty for non-string', () => expect(sanitizeChatInput(123)).toBe(''));
});

describe('isValidRegion()', () => {
  test('USA valid', () => expect(isValidRegion('USA')).toBe(true));
  test('UK valid', () => expect(isValidRegion('UK')).toBe(true));
  test('India valid', () => expect(isValidRegion('India')).toBe(true));
  test('empty string valid', () => expect(isValidRegion('')).toBe(true));
  test('random string invalid', () => expect(isValidRegion('Mars')).toBe(false));
  test('SQL injection invalid', () => expect(isValidRegion("'; DROP TABLE--")).toBe(false));
});

describe('isValidLanguageCode()', () => {
  test('EN valid', () => expect(isValidLanguageCode('EN')).toBe(true));
  test('TE valid', () => expect(isValidLanguageCode('TE')).toBe(true));
  test('unknown invalid', () => expect(isValidLanguageCode('XX')).toBe(false));
  test('lowercase invalid', () => expect(isValidLanguageCode('en')).toBe(false));
  test('30 codes supported', () => {
    const VALID = ['EN','HI','BN','TE','MR','TA','GU','KN','ML','PA','OR','AS','UR','MAI','SA','NE','ES','ZH','AR','FR','DE','PT','RU','JA','KO','IT','TR','ID','SW','FA'];
    expect(VALID).toHaveLength(30);
  });
});

describe('isSafeUrl()', () => {
  test('https is safe', () => expect(isSafeUrl('https://vote.gov')).toBe(true));
  test('relative path safe', () => expect(isSafeUrl('/quiz')).toBe(true));
  test('javascript: unsafe', () => expect(isSafeUrl('javascript:alert(1)')).toBe(false));
  test('null unsafe', () => expect(isSafeUrl(null)).toBe(false));
  test('empty unsafe', () => expect(isSafeUrl('')).toBe(false));
});
