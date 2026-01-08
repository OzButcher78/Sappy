
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
  { domain: 'autoausbeulen.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'Custom Designed Plugin'], highlights: 'Swiss-standard UI/UX.', image: '/images/autoausbeulen.png' },
  { domain: 'pdrtools.ch', industry: 'International E-commerce', stack: ['WooCommerce','Multilingual', 'Custom Designed Plugins'], highlights: 'Specialized shop for high-end PDR tools.', image: '/images/pdrtools.jpg' },
  { domain: 'masterfixpdr.se', industry: 'Swedish PDR Services', stack: ['Wordpress', 'Multilingual'], highlights: 'Speed-optimized landing page for Swedish market.', image: '/images/masterfixpdr.jpg' },
  { domain: 'iasre.com', industry: 'International Expo', stack: ['WordPress', 'Multilingual'], highlights: 'Event management and exhibitor directory.', image: '/images/iasre.jpg' },
  { domain: 'iasre-japan.com', industry: 'Japanese PDR Expo', stack: ['WordPress', 'Multilingual'], highlights: 'Regional expo platform with localized UX.', image: '/images/iasre-japan.jpg' },
  { domain: 'erna.hr', industry: 'Dry cleaning in Croatia', stack: ['Wordpress'], highlights: 'High-end portfolio showcase with minimalist aesthetic.', image: '/images/erna.jpg' },
  { domain: 'pdr.hr', industry: 'PDR Specialists Croatia', stack: ['WordPress'], highlights: 'Educational platform for paintless dent repair.', image: '/images/pdr.jpg' },
  { domain: 'homehuahin.com', industry: 'Real Estate', stack: ['Wordpress'], highlights: 'Complex property filtering and map search.', image: '/images/homehuahin.jpg' },
  { domain: 'straehl-druecktechnik.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'SEO Optimized'], highlights: 'Precision engineering repair services.', image: '/images/straehl.jpg' },
  { domain: 'sciuto-drücktechnik.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'SEO Optimized'], highlights: 'High-ranking regional automotive service.', image: '/images/sciuto.jpg' },
  { domain: 'cleverausbeulen.ch', industry: 'Swiss PDR Specialist', stack: ['WordPress', 'SEO Optimized'], highlights: 'Modern service platform for regional dent repair.', image: '/images/clever.jpg' },
  { domain: 'whatdents.co.uk', industry: 'PDR Specialist UK', stack: ['Wordpress', 'SEO'], highlights: 'UK-based high-performance landing page.', image: '/images/whatdents.jpg' },
  { domain: 'dentag.com.au', industry: 'PDR Australia', stack: ['WordPress', 'Custom Design'], highlights: 'Global service representation in the Australian market.', image: '/images/dentag.jpg' }
];
