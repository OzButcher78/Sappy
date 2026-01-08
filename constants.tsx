
import { Category, Project, WebsiteItem } from './types.ts';

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'mathe-meister',
    title: 'Mathe Meister',
    category: Category.EDUCATION,
    date: '2025-10-20',
    tags: ['React', 'EdTech', 'Learning'],
    summary: 'A fun math learning application designed to help students practice their daily Maths',
    featured: true,
    images: ['/images/mathe-meister.jpg?auto=format&fit=crop&q=80&w=800'],
    links: { live: 'https://maths-psi.vercel.app/' },
    content: 'A fun and simple game designed to help young learners practice and improve their math skills in an engaging way. It focuses on clarity, repetitive practice, and rewarding progress.'
  },
  {
    id: '2',
    slug: 'mathe-meister-arbeitsblaetter',
    title: 'Mathe Meister Arbeitsblätter',
    category: Category.EDUCATION,
    date: '2026-01-06',
    tags: ['PDF Generation', 'Automation', 'Tools'],
    summary: 'A maths worksheet generator for teachers and parents to create custom math practice sets instantly for kids.',
    featured: true,
    images: ['/images/mathe-2.jpg?auto=format&fit=crop&q=80&w=800'],
    links: { live: 'https://mathe-arbeitsblatt.vercel.app/' },
    content: 'This extension of the Mathe Meister ecosystem allows for quick, custom maths worksheets maintaining flexibility.'
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
    slug: 'MakerWorld.com Portfolio',
    title: 'Over 100 designs to 3DPrint for Free',
    category: Category.CAD_3D,
    date: '2023-11-05',
    tags: ['Fusion 360', 'MakerWorld', '3D Printing'],
    summary: 'A precision-engineered bin system for organizing small parts, optimized for FDM printing without supports.',
    featured: true,
    images: ['/images/makerworld.jpg?auto=format&fit=crop&q=80&w=800'],
    links: { live: 'https://makerworld.com/en/@3DPrintCraft3D/upload' },
    content: 'Functional and/or fun designs for the 3D printing community.'
  }
];

export const WEBSITES: WebsiteItem[] = [
  { domain: 'autoausbeulen.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'Custom Designed Plugin'], highlights: 'Swiss PDR Specialist', image: '/images/autoausbeulen.png' },
  { domain: 'pdrtools.ch', industry: 'International E-commerce', stack: ['WooCommerce','Multilingual', 'Custom Designed Plugins'], highlights: 'Specialized shop for high-end PDR tools.', image: '/images/pdrtools.jpg' },
  { domain: 'masterfixpdr.se', industry: 'Swedish PDR Services', stack: ['Wordpress', 'Multilingual'], highlights: 'Swedish market PDR Specialists.', image: '/images/masterfixpdr.jpg' },
  { domain: 'iasre.com', industry: 'International Expo', stack: ['WordPress', 'Multilingual'], highlights: 'International Smart Repair Expo', image: '/images/iasre.jpg' },
  { domain: 'iasre-japan.com', industry: 'Japanese PDR Expo', stack: ['WordPress', 'Multilingual'], highlights: 'Regional expo platform with localized UX.', image: '/images/iasre-japan.jpg' },
  { domain: 'erna.hr', industry: 'Dry cleaning in Croatia', stack: ['Wordpress'], highlights: 'High-end portfolio showcase with minimalist aesthetic.', image: '/images/erna.jpg' },
  { domain: 'pdr.hr', industry: 'PDR Specialists Croatia', stack: ['WordPress'], highlights: 'Platform for paintless dent repairs.', image: '/images/pdr.jpg' },
  { domain: 'homehuahin.com', industry: 'Real Estate', stack: ['Wordpress'], highlights: 'Realestate sale and rental page.', image: '/images/homehuahin.jpg' },
  { domain: 'straehl-druecktechnik.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'SEO Optimized'], highlights: 'Precision PDR repair services.', image: '/images/straehl.jpg' },
  { domain: 'sciuto-drücktechnik.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'SEO Optimized'], highlights: 'Specialist PDR repair service.', image: '/images/sciuto.jpg' },
  { domain: 'cleverausbeulen.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'SEO Optimized'], highlights: 'Local PDR Repairs.', image: '/images/clever.jpg' },
  { domain: 'whatdents.co.uk', industry: 'PDR Specialist UK', stack: ['Wordpress', 'SEO'], highlights: 'UK-based PDR Services.', image: '/images/whatdents.jpg' },
  { domain: 'dentag.com.au', industry: 'PDR Australia', stack: ['WordPress', 'Custom Design'], highlights: 'Australian PDR and Hail Specialists.', image: '/images/dentag.jpg' }
];
