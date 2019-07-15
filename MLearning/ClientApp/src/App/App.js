import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../components/Layout';
import { Home } from '../components/Home';
import P5Wrapper from 'react-p5-wrapper';
import ImageClassifierScript from '../components/ImageClassifierScript/ImageClassifierScript'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/imageClass' component={<P5Wrapper sketch={ImageClassifierScript}/>} />
      </Layout>
    );
  }
}

//Have to do npm i react-p5-wrapper (Here)
//Have to do npm i ml5 (on ImageClassifierScript)
//Have to do npm (on ImageClassifierScript)
