import { Routes, Route } from 'react-router-dom'
import HomePage from "./Components/HomePage/HomePage";

function SimplePage({ title }: { title: string }) {
    return (
        <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h1>{title}</h1>
        </main>
    )
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page-1" element={<SimplePage title="Page 1" />} />
            <Route path="/page-2" element={<SimplePage title="Page 2" />} />
            <Route path="/page-3" element={<SimplePage title="Page 3" />} />
        </Routes>
    )
}