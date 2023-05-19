import React from 'react';

function Page2() {
  const context = `
    Існує три основні способи включення стилів CSS в HTML:

    1. Вбудований CSS: Цей спосіб передбачає додавання CSS безпосередньо до тегів HTML за допомогою атрибута style.

      <p style="color: red; font-size: 20px;">This is a paragraph.</p>

    2. Внутрішній CSS (або вбудований CSS): Це означає розміщення CSS у тегах <style> у секції <head> HTML-документа.

      <!DOCTYPE html>
      <html>
      <head>
        <style>
          p {
            color: red;
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <p>This is a paragraph.</p>
      </body>
      </html>


    3. Зовнішній CSS: Це передбачає посилання на зовнішній CSS-файл за допомогою тегу <link> у секції <head> HTML-документа.

      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        <p>This is a paragraph.</p>
      </body>
      </html>

      І файл styles.css буде містити:
      p {
        color: red;
        font-size: 20px;
      }
    
    Кожен метод має свої особливості використання, і йому можна надавати перевагу в залежності від ситуації.
    - Вбудований CSS зазвичай використовується, коли вам потрібні певні стилі для одного елемента. Однак, він не рекомендується для великих проектів або коли вам потрібно стилізувати кілька елементів, оскільки це може призвести до повторення коду і проблем з обслуговуванням.
    - Внутрішній CSS корисний для невеликих проектів або коли вам потрібні стилі, які застосовуються лише до однієї HTML-сторінки.
    - Зовнішній CSS є найбільш часто використовуваним методом, особливо для великих проектів, оскільки він сприяє багаторазовому використанню і розділенню завдань. Він дозволяє написати всі стилі в одному або декількох окремих файлах, які потім можуть бути пов'язані з декількома HTML-сторінками. Це також полегшує обслуговування, оскільки зміни потрібно вносити лише в одному місці.
  `;

  return ( 
    <div>
      <pre>{context}</pre>
    </div>
  );
}

export default Page2;