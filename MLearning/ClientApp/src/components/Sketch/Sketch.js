import * as p5 from "p5";
import * as ml5 from "ml5";
//The above is were I am getting my 
// Error: only one instance of babel-polyfill is allowed
// possible work around : https://github.com/babel/babel-loader/issues/401
// It happens after the npm install p5
// That seem sto bring in another instance of the babel-polyfill?



export default function Sketch (p) {

let mobilenet;
let classifier;
let video;
let label = '';
let height;
let happyButton;
let sadButton;
let trainButton;

p.gotResults = function(error, result) {
  if(error){
    console.error(error);
  }else {
    label = result;
    classifier.classify(p.gotResults);
  }
}

p.shileTraining = function(loss){
  if (loss == null) {
    console.log('Training Complete!');
    classifier.classify(p.gotResults);
  }else {
    console.log(loss);
  }
}


p.setup = function () {
  p.createCanvas(640, 550);
  video = p.createCapture(p5.VIDEO);
  video.hide();
  p.background(0);
  mobilenet = ml5.featureExtractor('MobileNet');
  classifier = mobilenet.classification(video);

  happyButton = p.createButton('happy');
  happyButton.mousePressed(function(){
    classifier.addImage('happy');
  });

  sadButton = p.createButton('sad');
  sadButton.mousePressed(function(){
    classifier.addImage('sad');
  });

  // trainButton = p.createButton('train');
  // trainButton.mousePressed(function(){
  //   classifier.train(whileTraining);
  // });
}

p.draw = function() {
 p.background(0);
 p.image(video, 0, 0);
 p.fill(255);
 p.textSize(32);
 p.text(label, 10, height - 20);
}

}