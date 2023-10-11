import { useState, useEffect } from 'react';
// built-in-hooks/components/List.tsx
type Props = {
  getItems: (param: number) => any; // This function gets renewed if not memoized using useCallback.
};

const List = ({ getItems }: Props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(10)); // This getItems reruns if not memoized using useCallback.
    console.log('Updating Items');
  }, [getItems]);

  return (
    <>
      {items.map(value => {
        return <h3 key={value}>{value}</h3>;
      })}
    </>
  );
};

export default List;
