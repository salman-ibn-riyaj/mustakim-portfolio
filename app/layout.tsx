import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import NoiseOverlay from '@/components/NoiseOverlay';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mustakim | Digital Marketing Expert',
  description:
    'I\'m an aspiring Google Ads & Meta Ads Specialist with a strong interest in performance marketing and digital advertising.',
  keywords: ['Digital Marketing', 'Google Ads', 'Meta Ads', 'Performance Marketing'],
  authors: [{ name: 'Mustakim' }],
  icons: {
    icon: '/mustakim_portfolio.png',
    shortcut: '/mustakim_portfolio.png',
    apple: '/mustakim_portfolio.png',
  },
  openGraph: {
    title: 'Mustakim | Digital Marketing Expert',
    description:
      'Frontend Developer passionate about creating beautiful, interactive, and high-performance web experiences.',
    type: 'website',
    images: [{ url: '/mustakim_portfolio.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SmoothScroll>
          <CustomCursor />
          <NoiseOverlay />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
