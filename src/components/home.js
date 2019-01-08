import React, { Component } from 'react';
import Konva from 'konva';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect} from 'react-konva'
import '../styles/App.css';

class Home extends Component {

 
  render() {
    return (
      <div id="home">
        <div id="konvaDrawing">
            <Stage width={500} height={500}>
              <Layer>
                <Rect
                  x={200}
                  y={50}
                  width={100}
                  height={100}
                  fill="lightblue"
                  shadowBlur={10}
                />
            
              </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
 
}


export default Home;
