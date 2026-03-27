import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mobileProjects } from '../data/portfolioData'

const AllMobileAppsPage = () => {
  const navigate = useNavigate()

  const handleProjectClick = (projectId) => {
    navigate(`/mobile-project/${projectId}`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.div 
        className="section-padding py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="container-max text-center mb-16"
          variants={itemVariants}
        >
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            All My <span className="text-deep-orange">Mobile Apps</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of mobile applications I've built. From fitness tracking to business management, 
            each app represents a unique challenge and creative solution in the palm of your hand.
          </p>
        </motion.div>

        {/* Mobile Apps Grid */}
        <motion.div 
          className="container-max grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {mobileProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              variants={phoneVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: index % 2 === 0 ? 5 : -5,
                z: 50
              }}
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
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-deep-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Content */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-white font-space-grotesk font-semibold text-sm">
                            View App Details
                          </span>
                        </div>
                      </motion.div>
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
                <motion.div 
                  className="absolute -top-4 -right-4 flex flex-wrap gap-1 max-w-24"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
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
              </div>

              {/* Project Info */}
              <motion.div 
                className="text-center mt-6 md:mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <h3 className="font-space-grotesk font-bold text-xl md:text-2xl mb-2 group-hover:text-deep-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-inter text-sm md:text-base text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex justify-center gap-3">
                  <motion.button
                    className="px-4 py-2 bg-deep-orange text-white rounded-full font-space-grotesk font-medium text-sm hover:bg-deep-orange/90 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State if no projects */}
        {mobileProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            variants={itemVariants}
          >
            <div className="text-6xl mb-4">📱</div>
            <h3 className="font-space-grotesk font-bold text-2xl mb-2">No Mobile Apps Yet</h3>
            <p className="text-white/60">I'm cooking up some amazing mobile experiences. Stay tuned!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default AllMobileAppsPage