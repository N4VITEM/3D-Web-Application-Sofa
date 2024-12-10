import { AppShell } from "@mantine/core"
import { Route, Routes } from "react-router-dom"
import MainPage from "./Pages/main"
import Header from "./Components/header"

function App() {
  return (
    <AppShell header={{ height: 60 }} w='100vw' h='100vh'>
      <Header />
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </AppShell>
  )
}

export default App
