import { useState } from 'react';

const User = props => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const { name, location, contact } = props;

  return (
    <div className="user-card">
      <h1>Count 1 = {count1}</h1>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Count1++
      </button>
      <h1>Count 2 = {count2}</h1>

      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Count2++
      </button>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{contact}</h4>
    </div>
  );
};

export default User;
