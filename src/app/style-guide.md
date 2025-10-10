# Moroka & Associates Style Guide

## Brand Overview
Moroka & Associates is a professional digital solutions company specializing in business consulting, digital transformation, and innovative technology solutions across South Africa.

## Color Palettes

### Palette 1: Warm Earth Tones (Primary)
**Inspiration**: Inspired by South African landscapes - warm terracotta, rich earth tones, and natural greens.

```css
/* Primary Colors */
--primary: #E89F4C (Warm Orange)
--primary-light: #F4B266 (Light Orange)
--primary-dark: #D4943F (Dark Orange)

/* Accent Colors */
--accent: #2F6F4E (Forest Green)
--accent-light: #4A8B6B (Sage Green)
--accent-dark: #1F4A33 (Deep Forest)

/* Supporting Colors */
--success: #10b981 (Emerald)
--warning: #f59e0b (Amber)
--error: #ef4444 (Rose)
```

**Usage**: Professional, trustworthy, grounded in South African heritage.

### Palette 2: Vibrant Modern (Alternative)
**Inspiration**: Contemporary, energetic, forward-thinking approach to digital solutions.

```css
/* Primary Colors */
--primary-alt: #FF6B35 (Vibrant Orange)
--primary-light-alt: #FF8C66 (Coral)
--primary-dark-alt: #E55A2B (Deep Orange)

/* Accent Colors */
--accent-alt: #4ECDC4 (Turquoise)
--accent-light-alt: #7EDDD6 (Light Turquoise)
--accent-dark-alt: #35B5AB (Deep Turquoise)

/* Supporting Colors */
--success: #10b981 (Emerald)
--warning: #f59e0b (Amber)
--error: #ef4444 (Rose)
```

**Usage**: Modern, energetic, innovative technology focus.

## Typography

### Primary Fonts
- **Headings**: Poppins (Modern, geometric, highly legible)
- **Body Text**: Inter (Clean, readable, professional)
- **Display**: Playfair Display (Elegant serif for special occasions)

### Typography Scale
```css
.heading-hero     /* 4.5rem - Main page titles */
.heading-h1       /* 3.5rem - Section titles */
.heading-h2       /* 2.75rem - Subsection titles */
.heading-h3       /* 2.25rem - Card titles */
.body-large       /* 1.125rem - Lead paragraphs */
.body-regular     /* 1rem - Standard text */
.body-small       /* 0.875rem - Captions */
```

## Component Styles

### Buttons
```css
.btn-professional-primary    /* Primary CTA buttons */
.btn-professional-secondary  /* Secondary actions */
.btn-professional-silver     /* Neutral actions */
```

### Cards
```css
.card-professional  /* Main content cards */
.card-glass         /* Highlighted content */
.card-3d            /* Interactive cards */
```

### Form Elements
```css
.input-professional    /* Text inputs */
.select-professional   /* Dropdowns */
.textarea-professional /* Text areas */
```

## Spacing System
```css
.space-section      /* 3rem - Between major sections */
.space-section-sm   /* 2rem - Smaller sections */
.space-section-lg   /* 4rem - Large sections */
.space-content      /* 1.5rem - Content blocks */
.space-content-sm   /* 1rem - Small content blocks */
.space-content-lg   /* 2rem - Large content blocks */
```

## Animation Guidelines

### Subtle Animations
- Fade in: 0.8s ease-out
- Slide up: 0.8s ease-out
- Scale in: 0.6s ease-out

### Interactive Animations
- Hover lift: translateY(-4px)
- Button press: scale(0.98)
- Card hover: translateY(-8px) scale(1.02)

### Performance Considerations
- Reduce animations on mobile devices
- Respect prefers-reduced-motion settings
- Use transform and opacity for best performance

## Responsive Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 768px)  /* Tablets and below */
@media (max-width: 480px)  /* Mobile phones */
/* Desktop enhancements apply above breakpoints */
```

## Icon System
- **Primary Icons**: Lucide React icons
- **Size Scale**: 16px, 20px, 24px, 32px, 48px
- **Colors**: Match text color or use brand colors for emphasis

## Image Guidelines
- **Formats**: WebP (preferred), AVIF, PNG fallbacks
- **Optimization**: Compress for web, maintain quality
- **Responsive**: Use srcset for different screen sizes
- **Alt Text**: Always descriptive and meaningful

## Accessibility Standards
- **WCAG AA Compliance**: Minimum contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Clear focus states for all interactive elements

## Brand Voice & Messaging

### Key Messages
- "Professional Business Solutions"
- "Digital Transformation Partner"
- "Innovative South African Technology"

### Tone
- Professional but approachable
- Confident and trustworthy
- Solution-focused
- Culturally aware

## Implementation Notes

### CSS Variables
All colors use CSS custom properties for easy theming:
```css
:root {
  --primary: #E89F4C;
  --accent: #2F6F4E;
  /* Easy to switch between palettes */
}
```

### Component Architecture
- Use consistent class naming
- Follow BEM methodology where applicable
- Maintain component isolation
- Use CSS-in-JS for complex state-based styling

### Performance Optimization
- Minimize repaints and reflows
- Use efficient selectors
- Implement lazy loading for images
- Optimize font loading

## Approval Process
All design changes should be:
1. Reviewed against this style guide
2. Tested across different devices and browsers
3. Validated for accessibility compliance
4. Approved by design lead before implementation