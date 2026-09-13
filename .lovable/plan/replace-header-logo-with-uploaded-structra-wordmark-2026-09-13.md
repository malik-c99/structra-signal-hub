# Replace header logo with uploaded STRUCTRA wordmark

## Goal
Swap the top-left "STRUCTRA" text logo for the uploaded white wordmark image, while preserving the existing glowing blue signal dot.

## Changes
1. **Asset setup**
   - Upload `user-uploads://image-4.png` via `lovable-assets` to create `src/assets/structra-logo.png.asset.json`.

2. **Header update (`src/components/site-header.tsx`)**
   - Keep the pulsing `bg-signal` dot and its ring animation.
   - Replace the `<span className="font-mono ...">STRUCTRA</span>` text block with an `<img>` sourced from the new asset pointer.
   - Set the image height to roughly match the current text cap-height (≈ `h-5` or `h-6`) and use `w-auto` to preserve aspect ratio.
   - Ensure the logo link remains clickable and accessible with an `alt="STRUCTRA"`.

3. **Verification**
   - Run the typecheck/build gate.
   - Confirm via preview that the white wordmark renders next to the blue dot at desktop and mobile sizes.
