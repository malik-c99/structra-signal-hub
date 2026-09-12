# Interactive Hero Telemetry

## Build
- Add a hero-only click layer that records pointer coordinates relative to the hero.
- Render an expanding multi-ring impact pulse and a localized seismic SVG waveform at every click.
- Place a compact glowing HUD label beside each impact with a randomized `NODE 01–09 — IMPACT DETECTED` message.
- Keep links and calls to action usable while allowing clicks anywhere else in the hero to trigger telemetry.
- Fade and remove each impact after roughly 1.8 seconds, with reduced-motion behavior for accessibility.

## Technical details
- Use a small React state component with stable event IDs and per-event cleanup timers.
- Use existing semantic signal colors and new CSS keyframes; no additional animation package is needed.
- Clamp HUD positioning near hero edges so labels remain visible on mobile and desktop.
- Verify clicks, animation cleanup, existing navigation, metadata, and responsive presentation in the running preview.
