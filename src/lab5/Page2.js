import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';

function Page2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const sliderRef = useRef();

  useEffect(() => {
    // Date Picker
    $("#datepicker").datepicker();

    // Slider
    $(sliderRef.current).slider({
      range: "min",
      value: sliderValue,
      min: 0,
      max: 100,
      slide: function (event, ui) {
        setSliderValue(ui.value);
      }
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <p>Slider:</p>
      <div id="slider">
        <div ref={sliderRef} style={{margin: '10px', height: '20px', backgroundColor: '#ddd'}}></div>
        <p>Slider Value: {sliderValue}</p>
      </div>

      <p>Menu:</p>
      <button className="dropdown-toggle" onClick={toggleMenu}>Меню</button>
      <ul className="dropdown-menu" style={{display: menuOpen ? "block" : "none"}}>
        <li><a href="#">Пункт 1</a></li>
        <li><a href="#">Пункт 2</a></li>
        <li><a href="#">Пункт 3</a></li>
      </ul>

      <p>Date Picker:</p>
      <input type="text" id="datepicker" />
    </div>
  );
}

export default Page2;
