import React, { useState } from 'react';
import Button from '../components/Button';
import type { User } from './models/user';
// React Hooks are simple JavaScript functions that we can use to isolate the resuable part
// from a functional component

// The React useState Hook allows us to track state in a functional component
// State generally refers to data or properties that need to be tracking in application
export default function State() {
  // hooks, prefixed with use, can only be used in a function component, not in a class component
  // you can't put hooks in a loop, condition, or nested function
  // read/getters, //write
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
  });

  const decrementCount = () => {
    setCount(preValue => {
      return preValue - 1;
    });
    setTheme('red');
  };

  const incrementCount = () => {
    setCount(preValue => {
      return preValue + 1;
    });
    setTheme('blue');
  };

  return (
    <>
      <div className="mb-10 flex">
        <Button color="primary" onClick={decrementCount}>
          DECREMENT
        </Button>
        <div className="m-5">
          <span>{count} :</span>
          <span>{theme}</span>
        </div>
      </div>
    </>
  );
}
