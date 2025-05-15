"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#033D54]"></div>
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-[#033D54]/0 via-[#033D54]/0 to-[#033D54]"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#FFD700"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-16 md:pt-20 pb-28 md:pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Revolutionize Your Business with IKIM Tech's Innovative Solutions.
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unlock the Power of Cutting-Edge Technology for Unprecedented Success
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-[#033D54] font-semibold rounded-md hover:bg-[#FFD700]/90 transition-colors"
              >
                Get Started Now
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full max-w-[400px]"
            >
              <AnimatedLogo />
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="bg-white/20 rounded-full p-2 cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Animated Logo component
function AnimatedLogo() {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      {/* Background circles */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#033D54] opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-[10%] rounded-full bg-[#033D54] opacity-30"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Animated particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#FFD700]"
        animate={{
          x: [0, 30, 60, 30, 0, -30, -60, -30, 0],
          y: [0, -30, 0, 30, 60, 30, 0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute top-3/4 left-1/4 w-3 h-3 rounded-full bg-white opacity-70"
        animate={{
          x: [0, -30, -60, -30, 0, 30, 60, 30, 0],
          y: [0, 30, 0, -30, -60, -30, 0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-[#FFD700] opacity-60"
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, -40, -80, -40, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Logo container with animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotateZ: [0, 2, 0, -2, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative w-[70%] h-[45%]"
        >
          {/* Logo image */}
          <img src="/logo.jpg" alt="IKIM Tech Co. Logo" className="w-full h-full object-contain" />

          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-white rounded-full filter blur-xl opacity-20"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Code brackets animation */}
          <motion.div
            className="absolute -top-4 right-[32%] text-[#FFD700] text-2xl font-bold"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            &lt;/&gt;
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-full border-2 border-[#FFD700]/30"
        style={{ borderRadius: "50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[5%] w-[90%] h-[90%] rounded-full border border-white/20"
        style={{ borderRadius: "50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
