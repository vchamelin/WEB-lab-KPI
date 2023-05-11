import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [lab, setLab] = useState(0);

  const handleLabChange = (index) => {
    setLab(index);
  };

  return (
    <div className="App">
      <Header onLabChange={handleLabChange} />
      <Body lab={lab} />
    </div>
  );
}

export default App;
