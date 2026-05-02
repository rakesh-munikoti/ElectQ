'use strict';
/**
 * tests/unit/router.test.js
 * Unit tests for ElectIQ intent routing logic.
 * Tests: keyword routing, FAQ matching, region detection, clarify fallback.
 */

// ── Inline router logic (mirrors public/js/router.js) ────────────────────
const ALL_NODES_IDS = [
  'PRE_ELIGIBILITY','PRE_REGISTRATION','PRE_VOTER_ID','PRE_POLLING_STATION',
  'PRE_UNDERSTAND_BALLOT','ED_ARRIVE','ED_CHECK_IN','ED_CAST_VOTE',
  'POST_COUNTING','POST_RESULTS','POST_APPEALS','POST_CIVIC_ROLE'
];

const ROUTES = [
  { keys: ['quiz','test me','quiz me'],                                   type: 'quiz' },
  { keys: ['timeline','full process','overview','all steps'],             type: 'overview' },
  { keys: ['restart','start over','beginning'],                           type: 'restart' },
  { keys: ['eligible','eligibility','can i vote','age requirement'],      type: 'step', id: 'PRE_ELIGIBILITY' },
  { keys: ['register','registration','sign up','voter roll'],             type: 'step', id: 'PRE_REGISTRATION' },
  { keys: ['voter id','what to bring','identification','polling card'],   type: 'step', id: 'PRE_VOTER_ID' },
  { keys: ['polling station','where to vote','booth location'],           type: 'step', id: 'PRE_POLLING_STATION' },
  { keys: ['ballot','candidates','referendum','what is on ballot'],       type: 'step', id: 'PRE_UNDERSTAND_BALLOT' },
  { keys: ['election day','arrive','go to vote','polling day'],          type: 'step', id: 'ED_ARRIVE' },
  { keys: ['check in','polling officer','mark register'],                 type: 'step', id: 'ED_CHECK_IN' },
  { keys: ['cast vote','mark ballot','evm','ballot paper','secret ballot'], type: 'step', id: 'ED_CAST_VOTE' },
  { keys: ['count','counting','tally','how are votes counted'],           type: 'step', id: 'POST_COUNTING' },
  { keys: ['results','winner','who won','declared'],                      type: 'step', id: 'POST_RESULTS' },
  { keys: ['appeal','dispute','recount','challenge','petition'],          type: 'step', id: 'POST_APPEALS' },
  { keys: ['civic role','after election','what now','accountable'],       type: 'step', id: 'POST_CIVIC_ROLE' },
];

const REGION_SIGNALS = {
  USA: ['usa','america','united states','american','us election'],
  UK:  ['uk','britain','england','british','parliament'],
  India: ['india','indian','lok sabha','eci','evm','aadhaar'],
};

function detectRegion(txt) {
  const t = txt.toLowerCase();
  for (const [r, sigs] of Object.entries(REGION_SIGNALS)) {
    for (const s of sigs) { if (t.includes(s)) return r; }
  }
  return null;
}

function routeIntent(msg) {
  const t = msg.toLowerCase().replace(/[^\w\s]/g, ' ');
  for (const route of ROUTES) {
    for (const k of route.keys) {
      if (t.includes(k)) return { type: route.type, id: route.id || null };
    }
  }
  return { type: 'clarify' };
}

