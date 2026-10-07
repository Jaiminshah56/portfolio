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
  //project1,
  /*project2,
  project3,
  project4,
  project5,
  project6,*/
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
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    //image: project1,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    //image: project2,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    //image: project3,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    //image: project4,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    //image: project5,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    //image: project6,
    source_code_link: "",
    live_site_link: "",
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
