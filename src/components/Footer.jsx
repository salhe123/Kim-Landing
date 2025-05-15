"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Phone, Mail, ChevronRight, ArrowUp, Instagram } from "lucide-react"
import { FaTiktok, FaWhatsapp, FaTelegram } from "react-icons/fa"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [hoverStates, setHoverStates] = useState({
    instagram: false,
    tiktok: false,
    whatsapp: false,
    telegram: false,
  })

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Handle hover state for social icons
  const handleHover = (social, isHovering) => {
    setHoverStates((prev) => ({
      ...prev,
      [social]: isHovering,
    }))
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#1a1a1a] to-[#111111] text-white pt-24 pb-8 overflow-hidden">
      {/* Enhanced SVG Background Patterns and Textures */}
      <div className="absolute inset-0 z-0">
        {/* Animated Noise Texture */}
        <svg className="absolute w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <filter id="footer-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#footer-noise)" />
        </svg>

        {/* Animated Grid Pattern */}
        <svg className="absolute w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>

        {/* Animated Dots Pattern */}
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#fff" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-dots)" />
          </svg>
        </div>

        {/* Animated Gradient Blobs with enhanced visibility */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(3, 61, 84, 0.2) 0%, rgba(3, 61, 84, 0) 70%)",
              top: "-10%",
              left: "-10%",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%)",
              bottom: "-10%",
              right: "-5%",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(3, 61, 84, 0.1) 0%, rgba(3, 61, 84, 0) 70%)",
              top: "30%",
              right: "20%",
              filter: "blur(50px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Enhanced Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,50 Q300,120 600,50 T1200,50"
            fill="none"
            stroke="#033D54"
            strokeWidth="1.5"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
          />
          <motion.path
            d="M0,100 Q300,170 600,100 T1200,100"
            fill="none"
            stroke="#FFD700"
            strokeWidth="1.5"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{
              duration: 10,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,150 Q300,220 600,150 T1200,150"
            fill="none"
            stroke="#033D54"
            strokeWidth="1.5"
            strokeOpacity="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{
              duration: 12,
              delay: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 5 + 2 + "px",
                height: Math.random() * 5 + 2 + "px",
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
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-20 h-20 border-2 border-[#033D54]/20 rounded-lg"
            style={{ top: "15%", left: "10%" }}
            animate={{
              rotate: 360,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              opacity: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-16 h-16 border-2 border-[#FFD700]/20"
            style={{ bottom: "20%", right: "15%" }}
            animate={{
              rotate: -360,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              opacity: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-24 h-24 border-2 border-[#033D54]/15 rounded-full"
            style={{ top: "60%", left: "20%" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              opacity: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        </div>
      </div>

      {/* Logo Section at Top */}
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="flex flex-col items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <img src="/logo.jpg" alt="IKIM Tech Logo" className="h-16 object-contain" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl text-center"
          >
            <p className="text-white/80 text-lg">
              Transforming ideas into digital reality. We create innovative solutions that drive business growth and
              enhance user experiences.
            </p>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Address Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-px h-12 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
            <h3 className="text-2xl font-bold mb-8 relative">
              Address
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-[#FFD700]"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#033D54]/20 flex items-center justify-center group-hover:bg-[#033D54]/30 transition-colors">
                    <MapPin className="text-[#FFD700]" size={16} />
                  </div>
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  Jemo, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-start group">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#033D54]/20 flex items-center justify-center group-hover:bg-[#033D54]/30 transition-colors">
                    <Phone className="text-[#FFD700]" size={16} />
                  </div>
                </div>
                <a href="tel:+251951207168" className="text-white/80 group-hover:text-white transition-colors">
                  +251951207168
                </a>
              </li>
              <li className="flex items-start group">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#033D54]/20 flex items-center justify-center group-hover:bg-[#033D54]/30 transition-colors">
                    <Mail className="text-[#FFD700]" size={16} />
                  </div>
                </div>
                <a
                  href="mailto:ikimtechco@gmail.com"
                  className="text-white/80 group-hover:text-white transition-colors"
                >
                  ikimtechco@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex mt-10 space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#033D54]/30 to-[#033D54]/10 flex items-center justify-center group overflow-hidden"
                onMouseEnter={() => handleHover("instagram", true)}
                onMouseLeave={() => handleHover("instagram", false)}
                whileHover={{ y: -3 }}
                aria-label="Instagram"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoverStates.instagram ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <Instagram size={18} className="relative z-10 text-white" />
              </motion.a>

              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#033D54]/30 to-[#033D54]/10 flex items-center justify-center group overflow-hidden"
                onMouseEnter={() => handleHover("tiktok", true)}
                onMouseLeave={() => handleHover("tiktok", false)}
                whileHover={{ y: -3 }}
                aria-label="TikTok"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoverStates.tiktok ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <FaTiktok size={18} className="relative z-10 text-white" />
              </motion.a>

              <motion.a
                href="https://wa.me/251951207168"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#033D54]/30 to-[#033D54]/10 flex items-center justify-center group overflow-hidden"
                onMouseEnter={() => handleHover("whatsapp", true)}
                onMouseLeave={() => handleHover("whatsapp", false)}
                whileHover={{ y: -3 }}
                aria-label="WhatsApp"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoverStates.whatsapp ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <FaWhatsapp size={18} className="relative z-10 text-white" />
              </motion.a>

              <motion.a
                href="https://t.me/ikimtech"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#033D54]/30 to-[#033D54]/10 flex items-center justify-center group overflow-hidden"
                onMouseEnter={() => handleHover("telegram", true)}
                onMouseLeave={() => handleHover("telegram", false)}
                whileHover={{ y: -3 }}
                aria-label="Telegram"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoverStates.telegram ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <FaTelegram size={18} className="relative z-10 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-px h-12 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
            <h3 className="text-2xl font-bold mb-8 relative">
              Services
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-[#FFD700]"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "Mobile Development",
                "UI/UX Design",
                "Graphics Design",
                "Printing",
                "3D Designing",
                "Video Editing",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <a href="#services" className="flex items-center group">
                    <div className="w-6 h-6 mr-3 relative">
                      <motion.div
                        className="absolute inset-0 bg-[#033D54]/20 rounded-full"
                        whileHover={{ scale: 1.2 }}
                      ></motion.div>
                      <ChevronRight
                        size={14}
                        className="absolute inset-0 m-auto text-[#FFD700] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                    <span className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {service}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-px h-12 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
            <h3 className="text-2xl font-bold mb-8 relative">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-[#FFD700]"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", link: "#about" },
                {
                  name: "Contact Us",
                  link: "#",
                  onClick: (e) => {
                    e.preventDefault()
                    document.querySelector(".fixed.bottom-6.right-6 button")?.click()
                  },
                },
                { name: "Our Services", link: "#services" },
                { name: "Our Project", link: "#projects" },
                { name: "Teams", link: "#team" },
                { name: "Privacy Policy", link: "#" },
                { name: "Terms of Service", link: "#" },
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <a href={item.link} onClick={item.onClick} className="flex items-center group">
                    <div className="w-6 h-6 mr-3 relative">
                      <motion.div
                        className="absolute inset-0 bg-[#033D54]/20 rounded-full"
                        whileHover={{ scale: 1.2 }}
                      ></motion.div>
                      <ChevronRight
                        size={14}
                        className="absolute inset-0 m-auto text-[#FFD700] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                    <span className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                      {item.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Divider with Gradient */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

        {/* Centered Copyright */}
        <div className="flex justify-center items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/70 text-center"
          >
            © <span className="text-[#FFD700]">IKIM Tech Co.</span> All Right Reserved.
          </motion.p>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFD700]/80 text-[#033D54] rounded-md flex items-center justify-center fixed bottom-6 left-6 z-40 shadow-lg shadow-[#FFD700]/20"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
