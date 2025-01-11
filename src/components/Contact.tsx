import { Mail, Linkedin, Github } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório.';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Digite um email válido.';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'A mensagem não pode estar vazia.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contato" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-lg animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Informações de contato */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Vamos Conversar!</h3>
              <p className="text-accent mb-6">
                Estou sempre aberto a novas oportunidades e parcerias.
                Sinta-se à vontade para entrar em contato!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:seu-email@exemplo.com"
                  className="flex items-center gap-3 text-accent hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  seu-email@exemplo.com
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-accent hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-accent hover:text-primary transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Formulário com validação */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Nome */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary border ${errors.name ? 'border-red-500' : 'border-accent/20'} rounded focus:outline-none focus:border-primary transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary border ${errors.email ? 'border-red-500' : 'border-accent/20'} rounded focus:outline-none focus:border-primary transition-colors`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Mensagem */}
              <div>
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-secondary border ${errors.message ? 'border-red-500' : 'border-accent/20'} rounded focus:outline-none focus:border-primary transition-colors`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Botão de Enviar */}
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
