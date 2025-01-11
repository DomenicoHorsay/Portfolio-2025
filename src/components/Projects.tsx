import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Sistema de Microserviços",
    description: "Arquitetura de microserviços com Spring Cloud e Docker",
    tech: ["Java", "Spring Cloud", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "API REST",
    description: "API RESTful com autenticação JWT e documentação Swagger",
    tech: ["Spring Boot", "Spring Security", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Sistema de Mensageria",
    description: "Sistema de mensageria assíncrona com Apache Kafka",
    tech: ["Java", "Spring Boot", "Kafka"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Meus <span className="text-primary">Projetos</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg group hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-accent mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;