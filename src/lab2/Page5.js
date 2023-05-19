import React from 'react';

function Page5() {
  const contextStyles = `
    body: {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }

    .search-container {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 50px 0;
    }

    #search-bar {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
  `;
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
    },
    searchContainer: {
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '50px 0',
    },
    searchBar: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
  };

  const code = (
    <div style={styles.body}>
      <div style={styles.searchContainer}>
        <input type="text" style={styles.searchBar} placeholder="Search..."/>
      </div>
    </div>
  );

  const contextCode = `
    <div class="search-container">
      <input type="text" id="search-bar" placeholder="Search..."/>
    </div>
  `;

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
    );
}

export default Page5;
