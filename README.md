# Designathon Website

## Overview

This is the official website for UCI Design-a-thon, built with Next.js and TypeScript. The site is organized by seasons (currently 2026), allowing for easy updates each year while preserving previous years' content.

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0 with CSS variables
- **UI Components**: Radix UI + shadcn/ui
- **Animation**: Framer Motion and Motion
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   ├── (landing)/
│   │   └── (2026)/          # Active season - main landing at /
│   │       ├── fonts/       # Custom fonts
│   │       ├── apply/       # Application flow
│   │       ├── layout.tsx   # Season-specific layout
│   │       └── page.tsx     # Landing page
│   ├── archive/             # Archived seasons (when 2027 is live)
│   │   └── 2025/            # Past season accessible at /archive/2025
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── robots.ts            # SEO
│   └── sitemap.ts           # Sitemap
├── components/
│   ├── seasons/
│   │   ├── 2026/
│   │   │   ├── blocks/      # Page sections
│   │   │   ├── landing/     # Main landing component
│   │   │   ├── navigation/  # Navigation
│   │   │   └── apply/       # Application UI
│   │   └── 2025/
│   ├── ui/                  # Reusable UI components
│   └── common/              # Shared components
└── lib/
    └── utils.ts             # Utility functions
```

## Key Architectural Decisions

### 1. Seasonal Organization & Archiving

Each year gets its own folder under `src/app/(landing)/` for the active season. You can move previous seasons to `src/app/archive/` to remain accessible.

**Active Season** (`src/app/(landing)/(YEAR)/`):

- Serves as the main landing page at `/`
- Should be the current/upcoming year

**Archived Seasons** (`src/app/archive/YEAR/`):

- Past seasons moved here when they're no longer current
- Accessible at `/archive/YEAR`
- Can be referenced for content or design patterns

To create a new season:

1. Archive the current season to `src/app/archive/`
2. Copy the archived season as starting point
3. Update content for the new year

### 2. Component Structure

- **`blocks/`**: Major page sections (Hero, About, Judges, etc.)
- **`landing/`**: Main landing page component that composes all blocks
- **`navigation/`**: Navigation bar
- **`ui/`**: Reusable shadcn components

### 3. Fonts & Theming

Each season defines its own fonts in the layout file.

- **Inria Sans**: Primary font (local)
- **Lekton**: Body / UI accent (Google font)
- **Luxurious Script**: Decorative font (local)

Themes are controlled via `data-theme` attribute on the body element.

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Visit http://localhost:3000

### Build

```bash
pnpm build
```

### Code Quality

```bash
pnpm lint      # ESLint
pnpm format    # Prettier
```

## Updating for a New Season

### 1. Archive Current Season

First, move the current season to the archive so it remains accessible:

```bash
mkdir -p src/app/archive
mv src/app/(landing)/(2026) src/app/archive/2026
```

This makes the 2026 site accessible at `/archive/2026` instead of `/`. Update the archive routing if needed by modifying `src/app/archive/2026/page.tsx`.

### 2. Create New Season Folder

Copy the archived season as a starting point:

```bash
cp -r src/app/archive/2026 src/app/(landing)/(2027)
```

### 3. Update Metadata

Edit `src/app/(landing)/(2027)/layout.tsx`:

- Update title and description
- Update OpenGraph image path
- Modify fonts if needed
- Update `data-theme` attribute

### 4. Update Content Blocks

Each block in `src/components/seasons/2027/blocks/` needs updates:

- **Hero**: Event date, theme, CTA
- **About**: Theme description
- **Prompt**: Design prompt
- **Itinerary**: Event schedule
- **FAQ**: Frequently asked questions
- **Judges**: Judge profiles
- **Sponsors**: Sponsor logos and links
- **Team**: Team members
- **Past Events**: Previous year results

### 5. Update Assets

Replace images in `public/images/seasons/2027/`:

- Landing page images
- Judge photos
- Sponsor logos
- Team photos

### 6. Update Navigation

Edit `src/components/seasons/2027/navigation/landing-navigation.tsx` for menu items and links.

### 7. Move Components

Copy season components:

```bash
cp -r src/components/seasons/2026 src/components/seasons/2027
```

Then update imports and content in the new season components.

## Important File Paths

- **Main landing page**: `src/components/seasons/2026/landing/landing-2026.tsx`
- **Global styles**: `src/app/globals.css`
- **Type aliases**: `tsconfig.json` (paths section)
- **UI config**: `components.json`

## Content Management

### Adding a New Judge

1. Add judge photo to `public/images/seasons/2026/landing/judges/headshots/`
2. Import and add to `src/components/seasons/2026/blocks/judges/index.tsx`

### Adding a New Partner

1. Add logo to `public/images/seasons/2026/landing/partners/logos/`
2. Update `src/components/seasons/2026/blocks/partners/index.tsx`

### Updating Team Members

For **2026**, committee data and layout live in `src/components/seasons/2026/blocks/team/` (for example `committees-data.ts` and related components). Earlier seasons may use tab data files under `blocks/team/tabs/` instead.

## Styling

### Tailwind Configuration

- Uses CSS variables for theming
- Custom colors defined in `globals.css`
- Theme-specific styles via `data-theme` attribute

### Component Styling

Components use Tailwind utility classes with conditional styles via `cn()` helper from `@/lib/utils`.

## Common Tasks

### Add a New Section

1. Create component in `src/components/seasons/2026/blocks/`
2. Import in `src/components/seasons/2026/landing/landing-2026.tsx`
3. Add to the render order

### Update Timeline/Dates

Edit `src/components/seasons/2026/blocks/schedule/schedule-events.tsx` for the schedule.

### Modify FAQ

Edit `src/components/seasons/2026/blocks/faq/index.tsx`

### Change Theme Colors

Update CSS variables in `src/app/globals.css` under the `[data-theme="2026"]` selector.

## Deployment

This project is deployed on Vercel. Pushes to `main` auto-deploy. To manually deploy:

```bash
vercel --prod
```

## Git Workflow

- `husky` is configured for pre-commit hooks
- `commitlint` enforces conventional commits
- Main branch auto-deploys to production

## Troubleshooting

### Fonts Not Loading

Check font paths in `src/app/(landing)/(2026)/layout.tsx` and ensure files exist in `public/` or the season `fonts/` folder.

### Images Not Displaying

Verify image paths in `public/images/seasons/2026/` match imports.

### Build Errors

Run `pnpm install` to ensure dependencies are up to date.

## Quick Reference

| Path                                                   | Purpose                |
| ------------------------------------------------------ | ---------------------- |
| `src/app/(landing)/(2026)/page.tsx`                    | Route entry point      |
| `src/components/seasons/2026/landing/landing-2026.tsx` | Main component         |
| `src/components/ui/`                                   | Reusable UI components |
| `public/images/seasons/2026/`                          | Season assets          |
| `src/app/globals.css`                                  | Global styles          |

## Season Migration Notes

When transitioning from 2026 to 2027:

1. The 2026 components remain in `src/components/seasons/2026/` - only create new ones for 2027
2. Update references in `src/app/(landing)/(2027)/page.tsx` to import from the new season
3. Assets can remain in `public/images/seasons/2026/` if reused, or copy to the 2027 folder
4. The archived 2026 site will still use `src/components/seasons/2026/` components

## Need Help?

- Check existing season implementation in `(2026)` folder (or `archive/2025` for the prior year)
- Review component patterns in `blocks/`
- Consult Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
