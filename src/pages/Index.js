import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Claire Waupelani's personal website. New York based Penn State graduate, "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">About this site</h2>
          <p>
            Product Designer at New York.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> It is nice to meet you</p>
    </article>
  </Main>
);

export default Index;
