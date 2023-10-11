import { useEffect } from 'react';
// built-in-hooks/components/Card.tsx
type Props = {
  name: string;
};

export default function Card({ name }: Props) {
  useEffect(() => {
    console.log('card rendered');
  }, [name]);
  return <h2>Card : {name}</h2>;
}


// <VideoPlayer /> <----- playerObject. ToBeReferenceToTheVideoPlayerComponent
// handleStop -- playerObject.stop();