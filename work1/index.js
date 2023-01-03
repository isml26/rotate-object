import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.01, 1000 );
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer( {
  canvas:document.querySelector("#bg")
} );

renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.setAnimationLoop( animation );
camera.position.setZ(30)
camera.position.setX(-5)
camera.position.setY(2)

// const geometry = new THREE.TorusGeometry(10,3,16,100)
// const material = new THREE.MeshBasicMaterial({color:0XFF6347,wireframe:true});
// // const material = new THREE.MeshStandardMaterial({color:0XFF6347});
// const torus = new THREE.Mesh(geometry,material)
// scene.add(torus)

const degree = 43

const geometry = new THREE.BoxGeometry( 10,10,10 );
const material = new THREE.MeshBasicMaterial({color:0X3f7b9d,wireframe:true});
var mesh = new THREE.Mesh( geometry, material );
// mesh.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(degree)) 
// mesh.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(degree))
scene.add(mesh)


const geometry2 = new THREE.BoxGeometry( 10,10,10 );
const material2 = new THREE.MeshBasicMaterial({color:0xc651e6,wireframe:true});

const mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.set(-10, 0, 0);
scene.add( mesh2 );

renderer.render(scene,camera)
const controls = new OrbitControls(camera,renderer.domElement)


function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera)
  controls.update()
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.005;
  // mesh.rotation.z += 0.01;

}

document.getElementById("buttonZ").onclick = function(){
  let deg = document.getElementById("inputZ").value
  deg = parseInt(deg)
  if(isNaN(deg)){
    alert("enter int value")
    return
  }
  mesh.rotateOnWorldAxis(new THREE.Vector3(0,0,1),THREE.MathUtils.degToRad(deg))
  renderer.render(scene,camera)
  const w = 10, h = 10, d = 10
  const boxMatrix = mesh.matrixWorld;
  // Set the initial position of the desired vertex into a Vector3
  const vertex = new THREE.Vector3(w / 2, h / 2, d / 2);
  const vertex2 = new THREE.Vector3(-w / 2, h / 2, d / 2);
  
  // Apply the matrix transformation to the vector
  vertex.applyMatrix4(boxMatrix);
  vertex2.applyMatrix4(boxMatrix)
  
  // Read the result
  console.log(vertex);
  console.log(vertex2);
  mesh.position.set(Math.abs(vertex2.x + 5 ), 5- vertex2.y ,0,);
  // mesh.position.set(2, 3 ,0,);
}

document.getElementById("buttonY").onclick = function(){
  let deg = document.getElementById("inputY").value
  deg = parseInt(deg)
  if(isNaN(deg)){
    alert("enter int value")
    return
  }
  mesh.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(deg))
  renderer.render(scene,camera)
  const w = 10, h = 10, d = 10
  const boxMatrix = mesh.matrixWorld;
  // Set the initial position of the desired vertex into a Vector3
  const vertex = new THREE.Vector3(w / 2, h / 2, d / 2);
  const vertex2 = new THREE.Vector3(-w / 2, h / 2, d / 2);
  
  // Apply the matrix transformation to the vector
  vertex.applyMatrix4(boxMatrix);
  vertex2.applyMatrix4(boxMatrix)
  
  // Read the result
  console.log(vertex);
  console.log(vertex2);
  mesh.position.set(vertex.x - 5 ,0,vertex.z - 5 );
}

document.getElementById("buttonX").onclick = function(){
  let deg = document.getElementById("inputX").value
  deg = parseInt(deg)
  if(isNaN(deg)){
    alert("enter int value")
    return
  }

  mesh.rotateOnWorldAxis(new THREE.Vector3(1,0,0),THREE.MathUtils.degToRad(deg))
  renderer.render(scene,camera)
  const w = 10, h = 10, d = 10

  const boxMatrix = mesh.matrixWorld;
  // Set the initial position of the desired vertex into a Vector3
  const vertex = new THREE.Vector3(w / 2, h / 2, d / 2);
  const vertex2 = new THREE.Vector3(-w / 2, h / 2, d / 2);
  
  // Apply the matrix transformation to the vector
  vertex.applyMatrix4(boxMatrix);
  vertex2.applyMatrix4(boxMatrix)
  
  // Read the result
  console.log(vertex);
  console.log(vertex2);

  // mesh.position.set( 0,vertex.x - 5,vertex.z - 5 );
  // mesh.position.set(0, val*0.06, -3.17);
}

document.getElementById("reset").onclick = function(){
  mesh.rotation.z = Math.PI / 180 * 90;
  mesh.rotation.y = Math.PI / 180 * 90;
  mesh.rotation.x = Math.PI / 180 * 90;
  
  renderer.render(scene,camera)
  mesh.position.x = 0
  mesh.position.y = 0
  mesh.position.z = 0

}


animate()

// // Get the intersection point and the object's position
// var intersectionPoint = new THREE.Vector3(0, 0, 0);
// var objectPosition = mesh.position;

// // Compute the direction from the object to the intersection point
// var direction = intersectionPoint.clone().sub(objectPosition).normalize();

// // Compute the angle between the object's current forward direction and the direction to the intersection point
// var angle = Math.acos(mesh.getWorldDirection().dot(direction));

