import React from 'react';
import { render } from 'react-dom';
import Avatar from 'avataaars';

import './style.scss';
const colors = {
  main: '#F0E9D2',
  secondary: '#E6DDC4',
  highlight: '#678983',
  dark: '#181D31',
};

const name = 'Joshua Moreno';
const position = 'Software Engineer';
const niche = 'Mobile Web';
const phone = '+52 664 355 7882';
const email = 'hello@morenojoshua.com';

const App = () => {
  return (
    <div className="holder">
      <div className="fcc fs bg">
        <div className="j-card">
          <Avatar
            className="avatar"
            avatarStyle="Circle"
            topType="ShortHairShortCurly"
            accessoriesType="Blank"
            hairColor="Black"
            facialHairType="BeardLight"
            facialHairColor="Black"
            clotheType="Hoodie"
            clotheColor="Red"
            eyeType="Default"
            eyebrowType="UpDown"
            mouthType="Smile"
            skinColor="Light"
          />
          <div className="text">
            <div className="name">{name}</div>
            <div className="other">{position}</div>
            <div className="other">{phone}</div>
            <div className="other">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
render(<App />, document.getElementById('root'));
