// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/booki.webp";
import projectImage2 from "./assets/projects/ohmyfood.webp";
import projectImage3 from "./assets/projects/print-it.webp";
import projectImage4 from "./assets/projects/sophie-bluel.webp";
import projectImage5 from "./assets/projects/kasa.webp";
import projectImage6 from "./assets/projects/argentbank.webp";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Elodie Morin",
  tagline: "Je suis intégratrice web",
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/Nirome",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `Your College Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Aug 2020 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Booki",
    image: projectImage1,
    description: `Création de la page d'accueil d'une agence de voyage. Intégration d'une interface responsive à partir de maquettes.`,
    techstack: "HTML/CSS",
    previewLink: "https://nirome.github.io/OCProject3-Booki/",
    githubLink: "https://github.com/Nirome/OCProject3-Booki",
  },
  {
    title: "Ohmyfood",
    image: projectImage2,
    description: `Création de l'interface mobile-first du site d'une start-up. Utilisation de Sass et implémentation d'animations CSS.`,
    techstack: "HTML/CSS, Sass",
    previewLink: "https://nirome.github.io/OCProject4-ohmyfood/",
    githubLink: "https://github.com/Nirome/OCProject4-ohmyfood",
  },
  {
    title: "Print-it",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://nirome.github.io/Print-it-JS/",
    githubLink: "https://github.com/Nirome/Print-it-JS",
  },
  {
    title: "Sophie Bluel",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Kasa",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "ArgentBank",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890",
};
