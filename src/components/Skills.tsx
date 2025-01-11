const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Framework", level: 85 },
    { name: "API's REST", level: 85 },
    { name: "Microserviços", level: 80 },
    { name: "Docker", level: 75 },
    { name: "Git", level: 85 },
  ];
  
  const Skills = () => {
    return (
      <section id="habilidades" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Minhas <span className="text-primary">Habilidades</span>
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-accent/20 rounded-full">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;