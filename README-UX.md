# Moroka & Associates - UX Documentation

## 🎨 Design System Overview

This document outlines the complete design system and component usage for the Moroka & Associates website, featuring a modern, accessible, and responsive design.

## 🎯 Brand Identity

**Company**: Moroka & Associates
**Tagline**: "Professional • Innovative • Trusted"
**Email**: itsolutions@morokaandassociates.com
**Phone**: +27 79 448 4159

## 🎨 Color System

### Primary Color Palette - Warm Professional (Default)

```css
/* Primary Colors */
--primary: #E89F4C;        /* Warm orange */
--primary-light: #F4B266;   /* Light orange */
--primary-dark: #D4943F;    /* Dark orange */

/* Accent Colors */
--accent: #2F6F4E;         /* Forest green */
--accent-light: #4A8B6B;    /* Light green */
--accent-dark: #1F4A33;     /* Dark green */

/* Background Colors */
--background: #FEF9F3;      /* Warm cream */
--background-secondary: #FDF4E6; /* Light cream */
--background-tertiary: #FCEBD3;  /* Darker cream */

/* Text Colors */
--foreground: #2D1810;      /* Dark brown */
--silver: #8B7355;          /* Medium brown */
--silver-light: #B8997A;    /* Light brown */
```

### Theme Variations

#### 1. Light & Vibrant
```css
--primary: #FF6B35;        /* Coral orange */
--accent: #00B4D8;         /* Cyan blue */
--background: #F8FAFC;      /* Light gray */
```

#### 2. Modern Teal & Coral
```css
--primary: #FF7A59;        /* Soft coral */
--accent: #0ABAB5;         /* Teal */
--background: #FCFBF9;      /* Warm white */
```

## 📝 Typography System

### Font Stack
```css
/* Primary Fonts */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Fallbacks */
--font-sans: ui-sans-serif, system-ui, sans-serif;
--font-serif: ui-serif, Georgia, serif;
--font-mono: ui-monospace, SFMono-Regular, monospace;
```

### Typography Scale
```css
/* Headings */
.heading-hero: 4.5rem / 1.1 / 900;     /* Hero titles */
.heading-h1: 3.5rem / 1.2 / 800;       /* Page titles */
.heading-h2: 2.75rem / 1.25 / 700;     /* Section titles */
.heading-h3: 2.25rem / 1.3 / 600;      /* Subsection titles */

/* Body Text */
.text-body-large: 1.125rem / 1.6 / 500; /* Large paragraphs */
.text-body: 1rem / 1.65 / 400;         /* Standard text */
.text-caption: 0.875rem / 1.5 / 400;   /* Small text */
```

## 🧩 Component Library

### Header Component
```tsx
import Header from '@/components/layout/Header';

// Features:
// - Responsive logo sizing (shrinks on scroll)
// - Mobile hamburger menu with focus trap
// - Theme selector integration
// - Contact information display
// - Accessibility compliant (WCAG AA)
```

**Usage:**
```tsx
<Header />
```

**Responsive Behavior:**
- **Desktop**: Full branding with tagline
- **Mobile**: Compact logo, hidden tagline on scroll
- **Accessibility**: Skip link, proper ARIA labels, keyboard navigation

### Hero Component
```tsx
import Hero from '@/components/sections/Hero';

<Hero
  title="Your Title"
  subtitle="Your subtitle"
  primaryCTA={{ text: "Get Started", href: "/contact" }}
  secondaryCTA={{ text: "Learn More", href: "/about" }}
  backgroundImage="/hero-bg.jpg"
  theme="warm-professional"
/>
```

### Theme Provider
```tsx
import { ThemeProvider } from '@/components/ui/ThemeProvider';

<ThemeProvider>
  <App />
</ThemeProvider>
```

**Available Themes:**
- `light-vibrant`: Bright coral and cyan theme
- `warm-professional`: Warm orange and green (default)
- `modern-teal-coral`: Modern teal and coral combination

### Optimized Image Component
```tsx
import { OptimizedImage } from '@/components/ui/OptimizedImage';

<OptimizedImage
  src="https://images.unsplash.com/photo-..."
  alt="Descriptive alt text"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={true}
/>
```

## 🎨 Layout Components

### Container System
```css
.container-safe {      /* Main content container */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-compact {     /* Compact sections */
  padding: 2rem 0;
}

.section-standard {    /* Standard sections */
  padding: 4rem 0;
}
```

