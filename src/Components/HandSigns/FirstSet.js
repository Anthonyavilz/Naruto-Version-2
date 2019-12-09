import React from 'react';
import Bird from '../../Images/Bird.jpg';
import Boar from '../../Images/Boar.jpg';
import Dog from '../../Images/Dog.jpg';
import Dragon from '../../Images/Dragon.jpg';
import Hare from '../../Images/Hare.jpg';
import Horse from '../../Images/Horse.jpg';

function FirstSet() {
  return (
    <header className="App">
      <div class='first-row'>
        <img class='bird' src={Bird} alt='bird' />
        <img class='boar' src={Boar} alt='dog' />
        <img class='dog' src={Dog} alt='dog' />
        <img class='dragon' src={Dragon} alt='dragon' />
        <img class='hare' src={Hare} alt='hare' />
      </div>
      <div class='second-row'>
        <img class='horse' src={Horse} alt='horse' />
      </div>
    </header>
  );
}

export default FirstSet;