import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './MovieItem.module.scss';
import Text from 'components/common/Text';

const MovieItem = ({ item }) => {
  return (
    <div className={s.root}>
      <div className={s.cover}>
        {item.cover  
        ? <img src={`./img/jpg/Movie/${item.cover}`} alt='' /> 
        : <img src={`./img/jpg/error.jpg`} alt='' /> 
        }
      </div>
      <div className={s.info}>
        <div className={s.wrapper}>
          <Text as='p' size='h3'>
            {item.name}
          </Text>
          <Text as='p' size='normal'>
            {item.russiaName}
          </Text>
          <Text size='small' className={s.general}>
            <p
              className={cx(
                { [s.green]: item.points >= 7 },
                { [s.gray]: item.points <= 7 },
                { [s.red]: item.points <= 6 }
              )}>
              {item.points}
            </p>
            <p>{item.date}</p>
            <p>{item.country}</p>
          </Text>
        </div>

        <Text
          as='p'
          size='normal'
          className={cx(s.description)}>
          {item.description}
        </Text>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
item: PropTypes.object
}

export default MovieItem;
