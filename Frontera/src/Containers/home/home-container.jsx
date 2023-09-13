import logo from '../../assets/frontera-logo.png'
import Footer from '../../components/footer/footer';
import "./home-container.css"
import { Link } from "react-router-dom";

const HomeContainer = () => {
    return (
        <div className='home'>
            <h1 className='main-title'>¡Bienvenido a la Frontera!</h1>
            <img src={ logo } alt="logo" className='img-logo' />

            <div className='list-container'>
                <p className='list-container text'> Echa un vistazo a nuestro delicioso menú aquí en La Frontera</p>
                    <button className='list-container button' > <Link to="/Carta">ver menú</Link></button>
            </div>
            <Footer />
        </div>
    )
}

export default HomeContainer;