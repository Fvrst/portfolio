import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const ScrollReveal = ({ children, className = "", delay = 0, duration = 0.8 }) => {
  const ref = useRef(null)

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75], // Custom easing for smooth rise effect
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, // Animation triggers only once when first coming into view
        amount: 0.2, // Trigger when 20% of the element is visible
        margin: "-50px 0px -50px 0px" // Start animation slightly before element is fully visible
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal