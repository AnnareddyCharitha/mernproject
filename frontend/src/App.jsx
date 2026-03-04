import React from 'react';
import User from './components/User';

const App = () => {
  return (
    <div>
      <h1>Main App Component</h1>

      <User
        name="ABC"
        age={20}
        skills={['Java', 'React', 'Spring Boot']}
      />
    </div>
  );
};