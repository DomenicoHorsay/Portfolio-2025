import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-32 px-6">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-primary">Software Developer</span>
          <br />
          Especialista em Soluções Enterprise
        </h1>
        
        <p className="text-accent max-w-2xl mx-auto text-lg md:text-xl">
          Desenvolvendo aplicações robustas e escaláveis com Java, Spring Framework,
          Microserviços e Docker, focando em alta performance e qualidade.
        </p>

        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Ver Projetos
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;