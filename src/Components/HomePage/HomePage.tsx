import {useNavigate} from "react-router-dom";
import './HomePage.scss'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="HomePage">
            <h1>Bienvenue Welcome !</h1>
            <div className="buttons">
                <button onClick={() => navigate('/page-1')}>Bouton 1</button>
                <button onClick={() => navigate('/page-2')}>Bouton 2</button>
                <button onClick={() => navigate('/page-3')}>Bouton 3</button>
            </div>
        </div>
    )
}
