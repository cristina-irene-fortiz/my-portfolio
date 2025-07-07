/**
 * @typedef {{ title: string; description: string; image: string; link: string }} Product
 * @type {Product[]}
 */
const products = [
  {
    title: "My Cool App",
    description: "A mobile app that does X, Y, Z",
    image: "/images/app-screenshot.png",
    link: "https://github.com/you/app"
  },
  {
    title: "Website Redesign",
    description: "Redesigned acme.com with React & Tailwind",
    image: "/images/acme-redesign.png",
    link: "https://acme.com"
  },
  // …add more as you like
];

export default products;
