import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Rockets.module.css';
import { getRockets, bookRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    rockets.map((racket) => (
      <div key={racket.id}>
        <div className={style.rocketContainer}>
          <div className={style.image}>
            <img src={racket.flickr_images[0]} alt="racket" />
          </div>
          <div className={style.content}>
            {' '}
            <h3 className={style.rocketName}>
              {racket.rocket_name }
            </h3>

            <p className={style.rocketDec}>{racket.description}</p>
            <button type="button" className={style.reserve} onClick={() => dispatch(bookRockets(racket.id))}>Reserve rocket</button>
          </div>
        </div>
      </div>
    ))

  );
};
// dispatch(bookRockets(racket.id))
export default Rockets;
