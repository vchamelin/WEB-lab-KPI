import React from 'react';
import lab3 from '../img/lab3.jpg'

function Page2() {
  const codeTxt = `
    <html lang="X-UA-Compatible"><head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Delivery</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet">
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/animate.css">
      <link rel="stylesheet" href="css/normalize.css">
    </head>

      <body cz-shortcut-listen="true">
          <div class="container">
              <header class="header">
                  <a href="index.html" class="logo">
                      <img src="img\logo.svg" alt="Logo">
                  </a>
                  <input type="text" class="input input-adress" placeholder="Aдрес доставки">
                  <div class="buttons">
                      <button class="button button-primary">
                          <img src="img/user.svg" alt="user" class="button-icon">
                          <span class="button-text">Увійти</span>
                      </button>

                      <button class="button" id="cart-button">
                          <img src="img/shopping-cart.svg" alt="shopping cart" class="button-icon">
                          <span class="button-text">Кошик</span>
                      </button>
                  </div>
              </header>
          </div>
          <main class="main">
              <div class="container">
                  <section class="promo">
                      <h1 class="promo-title">Онлайн-сервіс <br> доставка їжі до вашого дому</h1>
                      <p class="promo-text">Страви з любимого ресторану привезе кур'єр в перчатках, масці і з антисептиком</p>
                  </section>
                      
                  <section class="restaurants">
                      <div class="section-heading">
                          <h2 class="section-title">Ресторани</h2>
                          <input type="text" class="input input-search" placeholder="Пошук страв і ресторанів">
                      </div>
                                      
                      <div class="cards">
                          <a href="pizzaPlus.html" class="card animate__ animate__fadeInUp wow animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                              <img src="img/image-1.png" alt="image" class="card-image">
                              <div class="card-text">
                                  <div class="card-heading">
                                      <h3 class="card-title">Піца плюс</h3>
                                      <span class="card-tag tag">50 хв</span>
                                  </div>
                                  <div class="card-info">
                                      <div class="rating">
                                          <img src="img/rating.svg" alt="image" class="rating-star"> 4.8
                                      </div>
                                      <div class="price">Від 160₴</div>
                                      <div class="category">Піца</div>
                                  </div>
                              </div>
                          </a>
                          <a href="tanuki.html" class="card animate__ animate__fadeInUp wow animated" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"> 
                              <img src="img/image-2.png" alt="image" class="card-image">
                              <div class="card-text">
                                  <div class="card-heading">
                                      <h3 class="card-title">Танукі</h3>
                                      <span class="card-tag tag">45 хв</span>
                                  </div>
                                  <div class="card-info">
                                      <div class="rating">
                                          <img src="img/rating.svg" alt="image" class="rating-star">
                                          4.8
                                      </div>
                                      <div class="price">Від 300₴</div>
                                      <div class="category">Суші, Роли</div>
                                  </div>
                              </div>
                          </a>
          
                          <a href="foodband.html" class="card animate__ animate__fadeInUp wow animated" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                              <img src="img/image-3.png" alt="image" class="card-image">
                              <div class="card-text">
                                  <div class="card-heading">
                                      <h3 class="card-title">FoodBand</h3>
                                      <span class="card-tag tag">50 хв</span>
                                  </div>
                                  <div class="card-info">
                                      <div class="rating">
                                          <img src="img/rating.svg" alt="image" class="rating-star">
                                          4.5
                                      </div>
                                      <div class="price">Від 400₴</div>
                                      <div class="category">Піца</div>
                                  </div>
                              </div>
                          </a>
                          <a href="story.html" class="card animate__ animate__fadeInUp wow animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                              <img src="img/image-4.png" alt="image" class="card-image">
                              <div class="card-text">
                                  <div class="card-heading">
                                      <h3 class="card-title">Story</h3>
                                      <span class="card-tag tag">50 хв</span>
                                  </div>
                                  <div class="card-info">
                                      <div class="rating">
                                          <img src="img/rating.svg" alt="image" class="rating-star">
                                          4.5
                                      </div>
                                      <div class="price">Від 400₴</div>
                                      <div class="category">Піца</div>
                                  </div>
                              </div>
                          </a>
                          <a href="eatPlace.html" class="card animate__ animate__fadeInUp wow animated" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                              <img src="img/image-5.png" alt="image" class="card-image">
                              <div class="card-text">
                                  <div class="card-heading">
                                      <h3 class="card-title">Точка їжі</h3>
                                      <span class="card-tag tag">50 хв</span>
                                  </div>
                                  <div class="card-info">
                                      <div class="rating">
                                          <img src="img/rating.svg" alt="image" class="rating-star">
                                          4.5
                                      </div>
                                      <div class="price">Від 400₴</div>
                                      <div class="category">Піца</div>
                                  </div>
                              </div>
                          </a>
          
                          <a href="pizzaBurger.html" class="card animate__ animate__fadeInUp wow animated" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                              <img src="img/image-6.png" alt="image" class="card-image">
                              <div class="card-text">
                                  <div class="card-heading">
                                      <h3 class="card-title">PizzaBurger</h3>
                                      <span class="card-tag tag">50 хв</span>
                                  </div>
                                  <div class="card-info">
                                      <div class="rating">
                                          <img src="img/rating.svg" alt="image" class="rating-star">
                                          4.5
                                      </div>
                                      <div class="price">Від 400₴</div>
                                      <div class="category">Піца</div>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </section>
              </div>
          </main>

          <footer class="footer">
              <div class="container">
                  <div class="footer-block">
                      <img src="img/logo.svg" alt="logo" class="logo footer-logo">
                      <nav class="footer-nav">
                          <a href="#" class="footer-link">Ресторанам</a>
                          <a href="#" class="footer-link">Кур'єрам</a>
                          <a href="#" class="footer-link">Пресс-центр</a>
                          <a href="#" class="footer-link">Контакти</a>
                      </nav>
                      <div class="social-links">
                          <a href="#" class="social-link"><img src="img/instagram.svg" alt="instagram"></a>
                          <a href="#" class="social-link"><img src="img/facebook.svg" alt="facebook"></a>
                          <a href="#" class="social-link"><img src="img/twitter.svg " width="25px" alt="twitter"></a>
                      </div>
                  </div>
              </div>
          </footer>

          <div class="modal">
              <div class="modal-dialog">
                  <div class="modal-header">
                      <h3 class="modal-title">Кошик</h3>
                      <button class="close">×</button>
                  </div>
                  <div class="modal-body">
                      <div class="food-row">
                          <span class="food-name">Суші Унагі</span>
                          <strong class="food-price">75₴</strong>
                          <div class="food-counter">
                              <button class="counter-button">-</button>
                              <span class="counter">8</span>
                              <button class="counter-button">+</button>
                          </div>
                      </div>
                      <div class="food-row">
                          <span class="food-name">Суші Ебі</span>
                          <strong class="food-price">60₴</strong>
                          <div class="food-counter">
                              <button class="counter-button">-</button>
                              <span class="counter">7</span>
                              <button class="counter-button">+</button>
                          </div>
                      </div>
                      <div class="food-row">
                          <span class="food-name">Рол Філадельфія</span>
                          <strong class="food-price">295₴</strong>
                          <div class="food-counter">
                              <button class="counter-button">-</button>
                              <span class="counter">4</span>
                              <button class="counter-button">+</button>
                          </div>
                      </div>
                      <div class="food-row">
                          <span class="food-name">Рол Золоте Руно</span>
                          <strong class="food-price">435</strong>
                          <div class="food-counter">
                              <button class="counter-button">-</button>
                              <span class="counter">4</span>
                              <button class="counter-button">+</button>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <span class="modal-pricetag">3840₴</span>
                      <div class="footer-buttons">
                          <button class="button button-primary">Оформити замовлення</button>
                          <button class="button">Скасувати</button>
                      </div>
                  </div>
              </div>
          </div>
      </body></html>
    `;


  return ( 
    <div>
     <h3>Зовнішній вигляд розробленого застосунку</h3>
     <img src={lab3}/>

     <pre>
        {codeTxt}
     </pre>
    </div>
  );
}

export default Page2;
