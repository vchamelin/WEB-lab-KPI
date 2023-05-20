import React from 'react';
import img1 from './social.png'
function Page3() {
  const code = `
  <div class="social-links">
    <a href="#" class="social-link"><img src="img/instagram.svg" alt="instagram" /></a>
    <a href="#" class="social-link"><img src="img/facebook.svg" alt="facebook" /></a>
    <a href="#" class="social-link"><img src="img/twitter.svg " width="25px" alt="twitter" /></a>
  </div>
  `;
  
  return (  
    <pre>
      <img src={img1}/>
      <pre>
        {code}
      </pre>
    </pre>
  );
}

export default Page3;
