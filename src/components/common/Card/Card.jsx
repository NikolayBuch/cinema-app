import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/common/Text';

import s from './Card.module.scss';

const Card = ({ item }) => {
  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={s.cover}>
          <img src={`./img/jpg/Movie/${item.cover}`} alt='movie' />
        </div>
        <div className={s.info}>
          <Text>
            <p> {item.name}</p>
          </Text>
          <Text
            className={cx(
              s.point,
              { [s.green]: item.points >= 7 },
              { [s.gray]: item.points <= 7 }
            )}>
            <p>{item.points}</p>
          </Text>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
