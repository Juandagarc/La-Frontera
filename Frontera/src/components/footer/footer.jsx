import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <h3>Conocenos mas:</h3>
            <br />
            <ul className="social-icons">
                {/* Instagram */}
                <li>
                    <a href="https://www.instagram.com/lafronterapereira/?hl=es" className="social-icon instagram">
                        <i className="fab fa-instagram icon"></i>
                    </a>
                </li>
                <li>
                    {/* Crear uno para enviar correo */}
                    <a href="mailto:juan.garcia17@utp.edu.co?subject=Feedback&body=Message" className="social-icon whatsapp">
                    <i className="fab fa-whatsapp icon"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/juan-david-garcia-arce-50169a283/" className="social-icon facebook">
                        <i className="fab fa-facebook icon"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
