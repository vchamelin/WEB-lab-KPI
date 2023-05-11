import React from 'react';
import Page1 from '../pages-lab1/Page1';
import Page2 from '../pages-lab1/Page2';
import Page3 from '../pages-lab1/Page3';
// Import more pages as needed

function Content({ page }) {
  const pages = {
    'Page 1': <Page1 />,
    'Page 2': <Page2 />,
    'Page 3': <Page3 />,
    // Add more pages as needed
  };

  return <div>{pages[page]}</div>;
}

export default Content;
