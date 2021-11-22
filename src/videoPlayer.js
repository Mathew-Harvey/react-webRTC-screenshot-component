import React from 'react'

export default function videoPlayer() {
    return (
        <div>
            
            <>
                <div>
                    <div id="player_id"></div>
                </div>
                <button id="screenshot-button"> Screen Shot </button>
                <img id="screenshot-img" src="" alt=""></img>
                <canvas id="canvas"></canvas>
                <script src="https://cdn.jsdelivr.net/npm/ovenplayer/dist/ovenplayer.js"></script>
                <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
                <script>
                </script>
            </>
        </div>
    )
}

