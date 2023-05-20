import React from "react";
import image1 from './KrutikovTask3/1.png';
import image2 from './KrutikovTask3/2.png';
import image3 from './KrutikovTask3/3.png';
import image4 from './KrutikovTask3/4.png';
import image5 from './KrutikovTask3/5.png';
import image6 from './KrutikovTask3/6.png';
import image7 from './KrutikovTask3/7.png';
import image8 from './KrutikovTask3/8.png';

const App = () => {
  return (
    <div className="">
    <div className="course">
    <h3>ПОПУЛЯРНІ НАПРЯМКИ</h3>
    <h2>КУРСІВ ПРОГРАМУВАННЯ</h2>
    <div className="container">
        <div className="good">
          <img src={image1} width="100px" height="100px" alt=""></img>
            <h4>javascript</h4>
            <h5>Комплексний курс</h5>
            <p>Стартовий рівень: початківець<br></br>
                Тривалість: 5-11 місяців<br></br>
                Ціна: від 14500грн.</p>
            <span>Залишилося 3 місця</span>
            <hr></hr>
            <a href="#">Детальніше</a>
        </div>

        <div className="good">
          <img src={image2}width="100px" height="100px" alt=""></img>
            <h4>javascript</h4>
            <h5>Комплексний курс</h5>
            <p>Стартовий рівень: початківець<br></br>
                Тривалість: 6-11 місяців<br></br>
                Ціна: від 14500грн.</p>
            <span>Залишилося 6 місця</span>
            <hr></hr>
            <a href="#">Детальніше</a>
        </div>
        <div className="good">
          <img src={image3} width="100px" height="100px" alt=""></img>
            <h4>javascript</h4>
            <h5>Комплексний курс</h5>
            <p>Стартовий рівень: початківець<br></br>
                Тривалість: 6-11 місяців<br></br>
                Ціна: від 14500грн.</p>
            <span>Залишилося 4 місця</span>
            <hr></hr>
            <a href="#">Детальніше</a>
        </div>
        </div>
    </div>

    <div className="wrapper_item">
      <img src={image4}alt=""></img>
      <img src={image5}alt=""></img>
      <img src={image6}alt=""></img>
      <img src={image7}alt=""></img>
    </div>

    <div className="wrapper_pro">
    <img src={image8}alt=""></img>
    <h3>ВІД НОВАЧКА ДО PRO-РОЗРОБНИКА</h3>
    <p className="pro_txt">Робота в ІТ - це високі зарплати, можливість
        віддаленої співпраці із закордонними компаніями і
        свобода вибору. Але є мінуси. Низький старт -
        головний з них. Фахівцю без досвіду складно
        отримати робочий стаж, а зарплата коливається на
        рівні мінімальної.<br></br>
        Накурсахз інкубатором наші студенти
        отримують додаткових 5 місяців досвіду
        який так сильно вимагають  роботодааці.<br></br>
        Зттаким резюме ви станете бажаним
        кандидатом для будь-якої компанії.</p>
    </div>

    <footer>
      <p className="footer_desc">НАВЧАЙСЯ ЗАРАЗ, СПЛАЧУЙ ПОТІМ 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>РОЗТЕРМІНУВАННЯ НА 24 МІСЯЦІ</span></p>
    </footer>
    </div>
  );
};

export default App;
