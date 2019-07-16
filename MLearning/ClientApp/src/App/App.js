import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../components/Layout';
import { Home } from '../components/Home';
import P5Wrapper from 'react-p5-wrapper';
// import { P5Wrapper } from '../components/ImageClassifier/ImageClassifier'
import Sketch from '../components/Sketch/Sketch';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <p>this is</p>
        <P5Wrapper Sketch={Sketch} />
      </div>
      // <Layout>
      //   <Route exact path='/' component={Home} />
      //   <Route path='/imageClass' component={<P5Wrapper ImageClassifierScript={ImageClassifierScript} />} />
        
      // </Layout>
    );
  }
}

//Have to do npm i react-p5-wrapper (Here)
//Have to do npm i ml5 (on ImageClassifierScript)
//Have to do npm (on ImageClassifierScript)
