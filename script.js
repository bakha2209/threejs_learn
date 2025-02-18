import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

//scene mesh camera renderer

//scene 
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "purple"})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.z=1;
mesh.scale.x=1;
mesh.rotation.x=Math.PI*0.25;
mesh.rotation.y=Math.PI*1.2

scene.add(mesh)

//camera 
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z=3
camera.position.x=1
camera.position.y=1
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height)
renderer.render(scene,camera)