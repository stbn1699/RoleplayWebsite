import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import ThemeToggle from './Components/ThemeToggle/ThemeToggle'
import Characters from "./Components/Characters/Characters";
import CharacterDetail from "./Components/CharacterDetail/CharacterDetail";
import Contexts from "./Components/Contexts/Context";

export default function App() {
    return (
        <>
            <ThemeToggle />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/characterdetail" element={<CharacterDetail />} />
                <Route path="/contexts" element={<Contexts />} />
            </Routes>
        </>
    )
}