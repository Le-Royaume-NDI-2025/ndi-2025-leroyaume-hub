# Installation & Testing Instructions

## Required Dependencies

Before running the application, install React Router DOM:

```bash
npm install react-router-dom
```

## Running the Development Server

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## What to Test

### Navigation
- [x] Click through all navigation links (Accueil, Projets, Équipe)
- [x] Test mobile menu (resize browser or use devtools)
- [x] Verify all routes work correctly

### Theme
- [x] Toggle between dark and light modes
- [x] Verify theme persists on page reload
- [x] Check that royal blue and gold colors appear correctly

### Pages
- [x] **Home Page**: Hero section, stats cards, CTA buttons
- [x] **Projects Page**: Filter by challenge and technology, sort options
- [x] **Project Detail**: Click a project card, view tabs (Overview, Features, Screenshots, Team)
- [x] **Team Page**: View all team members with avatars and social links

### Responsive Design
- [x] Test on desktop (1920px)
- [x] Test on tablet (768px)
- [x] Test on mobile (375px)

## Build Test

To verify the production build works:

```bash
npm run build
npm run preview
```
