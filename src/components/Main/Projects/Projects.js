import './projects.css'
import githubFillIcon from '../../../resources/icons/github-fill.svg'
import viewIcon from '../../../resources/icons/view_icon.svg'
import project_1 from '../../../resources/images/projects/project-1.jpg'
import project_2 from '../../../resources/images/projects/project-2.jpg'
import project_3 from '../../../resources/images/projects/project-3.jpg'
import {motion} from "framer-motion";
import {appCardAnimation} from '../../helpers/animation'

const projectData = [
    {
        id:1,
        img: project_1,
        subTitle: "Website",
        title:"Project 1",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "favorite",
    },  {
        id:2,
        img: project_1,
        subTitle: "Website",
        title:"Project 1",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "favorite",
    },  {
        id:3,
        img: project_1,
        subTitle: "Website",
        title:"Project 1",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwsdwwasdwasdwasdwasdwwasdwasdwasdwasdwwdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "favorite",
    }, {
        id:4,
        img: project_1,
        subTitle: "Website",
        title:"Project 1",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasdwasdwwdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "favorite",
    },{
        id:5,
        img: project_1,
        subTitle: "Website",
        title:"Project 1",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasdwasdwwdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "favorite",
    }, {
        id:6,
        img: project_2,
        subTitle: "Website",
        title:"Project Project",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwdwwasdwasdwasdwasdwv",
        gitLink: "",
        viewLink: "",
        status: "educational",
    },{
        id:7,
        img: project_2,
        subTitle: "Website",
        title:"Project Project",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdwwasdwdwwasdwasdwasdwasdwv",
        gitLink: "",
        viewLink: "",
        status: "educational",
    }, {
        id:8,
        img: project_3,
        subTitle: "Website",
        title:"Bee BeeEEE BEEEEEEE",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "in progress",
    },{
        id:9,
        img: project_3,
        subTitle: "Website",
        title:"Bee BeeEEE BEEEEEEE",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "in progress",
    },{
        id:10,
        img: project_3,
        subTitle: "Website",
        title:"Bee BeeEEE BEEEEEEE",
        description: "wasdwasdwasdwasdwwasdwasdwasdwasdwwasdwasdwasdwasdw",
        gitLink: "",
        viewLink: "",
        status: "in progress",
    },
]
function Projects() {
    return (
        <>
            <section className="projects section" id="projects">
                <div className="title section__title-1"><p>Projects</p></div>
                <div className="project__container container">
                    <div className="title projects__title"><p>Favorites</p></div>
                    <div className="projects__cards">
                        {projectData
                            .filter((cardData) => cardData.status === "favorite")
                            .map((filteredData,index) => (
                                <motion.div
                                    variants={appCardAnimation}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        // once: true,
                                    }}
                                    custom={index}>
                                    <ProjectCard
                                    key={filteredData.id}
                                    projectImg={filteredData.img}
                                    projectSubTitle={filteredData.subTitle}
                                    projectTitle={filteredData.title}
                                    projectDecr={filteredData.description}
                                    projectGit={filteredData.gitLink}
                                    projectView={filteredData.viewLink}
                                />
                                </motion.div>
                            ))}
                    </div>
                    <div className="title projects__title"><p>Educational</p></div>
                    <div className="projects__cards">
                        {projectData
                            .filter((cardData) => cardData.status === "educational")
                            .map((filteredData, index) => (
                                <motion.div
                                    variants={appCardAnimation}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        // once: true,
                                    }}
                                    custom={index}>
                                <ProjectCard
                                    key={filteredData.id}
                                    projectImg={filteredData.img}
                                    projectSubTitle={filteredData.subTitle}
                                    projectTitle={filteredData.title}
                                    projectDecr={filteredData.description}
                                    projectGit={filteredData.gitLink}
                                    projectView={filteredData.viewLink}
                                />
                                </motion.div>
                            ))}
                    </div>
                    <div className="title projects__title"><p>In progress</p></div>
                    <div className="projects__cards">
                        {projectData
                            .filter((cardData) => cardData.status === "in progress")
                            .map((filteredData, index) => (
                            <motion.div
                            variants={appCardAnimation}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                            // once: true,
                        }}
                            custom={index}>
                                <ProjectCard
                                    key={filteredData.id}
                                    projectImg={filteredData.img}
                                    projectSubTitle={filteredData.subTitle}
                                    projectTitle={filteredData.title}
                                    projectDecr={filteredData.description}
                                    projectGit={filteredData.gitLink}
                                    projectView={filteredData.viewLink}
                                />
                            </motion.div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects

function ProjectCard({projectImg,projectSubTitle,projectTitle,projectDecr,projectGit,projectView}) {
    return (
        <div className="projects__card">
            <div className="projects__image">
                <img src={projectImg} alt="" className="projects__img"/>
                <div className="projects__links">
                    <a href={projectGit} target="_blank">
                        <div className="projects__link">
                            <img src={githubFillIcon} alt="" className="projects__link-icon"/>
                        </div>
                    </a>
                    <a href={projectView} target="_blank">
                        <div className="projects__link">
                            <img src={viewIcon} alt="" className="projects__link-icon"/>
                        </div>
                    </a>
                </div>
            </div>
            <div className="project__content">
                <div className="project__subtitle">{projectSubTitle}</div>
                <div className="title project__title">{projectTitle}</div>
                <div className="project__description">{projectDecr}</div>
            </div>
        </div>
    )
}