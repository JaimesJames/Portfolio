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
            gltf.scene.rotation.y = -40
            models.push(gltf.scene)
            scene.add(models[0]);
        }, undefined, function (error: any) {

            console.error(error);

        });




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
        const directionalLight = new THREE.DirectionalLight(0xff8c17, 10);
        directionalLight.position.set(0, 1, 1)
        scene.add(directionalLight);

        const material = new THREE.MeshPhysicalMaterial(
            {
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                metalness: 0.5,
                roughness: 0.0,
                color: 0xffa952,
                ior: 0,
                reflectivity: 1,
                iridescence: 1,
                iridescenceIOR: 2
                // emissive: 0xffffff
            });
        const geometry1 = new THREE.SphereGeometry(10, 50, 50);
        const spherep1 = new THREE.SphereGeometry(1, 50, 50)

        const pointLight1 = new THREE.PointLight(0xffbc82, 500);
        pointLight1.add(new THREE.Mesh(spherep1, new THREE.MeshBasicMaterial({ color: 0xffffff })));
        pointLight1.position.set(20, -10, 0)

        const fast2 = new THREE.Group()

        fast2.add(pointLight1)
        scene.add(fast2)
        const animate = () => {

            requestAnimationFrame(animate);

            fast2.rotation.z -= 0.05
            fast2.rotation.x -= 0.005
            controls.update();
            renderer.render(scene, camera);
            render()

        }

        const render = () => {
            renderer.render(scene, camera);

        }
        console.log(models)

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousemove', onDocumentMouseMove);
        animate()


        return () => {
            window.removeEventListener('resize', handleResize);
            container?.removeChild(renderer.domElement)

        };

    }, [])

    return (
        <>
            <div className='w-full h-auto p-5 md:bg-amber-500 mt-32'>
                <div className="container md:h-500 w-full flex  content-center justify-center gap-5 md:bg-amber-500 rounded-2xl md:text-ci-1 text-white ">
                    <div className='h-full w-2/3  bg-amber-300 rounded-2xl  backdrop-filter backdrop-blur-2xl bg-opacity-20 shadow-lg shadow-amber-600'>
                        <div className='w-full h-full flex justify-center' ref={containerRef} />
                    </div>
                    <div className='h-full w-1/3 flex flex-col gap-6'>
                        <div className='w-full px-5 py-10 bg-stone-800 rounded-2xl  backdrop-filter backdrop-blur-2xl  shadow-lg shadow-amber-600'>

                        </div>
                        <p className='p-3'>I have used Maya and Blender for Modeling work. <br /> I actually interest in Technical Artist and Pipeline position Anyway I can work in either, Modeling Rigging Animation ETC.</p>
                        <p className='p-3'>You can see my another 3D working and Artwork in here!</p>
                        <div className="p-3 w-auto h-auto flex md:flex-row justify-center md:justify-start gap-4">
                            <a href="https://www.artstation.com/jaimesjames">
                                <div className="w-14 h-14 bg-ci-1 rounded-full  flex justify-center content-center p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path fill="#ffffff" d="M2 377.4l43 74.3A51.4 51.4 0 0 0 90.9 480h285.4l-59.2-102.6zM501.8 350L335.6 59.3A51.4 51.4 0 0 0 290.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275 304.5l-115.5-200L44 304.5z" /></svg>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/popingalle/">
                                <div className="w-14 h-14 bg-ci-1 rounded-full flex justify-center content-center p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="33" width="33" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Models