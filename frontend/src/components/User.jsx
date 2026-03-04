import React, { useState } from 'react';

const User = ({ name, age, skills }) => {

  // COUNT STATE
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert('clicked');
  };

  return (
    <>
      <h2>User Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <button onClick={handleClick}>Alert Button</button>

      {/* COUNT SECTION */}
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default User;