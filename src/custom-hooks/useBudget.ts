import { useState } from 'react';

export default function useBudget() {
  const [randomValues, setRandomValues] = useState(0);

  const createRandomBudget = () => {
    setRandomValues(Math.random() * 100);
  };

  // return { createRandomBudget: createRandomBudget, randomValues: randomValues };
  // same as below
  return { createRandomBudget, randomValues };
}
