import React from 'react';

function Header({ onContentChange }) {
  const elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5', 'Element 6', 'Element 7', 'Element 8'];

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
