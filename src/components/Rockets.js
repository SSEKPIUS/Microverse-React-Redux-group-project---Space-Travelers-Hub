import React from 'react';
import style from './Rockets.module.css';
import racket1 from '../rockets/f1.jpg';

const Rockets = () => {
  const rockets = [
    {
      id: 1,
      rocket_name: 'Flacon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickr_images: '  ',
    },
    {
      id: 2,
      rocket_name: 'Flacon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickr_images: '  ',
    },
    {
      id: 3,
      rocket_name: 'Flacon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickr_images: '  ',
    },

  ];

  return (
    rockets.map((racket) => (
      <div key={racket.id}>
        <div className={style.rocketContainer}>
          <div className={style.image}>
            {racket.flickr_images}
            <img src={racket1} alt="racket" />
          </div>
          <div className={style.content}>
            {' '}
            <h3 className={style.rocketName}>
              {racket.rocket_name }
            </h3>

            <p className={style.rocketDec}>{racket.description}</p>
            <button type="button" className={style.reserve}>Reserve rocket</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Rockets;
