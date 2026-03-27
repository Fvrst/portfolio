import { motion } from 'framer-motion'
import { mobileProjects } from '../data/portfolioData'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

const MobileProjectsSection = () => {
  const navigate = useNavigate()
  const [hoveredProject, setHoveredProject] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef(null)

  const handleProjectClick = (projectId) => {
    navigate(`/mobile-project/${projectId}`)
  }

  const scrollToSlide = (index) => {
    setCurrentSlide(index)
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const phoneVariants = {
    hidden: { y: 100, opacity: 0, rotateY: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const renderPhoneCard = (project, index, isMobile = false) => (
    <motion.div
      key={project.id}
      className="group cursor-pointer"
      variants={phoneVariants}
      whileHover={!isMobile ? { 
        scale: 1.05,
        rotateY: index % 2 === 0 ? 5 : -5,
        z: 50
      } : {}}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      onClick={() => handleProjectClick(project.id)}
      style={{ perspective: '1000px' }}
    >
      {/* Phone Frame */}
      <div className="relative mx-auto max-w-sm">
        {/* Phone Mockup */}
        <div className="relative bg-gray-800 rounded-[2.5rem] p-4 shadow-2xl transform-gpu">
          {/* Screen */}
          <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 flex items-center justify-between px-6">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="w-12 h-4 bg-white rounded-full"></div>
            </div>

            {/* App Screenshot */}
            <div className="absolute inset-0 pt-8">
              <img 
                src={project.thumbnail}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${!isMobile ? 'group-hover:scale-110' : ''}`}
              />
              
              {/* Overlay */}
              {!isMobile && (
                <div className="absolute inset-0 bg-deep-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              
              {/* Hover Content */}
              {!isMobile && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-space-grotesk font-semibold text-sm">
                      View App
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* Phone Buttons */}
          <div className="absolute -right-1 top-20 w-1 h-8 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute -right-1 top-32 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute -right-1 top-48 w-1 h-12 bg-gray-700 rounded-l-lg"></div>
        </div>

        {/* Floating Tech Stack */}
        {!isMobile && (
          <motion.div 
            className="absolute -top-4 -right-4 flex flex-wrap gap-1 max-w-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: hoveredProject === project.id ? 1 : 0,
              scale: hoveredProject === project.id ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
          >
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <div
                key={techIndex}
                className="bg-deep-orange text-white text-xs px-2 py-1 rounded-full font-inter font-medium"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Project Info */}
      <motion.div 
        className="text-center mt-6 md:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.1 }}
      >
        <h3 className={`font-space-grotesk font-bold text-xl md:text-2xl mb-2 ${!isMobile ? 'group-hover:text-deep-orange' : ''} transition-colors duration-300`}>
          {project.title}
        </h3>
        <p className="font-inter text-sm md:text-base text-white/70 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-center gap-3">
          <motion.button
            className="px-4 py-2 bg-deep-orange text-white rounded-full font-space-grotesk font-medium text-sm hover:bg-deep-orange/90 transition-colors duration-300"
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              handleProjectClick(project.id)
            }}
          >
            View Details
          </motion.button>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/30 text-white rounded-full font-space-grotesk font-medium text-sm hover:bg-white hover:text-black transition-colors duration-300"
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-cream">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q600,100 1200,0 L1200,100 L0,100 Z" 
            fill="var(--color-dark)"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-3 h-3 bg-deep-orange/40 rounded-full"
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-4 h-4 border border-deep-orange/50 rotate-45"
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-2 h-8 bg-white/20 rounded-full"
          animate={{ 
            rotate: [0, 360],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Section Number */}
      <motion.div 
        className="absolute top-8 md:top-12 left-4 md:left-8 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-white/20">
          04
        </div>
        <div className="w-8 md:w-12 h-1 bg-white/30 mt-2"></div>
      </motion.div>

      <motion.div 
        className="container-max section-padding relative z-10 px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-12 md:mb-20"
          variants={itemVariants}
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6">
            Apps I've <span className="text-deep-orange">Crafted</span>
          </h2>
          <p className="font-inter text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
            Mobile experiences that live in your pocket. Each app tells a story, 
            solves a problem, and brings ideas to life through code and creativity.
          </p>
        </motion.div>

        {/* Scroll Arrows */}
        <motion.div 
          className="flex justify-center items-center gap-4 mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center gap-2 text-white/60"
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-inter text-sm">Swipe</span>
          </motion.div>
          
          <div className="flex gap-2">
            {mobileProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-deep-orange' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          <motion.div 
            className="flex items-center gap-2 text-white/60"
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-inter text-sm">to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Desktop: Regular Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 items-center">
          {mobileProjects.map((project, index) => renderPhoneCard(project, index, false))}
        </div>

        {/* Mobile & Tablet: Swipeable */}
        <div className="lg:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => {
              const scrollLeft = e.target.scrollLeft
              const slideWidth = e.target.offsetWidth
              const newSlide = Math.round(scrollLeft / slideWidth)
              setCurrentSlide(newSlide)
            }}
          >
            {mobileProjects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full snap-center"
              >
                <div className="max-w-sm mx-auto">
                  {renderPhoneCard(project, index, true)}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {mobileProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-deep-orange' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Section Bottom Text */}
        <motion.div 
          className="text-center mt-12 md:mt-20"
          variants={itemVariants}
        >
          <motion.button 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/mobile-apps')}
          >
            <span className="font-space-grotesk font-semibold text-base md:text-lg border-b-2 border-deep-orange text-deep-orange cursor-pointer">
              Check out my other apps →
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default MobileProjectsSection