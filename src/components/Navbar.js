import React, { useState } from 'react';

/**
 * Navigation bar with mobile toggle.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(open => !open);
    console.log(
      JSON.stringify({
        level: 'INFO',
        message: `Mobile menu ${menuOpen ? 'closed' : 'opened'}`
      })
    );
  };

  const handleNavClick = href => {
    console.log(
      JSON.stringify({ level: 'INFO', action: 'navigate', to: href })
    );
    if (menuOpen) setMenuOpen(false);
  };

  const links = [
    { href: '#resume', label: 'See Resume' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Get in Contact' }
  ];

  return (
    <header className="navbar">
      <div className="navbar__brand">Cristina Irene Fortiz</div>
      <button
        className="navbar__toggle"
        aria-label="Toggle menu"
        onClick={handleToggle}
      >
        <span className="navbar__hamburger" />
      </button>
      <ul
        className={
          menuOpen
            ? 'navbar__links navbar__links--active'
            : 'navbar__links'
        }
      >
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={() => handleNavClick(link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
