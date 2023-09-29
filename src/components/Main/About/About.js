import './about.css'
import about_profile from '../../../resources/images/about-profile.webp'
import about_lines from '../../../resources/images/random-lines.svg'
import sendPlaneFillIcon from '../../../resources/icons/send-plane-fill.svg'
import {Link} from "react-scroll";
import {motion} from "framer-motion";
import {appOnTheLeftAnimation, appOnTheRightAnimation} from '../../helpers/animation'

function About(){
    return (
        <>
            <section className="about section" id="about">
                <div className="about__container container">
                    <motion.div
                        className="title section__title-1"
                        variants={appOnTheLeftAnimation}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}>
                        <p>About Me</p>
                    </motion.div>
                    <div className="about__profile">
                        <motion.div className="about__image"
                             variants={appOnTheRightAnimation}
                             initial="initial"
                             whileInView="animate"
                             viewport={{
                                 // once: true,
                             }}>
                            <img src={about_profile} alt="" className="about__img"/>
                            <div className="about__shadow">
                                <div className="geometric-box"></div>
                                <img src={about_lines} alt="" className="about__line"/>
                                <div className="about__box"></div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="about__info"
                         variants={appOnTheLeftAnimation}
                         initial="initial"
                         whileInView="animate"
                         viewport={{
                             // once: true,
                         }}>
                    <div className="about__description">
                        I am passionate about creating <b>Web pages</b> with UI/UX. I do my projects as best as possible. I am convinced that a successful frontend developer should not only create beautiful interfaces, but also make them intuitive and user-friendly.<br/><br/>I am <b>always ready for new growth opportunities</b> in frontend development. If you have interesting projects or ideas, feel free to contact me. Let's make the internet better together!
                    </div>
                    <div className="about__buttons">
                        <Link
                            className="button about__button"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={300}>
                            <img className="sendPlaneFillIcon" src={sendPlaneFillIcon} alt=""/>Contact me
                        </Link>
                    </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
export default About