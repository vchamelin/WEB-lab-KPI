import React, { useState, useEffect, Suspense } from 'react';
import '../css/style.css';

const loadPage = (labNumber, pageNumber) => {
  return React.lazy(() => import(`../lab${labNumber}/Page${pageNumber}`));
}

function Body({ lab }) {
  const [page, setPage] = useState(0);

  const [Page, setPageComponent] = useState(null);
  
  useEffect(() => {
    setPageComponent(loadPage(lab + 1, page + 1));
  }, [lab, page]);

  const handlePageChange = (index) => {
    setPage(index);
  };

  const labs = [
    { name: 'Lab 1', buttonNames: ['Тема, Мета, Місце розташування звітного HTML-документу', 'Опис предметного середовища', 'Зовнішній вигляд головної сторінки', 'HTML-код головної сторінки', 'ВИСНОВКИ'] },
    { name: 'Lab 2', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 3', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 4', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 5', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 6', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 7', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 8', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 9', buttonNames: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'] },
  ];
  
  return (
    <div className="body__wrapper">
      <div className='body__aside'>
        <h2>{labs[lab].name}</h2>
        <div className="body__task" role="group">
          {labs[lab].buttonNames.map((buttonName, index) => (
            <button key={index} type="button" className="body__button" onClick={() => handlePageChange(index)}>
              {buttonName}
            </button>
          ))}
        </div>
      </div>
      <div className='body__content'>
        <Suspense fallback={<div>Loading...</div>}>
          {Page && <Page />}
        </Suspense>
      </div>
    </div>
  );
}

export default Body;
