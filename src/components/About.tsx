import { Code, Server, Container } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Server size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
            <p className="text-accent">
              Desenvolvedor especializado em criar soluções robustas e escaláveis
              com Java e Spring Framework, focando em qualidade e boas práticas.
            </p>
          </div>

          <div className="bg-secondary/50 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Code size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Arquitetura</h3>
            <p className="text-accent">
              Experiência em desenvolvimento de APIs REST e arquitetura de
              microserviços, garantindo sistemas modulares e maintainable.
            </p>
          </div>

          <div className="bg-secondary/50 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Container size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">DevOps</h3>
            <p className="text-accent">
              Conhecimento em containerização com Docker e práticas DevOps,
              facilitando a entrega contínua e deployment de aplicações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;