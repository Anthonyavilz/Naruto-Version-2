import React from 'react';
import Monkey from '../../Images/Monkey.jpg';
import Ox from '../../Images/Ox.jpg';
import Ram from '../../Images/Ram.jpg';
import Rat from '../../Images/Rat.jpg';
import Serpernt from '../../Images/Serpernt.jpg';
import Tiger from '../../Images/Tiger.jpg';

function SecondSet() {
  return (
    <footer className="App">
      <div class='third-row'>
        <img class='monkey' src={Monkey} alt='monkey' />
      </div>
      <div class='fourth-row'>
        <img class='ox' src={Ox} alt='ox' />
        <img class='ram' src={Ram} alt='ram' />
        <img class='rat' src={Rat} alt='rat' />
        <img class='serpernt' src={Serpernt} alt='serpernt' />
        <img class='tiger' src={Tiger} alt='tiger' />
      </div>
    </footer>
  );
}

export default SecondSet;