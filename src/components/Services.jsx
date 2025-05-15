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
} from "lucide-react"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const services = [
    {
      title: "Web Development",
      description:
        "Build user-friendly websites that work seamlessly on all devices. Our expert team creates intuitive designs that enhance user experience and drive engagement. We specialize in developing custom websites that align with your brand identity and business objectives. From simple landing pages to complex e-commerce platforms, we deliver solutions that help your business establish a strong online presence and achieve your digital goals.",
      icon: <Code size={36} />,
      color: "#5D5FEF",
    },
    {
      title: "Mobile App Development",
      description:
        "Custom iOS and Android applications tailored to your business needs. We deliver efficient cross-platform solutions that provide exceptional user experiences. Our development process ensures your app is intuitive, feature-rich, and optimized for performance across all mobile devices. We handle everything from concept and design to development, testing, and deployment, ensuring your app stands out in the crowded marketplace.",
      icon: <Smartphone size={36} />,
      color: "#4EADC5",
    },
    {
      title: "UI/UX Design",
      description:
        "Emphasizing user-centric design to create intuitive interfaces that delight users. Our design process includes comprehensive prototyping and wireframing to visualize and test concepts before development. We focus on creating seamless user journeys that drive engagement and conversion. By combining aesthetic appeal with functional design, we create digital experiences that users love to interact with and that achieve your business objectives.",
      icon: <Palette size={36} />,
      color: "#FF9F43",
    },
    {
      title: "Web Hosting",
      description:
        "Reliable hosting solutions that ensure your website is accessible to users 24/7. Our hosting services allow businesses and individuals to establish their online presence easily and securely. We provide comprehensive support, regular backups, and robust security measures to protect your digital assets. With our scalable hosting solutions, your website can handle increasing traffic and growing business demands without compromising on performance or security.",
      icon: <Server size={36} />,
      color: "#0ABDE3",
    },
    {
      title: "Graphics Design",
      description:
        "Creating compelling logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise. Our design team works closely with you to understand your brand values and target audience, ensuring all visual elements communicate your unique identity effectively. From logo design and brand guidelines to marketing materials and social media graphics, we create visuals that capture attention and convey your message clearly.",
      icon: <PenTool size={36} />,
      color: "#FF6B6B",
    },
    {
      title: "Printing",
      description:
        "Our printing design service specializes in creating high-quality graphics for print media. From business cards and brochures to posters and promotional materials, we ensure your printed materials make a lasting impression. We handle the entire process from design to production, ensuring consistent quality. Our attention to detail and commitment to excellence ensure that your printed materials effectively represent your brand and communicate your message to your target audience.",
      icon: <Printer size={36} />,
      color: "#8395A7",
    },
    {
      title: "3D Designing",
      description:
        "Innovative solutions for creating detailed three-dimensional models and visualizations. Our 3D design services cover product design, architectural visualization, character modeling, and more. We transform concepts into realistic 3D representations that can be used for marketing, presentations, or production. Whether you need product prototypes, architectural renderings, or immersive virtual experiences, our 3D design expertise brings your ideas to life with stunning detail and realism.",
      icon: <Cube size={36} />,
      color: "#8854D0",
    },
    {
      title: "Video Editing",
      description:
        "Transform raw footage into polished, engaging content that captivates your audience. Our video editing team specializes in creating compelling videos for marketing, social media, corporate communications, and more. We handle everything from basic editing to advanced post-production effects. With our expertise in storytelling and visual communication, we create videos that effectively convey your message, evoke emotions, and inspire action from your target audience.",
      icon: <Video size={36} />,
      color: "#C56CF0",
    },
    {
      title: "Market Consultancy",
      description:
        "Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make informed decisions. Our consultancy services provide comprehensive market research, competitive analysis, and actionable recommendations to drive sustainable growth and maximize your market potential. We work closely with you to understand your business goals and challenges, then develop tailored strategies that leverage market opportunities and mitigate risks to ensure long-term success.",
      icon: <TrendingUp size={36} />,
      color: "#00D2D3",
    },
  ]

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % services.length)
      }
    }, 10000) // Changed to 10 seconds
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
    setTimeout(() => setIsPaused(false), 15000) // Resume auto-play after 15 seconds
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 15000) // Resume auto-play after 15 seconds
  }

  const handleDotClick = (index) => {
    setActiveIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 15000) // Resume auto-play after 15 seconds
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
            Our expert team delivers tailored services to meet your unique needs and objectives.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Featured Service */}
          <div className="relative h-[450px] md:h-[400px] mb-16">
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
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: services[activeIndex].color }}
                  >
                    {services[activeIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-700 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {services[activeIndex].description}
                  </motion.p>
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
