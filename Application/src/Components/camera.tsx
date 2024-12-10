import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'

export default function CameraManager({
    cameras,
    activeIndex,
}: {
    cameras: THREE.PerspectiveCamera[];
    activeIndex: React.MutableRefObject<number>;
}) {
    const { camera } = useThree();
    const targetPosition = useRef(new THREE.Vector3());
    const targetRotation = useRef(new THREE.Euler());

    useFrame(() => {
        if (cameras.length > 0) {
            const activeCamera = cameras[activeIndex.current];
            targetPosition.current.copy(activeCamera.position);
            targetRotation.current.copy(activeCamera.rotation);
            camera.position.lerp(targetPosition.current, 0.1);
            camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRotation.current.x, 0.1);
            camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, targetRotation.current.y, 0.1);
            camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, targetRotation.current.z, 0.1);
        }
    });

    return null;
}