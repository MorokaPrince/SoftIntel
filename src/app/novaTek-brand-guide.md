# NovaTek Brand Style Guide

## Overview
NovaTek is a modern technology company specializing in innovative digital solutions, cloud infrastructure, and business transformation services. Our brand reflects cutting-edge technology, reliability, and forward-thinking innovation.

## Brand Colors

### Primary Palette
- **Primary**: `#1A202C` - Dark gray/blue, represents trust and professionalism
- **Accent**: `#00CFFF` - Cyan, represents innovation and technology
- **Background**: `#F8F8F8` - Clean white background for modern aesthetics

### Color Usage
- **Primary Color**: Used for headings, important text, and primary buttons
- **Accent Color**: Used for highlights, secondary buttons, links, and tech elements
- **Background**: Main page background, card backgrounds, section dividers

### Color Combinations
- **Primary Button**: `#1A202C` background with white text
- **Secondary Button**: `#00CFFF` background with dark text
- **Accent Elements**: `#00CFFF` for icons, borders, and highlights
- **Text on Light**: `#1A202C` for primary text, `#4A5568` for secondary text

## Typography

### Font Families
1. **Poppins** - Primary brand font (headings and display text)
2. **Inter** - Secondary font (body text and UI elements)
3. **Roboto** - Supporting font (backup and specific UI contexts)

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Black**: 900

### Typography Scale
- **Display/Hero**: 4.5rem (72px) - Poppins Black
- **H1**: 3.5rem (56px) - Poppins Bold
- **H2**: 2.75rem (44px) - Poppins Semibold
- **H3**: 2.25rem (36px) - Inter Semibold
- **H4**: 1.875rem (30px) - Inter Medium
- **Body Large**: 1.125rem (18px) - Inter Regular
- **Body Regular**: 1rem (16px) - Inter Regular
- **Small Text**: 0.875rem (14px) - Inter Regular

## Logo Guidelines

### Logo Design
- **Shape**: Circular tech-oriented design
- **Elements**: Modern "N" symbol with circuit/tech patterns
- **Colors**: Primary (#1A202C) with accent (#00CFFF) highlights
- **Format**: SVG for scalability, PNG for web use

### Logo Usage
- **Clear Space**: Maintain 20% clear space around logo
- **Minimum Size**: 32px height for digital use
- **Background**: Use on light backgrounds, provide dark version if needed
- **Variations**: Full logo, icon-only, monochrome versions

## Button Styles

### Primary Button
- **Background**: `#1A202C` (Primary)
- **Text**: White
- **Border**: None
- **Border Radius**: 0.75rem
- **Padding**: 1rem 2rem
- **Hover State**: Darken by 10%, subtle shadow increase

### Secondary Button
- **Background**: `#00CFFF` (Accent)
- **Text**: `#1A202C` (Primary)
- **Border**: None
- **Border Radius**: 0.75rem
- **Padding**: 1rem 2rem
- **Hover State**: Lighten by 10%, subtle glow effect

### Outline Button
- **Background**: Transparent
- **Text**: `#1A202C` (Primary)
- **Border**: 2px solid `#00CFFF` (Accent)
- **Border Radius**: 0.75rem
- **Padding**: 1rem 2rem
- **Hover State**: `#00CFFF` background with white text

## Iconography

### Icon Style
- **Style**: Modern, clean, tech-focused
- **Colors**: `#00CFFF` for active states, `#1A202C` for default
- **Size**: 24px standard, 32px for emphasis
- **Usage**: Interface elements, service cards, process steps

### Icon Categories
- **Technology**: Circuit patterns, cloud symbols, gear icons
- **Business**: Charts, graphs, target icons
- **Communication**: Message, phone, email icons

## Design Elements

### Micro-interactions
- **Hover Effects**: Subtle scale (1.02x), shadow increase
- **Button Press**: Scale down (0.98x), shadow decrease
- **Loading States**: Pulse animation with accent color
- **Transitions**: 0.3s ease for all state changes

### Spacing System
- **Section Padding**: 5rem (80px) vertical
- **Component Spacing**: 2rem (32px) between elements
- **Text Spacing**: 1.5rem (24px) between text blocks
- **Grid Gaps**: 2rem (32px) between cards

### Border Radius
- **Cards**: 1rem (16px)
- **Buttons**: 0.75rem (12px)
- **Icons**: 0.5rem (8px)
- **Images**: 0.75rem (12px)

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Optimizations
- **Font Sizes**: Scale down by 20-30%
- **Spacing**: Reduce by 25%
- **Touch Targets**: Minimum 44px
- **Animations**: Reduce complexity

## Accessibility

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio
- **Focus States**: Clear visual indicators

### Typography
- **Line Height**: Minimum 1.5 for body text
- **Letter Spacing**: Optimized for readability
- **Font Loading**: Display swap for performance

## Brand Voice

### Tone
- **Professional**: Expert, reliable, trustworthy
- **Innovative**: Forward-thinking, cutting-edge
- **Approachable**: Clear, helpful, accessible

### Key Messages
- "Innovation meets reliability"
- "Technology for tomorrow's business"
- "Transforming possibilities into reality"

## Implementation Notes

### CSS Variables
```css
:root {
  --nova-primary: #1A202C;
  --nova-accent: #00CFFF;
  --nova-background: #F8F8F8;
  --nova-text-primary: #1A202C;
  --nova-text-secondary: #4A5568;
}
```

### Component Structure
- Use semantic HTML
- Consistent class naming (nova- prefix)
- Mobile-first responsive design
- Performance-optimized animations

This brand guide ensures consistent application of NovaTek's visual identity across all digital touchpoints while maintaining the existing design structure and user experience.