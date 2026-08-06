# Design QA

## Evidence

- Source visual truth: `reference-captures/sac-desktop-step-1.png`, `sac-desktop-step-4.png`, `sac-desktop-step-7.png`, and the `sac-mobile-capture-*.png` sequence captured from `https://sac-ai.com/`.
- Implementation screenshots: `reference-captures/qa-nova-about-final.png`, `qa-nova-dark-final.png`, `qa-nova-contact-final.png`, and `nova-mobile-step-0.png` through `nova-mobile-step-10.png`.
- Combined comparison: `reference-captures/design-qa-comparison-final.png`.
- Desktop viewport: 1440 × 900 CSS px, device scale factor 1. Source and implementation screenshots are both 1440 × 900 px.
- Mobile viewport: 390 × 844 CSS px, device scale factor 1. Source and implementation screenshots are both 390 × 844 px.
- State: scroll-triggered content fully revealed; active navigation synchronized to the visible section; terminal build animation active when visible.

## Full-view comparison

The implementation preserves the source's editorial paper surface, fixed fine-rule navigation, left registration rail, large high-contrast serif typography, orange signal color, measured section spacing, border-led composition, dark cinematic interlude, technical build panel, horizontal contact marquee, and structured contact footer. Nova's own photographs and business content replace the source's identity-specific assets and copy.

## Focused comparison

- About: matched the oversized serif heading, restrained biography, technical portrait/specimen panel, grid lines, fine labels, and orange calibration marks.
- Dark section: matched the abrupt black field, fixed navigation color reversal, framed image stage, REC/player chrome, oversized section word, and secondary list.
- Contact: matched the centered oversized serif invitation, hand-drawn orange underline treatment, running keyword strip, ruled contact grid, and bottom utility row.
- Mobile: verified the source's single-column reflow, fixed compact navigation, full-width specimen panel, stacked practice cards, portrait cinema stage, terminal card, and stacked contact details.

## Required fidelity surfaces

- Fonts and typography: display/body hierarchy, optical serif weight, Chinese/Latin pairing, line height, wrapping, and letter spacing match the source's editorial intent. External font loading was removed so the design keeps a stable system-serif fallback for domestic access.
- Spacing and layout rhythm: desktop and mobile section spacing, rules, rails, grids, and content order are stable with no overlap or clipped controls.
- Colors and visual tokens: warm paper, near-black ink, muted gray, orange accent, and dark-section reversal map consistently to the source.
- Image quality and asset fidelity: all visible imagery uses Nova's real supplied photographs with intentional crops and tonal treatment; no placeholder illustration, fake avatar, or handcrafted SVG substitutes are present.
- Copy and content: all app-specific content is Nova's business history, services, process, location, and contact information; source identity content was not copied.
- Accessibility and behavior: semantic headings/links, useful alt text, reduced-motion fallback, adequate contrast, responsive tap targets, active navigation, smooth anchors, scroll reveals, recorder, marquee, and terminal progress are present.

## Findings

No actionable P0, P1, or P2 differences remain for the requested visual direction and interaction model.

## Comparison history

1. Initial implementation pass matched the section structure and major motion system. Desktop and mobile captures found no broken grids or overlapping content.
2. A domestic-access resilience issue was found in the external Google font import. The external dependency was removed and replaced with a locally available editorial serif/sans fallback stack.
3. Post-fix desktop captures were repeated at the same 1440 × 900 viewport. About, dark section, and contact comparisons remained visually aligned. Mobile was verified at 390 × 844, navigation anchors were clicked, active states updated correctly, and browser console warnings/errors were empty.

## Implementation checklist

- [x] Desktop source capture and small-step scroll inspection
- [x] Mobile source capture at 390 × 844
- [x] Staggered scroll reveal and active navigation
- [x] Dark-section navigation reversal and cinematic player motion
- [x] Live recorder and build-terminal typing/progress
- [x] Contact pulse and continuous marquee
- [x] Desktop and mobile responsive QA
- [x] Reduced-motion support
- [x] Console error check

## Follow-up polish

No blocking polish remains. Future iterations can add new verified client outcomes to the Practice section without changing the motion system.

final result: passed
