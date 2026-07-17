'use client';


import { FaFacebook,FaInstagramSquare,FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Magnetic from '@/components/animations/Magnetic';
import { BiLogoGmail } from 'react-icons/bi';
import { FaThreads } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer
      className="bg-white/50 border-t border-emerald-200/60 pt-20 pb-8 relative overflow-hidden backdrop-blur-md"
      id="contact-me"
    >
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 400,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}...

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16 relative z-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Mustakim</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            I'm an aspiring Google Ads & Meta Ads Specialist with a strong interest in performance marketing and digital advertising. 
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-6 tracking-wide text-gray-900">Quick Links</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            {['About', 'Qualification', 'Contact Me'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-emerald-700 transition-colors inline-block relative group text-gray-700"
                >
                  {item}
                  
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-gray-900 font-semibold mb-6 tracking-wide">Connect With Me</h3>
          <div className="flex gap-4">
            <Magnetic>
              <a
                href="https://www.facebook.com/mustakrazz707172"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/60 border border-emerald-300/60 text-gray-600 rounded-full hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-colors shadow-md"
              >
                <FaFacebook size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to= mm4022139@gmail.com "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/60 border border-emerald-300/60 text-gray-600 rounded-full hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-colors shadow-md"
              >
                <BiLogoGmail size={18} />
              </a>
            </Magnetic>


            <Magnetic>
              <a
                href="https://www.threads.com/@_mustak_razz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/60 border border-emerald-300/60 text-gray-600 rounded-full hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-colors shadow-md"
              >
                <FaThreads size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.instagram.com/_mustak_razz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/60 border border-emerald-300/60 text-gray-600 rounded-full hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-colors shadow-md"
              >
                <FaInstagramSquare size={18} />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center text-gray-500 text-xs border-t border-emerald-200/40 pt-8 relative z-10"
      >
        © 2026 Mustakim. All rights reserved. Built with Next.js, Tailwind CSS &amp; Framer
        Motion.
      </motion.div>
    </footer>
  );
}
