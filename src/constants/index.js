import {
  mobile,
  backend,
  creator,
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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
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
];

const experiences = [
  {
    title: "Full-Stack Mentor",
    company_name: "Revolution Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2023 - March 2024",
    points: [
      "Providing quality education to students of the Revolution Academy",
      "Teaching students advanced and advanced programming languages",
      "Giving clear direction to education and future profession",
      "And I managed to do it",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "For Me Movie web-site",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2024 - Feb 2024",
    points: [
      "This website is built using spring boot and react.js technologies",
      "You can watch movies, like and leave comments through the website",
      "This site has a voice-controlled search engine so that users do not face any problems",
      "And I managed to do it.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "For Me Hoobank Clone",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2023",
    points: [
      "This web application uses popular technologies like react.js and tailwindcss.",
      "The website consists of a complete front-end and a landing page.",
      "The U.I (user interface) is designed in an attractive way.",
      "And I managed to do it.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "For Me Spotify Clone",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Now",
    points: [
      "I am currently developing a spotify web application and am further.",
      "Expanding my knowledge on this website as a MERN project.In this project you can listen to songs and music performed by famous singers.",
      "And most importantly, in this project you can also chat.",
      "And I can do it.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Azizbek proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Azizbek does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Azizbek optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Project",
    description:
      "This platform is perfectly designed with a combination of Spring Boot and React and offers many conveniences for users. You can like movies, write comments and watch movies in high quality.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "postgres sql",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/xudoyberdiyev-dev/movie",
  },
  {
    name: "Hooban Clone",
    description:
      "I created a really beautiful UI using only react.js and tailwindcss and I really liked it, but I hope you like this UI too.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/xudoyberdiyev-dev/Hoobank",
  },
  {
    name: "Spotify Clone",
    description:
      "In my current project, I'm building a clone of the Spotify platform using node.js express.js mongodb and react, and I hope this platform will be as beautiful and functional as you want it to be.",
    tags: [
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/xudoyberdiyev-dev/spotify-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
