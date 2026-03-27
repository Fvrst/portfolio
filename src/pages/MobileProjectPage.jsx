import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { mobileProjects } from '../data/portfolioData'

const MobileProjectPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = mobileProjects.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding bg-black text-white">
        <div className="text-center">
          <h1 className="font-space-grotesk font-bold text-4xl mb-4">Mobile Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-deep-orange text-cream font-space-grotesk font-semibold rounded-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
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

  return (
    <motion.div 
      className="min-h-screen pt-16 pb-24 px-4 md:px-8 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-6 md:mb-8 flex items-center gap-3 text-white hover:text-deep-orange transition-colors duration-300 font-space-grotesk font-semibold text-sm md:text-base"
          variants={itemVariants}
          whileHover={{ x: -5 }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </motion.button>

        {/* Project Header */}
        <motion.div className="mb-8 md:mb-12" variants={itemVariants}>
          <h1 className="font-space-grotesk font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6">
            {project.title}
          </h1>
          <p className="font-inter text-base md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-4xl">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div className="mb-8 md:mb-12" variants={itemVariants}>
          <h2 className="font-space-grotesk font-bold text-lg md:text-2xl mb-4 md:mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {project.tech.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-2 md:px-6 md:py-3 bg-deep-orange text-black font-inter font-medium rounded-full text-sm md:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Project Links */}
        <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-deep-orange text-black font-space-grotesk font-semibold rounded-full hover-lift hover-glow text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live App
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile App Case Study */}
        <motion.div variants={itemVariants}>
          <h2 className="font-space-grotesk font-bold text-lg md:text-2xl mb-4 md:mb-6">App Case Study</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                style={{ perspective: '1000px' }}
              >
                {/* Phone Mockup Frame */}
                <div className="relative w-64 md:w-80 h-[512px] md:h-[640px] bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-black rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 md:h-8 bg-black z-10 flex items-center justify-between px-3 md:px-6">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <div className="text-white text-xs font-medium">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 md:w-4 h-1.5 md:h-2 border border-white rounded-sm">
                          <div className="w-1.5 md:w-2 h-0.5 md:h-1 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Screenshot */}
                    <img 
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover mt-6 md:mt-8"
                    />
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-0.5 md:h-1 bg-white/50 rounded-full"></div>
                  </div>
                  
                  {/* Phone Buttons */}
                  <div className="absolute right-[-3px] md:right-[-4px] top-16 md:top-20 w-0.5 md:w-1 h-8 md:h-12 bg-gray-800 rounded-r"></div>
                  <div className="absolute right-[-3px] md:right-[-4px] top-28 md:top-36 w-0.5 md:w-1 h-12 md:h-16 bg-gray-800 rounded-r"></div>
                  <div className="absolute right-[-3px] md:right-[-4px] top-44 md:top-56 w-0.5 md:w-1 h-12 md:h-16 bg-gray-800 rounded-r"></div>
                </div>
                
                {/* Floating Tech Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-deep-orange text-black px-3 py-1 rounded-full text-sm font-semibold"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  Mobile
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation to other mobile projects */}
        <motion.div 
          className="mt-24 pt-12 border-t border-white/10"
          variants={itemVariants}
        >
          <h3 className="font-space-grotesk font-bold text-xl mb-8">Other Mobile Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mobileProjects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <motion.div
                  key={otherProject.id}
                  className="bg-white/10 p-6 rounded-2xl cursor-pointer hover-lift hover-glow backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/mobile-project/${otherProject.id}`)}
                >
                  <h4 className="font-space-grotesk font-bold text-lg mb-2">
                    {otherProject.title}
                  </h4>
                  <p className="font-inter text-white/70 text-sm">
                    {otherProject.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MobileProjectPage