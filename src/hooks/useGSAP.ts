import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';

interface GSAPAnimationConfig {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export const useGSAP = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, []);

  const animateIn = (
    element: RefObject<HTMLElement> | string | Element | null,
    props: gsap.TweenVars = {},
    duration: number = 1
  ) => {
    if (tl.current && element) {
      tl.current.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          ...props.from,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          ease: "power3.out",
          ...props.to,
        }
      );
    }
  };

  const animateOnHover = (
    element: RefObject<HTMLElement> | string,
    hoverProps: gsap.TweenVars = {},
    originalProps: gsap.TweenVars = {}
  ) => {
    const el = typeof element === 'string' ? element : element.current;
    if (!el) return;

    const handleMouseEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        y: -5,
        boxShadow: "0 10px 30px rgba(255, 103, 0, 0.3)",
        duration: 0.3,
        ease: "power2.out",
        ...hoverProps,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 20px rgba(16, 16, 20, 0.3)",
        duration: 0.3,
        ease: "power2.out",
        ...originalProps,
      });
    };

    if (typeof element !== 'string' && element.current) {
      element.current.addEventListener('mouseenter', handleMouseEnter);
      element.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (element.current) {
          element.current.removeEventListener('mouseenter', handleMouseEnter);
          element.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  };

  const staggerIn = (
    elements: string,
    props: gsap.TweenVars = {},
    stagger: number = 0.1
  ) => {
    if (tl.current) {
      tl.current.fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
          ...props.from,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger,
          ...props.to,
        }
      );
    }
  };

  const textReveal = (element: RefObject<HTMLElement> | string | Element | null) => {
    if (tl.current && element) {
      tl.current.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
          skewY: 7,
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
        }
      );
    }
  };

  const floatingAnimation = (
    element: RefObject<HTMLElement> | string,
    amplitude: number = 10,
    duration: number = 3
  ) => {
    gsap.to(element, {
      y: amplitude,
      duration: duration,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  };

  const pulseGlow = (element: RefObject<HTMLElement> | string) => {
    gsap.to(element, {
      filter: "drop-shadow(0 0 20px rgba(255, 103, 0, 0.6))",
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  };

  return {
    timeline: tl.current,
    animateIn,
    animateOnHover,
    staggerIn,
    textReveal,
    floatingAnimation,
    pulseGlow,
  };
};