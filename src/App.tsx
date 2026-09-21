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
import NotFound from "./Components/NotFound/NotFound";
import { ROUTES } from './routes'

export default function App() {
    return (
        <>
            <LanguageGate />
            <div className="appControls">
                <HomeButton />
                <ThemeToggle />
            </div>

            <Routes>
                <Route path={ROUTES.home} element={<HomePage />} />
                <Route path={ROUTES.characters} element={<Characters />} />
                <Route path={ROUTES.characterDetail} element={<CharacterDetail />} />
                <Route path={ROUTES.contexts} element={<Contexts />} />
                <Route path={ROUTES.infos} element={<Infos />} />
                <Route path={ROUTES.rules} element={<Rules />} />
                <Route path={ROUTES.version} element={<Version />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}