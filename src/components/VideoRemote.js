import React, { useEffect, useRef } from 'react';

const VideoRemote = () => {
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

  return <></>;
}

export default VideoRemote;