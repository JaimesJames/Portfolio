import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const Models: React.FC = () => {

    const modelers = [
        { id: 1, path: 'model/pump.gltf' },
        { id: 2, path: 'model/bee.gltf' },
        { id: 3, path: 'model/shoes.gltf' },
    ]

    const models:any = []

    const containerRef = useRef<HTMLDivElement>(null);

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



        loader.load(`model/pump.gltf`, function (gltf: any) {
            gltf.scene.scale.set(5, 5, 5);
            models.push(gltf.scene)
            scene.add(models[0]);
        }, undefined, function (error: any) {

            console.error(error);

        });

        loader.load(`model/bee.gltf`, function (gltf: any) {
            gltf.scene.scale.set(3, 3, 3);
            models.push(gltf.scene)
        }, undefined, function (error: any) {

            console.error(error);

        });

        loader.load(`model/shoes.gltf`, function (gltf: any) {
            gltf.scene.scale.set(3, 3, 3);
            models.push(gltf.scene)
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
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 1)
        scene.add(directionalLight);


        const render = () => {
            renderer.render(scene, camera);

        }
        console.log(models)

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