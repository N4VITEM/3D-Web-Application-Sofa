import { AppShell, Center, Flex, Text } from "@mantine/core";
import three_js from '/ThreeJs.png';

export default function Header() {
    return (
        <AppShell.Header>
            <Center h={60}>
                <Flex w='100%' maw={1340} h={60} align='center' justify='space-between' px={5}>
                    <Flex direction='row' align='center' style={{ cursor: 'pointer' }}>
                        <img width={50} height={50} src={three_js} />
                        <Text style={{ textWrap: 'nowrap'}} onClick={() => window.location.href = 'https://threejs.org'} className="font-m">Three JS</Text>
                    </Flex>
                    {window.innerWidth > 500 && <Text style={{ textWrap: 'nowrap'}} className="font-l" >Scene By Ivan Metkalev</Text>}
                    <Flex>
                        <Text onClick={() => window.location.href = 'https://petrozavodsk.hh.ru/resume/d33a5e53ff0d4034290039ed1f306559716739'} mx={5} className="font-m" style={{ cursor: 'pointer' }}>Резюме</Text>
                        <Text onClick={() => window.location.href = 'https://github.com/N4VITEM/3D-Web-Application-Sofa'} mx={5} className="font-m" style={{ cursor: 'pointer' }}>Проект</Text>
                    </Flex>
                </Flex>
            </Center>
        </AppShell.Header>
    )
}