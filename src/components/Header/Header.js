import './header.css'
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import {useState} from "react";
function Header(){
    return (
        <>
            <header className="header" id="header">
                <Navbar/>

            </header>
        </>
    )
}
export default Header

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <div className="nav__logo-circle">F</div>
                    <div className="nav_logo-name">Filipp Gladishev</div>
                </a>
                <div className={`nav__menu ${showMenu ? "show-menu" : ''}`}>
                    <div className="nav__title">Menu</div>
                    <div className="title nav__name">Feel</div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={toggleMenu}>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={toggleMenu}>About me</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={toggleMenu}>Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link" onClick={toggleMenu}>Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={toggleMenu}>Contact me</a>
                        </li>
                    </ul>
                    <div className="nav__close">
                        <div className="nav__close-btn" onClick={toggleMenu}>
                            <CloseLineIcon/>
                        </div>
                    </div>
                </div>
                <div className="nav__buttons">
                    <div className="nav__toggle" onClick={toggleMenu}>
                        <MenuLineIcon/>
                    </div>
                </div>
            </nav>
        </>
    )
}