# ichbintayyab — Portfolio Website

Personal portfolio of **Muhammad Tayyab Saleem** — Frontend Developer, Python Developer & Sketch Artist from Lahore, Pakistan.

---

## Project Structure

```
ichbintayyab-portfolio/
│
├── index.html                  ← Homepage (entry point)
│
├── pages/                      ← All sub-pages
│   ├── about.html
│   ├── projects.html
│   ├── blog.html
│   ├── blog1.html              ← My Journey Into Software Engineering
│   ├── blog2.html              ← The Engineer's Existential Crisis
│   ├── blog3.html              ← The Architecture of Thought: Human vs AI
│   ├── blog4.html              ← Mastering the Digital Age
│   └── contact.html
│
├── assets/
│   │
│   ├── css/
│   │   ├── shared.css          ← Variables, reset, nav, footer, buttons, reveal (ALL pages)
│   │   ├── index.css           ← Homepage-only styles (hero, marquee, sections)
│   │   ├── about.css           ← About page styles
│   │   ├── projects.css        ← Projects page styles
│   │   ├── blog.css            ← Blog listing page styles
│   │   ├── blog-article.css    ← Blog article styles (blog1–4 shared)
│   │   └── contact.css         ← Contact page styles
│   │
│   ├── js/
│   │   ├── shared.js           ← Cursor, nav, mobile menu, scroll reveal (ALL pages)
│   │   ├── index.js            ← Loader, hero, typing, Three.js, marquee, tilt (homepage)
│   │   ├── projects.js         ← 3D card tilt (projects page)
│   │   ├── progress.js         ← Reading progress bar (blog article pages)
│   │   └── contact.js          ← Form validation + mailto (contact page)
│   │
│   ├── images/
│   │   ├── profile/            ← profile.jpg
│   │   ├── projects/           ← project1.png, project2.png, project3.png
│   │   └── blogs/              ← blog1.jpg … blog4.jpg, and article images
│   │
│   └── cv/
│       └── CV_Muhammad_Tayyab_Saleem.pdf
│
└── README.md
```

---

## CSS Architecture

| File | Loaded by | Purpose |
|------|-----------|---------|
| `shared.css` | Every page | CSS variables, reset, cursor, nav, page-hero, footer, buttons, reveal animations |
| `index.css` | `index.html` | Loader, hero, marquee, about preview, skills, projects grid, blog preview, CTA |
| `about.css` | `about.html` | Split layout, bio, info cards, skills categories, interests, CTA strip |
| `projects.css` | `projects.html` | Editorial project list, button size overrides, CTA strip |
| `blog.css` | `blog.html` | Featured article card, blog grid |
| `blog-article.css` | `blog1–4.html` | Progress bar, article typography, prose, compare grid, tip box, related cards |
| `contact.css` | `contact.html` | Form card, input fields, info cards, social buttons, availability badge |

---

## JavaScript Architecture

| File | Loaded by | Purpose |
|------|-----------|---------|
| `shared.js` | Every page | Custom cursor, nav scroll effect, mobile menu toggle, scroll reveal (IntersectionObserver), page hero reveal |
| `index.js` | `index.html` | Page loader, hero entrance animation, typing effect, Three.js neural network canvas, marquee builder, magnetic buttons, 3D card tilt |
| `projects.js` | `projects.html` | 3D perspective tilt on large editorial project cards |
| `progress.js` | `blog1–4.html` | Reading progress bar fixed to top of viewport |
| `contact.js` | `contact.html` | Form validation, mailto link construction, submit button states |

---

## External Dependencies (CDN — no installation required)

| Library | Version | Used for |
|---------|---------|---------|
| Plus Jakarta Sans | — | Display/heading font (Google Fonts) |
| DM Sans | — | Body font (Google Fonts) |
| Font Awesome | 6.5.1 | All icons (nav, footer, buttons, skills, articles) |
| Three.js | r134 | Neural network particle hero on homepage |

---

## How to Run

**No build step required.** This is a plain HTML/CSS/JS website.

1. Extract the ZIP archive
2. Open `index.html` in any modern web browser
3. All pages, styles, scripts, and links work from the local file system

For the best experience (especially Google Fonts loading), serve from a local server:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then open `http://localhost:8080` in your browser.

---

## Assets to Add

Place your own files in these locations (the HTML already references them):

- `assets/images/profile/profile.jpg` — Your profile photo
- `assets/images/projects/project1.png` — To-Do App screenshot
- `assets/images/projects/project2.png` — Tic-Tac-Toe screenshot
- `assets/images/projects/project3.png` — Portfolio screenshot
- `assets/images/blogs/blog1.jpg` … `blog4.jpg` — Blog cover images
- `assets/cv/CV_Muhammad_Tayyab_Saleem.pdf` — Your CV

All images have graceful fallbacks (emoji placeholders) if files are missing.

---

## Contact

- **Email:** ichbintayyab@gmail.com
- **GitHub:** [github.com/ichbintayyab](https://github.com/ichbintayyab)
- **LinkedIn:** [linkedin.com/in/ichbintayyab](https://linkedin.com/in/ichbintayyab)
