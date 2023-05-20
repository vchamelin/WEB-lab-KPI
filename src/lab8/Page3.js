import React from 'react';
import img1 from './chub/1.png'
import img2 from './chub/2.png'

function Page3() {

  return ( 
    <div> 
      <h3>Test 3</h3>
      <p>
        Питання 1: This function lets you delete multiple files at once.<br />
        Відпоідь: deleteMany() <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: If no document matches the given filter query for ‘findOneandDelete()’, then this method returns ‘0’.<br />
        Відпоідь: False<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: Which of the following properties are returned by deleteMany()?<br />
        Відпоідь: (ok, deletedCount, n)<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: You can read documents using _______________ function.<br />
        Відпоідь: Find<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: _______________ is a scalable API testing tool that quickly integrates into CI/CD pipeline.<br />
        Відпоідь: CRUD<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img1}/>

      <h3>Test 2</h3>
      <p>
        Питання 1: Angular uses _________________ to communicate to servers. <br />
        Відпоідь: HttpClient <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: ngForOf is a structural directive for rendering items in a collection.<br />
        Відпоідь: True<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: Select a correct syntax of ngif.<br />
        Відпоідь: {'<div*ngif=”condition”>Content</div>'}<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: Which of the following adds or removes an anchor element to or from the DOM?<br />
        Відпоідь: Ngif<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: The flow from source-to-view-to-source is known as direct binding.<br />
        Відпоідь: False<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img2}/>
    </div> 
  );
}

export default Page3;
