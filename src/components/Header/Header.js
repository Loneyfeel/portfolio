import './header.css'
import closeLineIcon from '../../resources/icons/close-line.svg'
import menuLineIcon from '../../resources/icons/menu-line.svg'
import {useState, useEffect} from "react";
function Header(){
    const [isScroll, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.addEventListener("scroll", onScroll)
    }, [])
    return (
        <>
            <header className={`header header${isScroll ? "_shadow" : ''}`} id="header">
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
                            <img className="closeLineIcon" src={closeLineIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="nav__buttons">
                    <div className="nav__toggle" onClick={toggleMenu}>
                        <img src={menuLineIcon} alt=""/>
                    </div>
                </div>
            </nav>
        </>
    )
}