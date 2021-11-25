import React, { useState } from 'react'
import OemPlayer from './oemPlayer'
import App from './App'


export default function InputSrc() {

    const [show, setShow] = useState(true)
    return (
        <div>
            {
                show ? <p>this one</p>: null
            }
            {
                show ? <p>webvideo toggle</p>:null
            }

            <button id="inputSrc" onClick={() => setShow(!show)}> External Camera toggle</button>
            <button id="inputSrc" onClick={() => setShow(!show)}> Device Camera hide </button>
        </div>

    )
}