"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from "lucide-react"


import mikiyasImage from "../assets/miki.jpg"
import amenImage from "../assets/aman2.jpg"
import betImage from "../assets/betse.jpg"
import jecoliahImage from "../assets/jecoliah.jpg"
import bisratImage from "../assets/bisrat.jpg"  
import tesfahunImage from "../assets/tesfahun.jpg"      

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // Team members data
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
      name: "Amen Dereje",
      role: "Website Developer",
      image:amenImage,
      bio: "Specializes in front-end development with a keen eye for detail and user experience. Creates responsive and intuitive websites.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "amen@example.com",
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
    {
      id: 4,
      name: "Jecoliah Menberu",
      role: "Sales Agent",
      image:jecoliahImage,
      bio: "Drives business growth through strategic client relationships. Excellent communicator with a talent for understanding client needs.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jecoliah@example.com",
      },
    },
    {
      id: 5,
      name: "Bisrat Kifle",
      role: "Graphics Designer and Video Editor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creates stunning visuals and engaging video content. Combines artistic talent with technical expertise to bring ideas to life.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "bisrat@example.com",
      },
    },
    {
      id: 6,
      name: "Tesfahun Gibitan",
      role: "3D and VFX Artist",
      image: bisratImage,
      bio: "Specializes in creating immersive 3D environments and visual effects. Pushes the boundaries of digital artistry.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "tesfahun@example.com",
      },
    },
    {
      id: 7,
      name: "Mikiyas Seffi",
      role: "Marketing Consultant",
      image:tesfahunImage,
      bio: "Develops effective marketing strategies to enhance brand visibility. Data-driven approach to maximize marketing ROI.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mikiyass@example.com",
      },
    },
  ]

  // Auto-scroll functionality
  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
      }
    }, 3000) // Change every 3 seconds
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume auto-scroll after 5 seconds
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume auto-scroll after 5 seconds
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume auto-scroll after 5 seconds
  }

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid pattern */}
        <svg className="absolute w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="team-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#033D54" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-grid)" />
        </svg>

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
            className="absolute w-[350px] h-[350px] rounded-full bg-[#FFD700]/8"
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
            d="M0,350 Q400,400 800,350 T1600,350"
            fill="none"
            stroke="#FFD700"
            strokeWidth="1.5"
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
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                background: Math.random() > 0.5 ? "#033D54" : "#FFD700",
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
                      src={teamMembers[currentIndex].image || "/placeholder.svg"}
                      alt={teamMembers[currentIndex].name}
                      className="w-full h-full object-cover aspect-square md:aspect-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex space-x-4">
                        <motion.a
                          href={teamMembers[currentIndex].social.linkedin}
                          className="bg-white/90 text-[#033D54] p-3 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`${teamMembers[currentIndex].name}'s LinkedIn`}
                        >
                          <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                          href={teamMembers[currentIndex].social.twitter}
                          className="bg-white/90 text-[#033D54] p-3 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`${teamMembers[currentIndex].name}'s Twitter`}
                        >
                          <Twitter size={20} />
                        </motion.a>
                        <motion.a
                          href={`mailto:${teamMembers[currentIndex].social.email}`}
                          className="bg-white/90 text-[#033D54] p-3 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Email ${teamMembers[currentIndex].name}`}
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
                      <h3 className="text-3xl font-bold text-[#033D54] mb-2">{teamMembers[currentIndex].name}</h3>
                      <p className="text-[#FFD700] font-medium text-xl mb-6">{teamMembers[currentIndex].role}</p>
                      <p className="text-gray-600 mb-8 leading-relaxed">{teamMembers[currentIndex].bio}</p>

                      <div className="flex space-x-3 md:hidden">
                        <a
                          href={teamMembers[currentIndex].social.linkedin}
                          className="bg-[#033D54]/10 text-[#033D54] p-2 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                          aria-label={`${teamMembers[currentIndex].name}'s LinkedIn`}
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href={teamMembers[currentIndex].social.twitter}
                          className="bg-[#033D54]/10 text-[#033D54] p-2 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                          aria-label={`${teamMembers[currentIndex].name}'s Twitter`}
                        >
                          <Twitter size={18} />
                        </a>
                        <a
                          href={`mailto:${teamMembers[currentIndex].social.email}`}
                          className="bg-[#033D54]/10 text-[#033D54] p-2 rounded-full hover:bg-[#033D54] hover:text-white transition-colors"
                          aria-label={`Email ${teamMembers[currentIndex].name}`}
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
  )
}
