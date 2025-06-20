import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Proyectos Completados' },
    { icon: Users, value: '25+', label: 'Clientes Satisfechos' },
    { icon: Clock, value: '8+', label: 'Años de Experiencia' },
    { icon: Target, value: '100%', label: 'Proyectos a Tiempo' },
  ];

  return (
    <section id="sobre-mi" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Ingeniero en obra"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Construyendo el Futuro con Excelencia
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Soy un ingeniero en construcción apasionado por crear estructuras que perduren en el tiempo. 
              Mi enfoque se centra en la calidad, la innovación y la sostenibilidad en cada proyecto que dirijo.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Con más de 8 años de experiencia en el sector, he liderado proyectos desde edificios residenciales 
              hasta complejos industriales, siempre manteniendo los más altos estándares de seguridad y eficiencia.
            </p>

            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-primary-800 mb-3">Mi Filosofía</h4>
              <p className="text-primary-700">
                "Cada proyecto es una oportunidad de crear algo extraordinario. La atención al detalle, 
                la comunicación efectiva y el compromiso con la excelencia son los pilares de mi trabajo."
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;