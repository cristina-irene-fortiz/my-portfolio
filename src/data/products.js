// src/data/products.js

/**
 * @typedef {{ title: string; description: string; image: string; link: string }} Product
 * @type {Product[]}
 */
const products = [
  {
    title: "Awesome ML Dashboard",
    description: "Interactive data-viz dashboard built with React & Recharts",
    image: "/images/ml-dashboard.png",      // put this in public/images/
    link: "https://github.com/you/ml-dashboard"
  },
  {
    title: "Secure API Service",
    description: "Node.js/Express service with OAuth2 & JWT security",
    image: "/images/secure-api.png",
    link: "https://github.com/you/secure-api"
  },
  {
    title: "Personal Blog",
    description: "Next.js & MDX-powered blog with dark/light theme",
    image: "/images/blog-screenshot.png",
    link: "https://yourdomain.com"
  }
  // …add as many as you need
];

export default products;
