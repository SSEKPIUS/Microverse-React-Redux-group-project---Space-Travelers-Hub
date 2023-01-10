import React from 'react';
import style from './Rockets.module.css';
import racket1 from '../rockets/dragon.jpeg';

const Dragons = () => {
  const rockets = [
    {
      id: 1,
      rocket_name: 'Dragon 1',
      description: 'American private space transportation company SpaceX has developed and produced several spacecraft named Dragon. The first family member, now referred to as Dragon 1, flew 23 cargo missions to the ISS between 2010 and 2020 before being retired. With this first version not designed for carrying astronauts, it was funded by NASA with $396 million awarded through the Commercial Orbital Transportation Services (COTS) program,[1] with SpaceX being announced as a winner of the first round of funding on August 18, 2006.',
      flickr_images: '  ',
    },
    {
      id: 2,
      rocket_name: 'Dragon 1',
      description: 'American private space transportation company SpaceX has developed and produced several spacecraft named Dragon. The first family member, now referred to as Dragon 1, flew 23 cargo missions to the ISS between 2010 and 2020 before being retired. With this first version not designed for carrying astronauts, it was funded by NASA with $396 million awarded through the Commercial Orbital Transportation Services (COTS) program,[1] with SpaceX being announced as a winner of the first round of funding on August 18, 2006.',
      flickr_images: '  ',
    },
    {
      id: 3,
      rocket_name: 'Dragon 1',
      description: 'American private space transportation company SpaceX has developed and produced several spacecraft named Dragon. The first family member, now referred to as Dragon 1, flew 23 cargo missions to the ISS between 2010 and 2020 before being retired. With this first version not designed for carrying astronauts, it was funded by NASA with $396 million awarded through the Commercial Orbital Transportation Services (COTS) program,[1] with SpaceX being announced as a winner of the first round of funding on August 18, 2006.',
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
            <button type="button" className={style.reserve}>Reserve Dragon</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Dragons;
