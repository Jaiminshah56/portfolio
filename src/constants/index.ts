// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  uiux,
  seo,
  fullstack,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  hotel,
  kairo,
  lerasa,
  zayvano,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "services",
    title: "Services",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

export const SERVICES = [
  {
    title: "Custom Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "API & Backend Systems",
    icon: backend,
  },
  {
    title: "UI/UX & 3D Design",
    icon: uiux,
  },
  {
    title: "Technical SEO",
    icon: seo,
  },
  {
    title: "AI Integration",
    icon: fullstack,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES: ReadonlyArray<{
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}> = [];

// Testimonials
export const TESTIMONIALS: ReadonlyArray<{
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}> = [];

// Projects
export const PROJECTS = [
  {
    name: "LE RASA",
    type: "CLIENT PROJECT",
    description:
      "Client project for Le Rasa, a London-based UK bakery website focused on showcasing and selling eggless desserts and bakery products through a modern online experience.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "supabase", color: "orange-text-gradient" },
      { name: "ecommerce", color: "blue-text-gradient" },
    ],
    image: lerasa,
    link: "https://www.lerasa.co.uk/",
    cta_text: "View Live ↗",
    in_progress: false,
  },
  {
    name: "HOTEL SHIDDHARTH",
    type: "DEMO PROJECT",
    description:
      "A modern luxury hotel website concept featuring rooms, booking flow, hospitality services, special offers and a premium guest experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "responsive", color: "orange-text-gradient" },
    ],
    image: hotel,
    link: "https://hotel-shiddharth.netlify.app/",
    cta_text: "View Demo ↗",
    in_progress: false,
  },
  {
    name: "ZAYVANO",
    type: "IN PROGRESS",
    description:
      "An AI-powered Shopify page builder designed to help merchants create and customize modern storefront pages using AI.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "shopify", color: "pink-text-gradient" },
      { name: "ai", color: "orange-text-gradient" },
    ],
    image: zayvano,
    link: "",
    cta_text: "Coming Soon",
    in_progress: true,
  },
  {
    name: "KAIRO AI",
    type: "IN PROGRESS",
    description:
      "An AI-powered Shopify product focused on helping ecommerce businesses build smarter, more efficient online experiences.",
    tags: [
      { name: "ai", color: "blue-text-gradient" },
      { name: "shopify", color: "green-text-gradient" },
      { name: "nextjs", color: "pink-text-gradient" },
      { name: "typescript", color: "orange-text-gradient" },
    ],
    image: kairo,
    link: "",
    cta_text: "Coming Soon",
    in_progress: true,
  },
  {
    name: "CoolCare",
    type: "DEMO PROJECT",
    description:
      "A modern HVAC website for AC sales, professional AC services, spare parts, and customer bookings. The project focuses on a premium, trustworthy, conversion-focused user experience with responsive design.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: web,
    link: "https://coolcaredemo.netlify.app/",
    cta_text: "View Live ↗",
    in_progress: false,
    alt: "CoolCare HVAC website demo",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com",
  },
] as const;
