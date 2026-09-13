# Home Background Fade and Heartbeat Telemetry

## Goal
Refine the Home page so the bridge backdrop gradually disappears as visitors leave the opening section, while the node-detection trace reads as one smooth heartbeat signal before fading away.

## Changes
- Tie the bridge backdrop opacity to Home-page scroll progress: begin at its current visibility, then smoothly fade it to transparent as the opening section scrolls out of view.
- Keep the fade limited to the Home page and preserve the current dark overlay and readable foreground content.
- Redraw the telemetry waveform as a continuous heartbeat-style trace with a calm baseline, a smooth central pulse, and a return to baseline across the full opening-section width.
- Refine the trace timing so it flows outward smoothly, remains briefly visible with the node label and ripple, then fades cleanly within the existing short interaction window.
- Preserve single-click triggering, top-section-only scope, full click-through behavior for links and buttons, edge-safe labels, cleanup, and reduced-motion support.

## Verification
- Check the Home page at desktop and mobile widths.
- Confirm the bridge is visible at the top, fades progressively while scrolling, and does not remain behind lower sections.
- Confirm one click in a non-interactive part of the opening section creates one connected heartbeat trace that fades out.
- Confirm navigation buttons remain clickable and no telemetry appears below the opening section or on other pages.

## Technical details
- Use a lightweight scroll-driven opacity value on the Home backdrop, clamped to the opening section's scroll range.
- Update the generated SVG path and its reveal/fade animation rather than adding a second visual layer.
- Respect `prefers-reduced-motion` by avoiding animated scroll transitions and minimizing telemetry motion.
