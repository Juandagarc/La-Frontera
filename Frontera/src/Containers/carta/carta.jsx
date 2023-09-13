import { Link } from 'react-router-dom';
import './carta.css';

const Carta = () => {
    return (

        <div className="carta">
            <div className='Mini-navbar'>
            <Link to="/ ">
                <span class="material-symbols-outlined">
                arrow_back_ios
                </span>
            </Link>
            </div>
            <h1 className="carta-title">Menu</h1>
        </div>
    )
}

export default Carta;