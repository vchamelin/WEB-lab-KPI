import React from 'react';

function Page6() {
  const context = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }
  `;
  return ( 
    <pre> 
      Універсальний селектор
      {context}

    </pre> 
  );
}

export default Page6;
