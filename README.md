# Nav Uday Library — The Archive

Rise with Knowledge.

A premium digital & physical self-study library homepage. Built with React 18, Vite 6, and Tailwind CSS 3.

## Sections

| Section | Content |
|---|---|
| **Hero** | 3D mouse-tracking parallax tilt with looping video background, "Rise with Knowledge" headline, 3 highlight bullets |
| **Services** | "What We Offer" — 6 cards with local image backgrounds and 3D hover |
| **Books** | "Featured Collections" — 4-book grid with 3D `rotateY` tilt and depth layers |
| **Archive** | Bento-style 3-column grid with overlay-based image cards |
| **Location** | OSM map embed, Mon–Sat hours, transit info, branch gallery |
| **Footer** | Newsletter signup, nav links, copyright |

## Tech Stack

| Tool | Version |
|---|---|
| React | 18 |
| Vite | 6 |
| Tailwind CSS | 3 |
| Font | Inter (Google Fonts) |

## Design Tokens

- **Ink**: `#0F172A`
- **Emerald**: `#0F766E`
- **Royal**: `#1D4ED8`
- **Surfaces**: `#F8FAFC`, `#E2E8F0`
- **Aesthetic**: Flat 1px `border-slate-200`, glassmorphism nav, ultra-soft shadows

## Getting Started

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # → dist/
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky glassmorphism nav with mobile hamburger
│   ├── Hero.jsx            # 3D parallax split layout + video bg
│   ├── Services.jsx        # "What We Offer" — 6 service cards
│   ├── Books.jsx           # "Featured Collections" — 4 book tiles
│   ├── ArchiveGrid.jsx     # Bento grid with overlay cards
│   ├── LocationSection.jsx # OSM map + branch gallery
│   ├── LibraryCard.jsx     # Reusable card (aspect-video + gradient)
│   └── Footer.jsx          # Newsletter + nav links
├── App.jsx                 # Component composition root
public/
├── g1.jpeg … g10.jpeg      # Local library images
└── video.mp4               # Hero background video
prompts/
└── hero-video.md           # AI generation prompts for all assets
```

## Assets

| File | Usage |
|---|---|
| `video.mp4` | Hero background (autoplay, loop, muted) |
| `g1.jpeg` … `g6.jpeg` | Services card backgrounds |
| `g7.jpeg` … `g10.jpeg` | Featured Collections card backgrounds |

AI generation prompts in `prompts/hero-video.md`.

## Customization

- **Colors**: Edit `tailwind.config.js` (`theme.extend.colors`)
- **Content**: Edit components in `src/components/`
- **Layout**: Edit `src/App.jsx` for section order

## Content

| Service | Book Collection |
|---|---|
| Guided Study Rooms | The Deep Study Blueprint |
| Mentorship & Learning Guidance | Core Concepts Master Pack |
| Digital Archive Access | Practice & Progress Series |
| Workshops & Skill Sessions | Archive Notes: Skills Edition |
| Test Preparation Resources | |
| Community Learning Events | |

## License

© 2026 Nav Uday Library — The Archive. All rights reserved.
