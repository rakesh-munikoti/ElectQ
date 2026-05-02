# SOP: Election Phases — Content Rules
> Layer 1 | sop_election_phases.md | ElectIQ v1.0

---

## Purpose
This SOP defines the content rules, required fields, and quality gates for each of the three election phases. Every response delivered to a user must comply with these rules.

---

## Phase 1: Pre-Election 🔵

**Scope**: Everything from initial eligibility check through research on candidates.

**Step IDs (in order)**:
1. `PRE_ELIGIBILITY` — Check Your Eligibility
2. `PRE_REGISTRATION` — Register to Vote
3. `PRE_VOTER_ID` — Get Your Voter ID / Documents
4. `PRE_POLLING_STATION` — Find Your Polling Station
5. `PRE_UNDERSTAND_BALLOT` — Understand Your Ballot

**Content Rules**:
- NEVER state a specific registration deadline — always say "check your local electoral authority's website"
- ALWAYS explain that registration is separate from eligibility
- ALWAYS offer the region_note if `user_context.region` is set
- Present steps 1–3 first. User must explicitly request more or click "Next" to see steps 4–5
- The `why_it_matters` field MUST be included in every Pre-Election response

**Quality Gate**:
- [ ] Steps are numbered and clear
- [ ] No specific legal dates stated as fact
- [ ] Region note surfaced if applicable
- [ ] Why-it-matters included
- [ ] `next_prompt` guides user to Election Day phase when PRE steps are complete

---

## Phase 2: Election Day 🟢

**Scope**: Everything from arriving at the polling station through submitting the ballot.

**Step IDs (in order)**:
1. `ED_ARRIVE` — Arrive at Your Polling Station
2. `ED_CHECK_IN` — Check In
3. `ED_CAST_VOTE` — Cast Your Vote

**Content Rules**:
- ALWAYS lead with reassurance — Election Day is designed to be simple for the voter
- ALWAYS clarify that polling station queues near closing time do not disqualify the voter
- ALWAYS include the secret ballot explanation when discussing voting booth step
- For India: ALWAYS mention VVPAT paper trail as a trust-building note
- NEVER advise the user on WHO to vote for — content is strictly process-focused

**Quality Gate**:
- [ ] Steps numbered and reassuring in tone
- [ ] Secret ballot principle explained in ED_CAST_VOTE
- [ ] Queue rights explained in ED_ARRIVE
- [ ] No candidate or party recommendations

---

## Phase 3: Post-Election 🟡

**Scope**: Vote counting, results declaration, disputes, and ongoing civic engagement.

**Step IDs (in order)**:
1. `POST_COUNTING` — Votes Are Counted
2. `POST_RESULTS` — Results Are Declared
3. `POST_APPEALS` — Disputes and Appeals
4. `POST_CIVIC_ROLE` — Your Ongoing Civic Role

**Content Rules**:
- ALWAYS distinguish between media projections and official certified results
- ALWAYS cite the official legal channel for disputes (election petition via courts)
- NEVER suggest unofficial means of contesting results (protests, social media campaigns, etc.)
- ALWAYS end the full guide cycle with POST_CIVIC_ROLE — democracy is ongoing
- For POST_APPEALS: state that strict deadlines exist but do NOT specify exact days without caveating

**Quality Gate**:
- [ ] Media vs. official results distinction made clear in POST_RESULTS
- [ ] Legal dispute path explained in POST_APPEALS
- [ ] Deadlines caveated, not stated as absolute fact
- [ ] Civic engagement message present in POST_CIVIC_ROLE

---

## Cross-Phase Rules
- Max 3 steps displayed at once across all phases
- Every response includes `next_prompt` to maintain conversational flow
- Phase color coding must be consistent: 🔵 Pre, 🟢 Election Day, 🟡 Post
- If user jumps phases (asks a Post-Election question during Pre-Election guide), answer it, then offer to return to their current position in the guide
