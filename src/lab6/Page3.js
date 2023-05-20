import React from 'react';
import img1 from './chub/1.png'
import img2 from './chub/2.png'

function Page3() {
  return ( 
    <div> 
      <h3>Test 1</h3>
      <p>
        Питання 1: In Visual Studio Code you can have multiple instances of a terminal.<br />
        Відповідь: True <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: _________________ provides interactive interface to the client to send http request.<br />
        Відповідь: Angular<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: Node.js is a minimal and flexible Express.js web application framework.<br />
        Відповідь: False<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: Which of the following resides on the server-side?<br />
        Відповідь: MongoDB<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: Client is like ____________.<br />
        Відповідь: Web browser<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img1}/>

      <h3>Test 2</h3>
      <p>
        Питання 1: Which of the following is a metadata file for all npm packages? <br />
        Відповідь: package.json <br />
        1 / 1 балл (Правильно) <br /><br /> 

        Питання 2: _______________ metadata in package.json describes the project.<br />
        Відповідь: Identifier<br />
        1 / 1 балл (Правильно) <br /><br />
        
        Питання 3: Which of the following is not a process involved in creating a node.js application?<br />
        Відповідь: Creating a database<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 4: A request method is passed to the request object.<br />
        Відповідь: True<br />
        1 / 1 балл  (Правильно) <br /><br />
        
        Питання 5: Event loop is a set of _________________ operations or phases that perform specific tasks.<br />
        Відповідь: 6<br />
        1 / 1 балл  (Правильно) <br /><br />
      </p>
      <img src={img2}/>
    </div> 
  );
}

export default Page3;
