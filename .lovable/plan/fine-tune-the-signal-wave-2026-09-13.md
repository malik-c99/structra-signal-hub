# Fine-tune the signal wave

## Visual result
- Reduce the waveform height and double-peak amplitude by approximately 28% while keeping the click point and HUD alignment unchanged.
- Preserve the layered cyan core and aura treatment at a more restrained scale behind the opening text.
- Make the double peak rise smoothly and deliberately rather than snapping into view.
- Accelerate the long left and right baselines so they visually meet the pulse at the same rhythm.

## Technical details
- Split the shared waveform geometry into left baseline, central double-peak pulse, and right baseline paths, with matching aura and core layers.
- Give each segment its own dash animation inside the existing 1.8-second effect lifetime: fast baseline arrival, controlled pulse draw, and prompt right-side completion.
- Keep the full-width continuity, Home-only trigger, click safety, fade-out, and reduced-motion behavior.
- Verify the timing and scale on desktop and mobile, including cleanup and build health.
