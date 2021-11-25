import React, { useState } from 'react';
import OemPlayer from './oemPlayer';
import ScreenCapture from './screenCapture';
import InputSrc from './inputSrc';
import WebCamVideo from './webCamVideo';



function App() {
  return (
    <>
      <InputSrc />
      <OemPlayer />
      <WebCamVideo />
      <ScreenCapture />

    </>
  )
}

export default App;
