# Pebblous Blog AI Agent Instructions

## Project Overview
This is a static blog site for Pebblous using GitHub Pages. The site follows a component-based architecture with dynamic loading of common elements.

## Key Architecture Patterns

### Component System
- Common UI components are managed in `/components/`
- Components are loaded dynamically via JavaScript (see `footer-loader.js`)
- Components must be styled by the including page (no internal styles)
- Reference implementation: `components/footer.html` and `footer-loader.js`

### Content Management
- Blog articles are tracked in `articles.json`
- HTML files are automatically indexed by `scan-html-files.py`
- RSS feed is generated from `articles.json` using `generate-rss.py`

## File Structure Conventions
```
/components/     # Reusable UI components
/blog/           # Blog articles
/project/        # Project-specific content
/event/          # Event-related pages
/template/       # Page templates
```

## Development Workflow

### Testing Locally
```bash
python3 -m http.server 8000
open http://localhost:8000
```

### Content Updates
1. Add new HTML content files in appropriate directories
2. Register articles in `articles.json` if needed
3. Run indexing: `python3 scan-html-files.py`
4. Update RSS: `python3 generate-rss.py`

## Common Tasks

### Adding a New Component
1. Create HTML file in `/components/`
2. Create loader script following `footer-loader.js` pattern
3. Document usage in component's README
4. Include styles in using pages

### Creating a New Page
1. Use appropriate template from `/template/`
2. Include required components before `</body>`
3. Define component styles in page's `<style>` section
4. Run indexing script after adding

## Key Files Reference
- `articles.json`: Content registry
- `files-index.json`: Auto-generated file index
- `scan-html-files.py`: File indexing script
- `generate-rss.py`: RSS feed generator

## Common Patterns
- Use absolute paths from root for assets (`/components/`, `/image/`)
- Components use client-side loading for flexibility
- Korean content uses UTF-8 encoding
- Category system: 'art', 'tech', 'story'