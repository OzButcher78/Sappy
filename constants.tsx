
import { Category, Project, WebsiteItem } from './types.ts';

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'mathe-meister',
    title: 'Mathe Meister',
    category: Category.EDUCATION,
    date: '2024-03-10',
    tags: ['React', 'EdTech', 'Learning'],
    summary: 'A comprehensive math learning application designed to help students master core arithmetic through interactive modules.',
    featured: true,
    images: ['https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800'],
    links: { live: '#' },
    content: 'Mathe Meister provides a structured path for arithmetic mastery. Designed with feedback from educators, it focuses on clarity, repetitive practice, and rewarding progress.'
  },
  {
    id: '2',
    slug: 'mathe-meister-arbeitsblaetter',
    title: 'Mathe Meister Arbeitsblätter',
    category: Category.EDUCATION,
    date: '2024-04-15',
    tags: ['PDF Generation', 'Automation', 'Tools'],
    summary: 'A high-speed worksheet generator for teachers and parents to create custom math practice sets instantly.',
    featured: true,
    images: ['https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=800'],
    links: { live: '#' },
    content: 'This extension of the Mathe Meister ecosystem allows for infinite variety in physical practice. Users can customize difficulty levels and layout styles.'
  },
  {
    id: '3',
    slug: 'swiss-invoice-pro',
    title: 'Swiss Invoice Pro for WooCommerce',
    category: Category.WP_PLUGINS,
    date: '2024-01-20',
    tags: ['WooCommerce', 'PHP', 'Fintech'],
    summary: 'Professional Swiss invoice generation for WordPress stores, supporting multiple payment providers and compliant layouts.',
    featured: true,
    images: ['https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'],
    links: { github: '#' },
    content: 'Automates the generation of professional invoices for the Swiss market. Essential for WooCommerce businesses operating in Switzerland.'
  },
  {
    id: '4',
    slug: 'wp-ai-chatbot',
    title: 'AI Chatbot plugin for Wordpress',
    category: Category.WP_PLUGINS,
    date: '2024-02-10',
    tags: ['OpenAI', 'WordPress', 'Automation'],
    summary: 'Integrate advanced Gemini and GPT models directly into your WordPress site for customer support and lead gen.',
    featured: true,
    images: ['https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800'],
    links: { live: '#' },
    content: 'A powerful tool to provide 24/7 automated support. Features include vector search on site content and custom system instructions.'
  },
  {
    id: '5',
    slug: 'makerworld-storage-bins',
    title: 'Stackable Modular Storage System',
    category: Category.CAD_3D,
    date: '2023-11-05',
    tags: ['Fusion 360', 'MakerWorld', '3D Printing'],
    summary: 'A precision-engineered bin system for organizing small parts, optimized for FDM printing without supports.',
    featured: true,
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'],
    links: { live: 'https://makerworld.com/en/@3DPrintCraft3D/upload' },
    content: 'Functional design focused on printability and interlocking reliability. Available on my MakerWorld profile for the community.'
  }
];

export const WEBSITES: WebsiteItem[] = [
  { domain: 'autoausbeulen.ch', industry: 'Automotive PDR', stack: ['WordPress', 'Elementor'], highlights: 'Swiss-standard UI/UX with booking integration.', image: '/images/autoausbeulen.png' },
  { domain: 'pdrtools.ch', industry: 'E-commerce', stack: ['WooCommerce', 'Custom PHP'], highlights: 'Specialized shop for high-end PDR tools.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' },
  { domain: 'masterfixpdr.se', industry: 'Automotive Services', stack: ['Astro', 'Tailwind'], highlights: 'Speed-optimized landing page for Swedish market.', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },
  { domain: 'iasre.com', industry: 'International Expo', stack: ['WordPress', 'Multilingual'], highlights: 'Event management and exhibitor directory.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
  { domain: 'iasre-japan.com', industry: 'International Expo Japan', stack: ['WordPress', 'Japanese'], highlights: 'Regional expo platform with localized UX.', image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80&w=800' },
  { domain: 'erna.hr', industry: 'Interior Design', stack: ['React', 'Next.js'], highlights: 'High-end portfolio showcase with minimalist aesthetic.', image: 'https://images.unsplash.com/photo-1616489953149-75573a1b5598?auto=format&fit=crop&q=80&w=800' },
  { domain: 'pdr.hr', industry: 'PDR Academy', stack: ['WordPress', 'LMS'], highlights: 'Educational platform for paintless dent repair.', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800' },
  { domain: 'homehuahin.com', industry: 'Real Estate', stack: ['Laravel', 'Vue'], highlights: 'Complex property filtering and map search.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { domain: 'straehl-druecktechnik.ch', industry: 'Specialized Repair', stack: ['WordPress', 'Custom UI'], highlights: 'Precision engineering repair services.', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800' },
  { domain: 'sciuto-drücktechnik.ch', industry: 'Automotive Expert', stack: ['WordPress', 'SEO Optimized'], highlights: 'High-ranking regional automotive service.', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800' },
  { domain: 'cleverausbeulen.ch', industry: 'Automotive Repair', stack: ['WordPress', 'SEO'], highlights: 'Modern service platform for regional dent repair.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800' },
  { domain: 'whatdents.co.uk', industry: 'PDR UK', stack: ['HTML5', 'CSS3', 'SEO'], highlights: 'UK-based high-performance landing page.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800' },
  { domain: 'dentag.com.au', industry: 'PDR Australia', stack: ['WordPress', 'Custom Design'], highlights: 'Global service representation in the Australian market.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' }
];
