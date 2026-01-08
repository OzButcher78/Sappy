
export enum Category {
  EDUCATION = 'Education',
  WP_PLUGINS = 'WordPress Plugins',
  WEB_PORTFOLIO = 'Web / Portfolio',
  CAD_3D = 'CAD & 3D Printing'
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  date: string;
  tags: string[];
  summary: string;
  featured: boolean;
  images: string[];
  links: {
    live?: string;
    github?: string;
  };
  content: string;
}

export interface WebsiteItem {
  domain: string;
  industry: string;
  stack: string[];
  highlights: string;
  image: string;
}
