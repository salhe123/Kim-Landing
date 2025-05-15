"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiHome, FiServer, FiUsers, FiInfo, FiPhone, FiMenu, FiX, FiFolder } from "react-icons/fi"
import Contact from "./Contact"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => {
    setIsContactOpen(true)
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <>
      <header className="bg-[#033D54]/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 font-poppins">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
          {/* Animated Logo */}
          <motion.div
            className="flex items-center pl-0 md:pl-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img src="/logo.jpg" alt="IKIM Tech Logo" className="h-10 md:h-12 object-contain" />
              <motion.div
                className="absolute inset-0 bg-white rounded-full filter blur-md opacity-20"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 md:space-x-8 pr-0 md:pr-8">
            <NavLink href="#home" icon={<FiHome className="mr-1" />}>
              Home
            </NavLink>
            <NavLink href="#services" icon={<FiServer className="mr-1" />}>
              Services
            </NavLink>
            <NavLink href="#projects" icon={<FiFolder className="mr-1" />}>
              Projects
            </NavLink>
            <NavLink href="#team" icon={<FiUsers className="mr-1" />}>
              Team
            </NavLink>
            <NavLink href="#about" icon={<FiInfo className="mr-1" />}>
              About
            </NavLink>
            <NavLink onClick={openContact} icon={<FiPhone className="mr-1" />}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div initial={false} animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.div>
          </motion.button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-[#033D54]/95 backdrop-blur-sm shadow-lg py-4 px-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                <MobileNavLink href="#home" icon={<FiHome size={18} />} onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="#services" icon={<FiServer size={18} />} onClick={() => setIsMenuOpen(false)}>
                  Services
                </MobileNavLink>
                <MobileNavLink href="#projects" icon={<FiFolder size={18} />} onClick={() => setIsMenuOpen(false)}>
                  Projects
                </MobileNavLink>
                <MobileNavLink href="#team" icon={<FiUsers size={18} />} onClick={() => setIsMenuOpen(false)}>
                  Team
                </MobileNavLink>
                <MobileNavLink href="#about" icon={<FiInfo size={18} />} onClick={() => setIsMenuOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink icon={<FiPhone size={18} />} onClick={openContact}>
                  Contact
                </MobileNavLink>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

// Desktop navigation with hover effects
function NavLink({ href, children, icon, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="relative text-white hover:text-[#FFD700] transition-colors duration-300 flex items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon && icon}
      <span className="relative group">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
      </span>
    </motion.a>
  )
}

// Mobile navigation with hover effects
function MobileNavLink({ href, children, icon, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="flex items-center py-2 px-4 text-white hover:text-[#FFD700] hover:bg-white/5 rounded transition-all duration-300 cursor-pointer"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.a>
  )
}
