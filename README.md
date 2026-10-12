# JUST ICE - Cyberpunk Security Meme Coin Website

A dark, cinematic, mysterious, meme-friendly cyberpunk security mode website for the JUST ICE meme coin. Features immersive intro/outro sequences, matrix rain background, ASCII detective art, and full responsive design.

![JUST ICE Preview](assets/JustIce_logo.png)

## Features

- **Cinematic Intro Sequence** (5 seconds, skippable)
  - Boot messages: Initializing Justice Protocol, Scanning for Scammers, Threat Level: Hot, Countermeasure: ICE
  - RGB glitch effect on "JUSTICE" with the "I" drifting apart
  - Letter-by-letter reveal with freeze/crack effect
  - Tagline: "Serve the Justice. Serve it Cold."
  - Enter the Freeze button with flash & zoom out transition

- **Cinematic Outro Sequence** (triggered on footer scroll)
  - Frost overlay spreading from edges to center
  - Letter-by-letter melt (J/U/S/T melt with water drops, I stays frozen stronger, C/E melt, dot blinks)
  - Final message: "SYSTEM SECURED. / JUSTICE SERVED COLD. / SEE YOU IN THE ICE AGE."
  - Fade to black with pulsing cyan dot

- **Cyber Security Background**
  - Matrix Rain: Cyan (#00F0FF) + Ice Blue (#A0E7E5) + Red threat columns (#FF003C)
  - Characters: 01⚖🔨❄ + Katakana set
  - Slow elegant speed with translucent characters (~35% opacity)
  - Random threat columns blink red (detected) → cyan (neutralized)
  - ASCII Detective Background: BACHRI cowboy hat + detective silhouette at 8% opacity
  - Animated RGB line: Horizontal cyan→red→cyan gradient sweeping left→right
  - CRT Scanlines: Subtle cyan lines with noise texture

- **All Animations**
  - glitch (RGB split)
  - pulseGlow (CTA buttons)
  - decrypt (section reveal)
  - melt (outro text)
  - scanline (horizontal moving line)
  - frost (cursor trail)
  - cursorfrost (frost cursor effect)
  - rainbow-line (animated RGB line)
  - float-ascii (slow floating ASCII art)
  - hero-bg-zoom (logo zoom pulse)
  - freeze-flash (button click white flash)
  - ripple (click effect)

- **Interactive Effects**
  - Typewriter text effect (boot sequence)
  - Scroll-triggered section reveal (decrypt animation)
  - Smooth scroll behavior
  - Click ripple effect on buttons
  - Frost cursor trail (follows mouse with frost particles)
  - Language switcher (EN/ID)
  - Copy contract address with "COPIED ❄️" feedback
  - Enter Freeze button triggers flash → scroll to hero

- **Responsive Design**
  - 4 breakpoints: 1025px+ (desktop), 769-1024px (tablet), 768px (mobile), 480px (small phone)
  - Header, logo, navigation, font sizes, spacing all scale appropriately
  - ASCII detective opacity reduced on mobile for better readability
  - Grid layouts adapt (meme wall, feature cards)

- **Technical Implementation**
  - Pure HTML/CSS/Vanilla JavaScript (no frameworks)
  - CSS custom properties for easy theming
  - requestAnimationFrame for efficient matrix rain
  - z-index managed layering: backgrounds → content → interactive effects → overlays
  - HTTP 200 for all assets

## File Structure

```
JustIce/
├── .gitignore               # Ignores Hermes temporary files
├── README.md                # This file
├── assets/                  # Static assets
│   └── JustIce_logo.png     # Ice-cube logo (used as placeholder for memes)
├── html/                    # Website files
│   ├── index.html           # Main page with all sequences and sections
│   │
│   ├── css/
│   │   └── style.css        # All styling, animations, responsive breakpoints
│   │
│   └── js/
│       ├── script.js        # Intro/outro logic, matrix rain, frost cursor, click ripple
│       └── i18n.js          # English/Indonesian language dictionary
└── scripts/                 # Helper scripts (if any)
```

## How to Run Locally

Since this is a static website, you can run it with any HTTP server. The simplest way:

```bash
# Clone the repository
git clone https://github.com/nheoshikuyanhemo/JustIce.git
cd JustIce

# Serve with Python (built-in)
python3 -m http.server 12345 --bind 0.0.0.0

# Open in browser
# Visit: http://localhost:12345
```

Alternative servers:
- `npx serve`
- `npm install -g serve && serve -l 12345`
- Any static site host (Netlify, Vercel, GitHub Pages)

## Technologies Used

- **HTML5** - Semantic structure with ARIA labels
- **CSS3** - Animations (keyframes), flexbox/grid, custom properties, media queries
- **JavaScript (ES6)** - DOM manipulation, requestAnimationFrame, class toggling
- **Fonts** - Orbitron (titles), Chakra Petch (body), JetBrains Mono (code/matrix)
- **Icons** - Custom ASCII art and emoji symbols (⚖🔨❄ ❄️)

## Design Specifications Followed

This implementation matches the **ULTIMATE FINAL** specification:
- Dark · Cinematic · Mysterious · Meme-friendly · Cyberpunk Security Mode
- Intro: Blackout → Boot → Glitch Logo → Letter Reveal → Tagline → Enter Button → Flash/Zoom
- Outro: Frost Overlay → Letter Melt → Final Messages → Fade to Black
- Matrix Rain: Cyber Security Edition with threat detection
- Background Layers: Base Black → Scanlines → ASCII Art → Matrix Rain → RGB Line → Content
- All 10+ animations implemented
- Fully responsive with mobile-adjusted header sizing

## Deployment

The site is designed to be deployed on any static hosting service:
- GitHub Pages (via `docs/` folder or orphaned `gh-pages` branch)
- Netlify (drag & drop or CI)
- Vercel
- Cloudflare Pages
- Firebase Hosting
- S3 + CloudFront

To deploy to GitHub Pages:
```bash
# Option 1: Use docs/ folder
cp -r html/* docs/
git add docs/
git commit -m "Prepare for GitHub Pages"
git push

# Option 2: Use gh-pages branch
git subtree push --prefix html origin gh-pages
# or
npm install -g gh-pages
gh-pages -d html
```

## Browser Support

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile Chrome/Safari ✓

## License

This project is open source and available under the [MIT License](LICENSE).

---

**The freeze is permanent.** ❄️🕵️‍♂️💻  
*Serve the Justice. Serve it Cold.*