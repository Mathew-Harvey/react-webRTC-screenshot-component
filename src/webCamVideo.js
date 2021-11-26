import React, { useEffect, useRef, useState } from 'react';

export default function WebCamVideo() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false)

    const getWebCamVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 600 } })
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error("error:", err);
        });
    };

    const takePhoto = () => {
        const width = 600;
        const height = 450;

        const video = videoRef.current;
        const photo = photoRef.current;

        photo.width = width;
        photo.heigh = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    }

    const closePhoto = () => {
        let photo = photoRef.current
        let ctx = photo.getContext('2d');
        ctx.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);
    }

    useEffect(() => {
        getWebCamVideo();
      }, [videoRef]);

    return (
        <div> 
          <div id = "webCamVideo">
      
            <video ref={videoRef} />
            <button onClick={takePhoto}>Screenshot</button>
          </div> 
          <div>
              <button onClick={closePhoto}>Close</button>
              </div>
          <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
              <canvas ref={photoRef}></canvas>
              </div>
             
          </div>

        
      );
}
