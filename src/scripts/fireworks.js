
import noise from './utils/perlinNoise';

import {vector} from './vector';
import {particle} from './particle';
import { updateExpression } from 'babel-types';

window.onload = function(){
 
  const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        // p = particle.create(100,height,10,-Math.PI/2),
        // accel = vector.create(0.1,0.1);
        particles = [],
        numParticles = 100;

  for(let i = 0; i < numParticles; i++){
    particles.push(particle.create(width/2.0,height/2.0, Math.random()*4.0+1.0, Math.random()*Math.PI*2.0, 0.05));
  }

  // document.body.style.backgroundColor = "green"

  update();

  function update(){
    context.clearRect(0,0,width,height);

    particles.forEach(p=>{
      p.update();
      context.beginPath();
      context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI*2, false);
      context.fill();
    });

    requestAnimationFrame(update);
  }

}