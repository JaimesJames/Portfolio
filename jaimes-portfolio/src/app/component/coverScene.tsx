import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


const CoverScene: React.FC = () => {

    const containerRef = useRef<HTMLDivElement>(null);




    useEffect(() => {
        // const width = document.getElementsByClassName('container')[0].clientWidth
        const scene = new THREE.Scene();
        let aspect = window.innerWidth / window.innerHeight;
        const frustumSize = 100;
        const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000)

        // const camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, .1, 1000  );
        const renderer = new THREE.WebGL1Renderer()
        const cameraOrthoHelper = new THREE.CameraHelper(camera);
        // scene.add( cameraOrthoHelper );

        const container = containerRef.current;

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 1)


        container?.appendChild(renderer.domElement);

        camera.position.z = 100;
        // camera.rotation.y = .5;


        //
        const material = new THREE.MeshPhysicalMaterial(
            {
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                metalness: 0.9,
                roughness: 0.0,
                color: 0xffffff,
                ior: 0,
                reflectivity: 1,
                iridescence: 1,
                iridescenceIOR: 2
                // emissive: 0xffffff
            });
        const geometry1 = new THREE.SphereGeometry(10, 50, 50);
        const geometry2 = new THREE.SphereGeometry(20, 50, 50);
        const geometry3 = new THREE.SphereGeometry(5, 50, 50);

        const geometry4 = new THREE.BoxGeometry(5,5,5)
        
        const geometry5 = new THREE.TorusGeometry( 5, 1.5, 16, 100 ); 
        
        const geometry6 = new THREE.TetrahedronGeometry(5,0)

        const sphere1 = new THREE.Mesh(geometry1, material)
        sphere1.position.set(60, 20, 0)

        const sphere2 = new THREE.Mesh(geometry2, material)
        sphere2.position.set(-60, -30, 5)

        const sphere3 = new THREE.Mesh(geometry3, material)
        sphere3.position.set(-20, 50, 1)

        const cube1 = new THREE.Mesh(geometry4,material)
        cube1.position.set(-80, 40, 0)
        
        const torus1 = new THREE.Mesh(geometry5,material)
        torus1.position.set(-80, 40, 0)
        
        const tri1 = new THREE.Mesh(geometry6,material)
        tri1.position.set(60, -40, 0)

        



        //
        scene.add(sphere1)
        scene.add(sphere2)
        scene.add(sphere3)
        scene.add(torus1)
        scene.add(tri1)


        let mouseX = 0;
        let mouseY = 0;

        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        const onDocumentMouseMove = (event: any) => {

            mouseX = (event.clientX - windowHalfX) / 100;
            mouseY = (event.clientY - windowHalfY) / 100;

            // console.log(`x ${mouseX} y ${mouseY}`)
            if (mouseX < -5) {
                mouseX = -5
            }
            if (mouseX > 5) {
                mouseX = 5
            }
            if (mouseY < -5) {
                mouseY = -5
            }
            if (mouseY > 5) {
                mouseY = 5
            }

        }



        var light1 = new THREE.AmbientLight(new THREE.Color('white'), 5);
        scene.add(light1);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 15);
        directionalLight.position.set(0, 1, 1)
        scene.add(directionalLight);


        const render = () => {

            const timer = 0.0001 * Date.now();

            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;

            // sphere1.position.set( 60+(-mouseX - camera.position.x) * 0.05, 20+(-mouseY - camera.position.y) * 0.05, 0 );

            if (camera.position.x < -5) {
                camera.position.x = -5
            }
            if (camera.position.x > 5) {
                camera.position.x = 5
            }
            if (camera.position.y < -5) {
                camera.position.y = -5
            }
            if (camera.position.y > 5) {
                camera.position.y = 5
            }

            camera.lookAt(scene.position);



            renderer.render(scene, camera);

        }
        render()

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0.5, 0);
        controls.update();
        controls.enablePan = false;
        controls.enableDamping = true;
        // controls.maxAzimuthAngle = 40
        // controls.maxPolarAngle = 40
        // controls.minAzimuthAngle = -40
        // controls.minPolarAngle = -40
        controls.enableZoom = false

        const spheres = new THREE.Group()
        spheres.add(sphere1) 
        spheres.add(sphere2) 
        spheres.add(sphere3) 
        scene.add(spheres)
        const animate = () => {

            requestAnimationFrame(animate);

            var delayInMilliseconds = 1000; //1 second

            
            spheres.rotation.z -= 0.0001

            torus1.rotation.x += 0.005
           
            torus1.rotation.y += 0.005

            tri1.rotation.z += 0.005
           
            tri1.rotation.y += 0.005

            sphere3.position.set(-20, 50, 1)

            controls.update();

            // stats.update();

            renderer.render(scene, camera);
            render()

        }
        

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
            renderer.render(scene, camera);
        };
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousemove', onDocumentMouseMove);
        animate()

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            container?.removeChild(renderer.domElement)
        };
    }, [])

    return (
        <>
            {/* <div className=" absolute z-50 bottom-0 left-0 w-full h-screen bg-gradient-to-t from-white to-transparent" /> */}
            <div className='absolute top-0 left-0 z-0' ref={containerRef} />
        </>

    )
}

export default CoverScene