"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"

import nawlaImage from "../assets/Nawla.jpg"
import gojoImage from "../assets/gojo.jpg"
import brandImage from "../assets/Brand.png"
import heiverImage from "../assets/photo_2025-01-29_00-49-54.jpg"
import negaritImage from "../assets/photo_2025-01-29_00-49-57.jpg"
import agapeImage from "../assets/photo_2025-01-29_00-50-03.jpg"
import shoeitImage from "../assets/sho.jpg"
import habeshaImage from "../assets/ybShopping.jpg"
import eromicaImage from "../assets/Eromica.jpg"
import negaritImageLogo from "../assets/gamerSami.jpg"
import haniImage from "../assets/hanybeauty.jpg"
import yegnaImage from "../assets/yegna.jpg"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState([])
  const [isAnimating, setIsAnimating] = useState(false)

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Nawla Trading PLC",
      description: "This Nawla Trading website showcases products and services with a clean, responsive design.",
      image: nawlaImage,
      categories: ["Web"],
      link: "#",
    },
    {
      id: 2,
      title: "Gojo Guest House",
      description: "This guesthouse website highlights services, room options, and amenities.",
      image: gojoImage,
      categories: ["Web"],
      link: "#",
    },
    {
      id: 3,
      title: "Brand Clothing",
      description: "Brand Clothing brings you timeless fashion with a modern touch.",
      image: brandImage,
      categories: ["Web"],
      link: "#",
    },
    {
      id: 4,
      title: "Heiver Tech",
      description: "Provides various technology services and is globally recognized for its outstanding innovations.",
      image: heiverImage,
      categories: ["Web"],
      link: "#",
    },
    {
      id: 5,
      title: "Marketing Agency",
      description: "Offers a wide range of digital services, striving to modernize the world.",
      image: negaritImage,
      categories: ["Web"],
      link: "#",
    },
    {
      id: 6,
      title: "Adape Leather Design",
      description: "Specializes in crafting high-quality leather products.",
      image: agapeImage,
      categories: ["Web"],
      link: "#",
    },
    {
      id: 7,
      title: "ShoeIt",
      description: "Mobile app dedicated to shoe sales with a clean, user-friendly design.",
      image: shoeitImage,
      categories: ["Mobile"],
      link: "#",
    },
    {
      id: 8,
      title: "Gojo Guest House Logo",
      description: "A logo for a guesthouse that provides different kinds of services.",
      image: gojoImage,
      categories: ["Logo"],
      link: "#",
    },
    {
      id: 9,
      title: "Habesha Crowd Logo",
      description: "A logo for a company that provides various services.",
      image: habeshaImage,
      categories: ["Logo"],
      link: "#",
    },
    {
      id: 10,
      title: "Eromica Logo",
      description: "A logo representing Ethiopian heritage and personal identity.",
      image: eromicaImage,
      categories: ["Logo"],
      link: "#",
    },
    {
      id: 11,
      title: "Negarit Logo",
      description: "Logo for the marketing agency that provides innovative solutions.",
      image: negaritImageLogo,
      categories: ["Logo"],
      link: "#",
    },
    {
      id: 12,
      title: "Hani Logo",
      description: "A logo for a beauty salon that provides various services.",
      image: haniImage,
      categories: ["Logo"],
      link: "#",
    },
    {
      id: 13,
      title: "Yegna Logo",
      description: "A logo for a company that works for their youtube and social media channels.",
      image: yegnaImage,
      categories: ["Logo"],
      link: "#",
    },
  ]

  // Filter categories
  const categories = ["All", "Web", "Mobile", "Logo"]

  // Handle filter change
  const handleFilterChange = (category) => {
    setActiveFilter(category)
    setIsAnimating(true)

    setTimeout(() => {
      if (category === "All") {
        setFilteredProjects([...projects])
      } else {
        // Simple direct filtering
        const filtered = projects.filter((project) => {
          return project.categories.indexOf(category) !== -1
        })
        setFilteredProjects(filtered)
      }
      setIsAnimating(false)
    }, 300)
  }

  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects([...projects])
  }, [])

  // Debug logging to check filtering
  useEffect(() => {
    console.log("Active Filter:", activeFilter)
    console.log("Filtered Projects:", filteredProjects)
  }, [activeFilter, filteredProjects])

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Enhanced SVG Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dynamic grid pattern */}
        <svg className="absolute w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#033D54" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Enhanced animated circles with more visibility */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-[#033D54]/10"
            style={{ top: "5%", left: "0%", filter: "blur(70px)" }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-[#FFD700]/10"
            style={{ bottom: "0%", right: "5%", filter: "blur(60px)" }}
            animate={{
              x: [0, -80, 0],
              y: [0, -70, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full bg-[#033D54]/8"
            style={{ top: "40%", right: "20%", filter: "blur(50px)" }}
            animate={{
              x: [0, -50, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Enhanced animated lines with more visibility */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,100 Q300,180 600,100 T1200,100"
            fill="none"
            stroke="#033D54"
            strokeWidth="2"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
          />
          <motion.path
            d="M0,200 Q300,280 600,200 T1200,200"
            fill="none"
            stroke="#FFD700"
            strokeWidth="2"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{
              duration: 7,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,300 Q300,380 600,300 T1200,300"
            fill="none"
            stroke="#033D54"
            strokeWidth="2"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{
              duration: 8,
              delay: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Enhanced geometric shapes */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-20 h-20 border-2 border-[#033D54]/20 rounded-lg"
            style={{ top: "15%", left: "10%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute w-16 h-16 border-2 border-[#FFD700]/20"
            style={{ bottom: "20%", right: "15%" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute w-24 h-24 border-2 border-[#033D54]/15 rounded-full"
            style={{ top: "60%", left: "20%" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />
        </div>

        {/* Enhanced floating particles with more visibility */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 8 + 3 + "px",
                height: Math.random() * 8 + 3 + "px",
                background: Math.random() > 0.5 ? "#033D54" : "#FFD700",
                opacity: Math.random() * 0.4 + 0.2,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, Math.random() * -150 - 50],
                opacity: [Math.random() * 0.4 + 0.2, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Heading Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold text-[#033D54] mb-6 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Projects
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
            Explore some of our recent work and see how we bring ideas to life.
          </motion.p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-md border transition-all ${
                activeFilter === category
                  ? "bg-[#033D54] text-white border-[#033D54]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#033D54] hover:text-[#033D54]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {isAnimating ? (
              <div className="col-span-3 flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-[#033D54] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <a
                        href={project.link}
                        className="bg-white/90 text-[#033D54] p-2 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                        aria-label={`View ${project.title} project`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#033D54] mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((cat) => (
                        <span
                          key={`${project.id}-${cat}`}
                          className="text-xs px-2 py-1 bg-[#033D54]/10 text-[#033D54] rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-3 text-center py-16">
                <p className="text-xl text-gray-600">No projects found in this category.</p>
                <button
                  onClick={() => handleFilterChange("All")}
                  className="mt-4 px-6 py-2 bg-[#033D54] text-white rounded-md hover:bg-[#033D54]/90 transition-colors"
                >
                  View All Projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* View more button */}
        {filteredProjects.length > 0 && !isAnimating && (
          <div className="text-center mt-16">
            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#033D54] text-white rounded-md hover:bg-[#033D54]/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        )}
      </div>
    </section>
  )
}
