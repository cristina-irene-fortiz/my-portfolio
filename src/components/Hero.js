import React from 'react';

/**
 * Hero / introduction section.
 */
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__greeting">HI!</p>
        <h1 className="hero__title">
          I’m <span className="highlight">Cristina Fortiz</span>
        </h1>
        <a href="#contact" className="btn btn--primary">
          Hire Me
        </a>
      </div>
      <div className="hero__image">
        <img src="/profile.jpg" alt="Photo of Cristina Fortiz" />
      </div>
    </section>
  );
}
