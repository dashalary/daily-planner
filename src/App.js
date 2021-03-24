import React from 'react';
import Tasks from './containers/Tasks'
import Particles from 'react-particles-js';
import particlesParams from './particles-params'

function App(props) {
  return (
    <div className="App">
      <div style={{position: "absolute",  top: 0,
            left: 0,
            width: "100%",
            height: "100%"}}>
        <Particles params={particlesParams}/>
      </div>
      <Tasks />
    </div>
  );
}

export default App;
