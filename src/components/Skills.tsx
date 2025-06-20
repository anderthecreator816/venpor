import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Calculator, 
  Users, 
  Shield, 
  Lightbulb, 
  FileText,
  Laptop,
  Award
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'AutoCAD', level: 95 },
    { name: 'Revit/BIM', level: 90 },
    { name: 'Project Management', level: 92 },
    { name: 'Estructuras', level: 88 },
    { name: 'Presupuestos', level: 85 },
    { name: 'Supervisión de Obra', level: 95 },
  ];

  const softSkills = [
    { icon: Users, title: 'Liderazgo de Equipos', description: 'Gestión efectiva de equipos multidisciplinarios' },
    { icon: Shield, title: 'Seguridad Industrial', description: 'Implementación de protocolos de seguridad' },
    { icon: Calculator, title: 'Análisis de Costos', description: 'Optimización de presupuestos y recursos' },
    { icon: FileText, title: 'Gestión Documental', description: 'Control de especificaciones y normativas' },
    { icon: Lightbulb, title: 'Innovación', description: 'Implementación de nuevas tecnologías' },
    { icon: Wrench, title: 'Resolución de Problemas', description: 'Soluciones técnicas eficientes' },
  ];

  const certifications = [
    'Certificación PMP (Project Management Professional)',
    'Especialización en BIM (Building Information Modeling)',
    'Certificación LEED Green Associate',
    'Curso Avanzado en Seguridad Industrial',
    'Diplomado en Gestión de Construcción',
    'Certificación en Lean Construction'
  ];

  const software = [
    'AutoCAD', 'Revit', 'SketchUp', 'MS Project', 'Primavera P6', 
    'SAP2000', 'ETABS', 'Excel Avanzado', 'Navisworks', 'Tekla Structures'
  ];

  return (
    <section id="habilidades" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Habilidades y Competencias
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un conjunto integral de habilidades técnicas y blandas que me permiten 
            entregar proyectos excepcionales de principio a fin.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-primary-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Competencias Profesionales</h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-md hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <skill.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{skill.title}</h4>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Software & Certifications */}
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Laptop className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Software Especializado</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {software.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium hover:bg-primary-200 transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Certificaciones</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;