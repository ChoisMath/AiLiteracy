# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI Ethics and Literacy educational platform consisting of 7 educational modules delivered as HTML files. The project provides multilingual content (Korean, English, Chinese) covering AI fundamentals, prompt engineering, evaluation, practical integration, safety awareness, synergistic growth, and social impact.

**Current State**: 7 standalone HTML files (01-07) with embedded translations
**Target State**: Single-page application with sidebar navigation and persistent language settings

## User Requirements

Transform the current 7 separate HTML files into a unified single-page application with:

1. **Main Landing Page**: "AI 윤리 및 문해력 교육" (AI Ethics and Literacy Education) homepage
2. **Sidebar Navigation**: Left panel with hamburger menu toggle displaying modules 01-07
3. **Language Persistence**: Language selection (Korean/English/Chinese) maintained across all page navigation
4. **Unified Components**: Header with language switcher and footer consistent across all views
5. **Default Language**: Korean (한국어)
6. **Dynamic Content**: Only module content changes; header, footer, and navigation remain constant

## Architecture Design

### Proposed Structure

```
AI_literacy/
├── index.html              # Main SPA entry point
├── js/
│   ├── app.js             # Main application logic
│   ├── router.js          # Client-side routing
│   ├── translations.js    # Consolidated translation data
│   └── components/
│       ├── header.js      # Reusable header component
│       ├── footer.js      # Reusable footer component
│       └── sidebar.js     # Navigation sidebar component
├── content/
│   ├── home.js           # Landing page content
│   ├── module01.js       # Core Understanding
│   ├── module02.js       # Prompt Engineering
│   ├── module03.js       # Mindful Evaluation
│   ├── module04.js       # Practical Integration
│   ├── module05.js       # Awareness & Safety
│   ├── module06.js       # Synergy & Growth
│   └── module07.js       # Social Impact
└── [existing HTML files]  # Keep as reference during migration
```

### Key Technical Components

#### 1. Translation System
- **Current**: Embedded `translations` object in each HTML file with `en`, `zh`, `ko` keys
- **Pattern**: `data-lang-key` attributes on elements → matched to translation object
- **Required**: Extract and consolidate all translations into `js/translations.js`
- **Storage**: Use `localStorage` to persist language preference (`currentLang`)

#### 2. Language Switching Logic
```javascript
// Current pattern in each file (lines ~590-615)
function changeLanguage(lang) {
    // Updates all [data-lang-key] elements with translations[lang][key]
    // Updates HTML lang attribute
    // Updates button active states
    // Should add: localStorage.setItem('currentLang', lang)
}
```

#### 3. Navigation State Management
- **Requirement**: Hamburger menu (☰) in top-left toggles sidebar visibility
- **Sidebar Content**: List of 7 modules with titles in current language
- **Active State**: Highlight current module in sidebar
- **Routing**: Hash-based routing (#home, #module01, etc.) or state-based content swapping

#### 4. Shared Components

**Header** (currently lines ~38-54 in each file):
- Logo: "Chois" + "AI Literacy" (translated)
- Language buttons: EN | 中文 | 한국어
- Active language has `bg-indigo-600 text-white`, inactive has `bg-gray-200 text-gray-700`

**Footer** (currently lines ~384-389):
- Copyright text: "© 2025 Chois AI 윤리 및 문해력 교육"
- Consistent across all pages

#### 5. Module Content Structure

Each module follows this pattern:
- **Section Title**: h1 with module number and name
- **Subtitle**: Descriptive paragraph
- **Content Sections**: Mix of card layouts, accordions, grids
- **Styling**: Tailwind CSS with custom gradients per module

Module-specific gradient colors:
- 01: `#4F46E5, #3B82F6` (indigo-blue)
- 02: `#EC4899, #D946EF` (pink-purple)
- 03-07: Extract from existing files

## Development Commands

Since this is a static HTML project with no build system:

- **Open**: Simply open `index.html` in a browser
- **Live Server**: Use VS Code Live Server extension or `python -m http.server 8000`
- **Testing**: Manual browser testing across Chrome, Firefox, Safari
- **Languages**: Test all 3 language variants (ko, en, zh)
- **Responsive**: Test mobile (hamburger menu), tablet, desktop layouts

## Implementation Guidelines

### Phase 1: Extract and Consolidate
1. Create `js/translations.js` - merge all translation objects from 7 HTML files
2. Create `content/module0X.js` - extract content sections from each HTML (remove header/footer/scripts)
3. Verify all `data-lang-key` values are present in consolidated translations

### Phase 2: Build Core SPA
1. Create `index.html` with:
   - Shared header (with hamburger button)
   - Main content area (`<div id="app-content">`)
   - Sidebar navigation (hidden by default on mobile)
   - Shared footer
2. Create `js/app.js`:
   - Initialize language from `localStorage` or default to 'ko'
   - Load initial page content (home or module)
   - Set up event listeners for language change and navigation
3. Create `js/router.js`:
   - Handle URL hash changes or state-based routing
   - Load appropriate module content into `#app-content`

### Phase 3: Interactive Components
1. Implement sidebar toggle (hamburger menu)
2. Implement accordion functionality (currently in each file ~620-635)
3. Ensure language persistence across navigation
4. Test all interactive elements

### Phase 4: Content Migration
1. Migrate home page content (to create)
2. Migrate module 01-07 content sections
3. Verify all translations work correctly
4. Test all accordions and interactive elements

### Critical Requirements
- **No data loss**: All content from 7 HTML files must be preserved
- **Translation completeness**: All `data-lang-key` values must have ko/en/zh translations
- **Language persistence**: `localStorage.getItem('currentLang')` on page load
- **Mobile-first**: Hamburger menu for mobile, persistent sidebar for desktop
- **Accessibility**: Maintain semantic HTML, ARIA labels for navigation

## File-Specific Notes

- **01_core_understanding.html**: Has 7 accordion sections for terminology (Machine Learning, Deep Learning, etc.)
- **02_PromptEngineering.html**: Uses RACE framework cards, before/after examples
- **03-07**: Review each for unique layout patterns (grids, cards, accordions)

## Accordion Pattern

Current accordion implementation (used in multiple modules):
```javascript
// Lines ~620-635 in existing files
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-accordion-target');
        const content = document.querySelector(targetId);
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('hidden');
    });
});
```

This pattern must be preserved in the new SPA structure.

## Styling Notes

- **Framework**: Tailwind CSS (via CDN)
- **Font**: Inter (Google Fonts)
- **Custom CSS**: Smooth scrolling, accordion transitions, module-specific gradients
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints

## Browser Compatibility

Target modern browsers with ES6+ support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

No transpilation needed for this educational project.
