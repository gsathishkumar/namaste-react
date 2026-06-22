import React from 'react';
import ReactDOM from 'react-dom/client';

// Parcel Invokes Babel Transpiler to convert JSX to Javascript compliant REACT code

const reactElement = React.createElement(
  'h1',
  { id: 'heading' },
  'React Element Heading',
);
const jsxHeading = <h1 id="heading">JSX Heading</h1>;

console.log(reactElement);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactElement);
root.render(jsxHeading);
