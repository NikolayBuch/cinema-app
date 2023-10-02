import React from 'react';
import { movie } from 'stubs/movie';

import s from './MoviesList.module.scss';

import Card from 'components/common/Card';
import Container from 'components/common/Container';
import Text from 'components/common/Text/Text';

const MoviesList = () => {
  return (
    <div className={s.root}>
      <Container>
        <div className={s.title}>
          <Text size='h2'  as='h2'>Список фильмов</Text>
        </div>
        <div className={s.movies}>
          {movie.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MoviesList;
