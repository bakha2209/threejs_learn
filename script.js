import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

//scene mesh camera renderer

//scene 
const scene = new THREE.Scene()

//Group
const group=new THREE.Group()

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "purple"})
const mesh = new THREE.Mesh(geometry, material)

mesh.position.z=1;

//MeshTwo
const geometryT=new THREE.BoxGeometry(1,1,1);
const materialT=new THREE.MeshBasicMaterial({color:"green"});
const meshT=new THREE.Mesh(geometryT,materialT);
meshT.position.y=2;


group.add(mesh,meshT);
group.position.x=1
scene.add(group);

//axesHelper
const axesHelper= new THREE.AxesHelper()
scene.add(axesHelper)

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