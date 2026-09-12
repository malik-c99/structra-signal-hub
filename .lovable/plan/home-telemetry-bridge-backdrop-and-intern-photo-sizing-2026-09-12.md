# Home Telemetry, Bridge Backdrop, and Intern Photo Sizing

## Changes

1. **Full-width Home telemetry response**
   - Keep the single-click detector scoped exclusively to the Home page.
   - Extend the seismic waveform horizontally from the click point toward both the left and right page edges, rather than limiting it to the current compact waveform width.
   - Keep the impact rings and NODE alert anchored at the clicked location, preserve the 1.8-second cleanup, and leave links and buttons fully clickable.
   - Ensure the expanded line is clipped to the Home page width and works across desktop and mobile sizes.

2. **Bridge image as the Home page backdrop**
   - Reuse the existing bridge/telemetry image as a full-page Home background at 75% opacity.
   - Position it behind every Home section without affecting Product, Proof, Pricing, Team, Contact, or Privacy.
   - Preserve text readability with the existing dark surfaces and a restrained dark treatment over the image where needed.
   - Keep the existing bridge image in the opening section unless its duplication visually overwhelms the page; the background reflection remains the primary requested change.

3. **Uniform intern photo boxes**
   - Give every image in the interns section the same regular rectangular dimensions.
   - Make Ammar Alalawi’s photo area exactly the same height and width as the other intern photos, while keeping his name, title, and descriptions beneath it.
   - Use consistent cropping so no photo stretches or enlarges its card unexpectedly.

## Verification

- Confirm a single click anywhere on Home creates a waveform reaching both horizontal edges and cleans up automatically.
- Confirm clicks on every other page create no telemetry effect.
- Check the 75%-opacity bridge backdrop and readable text on desktop and mobile.
- Check all intern photo boxes, including Ammar’s, have matching dimensions without distortion.
- Confirm the site remains error-free.

## Technical details

- Update the Home telemetry SVG and animation sizing so its coordinate system spans the container width around each impact.
- Add a Home-only layered background using the existing bridge image asset and non-interactive positioning.
- Replace content-dependent intern image sizing with a shared fixed aspect ratio and stable dimensions.