// ════════════════════════════════════════════════════════════════════════════
describe('routeIntent() — step routing', () => {
  test('"register" routes to PRE_REGISTRATION', () => {
    const result = routeIntent('how do I register to vote?');
    expect(result.type).toBe('step');
    expect(result.id).toBe('PRE_REGISTRATION');
  });

  test('"polling station" routes to PRE_POLLING_STATION', () => {
    const result = routeIntent('where is my polling station?');
    expect(result.type).toBe('step');
    expect(result.id).toBe('PRE_POLLING_STATION');
  });

  test('"results" routes to POST_RESULTS', () => {
    const result = routeIntent('when are results declared?');
    expect(result.type).toBe('step');
    expect(result.id).toBe('POST_RESULTS');
  });

  test('"eligibility" routes to PRE_ELIGIBILITY', () => {
    const result = routeIntent('can I vote? check eligibility');
    expect(result.type).toBe('step');
    expect(result.id).toBe('PRE_ELIGIBILITY');
  });

  test('"evm" routes to ED_CAST_VOTE', () => {
    const result = routeIntent('how does the EVM work?');
    expect(result.type).toBe('step');
    expect(result.id).toBe('ED_CAST_VOTE');
  });

  test('"dispute" routes to POST_APPEALS', () => {
    const result = routeIntent('I want to dispute the election petition');
    expect(result.type).toBe('step');
    expect(result.id).toBe('POST_APPEALS');
  });

  test('"check in" routes to ED_CHECK_IN', () => {
    const result = routeIntent('how does polling officer check in work');
    expect(result.type).toBe('step');
    expect(result.id).toBe('ED_CHECK_IN');
  });

  test('"counting" routes to POST_COUNTING', () => {
    const result = routeIntent('how are votes counted?');
    expect(result.type).toBe('step');
    expect(result.id).toBe('POST_COUNTING');
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('routeIntent() — special routes', () => {
  test('"quiz me" routes to quiz type', () => {
    expect(routeIntent('quiz me please').type).toBe('quiz');
  });

  test('"overview" routes to overview type', () => {
    expect(routeIntent('show me the full process overview').type).toBe('overview');
  });

  test('"start over" routes to restart type', () => {
    expect(routeIntent('start over from the beginning').type).toBe('restart');
  });

  test('unknown intent returns clarify', () => {
    const result = routeIntent('who is the president of mars?');
    expect(result.type).toBe('clarify');
    expect(result.id).toBeFalsy();
  });


  test('empty string returns clarify', () => {
    expect(routeIntent('').type).toBe('clarify');
  });

  test('routing is case-insensitive', () => {
    expect(routeIntent('REGISTER TO VOTE').type).toBe('step');
    expect(routeIntent('Quiz Me').type).toBe('quiz');
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('detectRegion()', () => {
  test('detects USA from "america"', () => {
    expect(detectRegion('I am an american voter')).toBe('USA');
  });

  test('detects India from "lok sabha"', () => {
    expect(detectRegion('when is the lok sabha election')).toBe('India');
  });

  test('detects UK from "parliament"', () => {
    expect(detectRegion('how does parliament work in the UK')).toBe('UK');
  });

  test('returns null for unknown region', () => {
    expect(detectRegion('how do I vote in the election')).toBeNull();
  });

  test('detects India from "eci"', () => {
    expect(detectRegion('The ECI controls elections in India')).toBe('India');
  });
});

// ════════════════════════════════════════════════════════════════════════════
describe('ALL_NODES_IDS — timeline structure', () => {
  test('timeline has exactly 12 steps', () => {
    expect(ALL_NODES_IDS).toHaveLength(12);
  });

  test('steps 1–5 belong to PRE_ELECTION phase', () => {
    const preElection = ALL_NODES_IDS.slice(0, 5);
    preElection.forEach(id => expect(id.startsWith('PRE_')).toBe(true));
  });

  test('steps 6–8 belong to ELECTION_DAY phase', () => {
    const electionDay = ALL_NODES_IDS.slice(5, 8);
    electionDay.forEach(id => expect(id.startsWith('ED_')).toBe(true));
  });

  test('steps 9–12 belong to POST_ELECTION phase', () => {
    const postElection = ALL_NODES_IDS.slice(8, 12);
    postElection.forEach(id => expect(id.startsWith('POST_')).toBe(true));
  });

  test('PRE_ELIGIBILITY is the very first step', () => {
    expect(ALL_NODES_IDS[0]).toBe('PRE_ELIGIBILITY');
  });

  test('POST_CIVIC_ROLE is the very last step', () => {
    expect(ALL_NODES_IDS[ALL_NODES_IDS.length - 1]).toBe('POST_CIVIC_ROLE');
  });

  test('all step IDs are unique', () => {
    const unique = new Set(ALL_NODES_IDS);
    expect(unique.size).toBe(ALL_NODES_IDS.length);
  });
});
