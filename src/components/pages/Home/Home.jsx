import React from 'react';

import s from './Home.module.scss';

import About from './About';
import MoviesList from './MoviesList';

const Home = () => {
  return (
    <div className={s.root}>
      <About />
      <MoviesList />
    </div>
  );
};

export default Home;
