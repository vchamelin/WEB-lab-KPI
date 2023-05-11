import React from 'react';

function Header({ onLabChange  }) {
  const labs  = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5'];

  return (
    <header>
      <>
        <h1>ЗВІТ З ЛАБОРАТОРНИХ РОБІТ З ДИСЦИПЛІНИ "WEB-ОРІЄНТОВНІ ТЕХНОЛОГІЇ ОСНОВИ FRINTEND та BACKEND РОЗРОБОК"</h1>
        <h2>Виконовці: 
          <ul>
            <li>Амелін В. О.</li>
            <li>Крутіво А. В.</li>
            <li>Чуб М. (хз какое-отчество)</li>  
          </ul>
        </h2>
      </>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {labs.map((lab, index) => (
                <li key={index} className="nav-item">
                  <button className="btn btn-link nav-link" onClick={() => onLabChange(index)}>
                    {lab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
