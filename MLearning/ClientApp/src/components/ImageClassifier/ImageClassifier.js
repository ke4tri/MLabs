import React, { Component } from 'react';
import './ImageClassifier.scss';
import tiger from "./tiger.jpg";

export class ImageClassifier extends Component {
  render() {
    return (
      <div className="App">
        <h1>Image classification with ML5.js</h1>
	 <img src={ tiger } id="image" width="400" alt="" />
      </div>
    );
  }
}

// export default ImageClassifier;