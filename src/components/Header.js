import React from 'react';
import slava from '../img/slava.jpg'
import chub from '../img/chub.jfif'
import krutoy from '../img/krutoy.jpg'

function Header({ onLabChange }) {
  const labs  = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5', 'Lab 6', 'Lab 7', 'Lab 8', 'Lab 9'];

  return (
    <header className='header'>
      <div className='header__content'>
        <h1 className='header__title'>ЗВІТ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ "WEB-ОРІЄНТОВНІ ТЕХНОЛОГІЇ ОСНОВИ FRINTEND та BACKEND РОЗРОБОК"</h1>
        <h2 className='header__team'>Виконовці: <img className='header__img_item' src={slava}/> Амелін В. О. <img className='header__img_item' src={krutoy}/> Крутіков А. В. <img className='header__img_item' src={chub}/> Чуб М. Б.</h2>
      </div>
      <nav className="nav">
        <ul className="nav__content">
          {labs.map((lab, index) => (
            <li key={index} className="">
              <button className="nav__button" onClick={() => onLabChange(index)}>
                {lab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
