import { Link } from 'react-router-dom';
import './carta.css';
import Hamburguer from '../../assets/hamburguer.jpeg';
import Footer from '../../components/footer/footer';

const Carta = () => {
    return (

        <div className="carta">
            <div className='Mini-navbar'>
            <Link to="/ ">
                <span className="material-symbols-outlined">
                arrow_back_ios
                </span>
            </Link>
            </div>
            <h1 className="carta-title">Menu</h1>
            <hr />
            <p className='carta-text'>Elige tu favorito:</p>
            <div className='opciones'>
                <h2 className='carta-text'> COMBO 1: </h2>
                <p className='carta-text cursive'> Hamburguesa + Papas + Gaseosa </p>
                <p className='carta-text description'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nobis similique sint, illo error, incidunt eius cupiditate quis dignissimos aut itaque magnam a totam excepturi distinctio? Blanditiis quo nostrum pariatur? </p>
                <img src={Hamburguer} alt="" className="product-image" />
            </div>
            <br />
            <div className='opciones'>
                <h2 className='carta-text'> COMBO 2: </h2>
                <p className='carta-text cursive'> Hamburguesa + Papas + Gaseosa </p>
                <p className='carta-text description'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nobis similique sint, illo error, incidunt eius cupiditate quis dignissimos aut itaque magnam a totam excepturi distinctio? Blanditiis quo nostrum pariatur? </p>
                <img src={Hamburguer} alt="" className="product-image" />
            </div>
            <br />
            <div className='opciones'>
                <h2 className='carta-text'> COMBO 3: </h2>
                <p className='carta-text cursive'> Hamburguesa + Papas + Gaseosa </p>
                <p className='carta-text description'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nobis similique sint, illo error, incidunt eius cupiditate quis dignissimos aut itaque magnam a totam excepturi distinctio? Blanditiis quo nostrum pariatur? </p>
                <img src={Hamburguer} alt="" className="product-image" />
            </div>
            <br />
            <div className='opciones'>
                <h2 className='carta-text'> COMBO 4: </h2>
                <p className='carta-text cursive'> Hamburguesa + Papas + Gaseosa </p>
                <p className='carta-text description'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nobis similique sint, illo error, incidunt eius cupiditate quis dignissimos aut itaque magnam a totam excepturi distinctio? Blanditiis quo nostrum pariatur? </p>
                <img src={Hamburguer} alt="" className="product-image" />
            </div>
            <br />
            <Footer></Footer>
        </div>
    )
}

export default Carta;