// // Set the object's rotation to point towards the intersection point
// mesh.rotation.setFromVector3(new THREE.Vector3(0, angle, 0));

// scene.add( mesh );



// {
//   // Create the geometry
// const geometry = new THREE.BufferGeometry();

// // Create an array of vertices
// const vertices = new Float32Array([
//   -1.0, -1.0,  1.0,
//    1.0, -1.0,  1.0,
//    1.0,  1.0,  1.0,
//   -1.0,  1.0,  1.0,

//   -1.0, -1.0, -1.0,
//   -1.0,  1.0, -1.0,
//    1.0,  1.0, -1.0,
//    1.0, -1.0, -1.0,

//   -1.0,  1.0, -1.0,
//   -1.0,  1.0,  1.0,
//    1.0,  1.0,  1.0,
//    1.0,  1.0, -1.0,

//   -1.0, -1.0, -1.0,
//    1.0, -1.0, -1.0,
//    1.0, -1.0,  1.0,
//   -1.0, -1.0,  1.0,

//    1.0, -1.0, -1.0,
//    1.0,  1.0, -1.0,
//    1.0,  1.0,  1.0,
//    1.0, -1.0,  1.0,

//   -1.0, -1.0, -1.0,
//   -1.0, -1.0,  1.0,
//   -1.0,  1.0,  1.0,
//   -1.0,  1.0, -1.0
// ]);

// // Add the vertices to the geometry
// geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// // Create an array of faces
// const indices = new Uint16Array([
//   0,  1,  2,    0,  2,  3,  // front
//   4,  5,  6,    4,  6,  7,  // back
//   8,  9,  10,   8,  10, 11, // top
//   12, 13, 14,   12, 14, 15, // bottom
//   16, 17, 18,   16, 18, 19, // right
//   20, 21, 22,   20, 22, 23  // left
// ]);

// // Add the faces to the geometry
// geometry.setIndex(new THREE.BufferAttribute(indices, 1));

// // Create the material
// const material = new THREE.MeshBasicMaterial({color: 0xff0000});

// // Create the mesh
// const cube = new THREE.Mesh(geometry, material);

// // Add the cube to the scene
// scene.add(cube);

// }




// mesh.position.set(degree*0.06, 0, -3.17);
// x_ = Math.sin(THREE.MathUtils.degToRad(30))
// y_ = Math.cos(THREE.MathUtils.degToRad(30))
// console.log("here",Math.sin(THREE.MathUtils.degToRad(30)))
// mesh.rotation.x -= 1;
// mesh.rotation.y += 1;
// mesh.rotateOnWorldAxis(new THREE.Vector3(0,1,0),THREE.MathUtils.degToRad(degree))
// mesh.position.set(degree*0.06, 3, 0);
// *************************************


// ---------------- find coordinates ------------------

// var boundingBox = new  THREE.Box3();
// boundingBox.setFromObject(mesh);

// const low = boundingBox.min;
// const high = boundingBox.max;

// const corner1 = new THREE.Vector3(low.x,    low.y,  low.z);
// const corner2 = new THREE.Vector3(high.x,   low.y,  low.z);
// const corner3 = new THREE.Vector3(low.x,    high.y, low.z);
// const corner4 = new THREE.Vector3(low.x,    low.y,  high.z);

// const corner5 = new THREE.Vector3(high.x,   high.y, low.z);
// const corner6 = new THREE.Vector3(high.x,   low.y,  high.z);
// const corner7 = new THREE.Vector3(low.x,    high.y, high.z);
// const corner8 = new THREE.Vector3(high.x,   high.y, high.z);

// console.log(corner4)
// mesh.position.set(Math.abs(corner7.x + 5 ),1 ,0,);



// -------------- find intersections ----------------

// var raycaster = new THREE.Raycaster();

// // Set the raycaster's origin to be the position of object1
// const res2 = raycaster.ray.origin.copy(mesh.position);

// // Set the raycaster's direction to point towards object2
// raycaster.ray.direction.subVectors(mesh2.position, mesh.position).normalize();


// // Check for an intersection between the ray and object2
// var intersects = raycaster.intersectObject(mesh2);
// console.log(intersects)




// ------ find corner coordinates-----

// var boxMatrix = mesh.matrixWorld;
// const w = 10, h = 10, d = 10
// // Set the initial position of the desired vertex into a Vector3
// var vertex = new THREE.Vector3(w / 2, h / 2, d / 2);
// var vertex2 = new THREE.Vector3(-w / 2, h / 2, d / 2);
// var vertex3 = new THREE.Vector3(w / 2, h / 2, -d / 2);
// var vertex4 = new THREE.Vector3(-w / 2, h / 2, -d / 2);

// // Apply the matrix transformation to the vector
// vertex.applyMatrix4(boxMatrix);
// vertex2.applyMatrix4(boxMatrix)
// vertex3.applyMatrix4(boxMatrix)
// vertex4.applyMatrix4(boxMatrix)
// // Read the result
// console.log(vertex);
// console.log(vertex2);
// console.log(vertex3);
// console.log(vertex4);

// mesh.position.set(Math.abs(vertex2.x + 5 ), 5- vertex2.y ,0,);

// mesh.position.set(vertex.x - 5 ,0,vertex.z - 5 );