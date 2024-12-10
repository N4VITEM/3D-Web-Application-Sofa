import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Center, Flex, Loader, Text } from "@mantine/core";

export default function Sofa({ setCameras }: { setCameras: (cameras: THREE.PerspectiveCamera[]) => void }) {
    const gltf = useLoader(GLTFLoader, "https://s3.ru1.storage.beget.cloud/9394327c3731-metkalevdigitalsystems/scene.gltf");

    useEffect(() => {
        const perspectiveCameras = gltf.cameras?.filter(
            (camera): camera is THREE.PerspectiveCamera => camera instanceof THREE.PerspectiveCamera
        ) || [];
        setCameras(perspectiveCameras);
    }, [gltf, setCameras]);

    return <primitive object={gltf.scene} dispose={null} />;
}

export function Loading() {
    return (
        <Center w='100%' h='100%'>
            <Flex direction='column' align='center' justify='center'>
                <Text className="font-xl">Загружаем сцену...</Text>
                <Text className="font-m">Просим вас немного подождать</Text>
                <Loader color="green" my={45} />
            </Flex>
        </Center>
    )
}