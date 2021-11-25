import React, { useEffect, useRef, useState } from 'react';
import OvenPlayer from 'ovenplayer';




export default function OemPlayer(title) {
<p> [title] </p>

useEffect(() => {
OvenPlayer.create( "oemPlayer",{
        sources: [
            {
                label: 'marinestream',
                // Set the type to 'webrtc'
                type: 'webrtc',
                // Set the file to WebRTC Signaling URL with OvenMediaEngine 
                file: 'ws://192.168.50.248:3333/app/stream'
            }
        ]
        
    })

}, [])
    
    return (
       
        <div id = "oemPlayer"></div> 
    )}

    




