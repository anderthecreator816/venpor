import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-700/60"></div>
      
      {/* Construction Pattern Overlay */}
      <div className="absolute inset-0 construction-pattern opacity-10"></div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Ingeniero Constructor"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-2xl"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
          >
            Pedro Lopez Diaz
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-4 font-light text-shadow"
          >
            Ingeniero en Construcción
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100 text-shadow"
          >
            Especialista en gestión de proyectos de construcción, con más de 8 años de experiencia 
            en obras civiles, residenciales e industriales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12"
          >
            <div className="flex items-center space-x-2 bg-black bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-primary-300" />
              <span className="text-gray-100">Ciudad de México, México</span>
            </div>
            <div className="flex items-center space-x-2 bg-black bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mail className="h-5 w-5 text-primary-300" />
              <span className="text-gray-100">juan.perez@email.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-black bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm">
              <Phone className="h-5 w-5 text-primary-300" />
              <span className="text-gray-100">+52 55 1234 5678</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#proyectos"
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg hover-lift border-2 border-primary-600"
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors hover-lift backdrop-blur-sm"
            >
              Contactar
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-white animate-bounce drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;