
import noise from './utils/perlinNoise';

import {vector} from './vector';
import {particle} from './particle';
// import { updateExpression } from 'babel-types';

window.onload = function(){
 
  const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
 
  
  update();

  function update(){
    context.clearRect(0,0,width,height);

    
    

    requestAnimationFrame(update);
  }

}