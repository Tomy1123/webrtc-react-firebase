import React, { useEffect, useRef } from 'react';
import Video from './Video'

const VideoLocal = ({ name }) => {
  const videoRef = useRef(null);
  const currentVideoRef = videoRef.current;

  useEffect(() => {
    if (currentVideoRef === null) return;
    const getMedia = async () => {
    
      const constraints = { audio: true, vido: true };
    
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        currentVideoRef.srcObject = mediaStream;
      } catch (err) {
    
      }
    };
    

    getMedia();
  },[currentVideoRef]);

  return <Video isLocal={true} name={name} videoRef={videoRef} />;
}

export default VideoLocal;