import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = <h1 id="heading">JSX Heading</h1>;

const Title = () => <h3 id="title">Title</h3>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1>Component Composition</h1>
      <h2 id="heading">Heading</h2>
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
