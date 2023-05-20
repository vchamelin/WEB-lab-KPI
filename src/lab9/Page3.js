import React from 'react';
import img1 from './chub/1.png'
import img2 from './chub/2.png'
import img3 from './chub/3.png'

function Page3() {
  return ( 
    <div> 
      <h3>Test 4</h3>
      <p>
        Питання 1: If we’re using an attribute for a validation, Angular will know about that, and if the field is valid, ________________ will be a class name on that input field.<br />
        Відпоідь: ng-valid <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: The reactive forms are unstructured and immutable while the template-driven forms are structured and immutable.<br />
        Відпоідь: False<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: Which of the following is suitable for large or complex forms?<br />
        Відпоідь: Template-driven<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: _____ and ______ are the two design approaches for web forms in Angular.<br />
        Відпоідь: Template-driven, Reactive<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: Which of the following is suitable for small or simple forms?<br />
        Відпоідь: Template-driven<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img1} />

      <h3>Test 2</h3>
      <p>
        Питання 1: DI stands for___________________. <br />
        Відпоідь: Dependency Injection <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: GET represents the _____________ in CRUD acronym<br />
        Відпоідь: R<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: PUT service is used to insert data into databases.<br />
        Відпоідь: False<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: PUT represents the _____________ in CRUD acronym. <br />
        Відпоідь: U<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: DELETE represents the ________________ in CRUD.<br />
        Відпоідь: D<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img2} />

      <h3>Сертіфікат</h3>
      <img src={img3} />
    </div> 
  );
}

export default Page3;
