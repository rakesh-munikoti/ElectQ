# 🔍 FINDINGS — ElectIQ Election Guide Assistant
> Research Log | Protocol 0 | Challenge-2

---

## Research Session 1 — Election Processes (USA, UK, India)

### USA
- **System**: Presidential, decentralized
- **Phases**: Primary/Caucus → National Convention → General Election → Electoral College
- **Registration**: State-managed. Deadlines vary — some allow Election Day registration.
- **Key body**: State-level election authorities (varies)
- **Unique feature**: Electoral College — citizens vote for electors, not directly for President
- **Key caveat**: Deadlines vary wildly by state. MUST caveat all dates.

### UK
- **System**: Parliamentary, Westminster model
- **Phases**: Dissolution → Campaigning → General Election (First-Past-The-Post) → Government Formation
- **Registration**: Must be on electoral register. Individual Electoral Registration (IER) system.
- **Key body**: Electoral Commission + Local Returning Officers
- **Unique feature**: Citizens vote for MP in their constituency, not PM directly

### India
- **System**: Parliamentary, centralized
- **Phases**: Model Code of Conduct → Multi-phase polling → Vote counting → Result declaration
- **Registration**: ECI manages. Form 6 for new registrations. Eligible at 18+. EVMs + VVPATs used.
- **Key body**: Election Commission of India (ECI)
- **Unique feature**: Multi-phase elections across weeks due to scale. VVPAT paper trail.

---

## Universal Election Lifecycle (Generic — Source of Truth)

### Phase 1: Pre-Election
1. Eligibility check (age, citizenship, residency)
2. Voter registration (deadlines, methods)
3. Voter ID / documentation preparation
4. Understanding candidates and parties
5. Finding your polling station
6. Understanding your ballot type

### Phase 2: Election Day
1. Know your polling station location and hours
2. Bring required documents/ID
3. Check in at the polling station
4. Receive your ballot
5. Mark your ballot correctly
6. Submit your ballot (machine or box)
7. Collect proof of voting (where applicable)

### Phase 3: Post-Election
1. How votes are counted/tallied
2. Official results declaration process
3. How to verify your vote was counted
4. Electoral disputes and appeals process
5. Formation of new government
6. Your ongoing civic role

---

## UX Research Notes

- **Best practice**: Show 1-3 steps at a time — avoid cognitive overload
- **Color coding**: Blue/Pre-Election, Green/Election Day, Yellow/Post-Election is intuitive
- **Progress indicators**: Timeline strips dramatically improve user orientation
- **Tone**: "Friendly civic guide" — like explaining to a friend, not a legal document
- **First-time voters**: Need more "why this matters" context
- **Returning voters**: Prefer quick summaries, can skip basics

---

## Data Sources Referenced
- USA.gov — voter registration processes
- Electoral Commission (UK) — registration, voting
- Election Commission of India (ECI) — EVM process, phases
- ACE Electoral Knowledge Network — comparative election education
- Center for Civic Design — UX for voter guides
- NIST Common Data Format — JSON structure for electoral data

---

## Constraints & Decisions
- **No external APIs required** — fully static operation
- **No legal dates hardcoded** — all date references will say "check your local authority"
- **Single-file deliverable** — `index.html` with embedded JS/CSS
- **Knowledge base format**: JSON (human-readable, easily extensible)
- **Routing**: Pure keyword/intent matching in JS — deterministic, no ML required
