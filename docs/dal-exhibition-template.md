# DAL Exhibition Template Guide

**Version**: 1.1
**Created**: 2025-12-20
**Template Location**: `project/DAL/template/template-01.html`

---

## Overview

The DAL (Data Art Lab) Exhibition Template is a minimalist gallery-style template for showcasing digital artworks. It provides a clean, museum-like presentation with full SEO support.

### Design Philosophy

- **Minimalism**: Dark background (#0a0a0a), subtle typography, no distractions
- **Focus on Artwork**: Centered frame with soft shadow, maximum visual impact
- **Gallery Aesthetic**: Inspired by museum exhibition labels and auction catalogs
- **Responsive**: Adapts to desktop, tablet, mobile, and various aspect ratios

---

## Quick Start

### 1. Copy the Template

```bash
cp project/DAL/template/template-01.html project/DAL/your-artwork.html
```

### 2. Create Image Directory

```bash
mkdir -p project/DAL/your-artwork/image
# Place your artwork image here
```

### 3. Update the Config

Edit the `config` object at the bottom of the HTML file:

```javascript
const config = {
    title: "Your Artwork Title",
    date: "2025-01-15",
    dateDisplay: "2025",
    image: "image/your-artwork.png",
    // ... other settings
};
```

### 4. Test Locally

```bash
python3 -m http.server 8000
# Open http://localhost:8000/project/DAL/your-artwork.html
```

---

## Configuration Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | string | Artwork title (English) | `"Pendulum Particles"` |
| `date` | string | ISO date format | `"2025-01-15"` |
| `dateDisplay` | string | Display in title | `"2025"` or `"2025-01-15T22:30:24"` |
| `image` | string | Relative path to image | `"image/artwork.png"` |
| `medium` | string | Art medium description | `"Code Painting with Custom Code"` |
| `dimensions` | string | Artwork dimensions | `"1024 x 1024 pixels"` |
| `description` | string | Bilingual description (Korean \| English) | `"한글 설명 \| English description"` |
| `path` | string | Full path from root | `"project/DAL/your-artwork.html"` |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `titleKo` | string | - | Korean title |
| `imageAnimated` | string | - | Animated GIF path |
| `video` | string | - | Video file path (mp4) |
| `interactive` | string | - | iframe URL for interactive works |
| `signature` | string | `"signed 'Lee Joohaeng' (metadata)"` | Signature text |
| `year` | number | 2025 | Year for metadata |
| `descriptionKo` | string | - | Korean description |
| `showDescription` | boolean | false | Show description panel |
| `isInteractive` | boolean | false | Add hover effect |

### Artist Information

```javascript
artist: {
    name: "LEE Joohaeng (이주행)",  // Display name
    years: "1970 -",                 // Birth year
    url: "https://blog.pebblous.ai"  // Artist URL
}
```

### Series Navigation

For artworks that are part of a series:

```javascript
series: {
    enabled: true,
    name: "Pendulum Series",
    current: 2,
    total: 5,
    prev: "pendulum-01.html",
    next: "pendulum-03.html"
}
```

### Keywords (SEO)

```javascript
keywords: [
    "Code Painting", "코드 페인팅",
    "Data Art Lab", "DAL", "mr_lix",
    "Data Art", "Generative Art",
    "Your Specific Keywords"
]
```

---

## Bilingual Descriptions

The template supports bilingual (Korean + English) descriptions. The description panel displays both languages with distinct styling.

### Format

```javascript
description: "한글 설명 | English description",
descriptionKo: "한글 설명"
```

### How It Works

1. **`description`**: Contains both languages separated by ` | ` (space-pipe-space)
   - Korean text comes first (for SEO meta tags)
   - English text comes after the separator
2. **`descriptionKo`**: Korean-only version for the description panel
3. **Display**: Korean appears in normal text, English appears smaller and italic below

### Styling

| Language | Font Size | Color | Style |
|----------|-----------|-------|-------|
| Korean | 0.9375rem | Secondary | Normal |
| English | 0.85rem | Tertiary | Italic |

---

## Media Types

### Static Image (Default)

```javascript
image: "image/artwork.png"
```

### Animated GIF

```javascript
image: "image/artwork.png",        // Fallback
imageAnimated: "image/artwork.gif" // Will be used if provided
```

### Video

```javascript
video: "image/artwork.mp4"
// Autoplays, loops, muted
```

### Interactive (iframe)

```javascript
interactive: "https://your-interactive-artwork.html"
// Enables hover effect automatically
```

---

## SEO Features

The template automatically generates:

### Meta Tags
- `<title>` - Page title
- `<meta name="description">` - SEO description
- `<meta name="keywords">` - Keywords

### Open Graph (Social Sharing)
- `og:title`, `og:description`, `og:image`
- `og:url`, `og:type`, `og:site_name`
- `article:published_time`, `article:author`

### Twitter Cards
- `twitter:card` (summary_large_image)
- `twitter:title`, `twitter:description`, `twitter:image`

### JSON-LD Schemas

**VisualArtwork Schema**:
```json
{
    "@type": "VisualArtwork",
    "name": "Artwork Title",
    "creator": { "@type": "Person", "name": "LEE Joohaeng" },
    "artform": "Code Painting",
    "artMedium": "Custom Code",
    ...
}
```

**BreadcrumbList Schema**:
```json
{
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "name": "Home", "item": "https://blog.pebblous.ai" },
        { "name": "DAL", "item": "https://blog.pebblous.ai/project/DAL" },
        { "name": "Artwork Title", "item": "..." }
    ]
}
```

---

## Styling Customization

### CSS Variables

```css
:root {
    --bg-primary: #0a0a0a;           /* Main background */
    --bg-secondary: #141414;          /* Footer background */
    --text-primary: rgba(240, 240, 240, 0.9);
    --text-secondary: rgba(240, 240, 240, 0.6);
    --text-tertiary: rgba(240, 240, 240, 0.4);
    --accent: #F86825;                /* Pebblous orange */
    --border: rgba(240, 240, 240, 0.1);
}
```

### Artwork Frame Size

Default sizing (can be modified in CSS):

```css
.artwork-frame {
    max-width: min(85vw, 70vh);
    max-height: min(85vw, 70vh);
    aspect-ratio: 1 / 1;
}
```

For non-square artworks, adjust `aspect-ratio`:

```css
.artwork-frame {
    aspect-ratio: 16 / 9;  /* Landscape */
    aspect-ratio: 9 / 16;  /* Portrait */
}
```

---

## Examples

### Example 1: Simple Static Artwork

```javascript
const config = {
    title: "Data Flow #01",
    titleKo: "데이터 흐름 #01",
    date: "2025-01-15",
    dateDisplay: "2025",
    image: "image/data-flow-01.png",
    medium: "Code Painting with p5.js",
    dimensions: "1920 x 1080 pixels",
    signature: "signed 'Lee Joohaeng' (metadata)",
    year: 2025,
    artist: {
        name: "LEE Joohaeng (이주행)",
        years: "1970 -",
        url: "https://blog.pebblous.ai"
    },
    description: "네트워크 데이터 흐름 패턴을 생성 알고리즘으로 시각화한 작품입니다. | Visualization of network data flow patterns using generative algorithms.",
    descriptionKo: "네트워크 데이터 흐름 패턴을 생성 알고리즘으로 시각화한 작품입니다.",
    keywords: ["Data Flow", "Network Art", "Code Painting", "DAL"],
    path: "project/DAL/data-flow-01.html",
    series: { enabled: false },
    showDescription: true,
    isInteractive: false
};
```

### Example 2: Animated GIF with Series

```javascript
const config = {
    title: "Pendulum, Particles and Pebbles",
    date: "2025-10-06T22:30:24",
    dateDisplay: "2025-10-06T22-30-24",
    image: "image/pendulum-01.png",
    imageAnimated: "image/pendulum-01.gif",
    medium: "Code Painting with Custom Code",
    dimensions: "1024 x 1024 pixels",
    // ...
    series: {
        enabled: true,
        name: "Pendulum Series",
        current: 1,
        total: 3,
        prev: "",
        next: "pendulum-particle-pebble-02.html"
    }
};
```

### Example 3: Interactive Artwork

```javascript
const config = {
    title: "Order vs Freedom",
    date: "2024-09-15",
    interactive: "../order vs freedom.html",
    // ...
    isInteractive: true,
    showDescription: true,
    description: "Interactive entropy visualization. Move your mouse to explore the boundary between order and chaos."
};
```

---

## Checklist for New Artwork

- [ ] Copy template to new location
- [ ] Create image directory
- [ ] Place artwork image(s)
- [ ] Update `config.title` and `config.titleKo`
- [ ] Update `config.date` and `config.dateDisplay`
- [ ] Update `config.image` path
- [ ] Update `config.medium` and `config.dimensions`
- [ ] Update `config.description` (150-160 chars for SEO)
- [ ] Update `config.keywords`
- [ ] Update `config.path` (full path from root)
- [ ] Test locally with `python3 -m http.server 8000`
- [ ] Verify SEO with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Add to `articles.json` if publishing to blog

---

## Related Documentation

- [Blog Creation Workflow](./blog-creation-workflow.md) - For full blog posts
- [SEO Guide](./seo.md) - SEO best practices
- [Style Guide](./style.md) - Design principles
- [Color Guide](./color.md) - Color palette

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.1 | 2025-12-20 | Add bilingual description support (Korean + English) |
| 1.0 | 2025-12-20 | Initial template creation |
