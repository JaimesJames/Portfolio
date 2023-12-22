import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const Models: React.FC = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const models: any = []

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGL1Renderer();
        const loader = new GLTFLoader();

        const container = containerRef.current;

        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        container?.appendChild(renderer.domElement);
        camera.position.z = 30;
        renderer.setClearColor(0x242424, 0);

        loader.load(`model/bee.gltf`, function (gltf: any) {
            gltf.scene.scale.set(1, 1, 1);
            models.push(gltf.scene)
            scene.add(models[0]);
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

        const handleClick = (selectedModelIndex: any) => {
            if (selectedModelIndex >= 0 && selectedModelIndex < models.length) {
                // Clear the scene
                scene.remove(...scene.children);

                // Add the selected model to the scene
                scene.add(models[selectedModelIndex]);
                scene.add(directionalLight);
                render()


            } console.log(models.length)
        };

        return () => {
            window.removeEventListener('resize', handleResize);
            container?.removeChild(renderer.domElement)

        };

    }, [])

    return (
        <>
            <div className='flex'>
                <div className='w-full h-full flex justify-center' ref={containerRef} />
            </div>

        </>
    )
}

export default Models