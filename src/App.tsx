import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import ThemeToggle from './Components/ThemeToggle/ThemeToggle'
import Characters from "./Components/Characters/Characters";
import CharacterDetail from "./Components/CharacterDetail/CharacterDetail";
import Contexts from "./Components/Contexts/Context";
import LanguageGate from "./LanguageGate/LanguageGate";
import Infos from "./Components/Infos/Infos";
import Rules from "./Components/Rules/Rules";
import HomeButton from "./Components/HomeButton/HomeButton";
import Version from "./Components/Version/Version";

export default function App() {
    return (
        <>
            <LanguageGate />
            <ThemeToggle />
            <HomeButton />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/characterdetail" element={<CharacterDetail />} />
                <Route path="/contexts" element={<Contexts />} />
                <Route path="/Infos" element={<Infos />} />
                <Route path="/Rules" element={<Rules />} />
                <Route path="/Version" element={<Version />} />
            </Routes>
        </>
    )
}