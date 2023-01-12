import React from 'react';
import style from './Profile.module.css';

const Profile = () => (
  <div className={style.container}>
    <div>
      <h2>my missions</h2>
      <ul>
        <li><span>Telstar</span></li>
        <li><span>SES</span></li>
        <li><span>AsiaSat</span></li>
        <li><span>ABS</span></li>
      </ul>
    </div>
    <div>
      <h2>my rockets</h2>
      <ul>
        <li><span>Falcon 9</span></li>
        <li><span>Falcon Heavy</span></li>
        <li><span>Starship</span></li>
      </ul>
    </div>
    <div>
      <h2>my dragons</h2>
      <ul>
        <li><span>Dragon 1</span></li>
        <li><span>Dragon 2</span></li>
      </ul>
    </div>
  </div>
);

export default Profile;
