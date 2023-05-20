import React from 'react';
import img1 from './chub/1.png'
import img2 from './chub/2.png'

function Page3() {
  return ( 
    <div> 
      <h3>Test 2</h3>
      <p>
        Питання 1: API stands for:<br />
        Відповідь: Application Programming Interface <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: What is a REST API?<br />
        Відповідь:  A mechanism or a set of rules for how software or systems transfer data over the web.<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: Middleware is basically a function that receives the Request and Response objects.<br />
        Відповідь: True<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: Which of the following is not a template engine?<br />
        Відповідь: Jade<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: _______________ is a design pattern created for developing applications specifically web applications.<br />
        Відповідь: MVC<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img1}/>

      <h3>Test 2</h3>
      <p>
        Питання 1: The MongoDB data is stored in _____format.<br />
        Відповідь: BSON <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: Which of the following is not a MongoDB object?<br />
        Відповідь: File<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: The database is a virtual container for collections.<br />
        Відповідь: True<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: Which of the following is not a collection method?<br />
        Відповідь: edit()<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: ______________ helps in creating a connection to MongoDB instance.<br />
        Відповідь: MongoDB Compass<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img2}/>
    </div> 
  );
}

export default Page3;
