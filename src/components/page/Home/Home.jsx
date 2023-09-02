import React from 'react';

import s from './Home.module.scss';

import About from './About';
import MovieList from './MovieList';

const Home = () => {
  return (
    <div className={s.root}>
      <About />
      <MovieList/>
    </div>
  );
};

export default Home;
