import React, { useState } from 'react';
import Content from './Content';

function Body({ lab }) {
  const [page, setPage] = useState(0);

  const labs = [
    { 
      name: 'Lab 1', 
      pages: ['Page 1', 'Page 2', 'Page 3'], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3'] 
    },  { 
      name: 'Lab 3', 
      pages: ['Page 1', 'Page 2', 'Page 3'], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },  { 
      name: 'Lab 4', 
      pages: ['Page 1', 'Page 2', 'Page 3'], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },  { 
      name: 'Lab 5', 
      pages: ['Page 1', 'Page 2', 'Page 3'], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },  { 
      name: 'Lab 2', 
      pages: ['Page 1', 'Page 2', 'Page 3'], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },
  ];
  

  const handlePageChange = (index) => {
    setPage(index);
  };

  return (
    <div className="container mt-4">
      <h2>{labs[lab].name}</h2>
      <div className="btn-group" role="group">
        {labs[lab].buttonNames.map((buttonName, index) => (
          <button key={index} type="button" className="btn btn-primary" onClick={() => handlePageChange(index)}>
            {buttonName}
          </button>
        ))}
      </div>
      <Content page={labs[lab].pages[page]} />
    </div>
  );
  
}

export default Body;
