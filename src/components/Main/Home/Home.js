import './home.css'
import home_profile from '../../../resources/images/home-profile.webp'
import curved_arrow from '../../../resources/images/curved-arrow.svg'
import random_lines from '../../../resources/images/random-lines.svg'
import arrowDownSLineIcon from '../../../resources/icons/arrow-down-s-line.svg'
import {Link} from "react-scroll";
import {motion} from "framer-motion";
import {appOnTheLeftAnimation, appOnTheRightAnimation} from '../../helpers/animation'

function Home(){
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container">
                    <motion.div className="title home__name"
                                variants={appOnTheRightAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    // once: true,
                                }}>
                        Filipp Gladishev
                    </motion.div>
                    <div className="home__profile">
                        <motion.div className="home__image"
                                    variants={appOnTheLeftAnimation}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        // once: true,
                                    }}>
                            <img src={home_profile} alt="" className="home__img"/>
                            <div className="home__shadow"></div>
                            <img src={curved_arrow} alt="" className="home__arrow"/>
                            <img src={random_lines} alt="" className="home__line"/>
                            <div className="geometric-box"></div>
                        </motion.div>
                    </div>
                    <motion.div className="home__info"
                                variants={appOnTheRightAnimation}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    // once: true,
                                }}>
                        <p className="home__description">
                            <b>Frontend developer</b>. I strive to create web applications that are not only colorful and modern, but also provide excellent user interaction. My goal is to provide users with websites that not only meet their needs, but also leave a pleasant impression.
                        </p>
                            <Link
                                className="home__scroll"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={300}>
                                <div className="home__scroll-box">
                                    <img className="arrowDownSLineIcon" src={arrowDownSLineIcon} alt=""/>
                                </div>
                                <span className="home__scroll-text">Scroll down</span>
                            </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
export default Home