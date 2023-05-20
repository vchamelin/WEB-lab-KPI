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
    { name: 'Lab 2', buttonNames: ['Тема, Мета, Місце розташування звітного HTML-документу', 'Способи підключення стилів', 'Селектори елементів', 'Селектори класів', 'Селектори ідентифікаторів', 'Інші селектори', 'CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки', 'Висновки'] },
    { name: 'Lab 3', buttonNames: ['Тема, Мета, Місце розташування звітного HTML-документу', 'Завдання №1', 'Завдання №2', 'Задание №3 Амелін В. О. ', 'Задание №3 Крутіков А. В.', 'Задание №3 Чуб М. Б.', 'Висновок'] },
    { name: 'Lab 4', buttonNames: ['Тема й мета. Місце розташування сайту', 'Задание №1 Амелін В. О. ', 'Задание №1 Крутіков А. В.', 'Задание №1 Чуб М. Б.', 'Задание №2 Амелін В. О. ', 'Задание №2 Крутіков А. В.', 'Задание №2 Чуб М. Б.', 'Висновки'] },
    { name: 'Lab 5', buttonNames: ['Тема й мета. Місце розташування сайту', 'Динамічні елементи 3 пункту', 'Button 3', 'Button 4', 'Button 5'] },
    { name: 'Lab 6', buttonNames: ['Неділя №1 Амелін В. О. ', 'Неділя №1 Крутіков А. В.', 'Неділя №1 Чуб М. Б.'] },
    { name: 'Lab 7', buttonNames: ['Неділя №2 Амелін В. О. ', 'Неділя №2 Крутіков А. В.', 'Неділя №2 Чуб М. Б.'] },
    { name: 'Lab 8', buttonNames: ['Неділя №3 Амелін В. О. ', 'Неділя №3 Крутіков А. В.', 'Неділя №3 Чуб М. Б.'] },
    { name: 'Lab 9', buttonNames: ['Неділя №4 Амелін В. О. ', 'Неділя №4 Крутіков А. В.', 'Неділя №4 Чуб М. Б.'] },
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
