import React from 'react';

function Page7() {
  const styles = {
    table: {
      fontFamily: "'Courier New', monospace",
      fontSize: '95%',
      textAlign: 'center',
      borderCollapse: 'collapse',
      width: '100%',
      outlineStyle: 'dashed',
      outlineColor: 'purple',
    },
    th: {
      padding: '10px',
      backgroundColor: '#7e57c2',
      color: 'white',
    },
    td: {
      border: '2px solid #673ab7',
      padding: '10px',
    },
    trOdd: {
      backgroundColor: '#d1c4e9',
    },

    buttonHover: {
      backgroundColor: 'red',
    },
    button: {
      boxSizing: 'border-box',
      maxWidth: '150px',
      height: '70px',
      maxHeight: '70px',
      padding: '20px',
      fontFamily: "'Courier New', monospace",
      fontSize: '90%',
      lineHeight: '1.15',
      color: '#fff',
      cursor: 'pointer',
      backgroundColor: '#673ab7',
      borderWidth: '0',
      borderRadius: '6px',
      outline: 'none',
      boxSizing: 'border-box',
      boxShadow: "rgb(103 58 183 / 10%) 0 0 0 1px inset, rgb(103 58 183 / 10%) 0 2px 5px 0, rgb(0 0 0 / 7%) 0 1px 1px 0",
      appearance: 'button',
      backfaceVisibility: 'hidden',
    },
    
 
  };

  const codeTxt = `
    <div>
      <table id="students" class='table'>
        <tr>
          <th>Група</th>
          <th>Студент</th>
          <th>Контакт TG</th>
        </tr>
        <tr class="trOdd">
          <td style={styles.td}>ІП-05</td>
          <td style={styles.td}>Амелін В. О.</td>
          <td style={styles.td}>berlin1777</td>
        </tr>
        <tr>
          <td style={styles.td}>ІП-05</td>
          <td style={styles.td}>Крутіков А. В.</td>
          <td style={styles.td}>krytiCHOK</td>
        </tr>
        <tr class="trOdd">
          <td style={styles.td}>ІП-05</td>
          <td style={styles.td}>Чуб М. Б.</td>
          <td style={styles.td}>4i4a213</td>
        </tr>
      </table>
      <button onMouseOver={() => styles.button = styles.buttonHover} onMouseOut={() => styles.button = styles.button}>Увійти!</button>
    </div>
  `;

  const cssTxt = `
    table {
      font-family: "'Courier New', monospace";
      font-size: 95%;
      text-align: 'center';
      border-collapse: 'collapse';
      width: 100%;
      outline-style: 'dashed';
      outline-color: 'purple';
    }

    th {
      padding: 10px;
      background-color: '#7e57c2';
      color: 'white';
    }

    td {
      border: '2px solid #673ab7';
      padding: 10px;
    }

    .trOdd {
      background-color: '#d1c4e9';
    }

    button {
      boxSizing: 'border-box';
      max-width: 150px;
      max-height: 70px;
      height: 70px;
      padding: 20px;
      font-family: "'Courier New'; monospace";
      font-size: 90%;
      line-height: 1.15;
      color: '#fff';
      cursor: 'pointer';
      background-color: '#673ab7';
      border-width: 0;
      border-radius: 6px;
      outline: none;
      box-shadow: "rgb(103 58 183 / 10%) 0 0 0 1px inset, rgb(103 58 183 / 10%) 0 2px 5px 0, rgb(0 0 0 / 7%) 0 1px 1px 0";
      backface-visibility: 'hidden';
    }

  };`

  return (
    <div>
      <table id="students" class={styles.table}>
        <tr>
          <th style={styles.th}>Група</th>
          <th style={styles.th}>Студент</th>
          <th style={styles.th}>Контакт TG</th>
        </tr>
        <tr style={styles.trOdd}>
          <td style={styles.td}>ІП-05</td>
          <td style={styles.td}>Амелін В. О.</td>
          <td style={styles.td}>berlin1777</td>
        </tr>
        <tr>
          <td style={styles.td}>ІП-05</td>
          <td style={styles.td}>Крутіков А. В.</td>
          <td style={styles.td}>krytiCHOK</td>
        </tr>
        <tr style={styles.trOdd}>
          <td style={styles.td}>ІП-05</td>
          <td style={styles.td}>Чуб М. Б.</td>
          <td style={styles.td}>4i4a213</td>
        </tr>
      </table>
      <button style={styles.button} onMouseOver={() => styles.button = styles.buttonHover} onMouseOut={() => styles.button = styles.button}>Увійти!</button>
      <pre>
        HTML code:
        {codeTxt}
        
        Css code:
        {cssTxt}
      </pre>
    </div>
    
  );
} 

export default Page7;
