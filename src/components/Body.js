import React, { useState } from 'react';

// Lab 1
import Page1 from '../lab1/Page1';
import Page2 from '../lab1/Page2';
import Page3 from '../lab1/Page3';
import Page4 from '../lab1/Page4';
import Page5 from '../lab1/Page5';
import Page6 from '../lab1/Page6';

function Body({ lab }) {
  const [page, setPage] = useState(0);

  const labs = [
    { 
      name: 'Lab 1', 
      pages: [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />], 
      buttonNames: ['Тема, Мета, Місце розташування звітного HTML-документу', 'Опис предметного середовища', 'Зовнішній вигляд головної сторінки', 'HTML-код головної сторінки', 'ВИСНОВКИ'] 
    },  { 
      name: 'Lab 2', 
      pages: [<Page1 />, <Page2 />, <Page3 />], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },  { 
      name: 'Lab 3', 
      pages: [<Page1 />, <Page2 />, <Page3 />], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },  { 
      name: 'Lab 4', 
      pages: [<Page1 />, <Page2 />, <Page3 />], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },  { 
      name: 'Lab 5', 
      pages: [<Page1 />, <Page2 />, <Page3 />], 
      buttonNames: ['Button 1', 'Button 2', 'Button 3']  
    },
  ];
  

  const handlePageChange = (index) => {
    setPage(index);
  };

  const contentPage = (page) => {
    return <div>{page}</div>;
  }

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
      {contentPage(labs[lab].pages[page])}
    </div>
  );
}

export default Body;
