import './skills.css'
import html5FillIcon from '../../../resources/icons/html5-fill.svg'
import css3LineIcon from '../../../resources/icons/css3-fill.svg'
import jsIcon from '../../../resources/icons/js_icon.svg'
import reactjsFillIcon from '../../../resources/icons/reactjs-line.svg'
import sassIcon from '../../../resources/icons/sass_icon.svg'
import githubFillIcon from '../../../resources/icons/github-fill.svg'
import npmjsLineIcon from '../../../resources/icons/npmjs-line.svg'
import figmaIcon from '../../../resources/icons/figma_icon.svg'
import {motion} from "framer-motion";
import {appCardAnimation} from '../../helpers/animation'

const cardData = [
    {
        id:1,
        img: html5FillIcon,
        title:"HTML"
    },{
        id:2,
        img: css3LineIcon,
        title:"CSS"
    },{
        id:3,
        img: jsIcon,
        title:"JavaScript"
    },{
        id:4,
        img: reactjsFillIcon,
        title:"React"
    },{
        id:5,
        img: sassIcon,
        title:"Sass"
    },{
        id:6,
        img: githubFillIcon,
        title:"Github"
    },{
        id:7,
        img: npmjsLineIcon,
        title:"npm"
    },{
        id:8,
        img: figmaIcon,
        title:"Figma"
    }
]

function Skills() {
    return (
        <>
            <section className="skills section" id="skills">
                <div className="title section__title-2">
                    <p>Skills</p>
                </div>
                <div className="skills__container container">
                    <div className="skills__cards">
                        {cardData
                            .map((cardData,index) => (
                                <motion.div
                                    variants={appCardAnimation}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true,
                                    }}
                                    custom={index}>
                            <SkillsCard
                                key={cardData.id}
                                cardImg={cardData.img}
                                cardTitle={cardData.title}
                            />
                                </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills

function SkillsCard({ cardImg, cardTitle}) {
    return (
        <article className="skills__card">
            <div className="skills__border"></div>
            <div className="skills__content">
                <img className="skills__icon" src={cardImg} alt=""/>
                <div className="title skills__title">{cardTitle}</div>
            </div>
        </article>
    )
}