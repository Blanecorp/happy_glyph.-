$(function(){
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

 controls = new THREE.OrbitControls( camera );
 controls.addEventListener( "change", render );
 

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.HemisphereLight( 0x00ffff, 0xff00ff, 1 );
scene.add( light );

	
var geometry = new THREE.SphereGeometry( 5, 100, 50 );
var material = new THREE.MeshNormalMaterial( { color: 0x00ff00} );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

var geometry3 = new THREE.DodecahedronGeometry( 6, 0);
var material2 = new THREE.MeshPhongMaterial( { color: 0x00f774} );
var dod = new THREE.Mesh( geometry3, material2 );
dod.position.z = -50;
dod.position.x = 50;
scene.add( dod );

var geometry4 = new THREE.OctahedronGeometry( 9, 0);
var material3 = new THREE.MeshPhongMaterial( { color: 0x7b68ee} );
var dod = new THREE.Mesh( geometry4, material3 );
dod.position.y = 30;
dod.position.x = -50;
dod.position.z = 50;
scene.add( dod );


var geometry7 = new THREE.DodecahedronGeometry( 10, 0);
var material6 = new THREE.MeshPhongMaterial( { color: 0xff6347, wireframe: true} );
var dod = new THREE.Mesh( geometry7, material6 );
dod.position.z = 50;
dod.position.y = 10;
dod.position.x = 30;
scene.add( dod );

var geometry7 = new THREE.DodecahedronGeometry( 6, 0);
var material6 = new THREE.MeshPhongMaterial( { color: 0xff6347} );
var dod = new THREE.Mesh( geometry7, material6 );
dod.position.z = 50;
dod.position.y = 10;
dod.position.x = 30;
scene.add( dod );


var geometry5 = new THREE.BoxGeometry( 20, 20, 12 );
var material4 = new THREE.MeshPhongMaterial( {color: 0x00f6fe} );
var cube = new THREE.Mesh( geometry5, material4 );
cube.position.y = -20;
cube.position.z = -90;
cube.position.x = -120;
cube.rotation.z = -40;
scene.add( cube );

var geometry6 = new THREE.TorusBufferGeometry( 8, 7, 16, 100 );
var material5 = new THREE.MeshPhongMaterial( {color: 0xFF1493} );
var torus = new THREE.Mesh( geometry6, material5 );
torus.position.z = 20;
torus.position.y = 40;
torus.position.x = 90;
scene.add( torus );

var geometry8 = new THREE.TorusKnotGeometry( 5, 3, 100, 16 );
var material7 = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
var torusKnot = new THREE.Mesh( geometry8, material7 );
torusKnot.position.y = 70;
torusKnot.position.z = -70;
torusKnot.position.x = -20;
scene.add( torusKnot );

var geometry9 = new THREE.TorusGeometry( 10, 0.5, 16, 100 );
var material8 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus = new THREE.Mesh( geometry9, material8 );
torus.rotation.z = 60;
scene.add( torus );


var geometry2 = new THREE.OctahedronGeometry( 1, 0);

for (var i = 0;i<1000;i++){
var ico = new THREE.Mesh( geometry2, material );
ico.position.x = ( Math.random() - 0.5) * 550;
ico.position.y = ( Math.random() - 0.5) * 550;
ico.position.z = ( Math.random() - 0.5) * 550;

ico.rotation.y = ( Math.random() - 0.5) * 700;
ico.rotation.z = ( Math.random() - 0.5) * 700;

scene.add( ico );
}



function animate() {
	requestAnimationFrame( render );			
	controls.update();
}

function render() {
	renderer.render( scene, camera );	
}

render();

	
	
});