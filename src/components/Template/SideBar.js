import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Claire Waupelani</h2>
        <p><a href="mailto:clairewaupelani@gmail.com">clairewaupelani@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Hi ! 👋</h2>
      <p>I&apos;m Claire and I like to design things.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Claire Waupelani <Link to="/">waupelani.github.io/blog/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