### Grid System
```css
.grid-2-col {          /* Two column grid */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.grid-3-col {          /* Three column grid */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
```

## ♿ Accessibility Features

### WCAG AA Compliance
- **Color Contrast**: All text meets 4.5:1 contrast ratio
- **Focus Management**: Visible focus indicators on all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML

### Accessibility Components
```tsx
// Skip Link (auto-included in Header)
<a href="#main-content" className="skip-link">
  Skip to main content
</a>

// Focus Trap for Mobile Menu
<div role="navigation" aria-label="Mobile navigation">
  {/* Menu items */}
</div>
```

## 🚀 Performance Features

### Image Optimization
- **Modern Formats**: AVIF → WebP → JPEG fallbacks
- **Responsive Images**: Multiple sizes for different viewports
- **Lazy Loading**: Non-critical images load on scroll
- **Preloading**: Critical images preloaded for LCP optimization

### Performance Metrics
- **Lighthouse Targets**:
  - Performance: ≥ 85
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - SEO: ≥ 90

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Mobile-First Grid System
```css
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;           /* Mobile: single column */
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr); /* Tablet: two columns */
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr); /* Desktop: three columns */
    gap: 3rem;
  }
}
```

## 🎭 Animation Guidelines

### Motion Design Principles
- **Purposeful**: Animations serve a functional purpose
- **Subtle**: Avoid distracting or excessive motion
- **Performance**: Use CSS transforms over layout changes
- **Accessibility**: Respect `prefers-reduced-motion`

### Animation Classes
```css
.animate-fade-in-up {    /* Fade in from bottom */
  animation: fadeInUp 0.8s ease-out;
}

.animate-slide-in-left { /* Slide in from left */
  animation: slideInLeft 0.8s ease-out;
}

.hover-professional {    /* Subtle hover effects */
  transition: all 0.3s ease;
}
```

## 🔧 Development Guidelines

### CSS Architecture
```css
/* Component Structure */
.component-name {
  /* Base styles */
}

.component-name__element {
  /* Element styles */
}

.component-name--modifier {
  /* Modifier styles */
}
```

### Naming Conventions
- **Components**: PascalCase (`Header.tsx`, `HeroSection.tsx`)
- **Utilities**: camelCase (`useTheme`, `formatDate`)
- **CSS Classes**: kebab-case (`header-container`, `hero-title`)
- **Constants**: SCREAMING_SNAKE_CASE (`THEME_COLORS`, `API_ENDPOINTS`)

### File Organization
```
src/
├── components/
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   ├── ui/             # Reusable UI components
│   └── forms/          # Form components
├── app/                # Next.js app directory
├── types/              # TypeScript definitions
└── utils/              # Utility functions
```

## 🚢 Deployment & DevOps

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.morokaandassociates.com
NEXT_PUBLIC_API_URL=https://api.morokaandassociates.com
```

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Security Headers (via vercel.json)
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📊 Analytics & Monitoring

### Performance Monitoring
- **Lighthouse CI**: Automated performance testing
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Error Monitoring**: Console error tracking

### SEO Monitoring
- **Search Console**: Domain verification and sitemap submission
- **Schema Markup**: Organization and LocalBusiness structured data
- **Social Preview**: OpenGraph and Twitter Card optimization

## 🔄 Maintenance & Updates

### Regular Tasks
- **Weekly**: Lighthouse audit and performance review
- **Monthly**: Accessibility testing and contrast validation
- **Quarterly**: Dependency updates and security patches

### Update Procedures
1. **Design Changes**: Update Figma design system first
2. **Color Updates**: Modify CSS custom properties in `globals.css`
3. **Component Updates**: Update component files and documentation
4. **Testing**: Run full test suite before deployment

## 📚 Resources & References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [web.dev Performance](https://web.dev/performance/)
- [A11y Project](https://www.a11yproject.com/)
- [Figma Design Systems](https://www.figma.com/best-practices/guide-to-design-systems/)

## 🆘 Support & Contact

For technical support or design questions:
- **Email**: itsolutions@morokaandassociates.com
- **Phone**: +27 79 448 4159
- **Documentation**: This UX guide should be updated with any design system changes

---

*Last Updated: October 2024*
*Version: 1.0.0*