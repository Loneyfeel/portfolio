import './projects.css'
import html5FillIcon from "../../../resources/icons/html5-fill.svg";

const projectData = [
    {
        id:1,
        img: html5FillIcon,
        title:"HTML",
        description: "wasd",
        gitLink: "",
        viewLink: "",
        status: "",
    },
]
function Projects() {
    return (
        <>
            <section className="projects section" id="projects">
                <div className="title section__title-1"><p>Projects</p></div>
                <div className="project__container container">
                    <div className="title projects__title">Favorites</div>
                    <div className="projects__cards">
                        {projectData
                            .filter((cardData) => cardData.status === "favorite")
                            .map((filteredData) => (
                                <ProjectCard
                                    key={filteredData.id}
                                    projectImg={filteredData.img}
                                    projectTitle={filteredData.title}
                                    projectDecr={filteredData.description}
                                    projectGit={filteredData.gitLink}
                                    projectView={filteredData.viewLink}
                                />
                            ))}
                    </div>
                    <div className="title projects__title">Learn</div>
                    <div className="projects__cards">
                        {projectData
                            .filter((cardData) => cardData.status === "learn")
                            .map((filteredData) => (
                                <ProjectCard
                                    key={filteredData.id}
                                    projectImg={filteredData.img}
                                    projectTitle={filteredData.title}
                                    projectDecr={filteredData.description}
                                    projectGit={filteredData.gitLink}
                                    projectView={filteredData.viewLink}
                                />
                            ))}
                    </div>
                    <div className="title projects__title">In progress</div>
                    <div className="projects__cards">
                        {projectData
                            .filter((cardData) => cardData.status === "in progress")
                            .map((filteredData) => (
                                <ProjectCard
                                    key={filteredData.id}
                                    projectImg={filteredData.img}
                                    projectTitle={filteredData.title}
                                    projectDecr={filteredData.description}
                                    projectGit={filteredData.gitLink}
                                    projectView={filteredData.viewLink}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects

function ProjectCard({projectImg,projectTitle,projectDecr,projectGit,projectView}){
    return(
        <div className="projects__card">
            <div className="projects__image">
                <img src="" alt="" className="projects__img"/>
            </div>
        </div>
    )
}