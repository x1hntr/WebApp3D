  
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import muro from './images/fondo.jpg';
import suelo from './images/suelo.jpg';


export default class VRScene extends React.Component {
  render () {
    return (
      <Scene >
        <a-assets>
          <img id="groundTexture" src={muro}/>
          <img id="skyTexture" src={muro}/>
        <a-asset-item id="astronaut" src="https://cdn.glitch.com/ac5eecac-40b2-4897-8f67-28c497a19b47%2FAstronaut.glb"></a-asset-item>
        <a-asset-item id="chimpanze" src="/assets/chimpanze.gltf"></a-asset-item>

        </a-assets>
     
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="300"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="5" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="4048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
        <Entity text={{value: 'Astronaut', align: 'center'}} position={{x: 0, y: 2.25, z: -1}}/>

        <Entity
          id="myMod"
          gltf-model="#astronaut"
          scale="1 1 1"
          position={{ x: 0, y: 1, z: -3 }}
        />
          <Entity
          id="myMod2"
          gltf-model="#chimpanze"
          scale="1 1 1"
          position={{ x: 1, y: 1, z: -3 }}
        />
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.getElementById("root"));