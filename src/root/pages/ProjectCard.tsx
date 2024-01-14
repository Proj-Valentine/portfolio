
interface Project {
  id: string;
  name: string;
  url?: string;
  techStack: string[];
  tasks?: string[];
  features?: string[];
  challenges?: string[];
  imageUrls?: string;
  description?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border-2 border-gray-300 p-4 rounded-md m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <div>
      
        <p className="mb-2 text-left">
          <strong>Description:</strong> {project.description}
        </p>
        <p className="mb-2 text-left">
          <strong>URL:</strong>{" "}
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.name}
          </a>
        </p>
      </div>
      <div>
        <p className="mb-2 text-left">
          <strong>Tech Stack:</strong>{" "}
          <ul>
            {project.techStack?.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </p>
        <p className="mb-2 text-left">
          <strong>Features:</strong>{" "}
          <ul>
            {project.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </p>
      </div>
      <div>
        {/* <p className="mb-2 text-left">
          <strong>Challenges:</strong>{" "}
          <ul>
            {project.challenges?.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </p> */}
        <p className="mb-2 text-left">
          <strong>Tasks:</strong>{" "}
          <ul>
            {project.tasks?.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </p>
      </div>
      {/* {project.imageUrls && (
        <img
          src={project.imageUrls}
          alt={project.name}
          className="w-full h-64 object-cover mt-2"
        />
      )} */}
    </div>
  );
};

export default ProjectCard;
