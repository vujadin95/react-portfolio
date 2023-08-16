import "../styles/projectsPage.css";
import CardDetail from "../components/ProjectComponent/CardDetail.component";
import projectDetails from "../data/projectsData";
const Projects = () => {
  return (
    <section className="projects__page">
      <div className="project__text">
        <h2 className="project__text-title">Projects</h2>
        <p className="project__text-desc">
          Check out a few of the main projects I have worked on
        </p>
      </div>
      <div className="projects__grid">
        {projectDetails.map((project) => (
          <CardDetail key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
