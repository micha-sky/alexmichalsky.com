import React from "react";
import HoveringCuve from "../components/HoveringCuve";
import Cube from "../components/Cube";
import Scene from "../components/Scene";
import Floater from "../components/Floater";
import "../stylesheets/style.css";
import Footer from "../components/Footer";

export default function Home() {
  const horse = "../../static/Horse.glb";
  return (
    <div>
      <Cube />
      <Scene model={horse} />
      <Floater />
      <HoveringCuve />
      <Footer />
    </div>
  );
}
