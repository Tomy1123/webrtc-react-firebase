import React from 'react';

import InputFormLocal from './InputFormLocal'
import InputFormRemote from './InputFormRemote'

const getMedia = async () => {

  const constraints = { audio: true, vido: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {

  }
};

getMedia();

const App = () => {
  return (
    <>
      <InputFormLocal />
      <InputFormRemote />
    </>
  );
};

export default App;
