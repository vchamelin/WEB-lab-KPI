import React from 'react';
import week_three_1 from '../img/krutikov_week3_1.jpg'
import week_three_2 from '../img/krutikov_week3_2.jpg'

function Page2() {
  return ( 
    <div>
      <h2>Test 3</h2>
      <img className='tests' src={week_three_1} />
      <br></br>
      <br></br>
      <h2>Test 2</h2>
      <img className='tests' src={week_three_2} />
    </div>
  );
}

export default Page2;