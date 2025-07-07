import React from 'react';
import { motion } from 'framer-motion';
import products from '../data/products';

/** Framer Motion fade-up animation */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

/**
 * Products grid with on-scroll fade-in.
 */
export default function Products() {
  return (
    <section id="products" className="content-section">
      <h2>Products</h2>
      <div className="products__grid">
        {products.map(p => (
          <motion.a
            key={p.title}
            href={p.link}
            className="product-card"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeUp}
          >
            <img src={p.image} alt={p.title} />
            <div className="product-card__overlay">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
