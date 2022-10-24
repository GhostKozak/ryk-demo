import { useState } from "react";
import {
    FaBars,
    FaEnvelope,
    FaHome,
    FaInstagram,
    FaLinkedin,
    FaPhoneAlt,
    FaTimes,
    FaYoutube
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
    const [toggled, setToggled] = useState(false);
    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top__container">
                    <div className="header__top__links">
                        <span className="header__top__info header__top__address"><FaHome /> Lorem ipsum dolar amet</span>
                        <span className="header__top__info header__top__email"><FaEnvelope /> example@ex.com</span>
                        <span className="header__top__info header__top__phone"><FaPhoneAlt /> 0500 000 00 00</span>
                    </div>
                    <div className="header__top__social">
                        <a href="" className="instagram"> <FaInstagram /> </a>
                        <a href="" className="youtube"> <FaYoutube /> </a>
                        <a href="" className="linkedin"> <FaLinkedin /> </a>
                    </div>
                </div>
            </div>
            <div className="container header__container">
                <div className="brand">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <button onClick={() => setToggled(!toggled)} className={`header__toggle ${toggled ? "active" : ""}`} type="button" >
                    <FaBars className="bars" />
                    <FaTimes className="close" />
                </button>
                <nav className={toggled ? "active" : ""}>
                    <ul>
                        <li><Link to="/" preventScrollReset={true} ><FaHome /></Link></li>
                        <li><Link to="/about" preventScrollReset={true}> Hakkımızda</Link></li>
                        <li><Link to="/about/test2" preventScrollReset={true}> Referanslar</Link></li>
                        <li><Link to="/contact" preventScrollReset={true}> İletişim</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;