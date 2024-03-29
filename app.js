const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 200 )

const controls = new THREE.OrbitControls (camera)
camera.position.set(200, 0, 0)
controls.update()

const geometry = new THREE.SphereGeometry(50, 32, 32)
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('3.jpg')
const material = new THREE.MeshBasicMaterial( {
	//color: 0xffff00,
	map: texture,
	side: THREE.DoubleSide
})
const sphere = new THREE.Mesh( geometry, material )
scene.add( sphere )

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

function animate(){
	requestAnimationFrame(animate)
	//required if controls.enableDamping or controls.autoRotate are set to true
	//controls.update();

	renderer.render( scene, camera )
}

animate()
