# Global Impact Telemetry and Display Typography

## Build
- Move the existing click-driven structural telemetry layer from the homepage hero into the shared site layout so it covers the header, every page section, and footer.
- Position each ripple, seismic trace, and randomized node HUD from viewport click coordinates while preserving all links, forms, sliders, and navigation interactions.
- Keep each alert visible for 1.8 seconds, then remove it automatically, including reduced-motion behavior.
- Remove the homepage-only wrapper while retaining the hero’s current structure, styling, and boundary.
- Load Syne in heavy weights from Google Fonts and use it as the global display face for `h1`, `h2`, and `h3` titles across all pages.

## Technical details
- Reuse the current telemetry animation and semantic signal colors; no new animation dependency is needed.
- Mount one fixed, pointer-transparent effects layer around the complete shared layout.
- Verify page interactions, click placement after scrolling, automatic cleanup, typography, and current build health.
