import { motion } from "framer-motion"
import { ArrowRight, Users, Code, Star } from "lucide-react"
import { useNavigate } from "react-router-dom" // or your routing solution

export default function About() {
  const navigate = useNavigate()

  const handleTeamClick = () => {
    navigate('/team') // Adjust based on your routing
  }

  return (
    <section id="about" className="relative py-16 md:py-24 bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#033D54]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#033D54"
              fillOpacity="0.05"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold text-[#033D54] mb-6 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Us
            <motion.div
              className="absolute left-1/2 -bottom-3 h-1.5 bg-[#FFD700] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ translateX: "-50%" }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.h2>
        </div>

        {/* About content - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#033D54] mb-6">
            Pioneering Digital Transformation Since 2015
          </h3>
          <p className="text-gray-600 mb-4">
            IKIM Tech is a leading technology solutions provider dedicated to helping businesses navigate the digital landscape. Founded in 2015, we've grown from a small startup to a trusted partner for organizations worldwide.
          </p>
          <p className="text-gray-600 mb-6">
            Our team of passionate engineers, designers, and strategists work together to deliver innovative solutions that drive real business results. We combine technical expertise with creative thinking to solve complex challenges.
          </p>
          
          {/* Centered Meet Our Team Button */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleTeamClick}
                className="flex items-center px-6 py-3 bg-[#033D54] text-white font-medium rounded-md hover:bg-[#033D54]/90 transition-colors group"
              >
                Meet Our Team
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats - only 3 as requested */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-4xl mx-auto"
        >
          <StatCard 
            icon={<Users className="w-8 h-8" />} 
            number="100+" 
            label="Trusted Clients" 
            color="text-[#FFD700]" 
          />
          <StatCard 
            icon={<Code className="w-8 h-8" />} 
            number="150+" 
            label="Completed Projects" 
            color="text-[#033D54]" 
          />
          <StatCard 
            icon={<Star className="w-8 h-8" />} 
            number="99%" 
            label="Positive Reviews" 
            color="text-[#FFD700]" 
          />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ icon, number, label, color }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100"
    >
      <div className={`${color} mb-3 flex justify-center`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-[#033D54] mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  )
}
