# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "thebytesmith website" - Josh Parker's personal portfolio and blog website. It's a modern web application built with vanilla HTML, CSS, and JavaScript using a dark theme with glass morphism effects.

## Development Commands

```bash
# Local development (choose any static server)
python -m http.server 8000
python -m SimpleHTTPServer 8000  # Python 2
npx serve .
npx live-server .

# Open http://localhost:8000 in browser
```

## Architecture & Structure

### Core Structure
- **index.html**: Homepage with embedded CSS styles and JavaScript
- **about.html**: Personal bio and information page
- **projects.html**: Portfolio showcase page
- **blog.html**: Blog listing page with category filters
- **contact.html**: Contact form and social links page
- **blog/**: Blog system with JavaScript-based post management
  - `posts.js`: Blog post data array with metadata
  - `posts/`: Individual blog post HTML files
  - `template.html`: Blog post template with copyright footer
- **assets/**: Static assets (CSS, JS, images)
  - `css/styles.css`: Main stylesheet with all component styles
  - `js/main.js`: Utility functions and feature initialization
  - `images/`: Image assets

### CSS Architecture
- CSS custom properties (CSS variables) for theming in `:root`
- Color palette: charcoal, midnight, slate, pine, moss, amber, flame
- Typography uses Inter (primary), JetBrains Mono (code), Crimson Text (serif)
- Responsive design with mobile-first approach
- Glass morphism effects with backdrop-filter

### JavaScript Architecture
- Vanilla JavaScript, no frameworks
- Blog posts managed via `blogPosts` array in `blog/posts.js`
- Dynamic post rendering on homepage by category
- Feature-based initialization in `main.js`
- Utility functions for notifications and analytics tracking

### Blog System
The blog uses a simple JavaScript-based system:
- Posts are defined in `blog/posts.js` as objects with metadata
- Homepage renders posts dynamically by category (Project, Road to $1, Technical, Learning)
- Each post has: id, title, date, category, excerpt, tags, filename
- Categories: "Project", "Road to $1", "Technical", "Learning"

### Blog Post Creation Workflow
1. Copy `blog/template.html` to `blog/posts/YYYY-MM-DD-post-title.html`
2. Replace placeholders: POST_TITLE, POST_DATE, POST_CATEGORY, POST_TAGS_HERE
3. Add content in `.post-content` div
4. Add post metadata to `blog/posts.js` array

### Deployment
- Static site with no build process required
- Can be deployed to Netlify, GitHub Pages, Vercel, or any static hosting

## Key Files to Understand

- `index.html:176-187`: Hero title and animations
- `index.html:690-697`: Blog post rendering logic
- `blog/posts.js:1-21`: Blog post data structure
- `assets/js/main.js:9-26`: Feature initialization pattern

## Content Sections

The homepage displays:
1. Latest Projects
2. Road to $1 (entrepreneurship series)  
3. Technical Blog
4. Digital Garden (learning notes)

Each section pulls from the same `blogPosts` array filtered by category.