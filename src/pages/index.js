import React from "react"
import HoveringCuve from "../components/HoveringCuve";
import Cube from "../components/cube";
import Scene from "../components/scene";
import Floater from "../components/floater";
import "../stylesheets/style.css"
import Footer from "../components/footer";

export default function Home() {
    const horse = "../../static/Horse.glb"
    return <div>
        <Cube/>
        <Scene model={horse}/>
        <Floater image="../../static/ppppp.png"/>
        <HoveringCuve/>
        <Footer/>
    </div>
}
