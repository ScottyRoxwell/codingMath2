import {THREE} from '../vendor';
import noise from './utils/perlinNoise';
import { Vector3, Cylindrical } from 'three';

const scene = new THREE.Scene();
// PerspectiveCamera FOV parameter: 0 - 180 degrees
const camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1000);
console.log(window.innerWidth)

var light = new THREE.PointLight( 0xffffff, 100, 500);
scene.add( light );

var ambient= new THREE.AmbientLight( 0xffffff, .6); // soft white light
scene.add( ambient );

camera.position.z = -50;
camera.position.y = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
const canvas = document.querySelector('.canvas');
canvas.appendChild(renderer.domElement);

let theta = 0;
let radius = 25;
let misterpointy = new Vector3();

var geometry3 = new THREE.PlaneGeometry( 424, 424 );
var material3 = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
var floor = new THREE.Mesh( geometry3, material3 );
floor.rotateX(Math.PI/2);
floor.position.y = 0;
floor.position.z = 0
console.log(floor)
scene.add( floor );


// var geometry = new THREE.PlaneGeometry( 24, 24 );
// var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
// var plane = new THREE.Mesh( geometry, material );
// scene.add( plane );

var geometry2 = new THREE.BoxGeometry( 20, 20, 20 );
var material2 = new THREE.MeshLambertMaterial( {color: 0xff0000, side: THREE.DoubleSide} );
var cube = new THREE.Mesh( geometry2, material2 );
cube.position.z = 60;
cube.position.y = 10
scene.add( cube );
console.log(cube);



var animate = function () {
  requestAnimationFrame( animate );
  theta += .002;
  let x = noise(theta);
  camera.position.y -= 0.2
  camera.lookAt(cube.position)
  // plane.position.x = window.innerWidth/2
  // plane.position.x = THREE.Math.mapLinear(x,0,1,-window.innerWidth/2+12,window.innerWidth/2-12);
  // console.log(plane.position.x)
  // camera.rotation.y = (THREE.Math.lerp(plane.position.x, plane2.position.x,.9))
  // console.log(camera.rotation.y)
  // misterpointy.x = radius * Math.cos(theta);
  // misterpointy.z = radius * Math.sin(theta);
  // plane.rotation.y = Math.PI;
  // plane.lookAt(misterpointy);
	renderer.render( scene, camera );
};

animate();