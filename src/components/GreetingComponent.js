import React, {
  useEffect,
  useState,
} from 'react';

import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [
  "Hello There!!",
  "नमस्ते!!",
  "Hola!!",
  "Ciao!!",
  "Bonjour!!",
  "Здравейте!!",
];

const Greeting = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 style={{ paddingBottom: 15 }} className="heading">
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
};

export default Greeting;
