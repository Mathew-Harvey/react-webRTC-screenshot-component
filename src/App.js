import React, { useState } from 'react';
import OemPlayer from './oemPlayer';
import ScreenCapture from './screenCapture';

import WebCamVideo from './webCamVideo';



function App() {
  const [showOem, setShowOEM] = useState(true)
    const [showWebCam, setShowWebCam] = useState(true)
  return (
    <>
     {
                showOem ? 
                <p><OemPlayer /></p>
                : null
            }
            {
                showWebCam ? 
              <p><WebCamVideo /></p>
                : null
            }

            <button id="inputSrc" onClick={() => setShowOEM(!showOem)}> External Camera toggle</button>
            <button id="inputSrc" onClick={() => setShowWebCam(!showWebCam)}> Webcam toggle</button>
      
      
      <ScreenCapture />

    </>
  )
}

export default App;
