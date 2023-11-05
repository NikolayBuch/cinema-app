import React, { useCallback, useContext } from 'react';

import s from './MoviesList.module.scss';

import Card from 'components/common/Card';
import Container from 'components/common/Container';
import MovieItem from 'components/common/MovieItem';
import Text from 'components/common/Text/Text';
import { Context } from 'context/context';
import { ModalContext } from 'context/modalContext';

const MoviesList = () => {
  const { movies } = useContext(Context);
  const { handleModal } = useContext(ModalContext);

  const findMovie = useCallback(
    (item) => {
      handleModal(<MovieItem item={item} />);
    },
    [handleModal]
  );

  return (
    <div className={s.root}>
      <Container>
        <div className={s.title}>
          <Text size='h2' as='h2'>
            Список фильмов
          </Text>
        </div>
        <div className={s.movies}>
          {movies.map((item) => (
            <Card onFindMovie={findMovie} item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MoviesList;
