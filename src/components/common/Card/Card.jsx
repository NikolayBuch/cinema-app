import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/common/Text';

import s from './Card.module.scss';

const Card = ({ item, onFindMovie }) => {
  return (
    <div className={s.root} onClick={() => onFindMovie(item)} >
      <div className={s.card}>
        <div className={s.cover}> 
        {item.cover ? 
        <img src={`./img/jpg/Movie/${item.cover}`} alt='' /> : 
        <img src={`./img/jpg/error.jpg`} alt='' /> 
        }
        </div>
        <div className={s.info}>
          <Text
            className={cx(
              s.point,
              { [s.green]: item.points >= 7 },
              { [s.gray]: item.points <= 7 }
            )}>
            <p>{item.points}</p>
          </Text>
          <Text className={s.name} size='big'>
            <p> {item.name}</p>
          </Text>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
  onFindMovie: PropTypes.func,
};

export default Card;
