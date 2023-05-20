import React from 'react';
import week_two_1 from '../img/krutikov_week2_1.jpg'
import week_two_2 from '../img/krutikov_week2_2.jpg'

function Page2() {
  return ( 
    <div>
      <h2>Test 1</h2>
      <img className='tests' src={week_two_1} />
      <br></br>
      <br></br>
      <h2>Test 2</h2>
      <img className='tests' src={week_two_2} />
    </div>
  );
}

export default Page2;
