import React from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Smartphone,
  Globe2,
  PenTool,
  Users,
  MessageSquare,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Agence NAL</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Services
              </a>
              <a
                href="#realisations"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Devis gratuit
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#realisations"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
              <button className="w-full text-left px-3 py-2 text-blue-600">
                Devis gratuit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Votre Agence Digitale
              <br />
              pour le Succès en Ligne
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous créons des solutions digitales innovantes pour faire grandir
              votre entreprise
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center"
              >
                Nos services <ChevronRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions adaptées à vos besoins digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe2 size={32} />}
              title="Sites Web"
              description="Création de sites web professionnels, responsive et optimisés pour le référencement"
            />
            <ServiceCard
              icon={<Smartphone size={32} />}
              title="Applications Mobiles"
              description="Développement d'applications mobiles natives et cross-platform"
            />
            <ServiceCard
              icon={<PenTool size={32} />}
              title="Design Graphique"
              description="Création d'identités visuelles et supports de communication"
            />
            <ServiceCard
              icon={<Users size={32} />}
              title="Marketing Digital"
              description="Stratégies marketing pour augmenter votre visibilité en ligne"
            />
            <ServiceCard
              icon={<MessageSquare size={32} />}
              title="Community Management"
              description="Gestion et animation de vos réseaux sociaux"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nous Contacter
            </h2>
            <p className="text-xl text-gray-600">
              Discutons de votre projet ensemble
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                >
                  Envoyer le message
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Informations de Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1" size={24} />
                    <div className="ml-4">
                      <h4 className="font-medium">Adresse</h4>
                      <p className="text-gray-600">
                        Notaire, Guédiawaye, Sénégal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mt-1" size={24} />
                    <div className="ml-4">
                      <h4 className="font-medium">Téléphone</h4>
                      <p className="text-gray-600">+221 77 851 75 86</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1" size={24} />
                    <div className="ml-4">
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">gueyealassane86@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Notre Location
                </h3>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    title="Company Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://www.openstreetmap.org/#map=17/14.777320/-17.382152"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-blue-100">
                Contactez-nous pour un devis gratuit
              </p>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition flex items-center">
              Parlons de votre projet <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                Agence NAL
              </h3>
              <p className="text-gray-400 mb-6">
                Votre partenaire digital pour une présence en ligne impactante.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#realisations"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Réalisations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Notaire, Guédiawaye, Sénégal</li>
                <li>+221 77 851 75 86</li>
                <li>gueyealassane86@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Agence NAL. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
