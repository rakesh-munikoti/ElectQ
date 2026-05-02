# SOP: Timeline Rendering — Display Rules
> Layer 1 | sop_timeline_render.md | ElectIQ v1.0

---

## Purpose
This SOP defines how timelines are rendered in the UI. Timeline clarity is critical — a confused user should immediately understand WHERE they are in the election process by looking at the timeline strip.

---

## Timeline Anatomy

The timeline has 3 phases displayed as a horizontal strip:

```
[🔵 PRE-ELECTION]──────[🟢 ELECTION DAY]──────[🟡 POST-ELECTION]
  Steps 1–5                Steps 6–8               Steps 9–12
```

### Active State Indicators
- **Completed phase**: Filled circle, checkmark, muted color
- **Current phase**: Bright color, pulsing ring or bold border
- **Future phase**: Hollow circle, grey/dim color

---

## Step Progress Within Phase

Within each phase, show a mini-stepper:
```
Pre-Election: ● ● ○ ○ ○   (2 of 5 complete)
```

Rules:
- Filled dot = completed step
- Half-filled or active dot = current step
- Empty dot = future step

---

## Timeline Marker Display Rules

Every step has a `timeline_marker` string (e.g., "Months before election"). This is displayed:
- As a subtitle under the step card header
- In the timeline strip as a hover tooltip

**Formatting**:
- Always use relative timing ("Months before", "Days before", "Election Day — morning")
- NEVER use absolute dates (violates NEVER_FABRICATE rule)
- Use a calendar emoji 📅 prefix for clarity

---

## Compact vs. Expanded Timeline

### Compact (default, always visible in header):
- 3 phase icons with labels
- Current phase highlighted
- Step counter (e.g., "Step 3 of 12")

### Expanded (on "View Full Timeline" click):
- All 12 steps listed vertically
- Each with phase color, step number, title, and timeline_marker
- Click any step to jump to it directly
- Completed steps shown with ✓

---

## ASCII Fallback (for tools/timeline_builder.py)

When rendering in plain text / terminal:

```
┌─────────────────────────────────────────────────────────────┐
│                  ELECTION TIMELINE                           │
├─────────────────┬───────────────────┬───────────────────────┤
│  🔵 PRE-ELECTION │  🟢 ELECTION DAY  │  🟡 POST-ELECTION     │
│  Steps 1–5      │  Steps 6–8        │  Steps 9–12           │
├─────────────────┼───────────────────┼───────────────────────┤
│ ✓ 1. Eligibility│                   │                       │
│ ► 2. Registration│                  │                       │
│   3. Voter ID   │                   │                       │
│   4. Polling Stn│                   │                       │
│   5. Ballot     │                   │                       │
└─────────────────┴───────────────────┴───────────────────────┘
Legend: ✓ Complete  ► Current  · Upcoming
```

---

## Color Palette (CSS Variables)
```css
--phase-pre: #3B82F6;       /* Blue */
--phase-election: #10B981;  /* Green */
--phase-post: #F59E0B;      /* Amber */
--phase-pre-bg: #EFF6FF;
--phase-election-bg: #ECFDF5;
--phase-post-bg: #FFFBEB;
```
