import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Sofa, { Loading } from "./loader";
import HUD, { Components } from "./hud";
import CameraManager from "./camera";

export default function Player() {
    const [Cameras, setCameras] = useState<THREE.PerspectiveCamera[]>([]);
    const ActiveCamera = useRef(0);
    const [Description, setDescription] = useState<ReactNode>(Components[0]);
    const isScrolling = useRef(false);

    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    const handleWheel = (event: WheelEvent) => {
        if (isScrolling.current || Cameras.length === 0) return;

        const direction = event.deltaY > 0 ? 1 : -1;
        const nextIndex = (ActiveCamera.current + direction + Cameras.length) % Cameras.length;
        ActiveCamera.current = nextIndex;

        setDescription(Components[nextIndex]);

        isScrolling.current = true;
        setTimeout(() => {
            isScrolling.current = false;
        }, 500);
    };

    const handleTouchStart = (event: TouchEvent) => {
        touchStart.current = event.changedTouches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
        touchEnd.current = event.changedTouches[0].clientY;

        const direction = touchEnd.current - touchStart.current;
        if (Math.abs(direction) > 50) {
            const nextIndex = (ActiveCamera.current + (direction > 0 ? -1 : 1) + Cameras.length) % Cameras.length;
            ActiveCamera.current = nextIndex;
            setDescription(Components[nextIndex]);
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [Cameras]);

    useEffect(() => {
        const handleResize = () => {
            const canvas = document.querySelector("canvas");
            if (canvas) {
                const width = window.innerWidth;
                const height = window.innerHeight;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const resizeHandler = () => {
            const aspect = window.innerWidth / window.innerHeight;
            Cameras.forEach((camera) => {
                camera.aspect = aspect;
                camera.updateProjectionMatrix();
            });
        };

        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [Cameras]);

    return (
        <Suspense fallback={<Loading />}>
            <Canvas
                style={{ width: "100%", height: "100%", position: 'absolute', top: '0', left: '0' }}
                camera={{
                    position: Cameras.length > 0 ? Cameras[0].position : [0, 1, 0],
                    fov: 75,
                    zoom: 3
                }}
            >
                {Cameras.length > 0 && <CameraManager cameras={Cameras} activeIndex={ActiveCamera} />}
                <Sofa setCameras={setCameras} />
                <Html center>
                    <HUD component={Description} />
                </Html>
            </Canvas>
        </Suspense>
    );
}
