import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [content, setContent] = useState(0);

  const handleContentChange = (index) => {
    setContent(index);
  };

  return (
    <div className="App">
      <Header onContentChange={handleContentChange} />
      <Body content={content} />
    </div>
  );
}

export default App;