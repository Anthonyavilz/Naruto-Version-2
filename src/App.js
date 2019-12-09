import React from 'react';
import Home from './Components/Home';
import FirstSet from './Components/HandSigns/FirstSet';
import SecondSet from './Components/HandSigns/SecondSet';

function App() {
  return (
    <div className="App">
      <FirstSet />
      <Home />
      <SecondSet />
    </div>
  );
}

export default App;
