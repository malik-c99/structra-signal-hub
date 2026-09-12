# Single-Click Home Telemetry + Team Page Fixes

## Build

1. **Single-click trigger, whole Home page**
   - Change the telemetry trigger from double-click to single click.
   - Move the telemetry wrapper so it covers the entire Home page (all sections, top to bottom) instead of only the hero.
   - Keep it strictly scoped to Home — other pages (Product, Proof, Pricing, Team, Contact, Privacy) remain unaffected.
   - Overlay stays `pointer-events-none`, so all links and buttons ("Request a Pilot", "Explore Pricing", etc.) keep working; a click both navigates and fires the effect.
   - Keep the 1.8s auto-cleanup, HUD edge clamping, and reduced-motion behavior.

2. **Team page — centered, symmetrical leadership cards**
   - The two leadership cards (Daniel Shihat, Qusai Al Daour) currently render in a 4-column grid aligned left. Change to a centered two-column layout (equal widths, centered in the page) so photos and descriptions sit in the middle, symmetrical.

3. **Qusai's title**
   - Change Qusai Al Daour's role from "Founding Partner, COO & Head of PR" to "Founding Partner, CEO & Head of PR".
   - Keep the tag line ("Industry partnerships · Pilot deployments") and the description paragraph unchanged for both leaders.

## Technical details
- Edit `src/components/hero-telemetry.tsx`: `onDoubleClick` → `onClick`.
- Edit `src/routes/index.tsx`: wrap the full page fragment in `HeroTelemetry` (not just the hero section).
- Edit `src/routes/team.tsx`: leader grid becomes `sm:grid-cols-2` with a centered max-width container; update Qusai's `role` string.
- Verify in preview: single click fires on all Home sections, no effect on other pages, buttons still work, team cards centered, build clean.
