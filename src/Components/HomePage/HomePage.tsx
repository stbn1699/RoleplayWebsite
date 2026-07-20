import {useNavigate} from "react-router-dom";
import './HomePage.scss'
import Button from "../Button/Button";

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="HomePage">
            <h1 className="title">~Bienvenue~</h1>
            <div className="buttons">
                <Button label="Personnages" onClick={() => navigate('/page-1')}/>
                <Button label="Personnages" onClick={() => navigate('/page-2')}/>
                <Button label="Personnages" onClick={() => navigate('/page-3')}/>
                <Button label="Personnages" onClick={() => navigate('/page-4')}/>
            </div>
        </div>
    )
}
