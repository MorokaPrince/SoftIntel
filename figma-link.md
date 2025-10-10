# Figma Design System - Moroka & Associates

## 🎨 Design System Access

**Figma Team File**: [Moroka & Associates - Design System](https://www.figma.com/team-invite/your-figma-link-here)

**Access Requirements**:
- Figma account required
- Team invitation will be sent to project stakeholders
- View-only access for developers, edit access for designers

## 📋 Design System Contents

### 🎨 Color Tokens
**Location**: `Design System / Color Styles`

#### Warm Professional Palette (Primary)
- **Primary**: `#E89F4C` - Main brand orange
- **Primary Light**: `#F4B266` - Light orange for hover states
- **Primary Dark**: `#D4943F` - Dark orange for active states
- **Accent**: `#2F6F4E` - Forest green for secondary elements
- **Background**: `#FEF9F3` - Warm cream background
- **Surface**: `#FDF4E6` - Card backgrounds
- **Text Primary**: `#2D1810` - Main text color
- **Text Secondary**: `#8B7355` - Secondary text

#### Light & Vibrant Palette (Alternative)
- **Primary**: `#FF6B35` - Vibrant coral
- **Accent**: `#00B4D8` - Electric cyan
- **Background**: `#F8FAFC` - Clean light gray

#### Modern Teal & Coral Palette (Alternative)
- **Primary**: `#FF7A59` - Modern coral
- **Accent**: `#0ABAB5` - Fresh teal
- **Background**: `#FCFBF9` - Warm white

### 📝 Typography Scale
**Location**: `Design System / Text Styles`

#### Headings
- **Hero**: Poppins, 900, 4.5rem, 110% line height
- **H1**: Poppins, 800, 3.5rem, 120% line height
- **H2**: Poppins, 700, 2.75rem, 125% line height
- **H3**: Inter, 600, 2.25rem, 130% line height

#### Body Text
- **Large**: Inter, 500, 1.125rem, 160% line height
- **Regular**: Inter, 400, 1rem, 165% line height
- **Small**: Inter, 400, 0.875rem, 150% line height
- **Caption**: Inter, 400, 0.75rem, 140% line height

### 🧩 Component Library
**Location**: `Components / Library`

#### Header Component
- **Desktop**: Full logo + navigation + CTA buttons
- **Mobile**: Collapsible hamburger menu
- **Responsive Breakpoints**: 320px, 768px, 1024px
- **Accessibility**: WCAG AA compliant with focus management

#### Hero Section
- **Layout**: Left-aligned text, right-side visual element
- **Background**: Subtle gradient + geometric shapes
- **CTA Buttons**: Primary and secondary styles
- **Responsive**: Stack on mobile, side-by-side on desktop

#### Card Components
- **Service Cards**: Icon + title + description + CTA
- **Team Cards**: Photo + name + role + bio
- **Feature Cards**: Visual + headline + details

#### Form Components
- **Input Fields**: Label + field + error state
- **Buttons**: Primary, secondary, outline variants
- **Validation**: Real-time feedback and error messages

### 📱 Responsive Frames
**Location**: `Frames / Responsive`

#### Mobile Frames
- **320px**: Small mobile devices
- **375px**: Standard mobile
- **428px**: Large mobile/phablet

#### Tablet Frames
- **768px**: Portrait tablet
- **1024px**: Landscape tablet

#### Desktop Frames
- **1440px**: Standard desktop
- **1920px**: Large desktop

### 🎭 Interactive Prototype
**Location**: `Prototype / Main Flow`

#### User Flows
1. **Homepage → About**: Complete navigation flow
2. **Mobile Menu**: Hamburger menu interaction
3. **Theme Switcher**: Color theme changes
4. **Contact Form**: Form submission process

#### Animation Prototypes
- **Header Scroll**: Logo shrink behavior
- **Hover States**: Button and card interactions
- **Page Transitions**: Smooth section changes

## 🔧 Using the Design System

### For Designers
1. **Color Usage**: Always use color styles, never hex values
2. **Typography**: Apply text styles consistently
3. **Components**: Use component library for consistency
4. **Responsive**: Design for mobile-first, then scale up

### For Developers
1. **CSS Variables**: Use the exported CSS custom properties
2. **Component Structure**: Follow the documented component API
3. **Responsive**: Implement mobile-first responsive design
4. **Accessibility**: Follow WCAG guidelines in implementation

### Exporting Assets
1. **Icons**: Export as SVG for scalability
2. **Logos**: Multiple sizes (32px, 64px, 128px)
3. **Images**: Export optimized PNG/JPEG for production
4. **Colors**: Export CSS custom properties

## 📊 Design Tokens (CSS Variables)

```css
/* Color Tokens */
--color-primary: #E89F4C;
--color-primary-light: #F4B266;
--color-primary-dark: #D4943F;
--color-accent: #2F6F4E;
--color-background: #FEF9F3;
--color-surface: #FDF4E6;
--color-text-primary: #2D1810;
--color-text-secondary: #8B7355;

/* Typography Tokens */
--font-family-primary: 'Inter', sans-serif;
--font-family-heading: 'Poppins', sans-serif;
--font-size-hero: 4.5rem;
--font-size-h1: 3.5rem;
--font-size-body: 1rem;

/* Spacing Tokens */
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 2rem;
--space-xl: 4rem;
```

## 🔄 Design System Maintenance

### Update Process
1. **Design Changes**: Update Figma components first
2. **Developer Handoff**: Export updated CSS variables
3. **Implementation**: Update React components
4. **Testing**: Validate responsive and accessibility
5. **Documentation**: Update this README

### Version Control
- **Figma Versions**: Create new versions for major changes
- **Component Updates**: Track changes in component descriptions
- **Asset Updates**: Maintain version history for exported assets

## 📞 Support & Questions

For design system questions:
- **Design Team**: design@morokaandassociates.com
- **Development Team**: itsolutions@morokaandassociates.com
- **Documentation**: Update this file with any clarifications needed

---

**Last Updated**: October 2024
**Figma File Version**: 1.0.0
**Design System Status**: Active Development