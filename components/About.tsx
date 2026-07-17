'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Magnetic from '@/components/animations/Magnetic';
import Link from 'next/link';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 bg-gradient-to-br from-white to-emerald-50 text-gray-900 relative overflow-hidden"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-tight text-gray-900">About</h2>
          <p className="text-emerald-600 font-medium tracking-widest uppercase text-sm">
            My Introduction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait with Parallax */}
          <div className="flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-80 h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-b from-emerald-200/40 to-transparent flex items-center justify-center overflow-hidden border border-emerald-200/60 relative group backdrop-blur-sm"
            >
              <motion.img
                style={{ y: imageY }}
                src="/mustakim_portfolio.png"
                alt="Mustakim"
                className="w-full h-[120%] object-cover absolute top-[-10%] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(255,255,255,0.5)] pointer-events-none" />
            </motion.div>
          </div>
          
    
          <div>
            <div className="text-gray-700 leading-relaxed mb-10 text-lg space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Proficient in{' '}
                <span className="text-gray-900 font-semibold">Google Ads, Meta Ads</span>,
                I serve with scalable, high-performance projects.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I create, manage, and optimize paid campaigns to increase leads, sales, and brand visibility.
My expertise includes audience targeting, campaign optimization, and performance tracking.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I continuously improve my skills to stay updated with the latest digital marketing trends.
My goal is to help businesses achieve sustainable growth through high-performing ad campaigns.
              </motion.p>
            </div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Magnetic>
                <Link download="mustakim_resume.pdf" href={'/mustakim_resume.pdf'}><button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg group">
                  Download Resume
                  <span className="text-lg group-hover:translate-y-1 transition-transform">📄</span>
                </button></Link>
                
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
