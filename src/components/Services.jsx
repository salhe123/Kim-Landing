"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Smartphone,
  Palette,
  Server,
  PenTool,
  Printer,
  CuboidIcon as Cube,
  Video,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const services = [
    {
      title: "Web Development",
      description:
        "Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance user experience and engagement.",
      icon: <Code size={36} />,
      color: "#5D5FEF",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
    },
    {
      title: "Mobile App Development",
      description:
        "Custom iOS and Android applications tailored to your business needs, along with efficient cross-platform solutions.",
      icon: <Smartphone size={36} />,
      color: "#4EADC5",
      features: ["Native Apps", "Cross-Platform Development", "UI/UX Design", "App Store Optimization"],
    },
    {
      title: "UI/UX Design",
      description:
        "Emphasizing user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts.",
      icon: <Palette size={36} />,
      color: "#FF9F43",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      title: "Web Hosting",
      description:
        "Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily.",
      icon: <Server size={36} />,
      color: "#0ABDE3",
      features: ["Reliable Servers", "24/7 Support", "Security Monitoring", "Scalable Solutions"],
    },
    {
      title: "Graphics Design",
      description:
        "Creating logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise.",
      icon: <PenTool size={36} />,
      color: "#FF6B6B",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
    },
    {
      title: "Printing",
      description:
        "Our printing design service specializes in creating high-quality graphics for print media like brochures, business cards, and posters.",
      icon: <Printer size={36} />,
      color: "#8395A7",
      features: ["Business Cards", "Brochures", "Posters", "Promotional Materials"],
    },
    {
      title: "3D Designing",
      description:
        "Offers innovative solutions for creating detailed three-dimensional models and visualizations. Whether for product design, architectural visualization, or entertainment.",
      icon: <Cube size={36} />,
      color: "#8854D0",
      features: ["Product Visualization", "Architectural Rendering", "Character Modeling", "Animation"],
    },
    {
      title: "Video Editing",
      description:
        "Transforms raw footage into polished, engaging content. We specialize in creating captivating videos for marketing, social media, and more.",
      icon: <Video size={36} />,
      color: "#C56CF0",
      features: ["Commercial Production", "Social Media Content", "Motion Graphics", "Color Grading"],
    },
    {
      title: "Market Consultancy",
      description:
        "Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make informed decisions for sustainable growth.",
      icon: <TrendingUp size={36} />,
      color: "#00D2D3",
      features: ["Market Research", "Competitive Analysis", "Growth Strategy", "Performance Tracking"],
    },
  ]

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % services.length)
      }
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume auto-play after 10 seconds
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume auto-play after 10 seconds
  }

  const handleDotClick = (index) => {
    setActiveIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume auto-play after 10 seconds
  }

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#033D54]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#033D54]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-6 h-6 rounded-full bg-[#FFD700]/30"></div>
      <div className="absolute bottom-1/4 left-10 w-10 h-10 rounded-full bg-[#033D54]/10"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-[#FFD700]/20"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            className="text-5xl font-bold text-[#033D54] mb-6 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
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
            We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Featured Service */}
          <div className="relative h-[500px] md:h-[400px] mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden"
              >
                {/* Background gradient based on service color */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${services[activeIndex].color}, transparent 70%)`,
                  }}
                ></div>

                {/* Service icon */}
                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 relative">
                  <motion.div
                    className="w-32 h-32 rounded-full flex items-center justify-center relative"
                    style={{ backgroundColor: `${services[activeIndex].color}15` }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px dashed ${services[activeIndex].color}40`,
                        borderRadius: "100%",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    ></motion.div>
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: services[activeIndex].color }}
                    >
                      {services[activeIndex].icon}
                    </div>
                  </motion.div>

                  {/* Floating particles */}
                  <motion.div
                    className="absolute w-3 h-3 rounded-full"
                    style={{ backgroundColor: services[activeIndex].color }}
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="absolute w-2 h-2 rounded-full"
                    style={{ backgroundColor: services[activeIndex].color }}
                    animate={{
                      x: [0, -20, 0],
                      y: [0, 30, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  ></motion.div>
                </div>

                {/* Service content */}
                <div className="md:w-2/3 text-center md:text-left md:pl-12">
                  <motion.span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      backgroundColor: `${services[activeIndex].color}20`,
                      color: services[activeIndex].color,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {`Service ${activeIndex + 1}/${services.length}`}
                  </motion.span>

                  <motion.h3
                    className="text-3xl font-bold text-[#033D54] mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: services[activeIndex].color }}
                  >
                    {services[activeIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 text-lg mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {services[activeIndex].description}
                  </motion.p>

                  {/* Features list */}
                  <motion.div
                    className="grid grid-cols-2 gap-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {services[activeIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: services[activeIndex].color }}
                        ></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <button
                      className="px-8 py-3 rounded-lg text-white font-medium flex items-center shadow-md hover:shadow-lg transition-all"
                      style={{ backgroundColor: services[activeIndex].color }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6">
            <motion.button
              className="w-12 h-12 rounded-full bg-[#033D54]/10 flex items-center justify-center text-[#033D54] hover:bg-[#033D54]/20 transition-colors shadow-sm"
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === activeIndex ? "bg-[#033D54] scale-110" : "bg-[#033D54]/20 hover:bg-[#033D54]/40"
                  }`}
                  style={{
                    backgroundColor: index === activeIndex ? services[index].color : `${services[index].color}30`,
                  }}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              className="w-12 h-12 rounded-full bg-[#033D54]/10 flex items-center justify-center text-[#033D54] hover:bg-[#033D54]/20 transition-colors shadow-sm"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
