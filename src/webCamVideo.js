import React, { useEffect, useRef, useState } from 'react';

export default function WebCamVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
      getVideo();
    }, [videoRef]);
  
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 300 } })
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error("error:", err);
        });
    };
    return (
        <div> 
          <div title = "Device Camera">
      
            <video ref={videoRef} />
          </div>
        </div>
      );
}
