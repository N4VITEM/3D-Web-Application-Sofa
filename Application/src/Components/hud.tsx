import { ReactNode } from "react";

type HUDcomponent = () => JSX.Element;

export default function HUD({ component }: { component: ReactNode }) {
    return (
        component
    );
}

export const Components: HUDcomponent[] = [
    () => (
        <div className="C_Wellcome">
            <h1>Добро Пожаловать!</h1>
            <h2>(используйте колесо мыши или  свайпы для навигации)</h2>
        </div>
    ),
    () => (
        <div className="C_Slide1">
            <h1>Этот проект создан для демонстрации одного из множества способов использования 3D для интерактивной верстки вашего сайта.</h1>
        </div>
    ),
    () => (
        <div className="C_Slide2">
            <h1>
                <p>Меня зовут Иван Меткалев и я занимаюсь Fullstack разработкой систем.</p>
                <p>До этого я работал как 3D визуализатор, а сейчас я разрабатываю системы на стеке Node JS.</p>
                <p>Мой выбор технологий и библиотек довольно обширный, вы можете подробнее ознакомится с моим <a href="https://petrozavodsk.hh.ru/resume/d33a5e53ff0d4034290039ed1f306559716739">резюме</a> в случае, если вы заинтересованы в сотрудничестве со мной.</p>
            </h1>
        </div>
    ),
    () => (
        <div className="C_Slide3">
            <h1>
                <p>Если вы заинтересованы в том чтобы посмотреть как используется технология Three JS в коде - </p>
                <p>то прошу посетить мой <a href="https://github.com/N4VITEM/3D-Web-Application-Sofa">GitHub</a></p>
            </h1>
            <h2>
                <p>Cтэк этого проекта:</p>
                <ul>
                    <li>React Vite</li>
                    <li>Mantine</li>
                    <li>Three JS</li>
                </ul>
            </h2>
        </div>
    ),
    () => (
        <div className="C_Slide4">
            <h1>
                <p>Советую посетить сайт <a href="https://threejs.org">Three JS</a> для того чтобы посмотреть на что еще способен этот фреймворк</p>
            </h1>
        </div>
    ),
]