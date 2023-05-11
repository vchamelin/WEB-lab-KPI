import React from 'react';
import Page1 from '../pages-lab1/Page1';
import Page2 from '../pages-lab1/Page2';
import Page3 from '../pages-lab1/Page3';

function Content({ state }) {
  switch (state) {
    case 0:
      return <Page1 />;
    case 1:
      return <Page2 />;
    case 2:
      return <Page3 />;
    default:
      return <div>Invalid state</div>;
  }
}

export default Content;
