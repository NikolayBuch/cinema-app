import React, { useState } from 'react';

import s from './Home.module.scss';

import About from './About';
import MoviesList from './MoviesList';
import Modal from 'components/common/Modal/Modal';
import Form from './Form/';
import MovieItem from './MovieItem/MovieItem';

const Home = () => {
  const [active, setActive] = useState(true);

  return (
    <div className={s.root}>
      <About setActive={setActive} />
      <MoviesList />

      <Modal active={active} setActive={setActive}>
        <MovieItem />
      </Modal>

      {/* <Modal active={active} setActive={setActive}>
        <Form> </Form>
      </Modal> */}
    </div>
  );
};

export default Home;
