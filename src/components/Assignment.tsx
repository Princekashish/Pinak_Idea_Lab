import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Droplet, Flame, Phone } from "lucide-react";

const Assignment: React.FC = () => {
    const services = [
        {
          icon: <Phone className="w-8 h-8 text-red-500" />,
          title: 'Emergency Plumbing Services',
          description: 'Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays.',
        },
        {
          icon: <Droplet className="w-8 h-8 text-blue-500" />,
          title: 'Plumbing and Drains',
          description: 'As the largest plumbing and drain service company, we make thousands of repairs every day.',
        },
        {
          icon: <AlertTriangle className="w-8 h-8 text-blue-500" />,
          title: 'Water Damage',
          description: 'Our teams are equipped with state-of-the-art water extraction and cleanup equipment.',
        },
        {
          icon: <Flame className="w-8 h-8 text-red-500" />,
          title: 'Water Heaters',
          description: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
      ]
  return (
    <div id="assignment" className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-5 ">
      <div className="p-10 bg-purple-900">
        <h2 className="text-4xl font-bold text-white mb-8">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className=" p-6 rounded-lg shadow-lg bg-white"
              whileHover={{
                rotate: 360, // Small rotation for subtlety
                scale: 1.05, // Slight scaling to "pop" on hover
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",  // Smooth shadow effect
              }}
              style={{transformOrigin: "center"}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="flex justify-center items-center flex-col gap-1">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <a
                href="#"
                className="text-purple-600 font-semibold text-center  hover:text-purple-800 transition-colors duration-300"
              >
                EXPLORE THIS SERVICE &gt;
              </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignment;
