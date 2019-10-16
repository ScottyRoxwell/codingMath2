
import noise from './utils/perlinNoise';

import {vector} from './vector';
import {particle} from './particle';
import { updateExpression } from 'babel-types';

window.onload = function(){
 
  const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        ship = particle.create(width/2,height/2,0,0),
        thrust = vector.create(0,0);

  // for(let i = 0; i < numParticles; i++){
  //   particles.push(particle.create(width/2.0,height/2.0, Math.random()*4.0+1.0, Math.random()*Math.PI*2.0));
  // }

  // document.body.style.backgroundColor = "green"

  update();

  document.body.addEventListener('keydown',(e=>{
    switch(e.keyCode){
      case 38: thrust.setY(-0.1);
        break;
      case 40: thrust.setY(0.1);
        break;
      case 37: thrust.setX(-0.1);
        break;
      case 39: thrust.setX(0.1);
        break;
      default:
          break;
    }
  }))

  document.body.addEventListener('keyup',(e=>{
    switch(e.keyCode){
      case 38: thrust.setY(0.0);
        break;
      case 40: thrust.setY(0.0);
        break;
      case 37: thrust.setX(0.0);
        break;
      case 39: thrust.setX(0.0);
        break;
      default:
          break;
    }
  }))

  function update(){
    context.clearRect(0,0,width,height);

    // particles.forEach(p=>{
      ship.accelerate(thrust);
      ship.update();
      context.beginPath();
      context.arc(ship.position.getX(), ship.position.getY(), 20, 0, Math.PI*2, false);
      context.fill();
    // });

    requestAnimationFrame(update);
  }

}