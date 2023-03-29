import React, { useState } from 'react';
import Content from './Content';

function Body({ content }) {
  const [state, setState] = useState(0);

  const handleStateChange = (index) => {
    setState(index);
  };

  return (
    <div className="container mt-4">
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary" onClick={() => handleStateChange(0)}>State 1</button>
        <button type="button" className="btn btn-primary" onClick={() => handleStateChange(1)}>State 2</button>
        <button type="button" className="btn btn-primary" onClick={() => handleStateChange(2)}>State 3</button>
      </div>
      <Content content={content} state={state} />
    </div>
  );
}

export default Body;
