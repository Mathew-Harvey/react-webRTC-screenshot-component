import React, { useState } from 'react';
import OemPlayer from './oemPlayer';
import WebCamVideo from './webCamVideo';



export default function App() {
  const [showOem, setShowOEM] = useState(false)
  const [showWebCam, setShowWebCam] = useState(false)
  return (
    <>
      <button id="inputSrc" onClick={() => setShowOEM(!showOem)}> External Camera toggle</button>
      <button id="inputSrc" onClick={() => setShowWebCam(!showWebCam)}> Webcam toggle</button>
      {
        showOem ?
          <OemPlayer />
          : null
      }
      {
        showWebCam ?
          <WebCamVideo />
          : null
      }
    </>
  )
}

