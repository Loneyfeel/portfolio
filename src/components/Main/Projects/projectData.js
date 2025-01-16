import project_uber_img from "../../../resources/images/projects/project_uber_img.png";
import project_pulse_img from "../../../resources/images/projects/project_pulse_img.png";
import project_coffeeShop_img from "../../../resources/images/projects/project_coffeeShop_img.png";
import project_eduweb_img from "../../../resources/images/projects/project_eduweb_img.png";
import project_volti_img from "../../../resources/images/projects/project_volti_img.png";
import project_aboutMe_img from "../../../resources/images/projects/project_aboutMe_img.png";
import project_portfolio_img from "../../../resources/images/projects/project_portfolio_img.png";

function Project (id, img, subTitle, title, description, gitLink, viewLink, status){
    this.id = id
    this.img = img
    this.subTitle = subTitle
    this.title = title
    this.description = description
    this.gitLink = gitLink
    this.viewLink = viewLink
    this.status = status
}
export const projectData = [
    new Project(
        1,
        project_coffeeShop_img,
        "Site layout",
        "Coffee Shop",
        "Easy coffee shop website with adaptability",
        "https://github.com/Loneyfeel/educational-projects/tree/main/coffeeShop",
        "https://loneyfeel.github.io/educational-projects/coffeeShop/",
        "educational"),
    new Project(
        2,
        project_pulse_img,
        "Site layout",
        "Heart rate monitor magazine",
        "Website-shop for the selection and purchase of the correct heart rate monitor",
        "https://github.com/Loneyfeel/educational-projects/tree/main/pulse",
        "https://loneyfeel.github.io/educational-projects/pulse/",
        "educational"),
    new Project(
        3,
        project_uber_img,
        "Site layout",
        "Uber",
        "The site offers drivers to become Uber partners.",
        "https://github.com/Loneyfeel/educational-projects/tree/main/uber",
        "https://loneyfeel.github.io/educational-projects/uber/",
        "educational"),
    new Project(
        4,
        project_eduweb_img,
        "Site layout",
        "EduWeb",
        "An online school for teaching various professions with the opportunity to enroll in a course or buy one.",
        "https://github.com/Loneyfeel/educational-projects/tree/main/eduweb",
        "https://loneyfeel.github.io/educational-projects/eduweb/",
        "favorite"),
    new Project(
        5,
        project_volti_img,
        "Site layout",
        "Volti",
        "This website offers services for the purchase of electric scooters. charging stations, etc.",
        "https://github.com/Loneyfeel/educational-projects/tree/main/volti",
        "https://loneyfeel.github.io/educational-projects/volti/",
        "favorite"),
    new Project(
        6,
        project_portfolio_img,
        "Website",
        "My portfolio-website",
        "The site you are on was created as part of improving React skills and creating an adaptive design with a dark theme.",
        "https://github.com/Loneyfeel/portfolio",
        "https://loneyfeel.github.io/portfolio/",
        "favorite"),
]
