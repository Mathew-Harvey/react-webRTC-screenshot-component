import React, { useState } from 'react';
import OemPlayer from './oemPlayer';
import WebCamVideo from './webCamVideo';



function App() {
  const [showOem, setShowOEM] = useState(false)
    const [showWebCam, setShowWebCam] = useState(false)
  return (
    <>
     {
                showOem ? 
                <div><OemPlayer /></div>
                : null
            }
            {
                showWebCam ? 
              <div><WebCamVideo /></div>
                : null
            }

            <button id="inputSrc" onClick={() => setShowOEM(!showOem)}> External Camera toggle</button>
            <button id="inputSrc" onClick={() => setShowWebCam(!showWebCam)}> Webcam toggle</button>
      
      
 

    </>
  )
}

export default App;
