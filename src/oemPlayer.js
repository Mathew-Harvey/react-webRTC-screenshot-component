import React, { useEffect, useRef, useState } from 'react';
import OvenPlayer from 'ovenplayer';

export default function OemPlayer(title) {

    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasPhoto, setHasPhoto] = useState(false)

    const OemVideo = () => {
        OvenPlayer.create("oemPlayer", {
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
    }

    const getVideo = () => {
        const videoWrapper = document.getElementsByClassName("op-media-element-container");
        return videoWrapper[0].children[0];
    }

    const takePhoto = () => {
        const width = 600;
        const height = 450;

        const video = getVideo("op-media-element-container")
        const photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(false);
    }
    const closePhoto = () => {
        let photo = photoRef.current
        let ctx = photo.getContext('2d');
        ctx.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);
    }
    useEffect(() => {
        OemVideo()
    }, [videoRef])

    return (
        <div>
            <div>
                <div id="oemPlayer"></div>
                <button onClick={takePhoto}>Screenshot</button>
            </div>
            <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
                <canvas ref = {photoRef}></canvas>
                <button onClick={closePhoto}>Close</button>
            </div>
        </div >
    )
}






