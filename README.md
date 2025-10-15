# NovaTek - Advanced Technology Solutions

A modern, professional website for NovaTek (Nova Technology), built with Next.js 14+ and inspired by SoInteractive's design aesthetic. This website showcases NovaTek's technology solutions and services with a sleek dark theme and smooth animations.

## 🚀 Features

- **Modern Design**: Dark theme inspired by SoInteractive with electric cyan accents
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed with Next.js 14+ App Router
- **Animations**: Smooth Framer Motion animations and micro-interactions
- **SEO Optimized**: Complete meta tags, structured data, and OpenGraph
- **Accessibility**: WCAG AA compliant with proper semantic HTML
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom NovaTek theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins from Google Fonts
- **Deployment**: Vercel (recommended)

## 🎨 Design System

### Colors
- **Primary**: Electric Cyan (#00E6FF, #00C4FF, #00B8CC)
- **Background**: Charcoal Black (#0A0A0A, #1C1C1C, #2A2A2A)
- **Foreground**: Pure White (#FFFFFF)
- **Accent**: Dark Gray/Charcoal (#666666, #999999, #333333)

### Typography
- **Headings**: Poppins (700 Bold, 600 Medium)
- **Body**: Inter (400 Regular, 500 Medium)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MorokaPrince/SoftIntel.git
   cd SoftIntel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and configure the build

2. **Environment Variables**
   No environment variables are required for basic functionality.

3. **Custom Domain**
   - Add your custom domain in Vercel dashboard
   - Update the `metadataBase` in `src/app/layout.tsx`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## 🎯 Key Pages

- **Homepage**: Hero section, services preview, stats, testimonials
- **About**: Company story, team, mission, and values
- **Services**: Detailed service offerings with pricing
- **Contact**: Contact form, information, and WhatsApp integration

## 📱 Contact Integration

The website includes WhatsApp integration for:
- Contact forms
- Service inquiries
- Consultation requests
- Quote requests

WhatsApp number: +27 79 448 4159

## 🔧 Customization

### Colors
Update colors in `tailwind.config.ts` and `src/app/globals.css`

### Content
- Update company information in page components
- Modify services in `src/app/services/page.tsx`
- Update team members in `src/app/about/page.tsx`

### Branding
- Replace logos in `public/` directory
- Update favicon and OpenGraph images
- Modify meta tags in `src/app/layout.tsx`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router

## ♿ Accessibility

- **WCAG AA Compliant**: Proper contrast ratios and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Management**: Visible focus indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by NovaTek.

## 📞 Support

For technical support or questions:
- **Email**: info@novatek.co.za
- **Phone**: +27 79 448 4159
- **WhatsApp**: +27 79 448 4159

---

Built with ❤️ by NovaTek Development Team
