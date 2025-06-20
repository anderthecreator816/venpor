import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Ingeniero Senior de Proyectos',
      company: 'Constructora Moderna S.A.',
      period: '2020 - Presente',
      location: 'Ciudad de México',
      description: 'Liderazgo de proyectos de construcción de gran escala, incluyendo torres residenciales y complejos comerciales. Gestión de equipos multidisciplinarios y coordinación con stakeholders.',
      achievements: [
        'Completé 15 proyectos por un valor total de $50M MXN',
        'Reduje costos de construcción en un 12% mediante optimización de procesos',
        'Implementé sistemas BIM que mejoraron la eficiencia en un 25%'
      ]
    },
    {
      title: 'Ingeniero de Construcción',
      company: 'Desarrollos Urbanos del Centro',
      period: '2018 - 2020',
      location: 'Guadalajara, Jalisco',
      description: 'Supervisión técnica de obras civiles y coordinación de actividades de construcción. Responsable del control de calidad y cumplimiento de especificaciones técnicas.',
      achievements: [
        'Supervisé la construcción de 8 edificios residenciales',
        'Mantuve 100% de cumplimiento en estándares de seguridad',
        'Desarrollé protocolos de calidad adoptados por toda la empresa'
      ]
    },
    {
      title: 'Ingeniero Junior',
      company: 'Construcciones Integrales López',
      period: '2016 - 2018',
      location: 'Monterrey, Nuevo León',
      description: 'Apoyo en la planificación y ejecución de proyectos de construcción. Elaboración de presupuestos, programación de obras y control de materiales.',
      achievements: [
        'Participé en 12 proyectos de construcción exitosos',
        'Desarrollé sistema de control de inventarios',
        'Obtuve certificación en gestión de proyectos PMI'
      ]
    }
  ];

  return (
    <section id="experiencia" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mi trayectoria profesional refleja un crecimiento constante y una dedicación 
            inquebrantable a la excelencia en la construcción.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-primary-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-primary-600 font-semibold mb-3">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">
                      Logros Destacados:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;