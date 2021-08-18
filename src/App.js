import React from 'react';
import { Button } from '@material-ui/core';

const getMedia = async () => {

  const constraints = { audio: true, vido: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {

  }
};

getMedia();

const App = () => {
  return <Button color="primary" variant="contained">Hello</Button>;
};

export default App;
