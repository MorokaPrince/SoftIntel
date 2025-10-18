// Scroll Animation Utilities using Intersection Observer
// Provides smooth fade-in, exit effects, and hover animations

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  easing?: string;
}

export interface AnimationConfig {
  fadeIn?: boolean;
  slideIn?: 'left' | 'right' | 'up' | 'down';
  scaleIn?: boolean;
  exitEffect?: 'fadeOut' | 'slideOut' | 'scaleOut';
  stagger?: number;
  delay?: number;
}

// Default animation configurations
export const animationPresets: Record<string, AnimationConfig> = {
  fadeInUp: {
    fadeIn: true,
    slideIn: 'up',
    delay: 0,
  },
  fadeInLeft: {
    fadeIn: true,
    slideIn: 'left',
    delay: 0,
  },
  fadeInRight: {
    fadeIn: true,
    slideIn: 'right',
    delay: 0,
  },
  scaleIn: {
    scaleIn: true,
    delay: 0,
  },
  slideUp: {
    slideIn: 'up',
    delay: 0,
  },
  staggerFade: {
    fadeIn: true,
    slideIn: 'up',
    stagger: 100,
    delay: 0,
  },
};

// Intersection Observer class for scroll animations
export class ScrollAnimationObserver {
  private observer: IntersectionObserver;
  private animatedElements: Set<Element> = new Set();

  constructor(options: ScrollAnimationOptions = {}) {
    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      once = true,
    } = options;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
            if (once) {
              this.observer.unobserve(entry.target);
            }
          } else if (!once) {
            this.resetElement(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
  }

  // Observe an element for scroll animations
  observe(element: Element, config: AnimationConfig = { fadeIn: true, slideIn: 'up' }) {
    this.observer.observe(element);
    this.setupElement(element, config);
  }

  // Observe multiple elements with optional stagger effect
  observeAll(elements: Element[], config: AnimationConfig = { fadeIn: true, slideIn: 'up' }) {
    elements.forEach((element, index) => {
      const elementConfig = {
        ...config,
        delay: (config.delay || 0) + (config.stagger ? index * config.stagger : 0),
      };
      this.observer.observe(element);
      this.setupElement(element, elementConfig);
    });
  }

  // Setup element with initial styles and data attributes
  private setupElement(element: Element, config: AnimationConfig) {
    // Store animation config as data attribute
    (element as HTMLElement).dataset.animationConfig = JSON.stringify(config);

    // Set initial state based on animation type
    if (config.fadeIn) {
      element.classList.add('animate-fade-in-initial');
    }
    if (config.slideIn) {
      element.classList.add(`animate-slide-in-${config.slideIn}-initial`);
    }
    if (config.scaleIn) {
      element.classList.add('animate-scale-in-initial');
    }
  }

  // Animate element when it enters viewport
  private animateElement(element: Element) {
    if (this.animatedElements.has(element)) return;

    const configStr = (element as HTMLElement).dataset.animationConfig;
    if (!configStr) return;

    const config: AnimationConfig = JSON.parse(configStr);

    // Apply animation classes
    if (config.fadeIn) {
      element.classList.remove('animate-fade-in-initial');
      element.classList.add('animate-fade-in');
    }
    if (config.slideIn) {
      element.classList.remove(`animate-slide-in-${config.slideIn}-initial`);
      element.classList.add(`animate-slide-in-${config.slideIn}`);
    }
    if (config.scaleIn) {
      element.classList.remove('animate-scale-in-initial');
      element.classList.add('animate-scale-in');
    }

    this.animatedElements.add(element);
  }

  // Reset element when it exits viewport (for non-once animations)
  private resetElement(element: Element) {
    if (this.animatedElements.has(element)) {
      const configStr = (element as HTMLElement).dataset.animationConfig;
      if (!configStr) return;

      const config: AnimationConfig = JSON.parse(configStr);

      // Remove animation classes and add initial classes
      if (config.fadeIn) {
        element.classList.remove('animate-fade-in');
        element.classList.add('animate-fade-in-initial');
      }
      if (config.slideIn) {
        element.classList.remove(`animate-slide-in-${config.slideIn}`);
        element.classList.add(`animate-slide-in-${config.slideIn}-initial`);
      }
      if (config.scaleIn) {
        element.classList.remove('animate-scale-in');
        element.classList.add('animate-scale-in-initial');
      }

      this.animatedElements.delete(element);
    }
  }

  // Disconnect observer
  disconnect() {
    this.observer.disconnect();
  }
}

// Hover animation utilities
export class HoverAnimationManager {
  static addHoverEffect(element: Element, effect: string = 'lift') {
    element.classList.add(`hover-effect-${effect}`);
  }

  static addHoverEffects(elements: Element[], effect: string = 'lift') {
    elements.forEach(element => {
      this.addHoverEffect(element, effect);
    });
  }

  static addInteractiveEffects() {
    // Add hover effects to buttons
    document.querySelectorAll('button, .btn').forEach(button => {
      this.addHoverEffect(button, 'scale');
    });

    // Add hover effects to cards
    document.querySelectorAll('.card, [class*="card"]').forEach(card => {
      this.addHoverEffect(card, 'lift');
    });

    // Add hover effects to links
    document.querySelectorAll('a').forEach(link => {
      this.addHoverEffect(link, 'glow');
    });
  }
}

// Utility functions for easy usage
export const scrollAnimations = {
  // Initialize scroll animations for common selectors
  init: (options?: ScrollAnimationOptions) => {
    const observer = new ScrollAnimationObserver(options);

    // Observe sections
    document.querySelectorAll('section').forEach((section, index) => {
      observer.observe(section, animationPresets.fadeInUp);
    });

    // Observe cards with stagger effect
    document.querySelectorAll('.card, [class*="card"]').forEach((card, index) => {
      observer.observe(card, {
        ...animationPresets.fadeInUp,
        delay: index * 50,
      });
    });

    // Observe headings
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
      observer.observe(heading, animationPresets.fadeInUp);
    });

    return observer;
  },

  // Initialize hover effects
  initHoverEffects: () => {
    HoverAnimationManager.addInteractiveEffects();
  },

  // Create observer for specific elements
  createObserver: (options?: ScrollAnimationOptions) => {
    return new ScrollAnimationObserver(options);
  },
};

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    scrollAnimations.init();
    scrollAnimations.initHoverEffects();
  });
}