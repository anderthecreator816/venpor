import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, DollarSign } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Torre Residencial Skyline',
      category: 'Residencial',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complejo residencial de lujo de 25 pisos con 180 departamentos, amenidades de primera clase y tecnología sustentable.',
      location: 'Polanco, CDMX',
      duration: '24 meses',
      budget: '$45M MXN',
      features: ['Certificación LEED Gold', 'Sistema BIM', 'Tecnología Smart Home', 'Áreas verdes']
    },
    {
      title: 'Centro Comercial Plaza Norte',
      category: 'Comercial',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Centro comercial de 3 niveles con 120 locales comerciales, área de entretenimiento y estacionamiento subterráneo.',
      location: 'Guadalajara, JAL',
      duration: '18 meses',
      budget: '$32M MXN',
      features: ['Diseño bioclimático', 'Sistemas de ahorro energético', 'Accesibilidad universal', 'Espacios flexibles']
    },
    {
      title: 'Complejo Industrial TechPark',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Parque industrial con 5 naves de manufactura, oficinas administrativas y sistemas de automatización avanzada.',
      location: 'Monterrey, NL',
      duration: '20 meses',
      budget: '$28M MXN',
      features: ['Automatización industrial', 'Sistemas contra incendio', 'Eficiencia energética', 'Logística optimizada']
    },
    {
      title: 'Puente Peatonal Moderno',
      category: 'Infraestructura',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Puente peatonal de diseño arquitectónico innovador con iluminación LED y materiales sustentables.',
      location: 'Puebla, PUE',
      duration: '8 meses',
      budget: '$8M MXN',
      features: ['Diseño antisísmico', 'Iluminación LED', 'Materiales reciclados', 'Accesibilidad total']
    },
    {
      title: 'Conjunto Habitacional Verde',
      category: 'Residencial',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Desarrollo habitacional sustentable con 150 viviendas, áreas verdes y sistemas de captación pluvial.',
      location: 'Querétaro, QRO',
      duration: '16 meses',
      budget: '$22M MXN',
      features: ['Vivienda sustentable', 'Captación pluvial', 'Paneles solares', 'Áreas recreativas']
    },
    {
      title: 'Hospital Regional Moderno',
      category: 'Salud',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Hospital de especialidades con 200 camas, quirófanos de última generación y sistemas de emergencia.',
      location: 'Tijuana, BC',
      duration: '30 meses',
      budget: '$65M MXN',
      features: ['Tecnología médica avanzada', 'Sistemas redundantes', 'Diseño hospitalario', 'Certificaciones sanitarias']
    }
  ];

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de los proyectos más significativos que he liderado, 
            cada uno representando innovación, calidad y excelencia en construcción.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>{project.budget}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Características:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;