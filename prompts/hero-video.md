# AI Asset Prompts — Nav Uday Library

Art direction: warm modern daylight interior, paper-realistic textures, emerald/royal accents over deep ink.

---

## 1) Hero Background Video (`/public/video.mp4`)

**Model**: Runway / Pika / Kling / Sora

**Prompt**:

Create a seamless looping cinematic background video for a premium digital library website. Scene: dark navy ink (#0F172A) ambient space with floating translucent book pages and soft glowing library particles. Add subtle 3D depth: layered holographic book spines, gentle volumetric fog, and slow drifting light rays in emerald (#0F766E) and royal (#1D4ED8). Foreground should remain visually clean for UI overlay (no readable text). Style: glass + hologram, ultra-soft ambient shadows, smooth camera micro-motion (slow parallax feel), high quality, 4K, 10–15 second seamless loop, no flashing, no sudden cuts. --ar 16:9

**Fallback prompt** (if above is too abstract):

A seamless, looping, cinematic tracking shot through a modern library central aisle. Minimalist glass study cabins with warm desk lamps casting clean shadows. Floating dust particles moving slowly through the air. Colors: deep slate blue, charcoal, warm amber accents. Slow camera motion, 4K, hyper-detailed, clean interior architectural design. --ar 16:9

---

## 2) Services Images (`/public/g1.jpeg` … `/public/g6.jpeg`)

**Model**: Midjourney / DALL·E / Stable Diffusion

**Base prompt** (swap subject per service):

A premium local-library photo-style background image for a website card. Subject theme: `[SERVICE]`. Cinematic daylight interior library, shallow depth of field, bookshelves in the background. Subtle 3D-friendly negative space for UI overlay (center area clear). Soft emerald and royal light reflections. Photorealistic but slightly stylized, warm and inviting, no logos, no text. High resolution.

| File | Service |
|---|---|
| `g1.jpeg` | Private Study Cabins — ergonomic chair, wooden desk, warm LED strip lighting, sound-dampening acoustic wall panels |
| `g2.jpeg` | High-Speed WiFi — modern router on a clean desk, data streams visualized as soft light trails |
| `g3.jpeg` | 24/7 Air Conditioning — AC vent with cool blue-green airflow visualization, sleek modern interior |
| `g4.jpeg` | CCTV & AI Security — security camera lens, subtle blue monitoring glow, safe atmosphere |
| `g5.jpeg` | Personal Lockers — row of modern metal lockers, warm corridor lighting |
| `g6.jpeg` | Print & Scan — modern all-in-one printer on a wooden desk, organized stationery |

---

## 3) Book Grid Images (`/public/g7.jpeg` … `/public/g10.jpeg`)

**Model**: Midjourney / DALL·E / Stable Diffusion

**Prompt**:

Premium book-cover-inspired background image for a 3D tilted card grid. Paper-realistic texture, layered book spines with subtle embossed details, gentle gradients in emerald and royal accents over deep navy. Soft rim light edges on the top corners. Clean center area for UI overlay labels. Warm daylight reading-room mood. Photorealistic, 4K, no text, no logos.

Generate 4 variations with slightly different compositions (single book close-up, stacked books, open book, bookshelf perspective).

---

## 4) Archive Bento Cards (reference for `ArchiveGrid.jsx` style)

**Prompt**:

Bento grid card background textures for overlay-based image cards. Modern library-themed abstract photo with strong shapes — diagonal gradients, layered paper edges, subtle holographic overlays. Palette: ink (#0F172A) and slate (#E2E8F0) with emerald/royal highlights. Minimal figures; focus on shapes and depth so hover overlays look premium. No text.

---

## 5) Branch Gallery Images (for `LocationSection.jsx`)

**Prompt**:

Photorealistic library branch gallery images, bright welcoming interiors with modern design accents. Wide shots and close shots of bookshelves, study spaces, and signage areas (avoid readable text). Gentle emerald/royal color grading. High resolution, warm daylight, shallow depth of field, premium atmosphere.

---

## Usage

Generated files go directly into `/public/` with the matching filename. The components reference them by path — no code changes needed.
