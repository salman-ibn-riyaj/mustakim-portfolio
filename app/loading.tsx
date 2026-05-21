"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Initialize GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Re-enable scrolling once the animation is complete
        // Note: If used as Next.js native `loading.tsx`, this component might unmount 
        // before completion if the route resolves extremely fast.
        document.body.style.overflow = "auto";
      }
    });

    // 1. Text Split & Entrance Animation (Blur + Y offset + Stagger)
    let splitText: SplitType | null = null;
    if (textRef.current) {
        splitText = new SplitType(textRef.current, { types: "chars" });
        
        // Initial state for characters
        gsap.set(splitText.chars, { y: 40, opacity: 0, filter: "blur(10px)" });
        
        tl.to(splitText.chars, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.04,
            ease: "power4.out"
        }, 0);
    }

    // 2. Percentage Counter & Progress Bar Animation
    const counter = { value: 0 };
    tl.to(counter, {
        value: 100,
        duration: 2.5,
        ease: "power3.inOut",
        onUpdate: () => {
            if (counterRef.current) {
                counterRef.current.innerText = Math.round(counter.value).toString();
            }
            if (progressRef.current) {
                progressRef.current.style.width = `${counter.value}%`;
            }
        }
    }, 0);

    // 3. Floating Particles Animation
    if (particlesRef.current) {
        const particles = particlesRef.current.children;
        
        gsap.set(particles, {
            x: () => Math.random() * window.innerWidth,
            y: () => Math.random() * window.innerHeight,
            opacity: 0,
            scale: () => Math.random() * 2,
        });

        tl.to(particles, {
            opacity: () => 0.1 + Math.random() * 0.4,
            y: () => `-=${100 + Math.random() * 150}`,
            duration: 3.5,
            stagger: 0.1,
            ease: "sine.inOut",
        }, 0);
    }

    // 4. Exit Animation (Elegantly disappear after loading)
    // Fade out text and progress bar container
    tl.to([textRef.current, counterRef.current?.parentElement?.parentElement], {
        opacity: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power3.in",
    }, "+=0.2"); // slight delay after reaching 100%

    // Slide up the entire container to reveal the page
    tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
    }, "-=0.4");

    // Cleanup function
    return () => {
        tl.kill();
        if (splitText) splitText.revert();
        document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Noise / Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />

      {/* Subtle Glowing Orb in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-white rounded-full opacity-[0.03] blur-[120px] pointer-events-none" />

      {/* Floating Particles Container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
              />
          ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-12">
          
          {/* Brand / Logo Text */}
          <h1 
            ref={textRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.15em] uppercase text-white"
            style={{ 
                textShadow: "0 0 40px rgba(255,255,255,0.15)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" 
            }}
          >
            Portfolio
          </h1>

          {/* Loading Indicator */}
          <div className="flex flex-col items-center gap-5">
              
              {/* Percentage Counter */}
              <div className="text-sm md:text-base font-light tracking-[0.3em] text-white/50 flex items-baseline gap-1 font-mono">
                  <span ref={counterRef} className="text-white text-2xl md:text-3xl w-16 text-right font-medium">0</span>
                  <span>%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-[250px] md:w-[300px] h-[2px] bg-white/10 overflow-hidden relative rounded-full">
                  <div 
                      ref={progressRef}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/30 via-white to-white w-0 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  />
              </div>

          </div>
      </div>
    </div>
  );
}
