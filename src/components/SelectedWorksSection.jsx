import { motion, useAnimationControls } from 'framer-motion'
import { projects } from '../data/portfolioData'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const SelectedWorksSection = () => {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [scrollLocked, setScrollLocked] = useState(false)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef(null)
  const scrollTimeoutRef = useRef(null)

  // Track direction when index changes
  useEffect(() => {
    // Ensure currentIndex is within bounds
    const maxIndex = projects.length - 1
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
      return
    }
    if (currentIndex < 0) {
      setCurrentIndex(0)
      return
    }

    if (currentIndex > prevIndex) {
      setDirection(1) // Moving forward
    } else if (currentIndex < prevIndex) {
      setDirection(-1) // Moving backward
    }
    setPrevIndex(currentIndex)
  }, [currentIndex, prevIndex, projects.length])

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  useEffect(() => {
    const handleScroll = (e) => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      
      // Check if section is fully visible with some margin for better UX
      const sectionFullyVisible = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      const isPartiallyInView = rect.top < window.innerHeight && rect.bottom > 0

      // Only lock scrolling when section is mostly/fully visible
      if (sectionFullyVisible && isPartiallyInView) {
        e.preventDefault()
        
        // Prevent rapid scrolling
        if (scrollLocked) return
        setScrollLocked(true)

        const deltaY = e.deltaY
        
        if (deltaY > 0) {
          // Scroll down - next project
          if (currentIndex < projects.length - 1) {
            setCurrentIndex(prev => prev + 1)
          } else {
            // At last project, allow scroll to next section only after a delay
            setTimeout(() => {
              setScrollLocked(false)
              // Force scroll to next section
              const nextSection = section.nextElementSibling
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
              }
            }, 800)
            return
          }
        } else if (deltaY < 0) {
          // Scroll up - previous project
          if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
          } else {
            // At first project, allow scroll to previous section only after a delay
            setTimeout(() => {
              setScrollLocked(false)
              // Force scroll to previous section
              const prevSection = section.previousElementSibling
              if (prevSection) {
                prevSection.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })
              }
            }, 800)
            return
          }
        }

        // Reset scroll lock after animation completes
        setTimeout(() => {
          setScrollLocked(false)
        }, 1200) // Longer timeout for smoother experience
      }
    }

    // Enhanced touch handling for mobile
    let touchStartY = 0
    let touchEndY = 0

    const handleTouchStart = (e) => {
      if (!sectionRef.current) return
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionFullyVisible = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      const isPartiallyInView = rect.top < window.innerHeight && rect.bottom > 0

      if (sectionFullyVisible && isPartiallyInView) {
        touchStartY = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e) => {
      if (!sectionRef.current) return
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionFullyVisible = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      const isPartiallyInView = rect.top < window.innerHeight && rect.bottom > 0

      if (sectionFullyVisible && isPartiallyInView && touchStartY !== 0) {
        e.preventDefault() // Prevent default scroll
      }
    }

    const handleTouchEnd = (e) => {
      if (!sectionRef.current || touchStartY === 0) return
      
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionFullyVisible = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      const isPartiallyInView = rect.top < window.innerHeight && rect.bottom > 0

      if (sectionFullyVisible && isPartiallyInView) {
        touchEndY = e.changedTouches[0].clientY
        const touchDiff = touchStartY - touchEndY
        const minSwipeDistance = 50

        if (Math.abs(touchDiff) > minSwipeDistance && !scrollLocked) {
          setScrollLocked(true)

          if (touchDiff > 0) {
            // Swiped up - next project
            if (currentIndex < projects.length - 1) {
              setCurrentIndex(prev => prev + 1)
            } else {
              // At last project, allow scroll to next section
              setTimeout(() => {
                setScrollLocked(false)
                const nextSection = section.nextElementSibling
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
                }
              }, 800)
              return
            }
          } else {
            // Swiped down - previous project
            if (currentIndex > 0) {
              setCurrentIndex(prev => prev - 1)
            } else {
              // At first project, allow scroll to previous section
              setTimeout(() => {
                setScrollLocked(false)
                const prevSection = section.previousElementSibling
                if (prevSection) {
                  prevSection.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })
                }
              }, 800)
              return
            }
          }

          setTimeout(() => {
            setScrollLocked(false)
          }, 1200)
        }

        touchStartY = 0
        touchEndY = 0
      }
    }

    const handleKeyDown = (e) => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionFullyVisible = rect.top <= 100 && rect.bottom >= window.innerHeight - 100

      if (sectionFullyVisible && !scrollLocked) {
        if (e.key === 'ArrowDown' && currentIndex < projects.length - 1) {
          e.preventDefault()
          setScrollLocked(true)
          setCurrentIndex(prev => prev + 1)
          setTimeout(() => setScrollLocked(false), 1000)
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          e.preventDefault()
          setScrollLocked(true)
          setCurrentIndex(prev => prev - 1)
          setTimeout(() => setScrollLocked(false), 1000)
        }
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      clearTimeout(scrollTimeoutRef.current)
    }
  }, [currentIndex, scrollLocked])

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.8,
      zIndex: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      zIndex: 20,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateY: direction > 0 ? -90 : 90,
      scale: 0.8,
      zIndex: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-cream relative flex items-center justify-center overflow-hidden"
      style={{ scrollSnapType: 'y mandatory' }}
    >

      {/* Section Number */}
      <motion.div 
        className="absolute top-8 md:top-12 left-4 md:left-8 z-30"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black/20">
          03
        </div>
        <div className="w-8 md:w-12 h-1 bg-black/30 mt-2"></div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div 
        className="absolute top-8 md:top-12 right-4 md:right-8 z-30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="font-space-grotesk font-semibold text-sm md:text-base text-black/60">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </div>
          <div className="flex flex-col gap-1">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-6 md:h-8 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'bg-deep-orange' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Section Title - Mobile: left-aligned, Desktop: centered */}
      <motion.div 
        className="absolute top-20 md:top-16 left-4 md:left-1/3 md:transform md:-translate-x-1/4 z-30 text-left md:text-center max-w-xs md:max-w-2xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-space-grotesk font-bold text-2xl md:text-4xl lg:text-5xl text-black mb-2 md:mb-3">
          Web Projects I've <span className="text-deep-orange">Built</span>
        </h2>
        <motion.p 
          className="font-inter text-xs md:text-base text-black/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full-stack web applications crafted with passion and purpose
        </motion.p>
      </motion.div>

      {/* Card Container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 pt-32 md:pt-40">
        <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center perspective-1000">
          {projects.map((project, index) => {
            const isActive = index === currentIndex
            const isPrev = index === currentIndex - 1
            const isNext = index === currentIndex + 1
            const shouldRender = isActive || isPrev || isNext
            
            if (!shouldRender) return null
            
            let animationState = "exit"
            if (isActive) {
              animationState = "center"
            } else if ((index > currentIndex && direction > 0) || (index < currentIndex && direction < 0)) {
              animationState = "enter"
            }
            
            return (
              <motion.div
                key={`${project.id}-${currentIndex}`} // Force re-render on index change
                className={`absolute inset-0`}
                variants={cardVariants}
                initial="enter"
                animate={animationState}
                custom={direction}
                style={{
                  zIndex: isActive ? 20 : 10
                }}
              >
                <div className="w-full h-full grid md:grid-cols-2 gap-8 items-center bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl">
                  {/* Project Image */}
                  <motion.div 
                    className="group cursor-pointer h-full"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <div className="relative overflow-hidden rounded-2xl h-full bg-black/5 hover-glow">
                      <img 
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-deep-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div 
                          className="bg-cream px-4 md:px-6 py-2 md:py-3 rounded-full font-space-grotesk font-semibold text-sm md:text-base"
                          whileHover={{ scale: 1.1 }}
                        >
                          View Project
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Content */}
                  <div className="space-y-4 md:space-y-6 h-full flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
                      transition={{ duration: 0.8, delay: isActive ? 0.4 : 0 }}
                    >
                      <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 md:mb-4">
                        {project.title}
                      </h3>
                      <p className="font-inter text-base md:text-lg lg:text-xl text-black/70 leading-relaxed mb-4 md:mb-6">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 md:px-4 py-1.5 md:py-2 bg-black/5 text-black font-inter font-medium rounded-full text-xs md:text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: isActive ? 1 : 0, 
                              scale: isActive ? 1 : 0.8 
                            }}
                            transition={{ duration: 0.5, delay: isActive ? 0.6 + techIndex * 0.1 : 0 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent)', color: 'var(--color-light)' }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <motion.div 
                        className="flex flex-col sm:flex-row gap-3 md:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: isActive ? 0.8 : 0 }}
                      >
                        <motion.button
                          className="px-6 md:px-8 py-2.5 md:py-3 bg-deep-orange text-cream font-space-grotesk font-semibold rounded-full hover-lift hover-glow text-sm md:text-base"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleProjectClick(project.id)}
                        >
                          View Project
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  )
}

export default SelectedWorksSection