import React from 'react';

const getMedia = async () => {

  const constraints = { audio: true, vido: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {

  }
};

getMedia();

const App = () => {
  return <div>Hello, React!</div>;
};

export default App;
