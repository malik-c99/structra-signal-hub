# Larger Realistic Heartbeat Signal

## Changes
- Increase the impact reticle and waveform height by at least 50% while keeping the effect centered on the click location and clipped safely inside the opening section.
- Keep the baseline spanning the full available width.
- Replace the current pulse shape with a realistic ECG sequence: subtle pre-dip, narrow high QRS spike, quick drop, and softer recovery wave.
- Strengthen the cyan glow around the trace without reducing text readability.
- Animate the line as a natural double-beat: a sharp primary beat, a shorter secondary beat, a brief hold, then a clean fade.
- Preserve single-click behavior, button click-through, automatic cleanup, and reduced-motion support.

## Verification
- Confirm the larger signal stays correctly framed on desktop and mobile.
- Confirm the full-width baseline, two-beat rhythm, glow, and cleanup are visible.
- Confirm links remain clickable and no signal appears outside the Home opening section.
