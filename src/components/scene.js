import React from "react";
import "@google/model-viewer"


export default function Scene(props) {
    let model = props.model;
    console.log(model)
    const two = (<div className="scene">

        <model-viewer bounds="tight" src="Horse.glb"
                      camera-controls camera-orbit="75deg 75deg 5.5m"
                      ar ar-modes="webxr scene-viewer quick-look"
                      camera-controls environment-image="neutral" poster="ppppp.webp"
                      shadow-intensity="1" autoplay>

            <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
                View in your space
            </button>

        </model-viewer>
    </div>)
    console.log(two);
    return two;
}