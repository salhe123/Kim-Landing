"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import Contact from "./Contact"
import Home from "../pages/Home"
export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Show notification badge after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Pulse animation
  useEffect(() => {
    if (showBadge && !isOpen) {
      const interval = setInterval(() => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 1000)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [showBadge, isOpen])

  const toggleModal = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowBadge(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
            isOpen ? "bg-red-500 text-white" : "bg-[#033D54] text-white"
          }`}
          onClick={toggleModal}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
          aria-label={isOpen ? "Close contact form" : "Open contact form"}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>

        {/* Notification badge */}
        <AnimatePresence>
          {showBadge && !isOpen && (
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              1
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Contact isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
