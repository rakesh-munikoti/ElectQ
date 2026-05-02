# SOP: User Routing — Intent Detection and Phase Routing
> Layer 1 | sop_user_routing.md | ElectIQ v1.0

---

## Purpose
This SOP defines the deterministic rules for mapping user input to the correct phase and step. Routing MUST be deterministic — no guessing, no ambiguity.

---

## Routing Architecture

### Entry Points (First Message)
Two valid entry modes:
1. **`ENTRY_FIRST_TIME`** — User selects "I'm a first-time voter" or similar. Route to PRE_ELIGIBILITY. Use detailed, patient tone.
2. **`ENTRY_QUICK_OVERVIEW`** — User selects "Give me a quick overview." Route to OVERVIEW response type. Use concise, summary tone.

### Keyword → Route Map (Deterministic)

| Keywords Detected | Route To |
|-------------------|----------|
| `register`, `registration`, `sign up`, `voter roll`, `electoral roll`, `enroll` | PRE_ELECTION → PRE_REGISTRATION |
| `eligible`, `eligibility`, `can I vote`, `qualify`, `age requirement`, `citizen`, `right to vote` | PRE_ELECTION → PRE_ELIGIBILITY |
| `voter ID`, `ID`, `identification`, `document`, `polling card`, `what to bring` | PRE_ELECTION → PRE_VOTER_ID |
| `polling station`, `where to vote`, `polling place`, `booth`, `voting location`, `polling booth` | PRE_ELECTION → PRE_POLLING_STATION |
| `ballot`, `candidates`, `who`, `parties`, `referendum`, `how to vote`, `ballot type`, `understand ballot` | PRE_ELECTION → PRE_UNDERSTAND_BALLOT |
| `arrive`, `election day`, `go to vote`, `when to go`, `today`, `polling day` | ELECTION_DAY → ED_ARRIVE |
| `check in`, `sign in`, `polling officer`, `verify identity`, `mark register` | ELECTION_DAY → ED_CHECK_IN |
| `cast vote`, `mark`, `EVM`, `ballot paper`, `booth`, `secret ballot`, `submit vote` | ELECTION_DAY → ED_CAST_VOTE |
| `count`, `counting`, `tally`, `how are votes counted`, `ballot counting` | POST_ELECTION → POST_COUNTING |
| `results`, `winner`, `declared`, `who won`, `outcome`, `official result`, `certified` | POST_ELECTION → POST_RESULTS |
| `appeal`, `dispute`, `recount`, `challenge`, `fraud`, `irregularity`, `contest`, `petition` | POST_ELECTION → POST_APPEALS |
| `civic role`, `after election`, `what now`, `accountable`, `representative`, `engage` | POST_ELECTION → POST_CIVIC_ROLE |
| `timeline`, `schedule`, `when`, `dates`, `deadline`, `overview`, `full process` | ANY → TIMELINE / OVERVIEW |
| `quiz`, `test me`, `practice`, `question`, `exam` | ANY → QUIZ_MODE |
| `help`, `restart`, `confused`, `start over`, `beginning`, `menu` | ANY → RESTART |
| `faq`, `question about`, `what if`, `can I`, `is it`, `do I need to` | ANY → FAQ_SCAN |

### Priority Order for Multi-Keyword Messages
1. Phase-specific keywords (election day > pre-election > post-election)
2. Action keywords (quiz, timeline, restart)
3. FAQ pattern (`what if`, `can I`)
4. Unknown → CLARIFY

---

## Unknown Intent Protocol

When no keyword matches:

```
RESPONSE_TYPE: clarify
MESSAGE: "I want to make sure I give you the right answer! Could you tell me:
1. Are you asking about preparing to vote, voting on election day, or what happens after?
2. Or pick a topic: [Registration] [Voting Process] [Results] [Quiz] [Full Timeline]"
```

**Rules**:
- NEVER guess at the answer
- NEVER route to a random step
- ALWAYS offer 3–5 clickable topic options as escape hatches
- After 2 consecutive unknown intents, trigger the RESTART offer

---

## Region Detection Protocol

If user mentions a country/region name:
- `usa`, `america`, `united states`, `us election`, `american` → set region: USA
- `uk`, `britain`, `england`, `british`, `parliament` → set region: UK
- `india`, `indian`, `lok sabha`, `ECI`, `eci`, `aadhaar` → set region: India

Once region is set, all subsequent responses include the matching `region_notes` field.

If user asks "is this for my country?": Always surface region_notes and caveat that exact dates must be verified with local authority.

---

## State Management Rules

- `current_phase` is updated whenever the user advances to a new step
- `experience_level` is set at entry and does not change mid-session unless user restarts
- On RESTART: reset `current_phase` to null, keep `region` if already set (user likely knows their country)
- A "Next" action always advances to `next_step_id` from the current node
