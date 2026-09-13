# Redesign the anomaly signal

## Visual result
- Render one shared full-width M-shaped impact path twice: a broad blurred cyan aura underneath and a crisp light-cyan core above.
- Replace the current ECG sequence with two extreme upward peaks, sharp plunges below the baseline, and short damped oscillations returning to a flat signal.
- Keep the thin circular target centered directly behind the spike and place the node alert beside it without obscuring the waveform.
- Preserve the current single-click trigger, Home-only scope, pointer-safe overlay, and fade-out timing.

## Technical details
- Generate the new path around each click with edge-aware positioning so the whole spike remains visible near screen boundaries.
- Increase the SVG vertical range and waveform height for the larger amplitude.
- Synchronize both path layers with the same draw animation; use separate stroke widths, opacity, blur, and glow styles for depth.
- Simplify the reticle to a restrained HUD ring and retain reduced-motion behavior.
- Verify desktop and mobile rendering, full-width baseline continuity, click safety, cleanup, and build health.
