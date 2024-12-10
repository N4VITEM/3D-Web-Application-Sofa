import { AppShell } from "@mantine/core";
import Player from "../Components/player";

export default function MainPage() {
    return (
        <AppShell.Main w='100%' h='100%'>
            <Player />
        </AppShell.Main>
    )
}