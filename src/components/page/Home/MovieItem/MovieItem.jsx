import React from 'react';
import cx from 'classnames';

import s from './MovieItem.module.scss';
import Text from 'components/common/Text/Text';

const MovieItem = () => {
  return (
    <div className={s.root}>
      <div className={s.gg}>
        <div className={s.cover}>
          <img
            src='img/jpg/Movie/eternal-sunshine-of-the-spotless-mind.jpg'
            alt=''
          />
        </div>
        <div className={s.info}>
          <Text as='p' size='h3'>
            Eternal Sunshine of the Spotless Mind16
          </Text>
          <Text as='p' size='normal'>
            Вечное сияние чистого разума
          </Text>
          <Text size='small' className={s.general}>
            <p
              className={cx(
                s.green
                // { [s.green]: item.points >= 7 },
                // { [s.gray]: item.points <= 7 }
              )}>
              6.8
            </p>
            <p>2010</p>
            <p>США</p>
          </Text>

          <Text
            as='p'
            size='normal'
            className={cx(s.description, s.isMobileHidden)}>
            Застенчивый и меланхоличный Джоэл живёт ничем не примечательной
            серой и унылой жизнью. Но однажды вместо привычного рабочего
            маршрута молодой человек вдруг садится на электричку в другом
            направлении и устремляется к морю. На песчаном берегу Джоэл замечает
            девушку с ярко-синими волосами. На обратном пути они знакомятся в
            вагоне электрички и парень понимает, что у них с Клементиной очень
            много общего, как будто он уже знает эту девушку. Совсем скоро Джоэл
            поймёт, что действительно был знаком с ней, более того - они были
            парой.
          </Text>
        </div>
      </div>

      <Text
        as='p'
        size='normal'
        className={cx(s.description, s.isMobileVisible)}>
        Застенчивый и меланхоличный Джоэл живёт ничем не примечательной серой и
        унылой жизнью. Но однажды вместо привычного рабочего маршрута молодой
        человек вдруг садится на электричку в другом направлении и устремляется
        к морю. На песчаном берегу Джоэл замечает девушку с ярко-синими
        волосами. На обратном пути они знакомятся в вагоне электрички и парень
        понимает, что у них с Клементиной очень много общего, как будто он уже
        знает эту девушку. Совсем скоро Джоэл поймёт, что действительно был
        знаком с ней, более того - они были парой.
      </Text>
    </div>
  );
};

export default MovieItem;
