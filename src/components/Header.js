import React from 'react';

function Header({ onContentChange }) {
  const elements = ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4', 'Lab 5'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {elements.map((element, index) => (
              <li key={index} className="nav-item">
                <button className="btn btn-link nav-link" onClick={() => onContentChange(index)}>
                  {element}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
