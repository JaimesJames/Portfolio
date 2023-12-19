import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const Models: React.FC = () => {

    const models = [
        { id: 1, path: 'model/pump.gltf' },
        { id: 2, path: 'model/bee.gltf' },
        { id: 3, path: 'model/shoes.gltf' },
    ]

    const containerRef = useRef<HTMLDivElement>(null);

    const [currentModel, setCurrentModel] = useState(0)

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGL1Renderer();
        const loader = new GLTFLoader();

        const container = containerRef.current;

        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        container?.appendChild(renderer.domElement);
        camera.position.z = 100;
        renderer.setClearColor(0x242424, 1);



        loader.load(`${models[1].path}`, function (gltf: any) {
            gltf.scene.scale.set(3, 3, 3);
            const root = gltf.scene;
            scene.add(root);
            const renderScene = () => {
                renderer.render(scene, camera);
                requestAnimationFrame(renderScene);
                console.log(root.rotation.y)

            };

            // Call the renderScene function to start the animation loop
            animate()
            renderScene();

        }, undefined, function (error: any) {

            console.error(error);

        });



        const animate = () => {

            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
            render()

        }

        const handleResize = () => {
            const width = window.innerWidth / 2;
            const height = window.innerHeight / 2;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        };

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0.5, 0);
        controls.update();
        controls.enablePan = false;
        controls.enableDamping = true;
        // controls.maxAzimuthAngle = 4
        // controls.maxPolarAngle = 2
        // controls.minAzimuthAngle = -4
        // controls.minPolarAngle = -2
        controls.enableZoom = false


        let mouseX = 0;
        let mouseY = 0;

        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        const onDocumentMouseMove = (event: any) => {

            mouseX = (event.clientX - windowHalfX) / 100;
            mouseY = (event.clientY - windowHalfY) / 100;

        }

        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        // const spherep1 = new THREE.SphereGeometry(3, 50, 50)

        // const spherep2 = new THREE.SphereGeometry(.5, 50, 50)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 1)
        scene.add(directionalLight);

        // const pointLight1 = new THREE.PointLight(0xffbc82, 10000);
        // pointLight1.add(new THREE.Mesh(spherep1, new THREE.MeshBasicMaterial({ color: 0xffffff })));
        // pointLight1.position.set(100, 0, 0)

        // const pointLight2 = new THREE.PointLight(0xffbc82, 10000);
        // pointLight2.add(new THREE.Mesh(spherep2, new THREE.MeshBasicMaterial({ color: 0xffffff })));
        // pointLight2.position.set(10, 0, 0)

        // const pointLight3 = new THREE.PointLight(0xffbc82, 10000);
        // pointLight3.add(new THREE.Mesh(spherep2, new THREE.MeshBasicMaterial({ color: 0xffffff })));
        // pointLight3.position.set(10, 0, 0)

        // const small1 = new THREE.Group()
        // small1.add(pointLight2)
        // small1.position.set(100, 0, 0)

        // const small2 = new THREE.Group()
        // small2.add(pointLight3)
        // small2.position.set(-100, 20, 0)


        // const fast = new THREE.Group()
        // fast.add(pointLight1)
        // scene.add(small1)
        // scene.add(small2)
        // scene.add(fast);



        const render = () => {
            renderer.render(scene, camera);

        }

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
            <div className='flex'>
                <div className='w-full h-full flex justify-center' ref={containerRef} />
                {/* <div className='w-52 h-52 bg-121212' onClick={()=>setCurrentModel((currentModel+1)%3)}></div > */}
            </div>

        </>
    )
}

export default Models