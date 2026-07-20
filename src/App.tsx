import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import ThemeToggle from './Components/ThemeToggle/ThemeToggle'
import Characters from "./Components/Characters/Characters";

function SimplePage({ title }: { title: string }) {
    return <h1>{title}</h1>
}

export default function App() {
    return (
        <>
            <ThemeToggle />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/page-2" element={<SimplePage title="Page 2" />} />
                <Route path="/page-3" element={<SimplePage title="Page 3" />} />
                <Route path="/page-4" element={<SimplePage title="Page 4" />} />
            </Routes>
        </>
    )
}