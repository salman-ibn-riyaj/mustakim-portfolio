'use client';

import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const educationData = [
  {
    title: 'Diploma in Engineering',
    school: 'Kishoreganj Polytechnic Institute.',
    years: 'Passed in 2023',
    gpa: ' 2.92 (out of 4)',
    background: 'Electronics Technology',
    subject: 'Electronics',
  },
  {
    title: 'SSC',
    school: ' Roushan Ara Kader High School.',
    years: 'Passed in 2019',
    gpa: '4.39',
    background: 'Science',
    subject: 'Science',
  },
  
  {
    title: 'Industrial Training',
    school: 'Bangladesh Industrial Technical Assistance Center.',
    years: 'Passed in 2023',
    gpa: 'A',
    background: 'Industrial Electrical system.',
    subject: 'Electronics',
  },
  {
    title: ' Basic Electronics Training ',
    school: 'Glorious Automation.',
    years: 'Passed in 2023',
    gpa: 'A',
    background: ' Basic Electronics Training.',
    subject: 'Electronics',
  },
];

export default function Qualification() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-white to-emerald-50 text-gray-900 relative" id="qualification">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">Qualification</h2>
          <p className="text-emerald-600 font-medium tracking-widest uppercase text-sm">
            My Personal Journey
          </p>
        </motion.div>

        <div className="flex justify-center gap-12 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 font-bold text-emerald-600 bg-emerald-100/50 px-6 py-3 rounded-full border border-emerald-300/60 backdrop-blur-sm"
          >
            <GraduationCap size={24} /> Education
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative w-full mx-auto md:w-2/3">
          {/* Background line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-emerald-200" />
          {/* Animated fill line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 top-0 bottom-0 w-[2px] bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]"
          />

          <div className="space-y-16 py-10">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="relative pl-16 group"
              >
                {/* Glowing dot */}
                <div className="absolute left-[20px] top-2 w-4 h-4 bg-white border-2 border-emerald-500 rounded-full group-hover:bg-emerald-500 transition-colors duration-300 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                {/* Connector */}
                <div className="absolute left-[36px] top-4 w-8 h-[2px] bg-emerald-200 group-hover:bg-emerald-500/50 transition-colors duration-300" />

                <div className="bg-white/40 backdrop-blur-md border border-emerald-200/60 p-6 rounded-2xl group-hover:border-emerald-400/60 transition-colors duration-300 hover:bg-white/60 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{item.school}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {item.background} · {item.subject}
                  </p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <p className="text-emerald-700 text-xs font-medium bg-emerald-100/60 inline-block px-3 py-1 rounded-full">
                      {item.years}
                    </p>
                    <p className="text-teal-700 text-xs font-medium bg-teal-100/60 inline-block px-3 py-1 rounded-full border border-teal-300/40">
                      GPA {item.gpa}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
