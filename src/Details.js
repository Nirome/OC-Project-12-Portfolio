// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.webp";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/gh.webp";
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


// Enter your Personal Details here
export const personalDetails = {
  name: "Elodie Morin",
  tagline: "Je suis intégratrice web",
  img: profile,
  about: `Après plusieurs années d'expérience en tant qu'infirmière, j'ai choisi de me réorienter vers le développement web, un domaine qui me fascine par son potentiel créatif et technique. Je viens de terminer la formation d’intégrateur web d'OpenClassrooms dans cette optique. Cette transition professionnelle est guidée par mon esprit analytique, ma capacité à rester concentrée sur des tâches complexes, ainsi que par une réelle passion pour la résolution de problèmes.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/elodie-m-346801270/",
  github: "https://www.github.com/Nirome",
  twitter: "https://x.com/MorinElodie6",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "",
    Company: ``,
    Location: "",
    Type: "",
    Duration: "",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Diplôme d'Intégrateur web",
    Company: "OpenClassrooms",
    Location: "En ligne",
    Type: "Plein temps",
    Duration: "Janvier - octobre 2024",
  },
  {
    Position: "Diplôme d'État d'infirmière",
    Company: "IFSI de Caen",
    Location: "Caen",
    Type: "Plein temps",
    Duration: "Septembre 2013 - Juillet 2016",
  },
  {
    Position: "Baccalauréat scientifique",
    Company: `Lycée Marcel Gambier`,
    Location: "Lisieux",
    Type: "Plein temps",
    Duration: "Juin 2002",
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
    description: `Création de la page d'accueil d'une agence de voyage visant à faciliter la recherche d'hébergements. Intégration d'une interface responsive à partir de maquettes.`,
    techstack: "HTML/CSS",
    previewLink: "https://nirome.github.io/OCProject3-Booki/",
    githubLink: "https://github.com/Nirome/OCProject3-Booki",
  },
  {
    title: "Ohmyfood",
    image: projectImage2,
    description: `Création de l'interface mobile-first du site d'une start-up qui répertorie les menus de restaurants gastronomiques. Utilisation de Sass et implémentation d'animations.`,
    techstack: "HTML/CSS, Sass",
    previewLink: "https://nirome.github.io/OCProject4-ohmyfood/",
    githubLink: "https://github.com/Nirome/OCProject4-ohmyfood",
  },
  {
    title: "Print-it",
    image: projectImage3,
    description: `Dynamisation du site internet statique d'une petite imprimerie familiale nommée Print it en ajoutant du langage JavaScript, et réalisation d'un carrousel intéractif.`,
    techstack: "HTML/CSS, JS",
    previewLink: "https://nirome.github.io/Print-it-JS/",
    githubLink: "https://github.com/Nirome/Print-it-JS",
  },
  {
    title: "Sophie Bluel",
    image: projectImage4,
    description: `Conception du site portfolio d'une architecte d'intérieur. Utilisation de JavaScript pour obtenir une page dynamique et appels API pour récupérer des données.`,
    techstack: "HTML/CSS, JS",
    previewLink: "",
    githubLink: "https://github.com/Nirome/Portfolio-architecte-sophie-bluel",
  },
  {
    title: "Kasa",
    image: projectImage5,
    description: `Refonte totale du site d'une entreprise de location pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.`,
    techstack: "HTML/CSS, React",
    previewLink: "",
    githubLink: "https://github.com/Nirome/OCProject7-Kasa",
  },
  {
    title: "Argent Bank",
    image: projectImage6,
    description: `Création d'une application web React pour une nouvelle banque en ligne, Argent Bank. Mise en place du système d'authentification et du tableau de bord des utilisateurs.`,
    techstack: "HTML/CSS, React",
    previewLink: "",
    githubLink: "https://github.com/Nirome/ArgentBank-website",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "elodiemorin@hotmail.fr",
};
