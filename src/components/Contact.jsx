"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, User, Mail, Phone } from "lucide-react"

export default function Contact({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Validate phone (optional but must be valid if provided)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          })
          setIsSubmitted(false)
        }, 3000)
      }, 1500)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-gray-700 hover:bg-[#033D54] hover:text-white transition-colors z-10"
              onClick={onClose}
              aria-label="Close contact form"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left side - Logo and text */}
              <div className="bg-[#033D54] text-white p-8 md:p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                {/* Background animation */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.div
                    className="absolute w-64 h-64 rounded-full bg-[#FFD700]/10"
                    style={{ top: "-10%", right: "-20%", filter: "blur(40px)" }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute w-64 h-64 rounded-full bg-white/5"
                    style={{ bottom: "-10%", left: "-20%", filter: "blur(40px)" }}
                    animate={{
                      scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>

                {/* Animated Logo */}
                <div className="relative z-10 flex justify-center mb-8">
                  <AnimatedLogo />
                </div>

                {/* Text content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">Let's Work</h2>
                  <p className="text-white/80 mb-6">
                    We're excited to help bring your ideas to life! Whether you have a project in mind or need
                    assistance with your existing applications, we're here to collaborate. Let's discuss how we can
                    contribute to your success.
                  </p>
                  <div className="hidden md:block">
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 mr-3 text-[#FFD700]" />
                      <span className="text-white/90">info@ikimtech.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-[#FFD700]" />
                      <span className="text-white/90">+251 912 345 678</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-8 md:p-10 md:w-3/5">
                <h3 className="text-xl font-bold text-[#033D54] mb-6">Send us a message</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h4>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#033D54] focus:border-[#033D54] outline-none transition-colors ${
                            errors.fullName ? "border-red-500 bg-red-50" : "border-gray-300"
                          }`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#033D54] focus:border-[#033D54] outline-none transition-colors ${
                            errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                          }`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#033D54] focus:border-[#033D54] outline-none transition-colors ${
                            errors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
                          }`}
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#033D54] focus:border-[#033D54] outline-none transition-colors ${
                          errors.message ? "border-red-500 bg-red-50" : "border-gray-300"
                        }`}
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#033D54] text-white py-3 px-6 rounded-lg hover:bg-[#033D54]/90 transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Animated Logo component similar to the hero section
function AnimatedLogo() {
  return (
    <div className="relative w-40 h-40">
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
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-white opacity-70"
        animate={{
          x: [0, -10, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Logo container with animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotateZ: [0, 2, 0, -2, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative w-[70%] h-[45%]"
        >
          {/* Logo image - replace with your actual logo */}
          <div className="w-full h-full flex items-center justify-center">
            <img src="/logo.jpg" alt="IKIM Tech Logo" className="w-full h-full object-contain" />
          </div>

          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-white rounded-full filter blur-xl opacity-20"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Code brackets animation */}
          <motion.div
            className="absolute -top-4 right-[32%] text-[#FFD700] text-xl font-bold"
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
