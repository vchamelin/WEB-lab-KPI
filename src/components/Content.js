import React from 'react';

function Content({ content, state }) {
  const contents = [
    ['Content 1 - State 1', 'Content 1 - State 2', 'Content 1 - State 3'],
    ['Content 2 - State 1', 'Content 2 - State 2', 'Content 2 - State 3'],
    ['Content 3 - State 1', 'Content 3 - State 2', 'Content 3 - State 3'],
    ['Content 4 - State 1', 'Content 4 - State 2', 'Content 4 - State 3'],
    ['Content 5 - State 1', 'Content 5 - State 2', 'Content 5 - State 3'],
    ['Content 6 - State 1', 'Content 6 - State 2', 'Content 6 - State 3'],
    ['Content 7 - State 1', 'Content 7 - State 2', 'Content 7 - State 3'],
    ['Content 8 - State 1', 'Content 8 - State 2', 'Content 8 - State 3'],
  ];

  return <div className="mt-4">{contents[content][state]}</div>;
}

export default Content;
