import './header.css'
import closeLineIcon from '../../resources/icons/close-line.svg'
import menuLineIcon from '../../resources/icons/menu-line.svg'
import moonIcon from '../../resources/icons/moon-line.svg'
import sunIcon from '../../resources/icons/sun-line.svg'

import {useState, useEffect, useRef} from "react";
import {Link} from "react-scroll";

function Header(){
    //=========================================NAVBAR SHADOW
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
            <header className={`header ${isScroll ? "header_shadow" : ''}`} id="header">
                <Navbar/>
            </header>
        </>
    )
}
export default Header

function Navbar() {
    //=========================================Show NAVBAR mobile
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    //==========================================For dark theme
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme","dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme","light")
    }
    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode()
        else setLightMode()
    }
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme === "dark"){
        setDarkMode()
    }
    else {
        setLightMode()
    }

    const [isDarkTheme, setMode] = useState((document.querySelector('[data-theme]').getAttribute('data-theme') === "dark"))
    const toggleModeBtn = () => {
        setMode(!isDarkTheme)
    }

    //=========================================Close Navbar outside Navbar
    const closeRef = useRef(null)
    useEffect(() => {
        // Обработчик события для клика на документе
        const handleClickOutside = (event) => {
            if (closeRef.current && !closeRef.current.contains(event.target) && showMenu) {
                toggleMenu();
            }
        };

        // Обработчик события при монтировании компонента
        document.addEventListener('mousedown', handleClickOutside);

        // Удаляем обработчик события при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);

    return (
        <>
            <nav className="nav container">
                    <Link
                        className="nav__logo"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                        onClick={toggleMenu}>
                        <div className="nav__logo-circle">F</div>
                        <div className="nav_logo-name">Filipp Gladishev</div>
                    </Link>
                <div className={`nav__menu ${showMenu ? "show-menu" : ''}`} ref={closeRef}>
                    <div className="nav__title">Menu</div>
                    <div className="title nav__name">Feel</div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link
                                className="nav__link"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}
                                onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                className="nav__link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-0}
                                duration={300}
                                onClick={toggleMenu}>
                                About me
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                className="nav__link"
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}
                                onClick={toggleMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                className="nav__link"
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}
                                onClick={toggleMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                className="nav__link nav__link-button-contact"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}
                                onClick={toggleMenu}>
                                Contact me
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__close">
                        <div className="nav__close-btn" onClick={toggleMenu}>
                            <img className="closeLineIcon" src={closeLineIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="nav__buttons">
                    <input
                        className="darkMode-input"
                        type="checkbox"
                        id="mode-toggle"
                        defaultChecked={selectedTheme === "dark"}
                        onChange={toggleTheme}
                    />
                    <label htmlFor="mode-toggle" className="mode-toggle__label">
                            <img src={`${isDarkTheme ? moonIcon : sunIcon}`} alt="Theme Mode" className="dark-mode__img" onClick={toggleModeBtn}/>
                    </label>
                    <img src={menuLineIcon} alt="" className="nav__toggle" onClick={toggleMenu}/>
                </div>
            </nav>
        </>
    )
}