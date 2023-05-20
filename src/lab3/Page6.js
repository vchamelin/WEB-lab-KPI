import React from 'react';
import '../css/chub3.css';
import img1 from './ChubTask3/1.png';
import img2 from './ChubTask3/2.png';
import img3 from './ChubTask3/3.png';
import img4 from './ChubTask3/4.png';
import img5 from './ChubTask3/5.png';
import img6 from './ChubTask3/6.png';
import img7 from './ChubTask3/7.png';
import img8 from './ChubTask3/8.png';
import img9 from './ChubTask3/9.png';
import img10 from './ChubTask3/10.png';
import img11 from './ChubTask3/11.png';
import img12 from './ChubTask3/12.png';

function Page6() {
  return <div className='chub_wrapper'>
    <main className='chub_main'>
      <div className='chub_main__img'>
        <img className='chub_main__thing_img' alt='' src={img1}/>
      </div>
      <div className='chub_main__aside'>
        <p className='chub_main__title'>HTML i CSS Професійний курс частина 1</p>
        <div className='chub_main__price'>
          <p className='chub_main__oldprice'><s>1190 грн</s></p>
          <p className='chub_main__newprice'>390 грн</p>
        </div>
        <p className='chub_main__save'>Ви економите: <strong>800 грн</strong> (67%)</p>
        <p className='chub_main__time'>Покваптеся! Закінчуєтся через 1 день 12 часов 03 мин 38 сек</p>
        <p className='chub_main__desciption'>Відео запис курсу HTML i CSS. На цьому курсі ви навчитеся робити справжні проекти, такі ж за рівнем складності, як в індустрії. І будете робити їх правильно, щоб після навчання видавати резульатат виского рівня, за який компанії готові платити.</p>
        <button className='chub_main__buy'>Купити →</button>
        <div className='chub_main__things'>
          <div className='chub_main__thing'>
            <img className='chub_main__thing_img' alt='' src={img2}/>
            <p className='chub_main__thing_p'>Безпечні платежі</p>
          </div>
          <div className='chub_main__thing'>
            <img className='chub_main__thing_img' alt='' src={img3}/>
            <p className='chub_main__thing_p'>Захист персональних даних</p>
          </div>
          <div className='chub_main__thing'>
            <img className='chub_main__thing_img' alt='' src={img4}/>
            <p className='chub_main__thing_p'>100% унікальні матеріали</p>
          </div>
          <div className='chub_main__thing'>
            <img className='chub_main__thing_img' alt='' src={img5}/>
            <p className='chub_main__thing_p'>Гарантія кращої ціни</p>
          </div>
        </div>
      </div>
    </main>
    <div className='chub_more'>
      <p className='chub_more__label'>Похожие товары</p>
      <div className='chub_more__table'>
        <div className='chub_more__item'>
          <img className='chub_more__img' alt='' src={img6}/>
          <p className='chub_more__text'>
            Linux с нуля - видеокурс <br />
            <s>1.150 грн</s> 390 грн
          </p>
        </div>
        <div className='chub_more__item'>
          <img className='chub_more__img' alt='' src={img7}/>
          <p className='chub_more__text'>
            Удаленное администрирование серверов Windows <br />
            <s>790 грн</s> 290 грн
          </p>
        </div>
        <div className='chub_more__item'>
          <img className='chub_more__img' alt='' src={img8}/>
          <p className='chub_more__text'>
            Курс Angular 8 <br />
            <s>1.150 грн</s> 390 грн
          </p>
        </div>
        <div className='chub_more__item'>
          <img className='chub_more__img' alt='' src={img9}/>
          <p className='chub_more__text'>
            Видео курс системного администратора <br />
            <button>Купить</button>
          </p>
        </div>
      </div>
      <hr />
    </div>
    <footer className='chub_footer'>
      <div className='chub_footer__section'>
        <div className='chub_footer__title'>
          <p>Допомога</p>
          <hr />
        </div>
        <p>Довідка</p>
        <p>Конфіденційність</p>
        <p>Умови використання</p>
      </div>
      <div className='chub_footer__section'>
        <div className='chub_footer__title'>
          <p>Зв'язатись з  нами</p>
          <hr />
        </div>
        <img className='chub_more__img' alt='' src={img10}/>
      </div>
      <div className='chub_footer__section'>
        <div className='chub_footer__title'>
          <p>Наші партнери</p>
          <hr />
        </div>
        <img className='chub_more__img' alt='' src={img11}/>
      </div>
      <div className='chub_footer__section'>
        <div className='chub_footer__title'>
          <p>Безпечні платежі</p>
          <hr />
        </div>
        <img className='chub_more__img' alt='' src={img12}/>
        <p>Всі операції на нашому сайті безпечні і проходять з викорисатання шифрованого SSL</p>
      </div>
    </footer>
    </div>;
}

export default Page6;
