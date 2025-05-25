 
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail,ArrowLeft } from "lucide-react"

import mikiyasImage from "../assets/miki.jpg"
import salhImage from "../assets/salh.jpg"
import betImage from "../assets/betse.jpg"
import { Link } from "react-router-dom";
import Header from "./Header"
import { useNavigate } from "react-router-dom" // or your routing solution


export default function OurTeam() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  // Add your team members data here
  const teamMembers = [
    {
      id: 1,
      name: "Mikiyas Taye",
      role: "CEO & Website Developer",
      image: mikiyasImage,
      bio: "Leads our team with expertise in web development and business strategy. Passionate about creating innovative digital solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mikiyas@example.com",
      },
    },

      {
      id: 2,
      name: "Salh Said",
      role: "Full-Stack Developer",
      image: salhImage,
      bio: "Full stack developer with expertise in building responsive web and mobile applications from concept to deployment. Skilled in both front-end  and back-end technologies",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "salh@example.com",
      },
    },


    {
      id: 3,
      name: "Betselot Bezuayehu",
      role: "Software Developer",
      image: betImage,
      bio: "Expert in building robust backend systems and applications. Passionate about solving complex problems with elegant solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "betselot@example.com",
      },
    },
  
   
    
    
  ]

  // Auto-scroll functionality
  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <>
      <Header />
      
      {/* Global Grid Pattern */}
      <svg 
        className="fixed top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="team-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#033D54" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#team-grid)" />
      </svg>

      <section id="team" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-end mb-8"
          >
            <button
              style={{ zIndex: 1, position: 'relative' }}
              onClick={handleBackHome}
              className="flex items-center px-6 py-3 bg-[#033D54] text-white font-medium rounded-md hover:bg-[#033D54]/90 transition-colors group"
            >
              Back to Home
              <ArrowLeft className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full bg-[#033D54]/8"
              style={{ top: "10%", right: "5%", filter: "blur(60px)" }}
              animate={{
                x: [0, -50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[350px] h-[350px] rounded-full bg-[#FFD700]/20"
              style={{ bottom: "5%", left: "10%", filter: "blur(50px)" }}
              animate={{
                x: [0, 40, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>

          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,150 Q400,100 800,150 T1600,150"
              fill="none"
              stroke="#033D54"
              strokeWidth="1.5"
              strokeOpacity="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            />
            <motion.path
              d="M0,250 Q400,300 800,250 T1600,250"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1.5"
              strokeOpacity="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{ duration: 7, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            />
            <motion.path
              d="M0,350 Q400,400 800,350 T1600,350"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1.5"
              strokeOpacity="0.1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ duration: 8, delay: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            />
          </svg>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 2 + "px",
                  height: Math.random() * 6 + 2 + "px",
                  background: i % 3 === 0 ? "#FFD700" : "#033D54",
                  opacity: Math.random() * 0.3 + 0.1,
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  opacity: [Math.random() * 0.3 + 0.1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 10,
                }}
              />
            ))}
          </div>
        </div>

        {/* Engaging Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-4 relative z-10 mb-16"
        >
          <div className="bg-gradient-to-r from-[#033D54] to-[#022a3a] rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#FFD700]/10 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#FFD700]/15 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our <span className="text-[#FFD700]">Collaborative Spirit</span>
                  </h2>
                  <p className="text-lg text-white/90 mb-6">
                    At IKIM Tech, we believe innovation thrives when diverse talents unite. Our team combines technical mastery with creative vision to deliver exceptional digital experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFD700] mr-3"></div>
                      <span className="text-white font-medium">Cross-functional Teams</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFD700] mr-3"></div>
                      <span className="text-white font-medium">Agile Methodologies</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFD700] mr-3"></div>
                      <span className="text-white font-medium">Continuous Learning</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFD700] mr-3"></div>
                      <span className="text-white font-medium">User-Centric Focus</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                  >
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">Our Values</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#FFD700] mr-2">✓</span>
                        <span className="text-white/90">Integrity in every interaction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFD700] mr-2">✓</span>
                        <span className="text-white/90">Passion for innovation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFD700] mr-2">✓</span>
                        <span className="text-white/90">Commitment to excellence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FFD700] mr-2">✓</span>
                        <span className="text-white/90">Collaborative problem-solving</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Section */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl font-bold text-[#033D54] mb-6 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Team Members
              <motion.div
                className="absolute left-1/2 -bottom-3 h-1.5 bg-[#FFD700] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ translateX: "-50%" }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Meet our talented team of professionals who make the magic happen.
            </motion.p>
          </div>

          {/* Team member carousel - single member at a time */}
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 z-20 hidden md:block">
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#033D54] hover:bg-[#033D54] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous team member"
              >
                <ChevronLeft size={24} />
              </motion.button>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 z-20 hidden md:block">
              <motion.button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#033D54] hover:bg-[#033D54] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next team member"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* Team member slider */}
            <div
              className="overflow-hidden rounded-xl shadow-xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-white overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Member image */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <img
                        src={teamMembers[currentIndex]?.image || "/placeholder.svg"}
                        alt={teamMembers[currentIndex]?.name || "Team member"}
                        className="w-full h-full object-cover aspect-square md:aspect-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <div className="flex space-x-4">
                          <motion.a
                            href={teamMembers[currentIndex]?.social?.linkedin || "#"}
                            className="bg-white/90 text-[#033D54] p-3 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`${teamMembers[currentIndex]?.name}'s LinkedIn`}
                          >
                            <Linkedin size={20} />
                          </motion.a>
                          <motion.a
                            href={teamMembers[currentIndex]?.social?.twitter || "#"}
                            className="bg-white/90 text-[#033D54] p-3 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`${teamMembers[currentIndex]?.name}'s Twitter`}
                          >
                            <Twitter size={20} />
                          </motion.a>
                          <motion.a
                            href={`mailto:${teamMembers[currentIndex]?.social?.email || "#"}`}
                            className="bg-white/90 text-[#033D54] p-3 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Email ${teamMembers[currentIndex]?.name}`}
                          >
                            <Mail size={20} />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Member details */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-3xl font-bold text-[#033D54] mb-2">
                          {teamMembers[currentIndex]?.name || "Team Member"}
                        </h3>
                        <p className="text-[#FFD700] font-medium text-xl mb-6">
                          {teamMembers[currentIndex]?.role || "Position"}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                          {teamMembers[currentIndex]?.bio || "Description about the team member"}
                        </p>

                        <div className="flex space-x-3 md:hidden">
                          <a
                            href={teamMembers[currentIndex]?.social?.linkedin || "#"}
                            className="bg-[#033D54]/10 text-[#033D54] p-2 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                            aria-label={`${teamMembers[currentIndex]?.name}'s LinkedIn`}
                          >
                            <Linkedin size={18} />
                          </a>
                          <a
                            href={teamMembers[currentIndex]?.social?.twitter || "#"}
                            className="bg-[#033D54]/10 text-[#033D54] p-2 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                            aria-label={`${teamMembers[currentIndex]?.name}'s Twitter`}
                          >
                            <Twitter size={18} />
                          </a>
                          <a
                            href={`mailto:${teamMembers[currentIndex]?.social?.email || "#"}`}
                            className="bg-[#033D54]/10 text-[#033D54] p-2 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                            aria-label={`Email ${teamMembers[currentIndex]?.name}`}
                          >
                            <Mail size={18} />
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? "bg-[#033D54]" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile navigation buttons */}
            <div className="flex justify-center mt-6 space-x-4 md:hidden">
              <motion.button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#033D54] hover:bg-[#033D54] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous team member"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#033D54] hover:bg-[#033D54] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next team member"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
