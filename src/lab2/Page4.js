import React from 'react';

function Page4() {
    const styles = {
      body: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F5F5F5",
      },
      highlight: {
        color: "#FF6347",
        fontWeight: "bold",
      },
      content: {
        width: "80%",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#4285f4",
        borderRadius: "8px",
      },
      universal: {
        boxSizing: "border-box",
      },
      child: {
        color: "#696969",
      },
      sibling: {
        fontSize: "18px",
      },
      table: {
        padding: "10px",
        textAlign: "center",
        border: "1px solid #DDD",
      },
    };

    const contextStyles = `
      body {
        font-family: Arial, sans-serif;
        background-color: #F5F5F5;
      }
      
      .highlight {
        color: #FF6347;
        font-weight: bold;
      }
      
      .content {
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: #FFFFFF;
        border-radius: 8px;
      }
      
      a[target="_blank"] {
        text-decoration: none;
        color: #008B8B;
      }
      
      * {
        box-sizing: border-box;
      }
      
      div > p {
        color: #696969;
      }
      
      h1 + p {
        font-size: 18px;
      }
      
      table td {
        padding: 10px;
        text-align: center;
        border: 1px solid #DDD;
      }
    `;

    const contextCode = `
      <div class="content">
        <h1 class="highlight">Welcome to Our Food Delivery Service</h1>
        <p class="pStyle">We offer quick and reliable food delivery right to your doorstep.</p>
        <p>Check out our popular cuisines:</p>
        <table>
          <tr>
            <td>Italian</td>
            <td>Chinese</td>
            <td>Mexican</td>
          </tr>
        </table>
        <p>Visit our <a href="http://example.com" target="_blank">website</a> for more information.</p>
      </div>
    `;

    const code = (
        <div style={styles.content}>
            <h1 style={styles.highlight}>Welcome to Our Food Delivery Service</h1>
            <p style={styles.sibling}>We offer quick and reliable food delivery right to your doorstep.</p>
            <p style={styles.child}>Check out our popular cuisines:</p>
            <table>
                <tbody>
                    <tr>
                    <td style={styles.table}>Italian</td>
                    <td style={styles.table}>Chinese</td>
                    <td style={styles.table}>Mexican</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

    return (
        <div>
            <pre>
                Програмний HTML-код:
                {contextCode}

                CCS-код: 
                {contextStyles}

                Відображення елемента:
                {code}
            </pre>
        </div>
    )
}

export default Page4;



