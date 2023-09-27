import './scrollButton.css'
import arrowUpSLine from '../../resources/icons/arrow-up-s-line.svg'
import {useEffect, useState} from "react";
import {Link} from "react-scroll";

function ScrollButton (){
    const [isScroll, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 350) {
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
                <Link
                    className={`button__scroll-up ${isScroll ? "show-scroll" : ''}`}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}>
                    <img src={arrowUpSLine} alt="" className="scroll-up__btn-img"/>
                </Link>
        </>
    )
}
export default ScrollButton