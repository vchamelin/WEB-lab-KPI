import React from "react";
import image1 from './AmelinTask3/image1.png'
import image2 from './AmelinTask3/image2.png';
import image3 from './AmelinTask3/image3.png';
import image4 from './AmelinTask3/image4.png';
import image5 from './AmelinTask3/image5.png';
import image6 from './AmelinTask3/image6.png';
import image7 from './AmelinTask3/image7.png';
import image8 from './AmelinTask3/image8.png';

const App = () => {
  return (
    <div style={{ fontFamily: 'Garamond', backgroundColor: '#cccccc' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        
      }}>
        <h3 style={{ width: '10%', textAlign: 'center', backgroundColor: 'black', color: "white"}}>Форми навчання</h3>
        <h3 style={{ width: '10%', textAlign: 'center', backgroundColor: 'black', color: "white" }}>Заходи</h3>
        <h3 style={{ width: '10%', textAlign: 'center', backgroundColor: 'black', color: "white" }}>Про Академію</h3>
        <h3 style={{ width: '10%', textAlign: 'center', backgroundColor: 'black', color: "white" }}>Контакти</h3>
        <h3 style={{ width: '10%', textAlign: 'center', backgroundColor: 'black', color: "white", padding: '0 100px'}}>Київ</h3>
      </div>
      <h3 style={{ textAlign: 'center' }}><b>Для кого розроблена програма</b></h3>
      <table>
        <tr>
          <td class="example" style={{ textAlign: 'center', backgroundColor: 'white'}}> 
            <b>Школярі та випускники (15-18 років)</b><br /><br /> отримають першу професію, не відкладаючи на потім свою мрію стати програмістом.<br />
            <img src={image1} alt="A photo" style={{width:"100%"}} />
          </td>
          <td class="example" style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <img src={image2} alt="A photo" style={{width:"100%"}} />
            <b>Студенти ВНЗ (18-23 роки)</b><br /><br /> освоять другу спеціальність паралельно з університетською освітою.<br />
          </td>
          <td class="example" style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <b>Представники інших професій (23-55 років)</b><br /><br /> яких не влаштовує поточна кар'єрна і фінансова перспектива, зможуть перевчитися на розробника ПЗ і отримати затребувану професію.<br />
            <img src={image3} alt="A photo" style={{width:"100%"}} />
          </td>
          <td class="example" style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <img src={image4} alt="A photo" style={{width:"100%"}} />
            <b>Всі бажаючі підвищити ІТ-кваліфікацію</b><br /><br /> систематизують свої знання і отримають робочі навички, затребувані сучасномуquote("import React from \"react\";\n\nconst", "затребувані сучасному")
            ІТ.<br />
          </td>
        </tr>
      </table>
      <h1 style={{ textAlign: 'center' }}><b>Як проходить навчання</b></h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(226, 226, 226)',
      }}>
        <img src={image5} alt="Photo 5" style={{ width: '25%', display: 'block', margin: '0 auto' }} />
        <img src={image6} alt="Photo 6" style={{ width: '25%', display: 'block', margin: '0 auto' }} />
        <img src={image7} alt="Photo 7" style={{ width: '25%', display: 'block', margin: '0 auto' }} />
      </div>
      <h2 style={{ textAlign: 'center' }}><b>Партнери Академії</b></h2>
      <div style={{display: 'flex', padding: '10px'}}>
        <img src={image8} alt="Photo 8" style={{ width: '40%' }} />
        <div style={{ width: '55%', padding: '10px' }}>
          <h3>Luxoft</h3>
          Luxoft - глобальна технологічна компанія,  одна із лідерів на ринку послуг цифрової трансформації та створення програмних продуктів. Luxoft пропонує індивідуальні ІТ-рішення, які заохочують до змін у бізнесах клієнтів у всьому світі.<br /><br />
          Luxoft об'єднує понад 13000 спеціалістів із 22 країн світу зі штаб-квартирою у м. Цуг, Швейцарія. Україна є однією з найпотужніших локацій в географії Luxoft. Близько 3500 фахівців усіх ключових напрямків зосереджені в офісах Києва, Одеси і Дніпра.
        </div>
      </div>
    </div>
  );
};

export default App;
