import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { ThemeProvider } from './Context/ThemeContext'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)

reportWebVitals()