import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = <h1 id="heading">JSX Heading</h1>;

const TitleComponent = () => <h3 id="title">Title Component</h3>;

const TitleNormalFunction = function () {
  return <h3 id="title">Title Normal Function</h3>;
};

const TitleElement = <h3 id="title">Title Element</h3>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1>Component Composition</h1>
      <h2 id="heading">Heading</h2>
      {TitleElement}
      {TitleNormalFunction()}
      <TitleComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
