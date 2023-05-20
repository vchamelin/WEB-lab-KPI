import React from 'react';
import week_one_1 from '../img/krutikov_week1_1.jpg'
import week_one_2 from '../img/krutikov_week1_2.jpg'

function Page2() {
  return ( 
    <div>
      <h2>Test 1</h2>
      <img className='tests' src={week_one_1} />
      <br></br>
      <br></br>
      <h2>Test 2</h2>
      <img className='tests' src={week_one_2} />
    </div>
  );
}

export default Page2;
