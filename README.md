# thebytesmith website

Josh Parker's personal portfolio and blog website - a modern web application built with vanilla HTML, CSS, and JavaScript.

## Features

- Modern, responsive design with dark theme and glass morphism effects
- Personal blog with multiple categories (Projects, Road to $1, Technical, Learning)
- Portfolio showcase for professional and personal projects
- Contact page with social links
- Built with vanilla HTML, CSS, and JavaScript - no build process required

## Development

To run locally, use any static file server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it installed)
npx serve .

# Or with live-server
npx live-server .
```

Then open http://localhost:8000 in your browser.

## Project Structure

- `index.html` - Homepage with blog post previews
- `about.html` - Personal information and bio
- `projects.html` - Portfolio showcase
- `blog.html` - Blog listing page
- `contact.html` - Contact information and form
- `blog/` - Blog system with posts and templates
- `assets/` - CSS, JavaScript, and image files

## Adding Blog Posts

1. Copy `blog/template.html` to `blog/posts/YYYY-MM-DD-post-title.html`
2. Update the placeholders in the new file:
   - `POST_TITLE` - Your post title
   - `POST_DATE` - Publication date (YYYY-MM-DD)
   - `POST_CATEGORY` - Category (Project, Road to $1, Technical, Learning)
   - `POST_TAGS_HERE` - Add tag span elements
3. Add your content in the `.post-content` div
4. Add the post metadata to `blog/posts.js`

## Deployment

This is a static website that can be deployed anywhere:
- Netlify (automatic builds from GitHub)
- GitHub Pages
- Vercel
- Any static hosting service

## License

MIT License - see LICENSE file for details.
