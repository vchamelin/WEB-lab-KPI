import React from 'react';

function Page3() {
  const styleBtn = {
    padding: '10px 20px',
    backgroundColor: 'lightskyblue',
    borderRadius: '10px',
    border: 'none',
  }

  const btn = (<button type="button" style={styleBtn}>Увійти!</button>);

  const context = `
    Програмний HTML-код:
    '<button type="button" style={styleBtn}>Увійти!</button>'

    CCS-код:
    {padding: '10px 20px', backgroundColor: 'lightskyblue', borderRadius: '10px', border: 'none'}
  `;

  return (
    <div>
      <pre>
        {context}
      </pre>

      Резултат виконання:
      {btn}
    </div>
  );
}

export default Page3;
