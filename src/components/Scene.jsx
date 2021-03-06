import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "@google/model-viewer";

export default function Scene() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "models" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);

  const randomElement =
    data.allFile.nodes[Math.floor(Math.random() * data.allFile.nodes.length)];
  const model = randomElement.name + ".glb";

  console.log(model);
  const two = (
    <div className="scene">
      <model-viewer
        bounds="tight"
        src="poly.glb"
        camera-controls
        auto-rotate
        camera-orbit="10deg 10deg 2.5m"
        loading="lazy"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        environment-image="neutral"
        poster="ppppp.webp"
        shadow-intensity="1"
        autoplay
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
      </model-viewer>
    </div>
  );
  return two;
}
