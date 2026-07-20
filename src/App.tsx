import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import ThemeToggle from './Components/ThemeToggle/ThemeToggle'

function SimplePage({ title }: { title: string }) {
    return <h1>{title}</h1>
}

export default function App() {
    return (
        <>
            <ThemeToggle />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/page-1" element={<SimplePage title="Page 1" />} />
                <Route path="/page-2" element={<SimplePage title="Page 2" />} />
                <Route path="/page-3" element={<SimplePage title="Page 3" />} />
                <Route path="/page-4" element={<SimplePage title="Page 4" />} />
            </Routes>
        </>
    )
}