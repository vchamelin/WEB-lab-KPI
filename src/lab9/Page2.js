import React from 'react';
import week_four_1 from '../img/krutikov_week4_1.jpg'
import week_four_2 from '../img/krutikov_week4_2.jpg'
import result from '../img/krutikov_result.jpg'

function Page2() {
  return ( 
    <div>
      <h2>Test 1</h2>
      <img className='tests' src={week_four_1} />
      <br></br>
      <br></br>
      <h2>Test 2</h2>
      <img className='tests' src={week_four_2} />
      <br></br>
      <br></br>
      <h2><a href='https://www.coursera.org/account/accomplishments/certificate/A7LX7DUG4LDL'>Сертифікат</a></h2>
      <img className='tests' src={result} />
    </div>
  );
}

export default Page2;
