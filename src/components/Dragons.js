import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Rockets.module.css';
import { getDragons } from '../redux/dragons/dragons';

const Dragons = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  return (
    dragons.map((dragon) => (
      <div key={dragon.id}>
        <div className={style.rocketContainer}>
          <div className={style.image}>
            <img src={dragon.flickr_images[0]} alt="dragon" />
          </div>
          <div className={style.content}>
            {' '}
            <h3 className={style.rocketName}>
              {dragon.rocket_name }
            </h3>

            <p className={style.rocketDec}>{dragon.description}</p>
            <button type="button" className={style.reserve}>Reserve Dragon</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Dragons;
