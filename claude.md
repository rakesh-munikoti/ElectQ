# 📜 PROJECT CONSTITUTION — Election Guide Assistant
> claude.md | Version 1.0 | Challenge-2 | Locked after Phase 1 approval

---

## 1. Project Identity

- **Name**: ElectIQ — Interactive Election Guide Assistant
- **Mission**: Guide any citizen through the complete election lifecycle in a clear, step-by-step, timeline-driven, conversational format.
- **Audience**: First-time voters, returning voters, civic observers
- **Scope**: Universal election concepts + region-aware caveats (USA, UK, India, Generic)

---

## 2. Data Schema (LOCKED)

### Input Shape
```json
{
  "user_intent": "string",
  "user_context": {
    "experience_level": "first_time | returning | observer",
    "region": "USA | UK | India | null"
  },
  "current_phase": "pre_election | election_day | post_election | null"
}
```

### Output Shape
```json
{
  "response_type": "step_guide | timeline | faq | quiz | overview | clarify",
  "phase": "pre_election | election_day | post_election | general",
  "content": {
    "title": "string",
    "steps": ["string"],
    "timeline_marker": "string | null",
    "why_it_matters": "string",
    "next_prompt": "string"
  }
}
```

### Knowledge Base Node Shape (election_kb.json)
```json
{
  "phase": "pre_election | election_day | post_election",
  "id": "string",
  "title": "string",
  "description": "string",
  "steps": ["string"],
  "why_it_matters": "string",
  "timeline_marker": "string",
  "region_notes": {
    "USA": "string",
    "UK": "string",
    "India": "string"
  },
  "keywords": ["string"],
  "next_step_id": "string | null"
}
```

---

## 3. Behavioral Rules (INVARIANT)

| Rule | Description |
|------|-------------|
| **NEVER_FABRICATE** | Never state jurisdiction-specific legal dates as fact. Always caveat: "Check your local electoral authority for exact dates." |
| **CHUNK_3** | Always present max 3 steps at a time. Never dump all steps at once. |
| **PLAIN_LANGUAGE** | No legal jargon without inline explanation. Readability grade: 8th grade max. |
| **WHY_MATTERS** | Every phase/step must include a "Why this matters" explanation. |
| **CLARIFY_UNKNOWN** | Unknown or ambiguous intent → ask a clarifying question. NEVER guess. |
| **OFFER_RESTART** | If user appears confused (2+ off-topic messages), offer to restart the guide. |
| **ENTRY_MODES** | Support two entry modes: "First-time voter" (slow, detailed) and "Quick overview" (concise). |
| **REGION_AWARE** | If region is null, present generic steps. If region is set, surface region_notes. |

---

## 4. Intent Routing Map (LOCKED)

| User Signal | Route Target |
|-------------|--------------|
| register, sign up, eligible, eligibility | PRE_ELECTION → REGISTRATION |
| document, ID, what to bring, polling card | ELECTION_DAY → CHECKLIST |
| vote, polling station, ballot, how to vote | ELECTION_DAY → VOTING_PROCESS |
| count, counting, tally, how are votes | POST_ELECTION → COUNT_PROCESS |
| results, winner, who won, outcome | POST_ELECTION → RESULTS |
| appeal, dispute, challenge, recount | POST_ELECTION → APPEALS |
| timeline, schedule, when, dates, deadline | ANY → TIMELINE |
| quiz, test me, practice | ANY → QUIZ_MODE |
| overview, summary, quick | ANY → OVERVIEW |
| help, restart, confused, start over | ANY → RESTART |

---

## 5. Architectural Invariants

- **Layer 1 (Architecture)**: SOPs define content rules. Content logic lives here, not in tools.
- **Layer 2 (Navigation)**: Routing logic must be deterministic. No LLM hallucination in routing.
- **Layer 3 (Tools)**: Python scripts are stateless, pure functions. They load data and transform it.
- **UI Layer**: HTML/CSS/JS single-file app. No framework required. No external dependencies beyond a font CDN.
- **Knowledge Base**: `data/election_kb.json` is the single source of truth. All content pulled from here.
- **No Secrets**: No API keys required. Fully static/local operation.

---

## 6. File Ownership Map

| File | Owner Layer | Purpose |
|------|-------------|---------|
| `data/election_kb.json` | Data | Single source of truth for all election content |
| `data/quiz_questions.json` | Data | Quiz question bank |
| `architecture/*.md` | Layer 1 | SOPs — content and behavioral rules |
| `tools/*.py` | Layer 3 | Stateless transformation engines |
| `index.html` | UI | Full chat interface, single-file deliverable |

---

## 7. Maintenance Notes

- To add a new country: Add `region_notes["CountryCode"]` to each KB node. Update routing map in `sop_user_routing.md`.
- To add a new election phase: Add new phase nodes to `election_kb.json`. Update `sop_election_phases.md`.
- Quiz questions auto-generated from KB `steps` + `why_it_matters` fields.
- Schema changes require version bump in this file header.
