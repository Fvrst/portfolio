import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'

const ProjectPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="text-center">
          <h1 className="font-space-grotesk font-bold text-4xl mb-4">Project Not Found</h1>
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
      className="min-h-screen pt-16 pb-24 px-4 md:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-6 md:mb-8 flex items-center gap-3 text-black hover:text-deep-orange transition-colors duration-300 font-space-grotesk font-semibold text-sm md:text-base"
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
          <p className="font-inter text-base md:text-xl lg:text-2xl text-black/70 leading-relaxed max-w-4xl">
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
                className="px-3 py-2 md:px-6 md:py-3 bg-black text-cream font-inter font-medium rounded-full text-sm md:text-base"
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
              className="px-6 sm:px-8 py-3 sm:py-4 bg-deep-orange text-cream font-space-grotesk font-semibold rounded-full hover-lift hover-glow text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live Site
            </motion.a>
          </div>
        </motion.div>

        {/* Project Case Study */}
        <motion.div variants={itemVariants}>
          <h2 className="font-space-grotesk font-bold text-lg md:text-2xl mb-4 md:mb-6">Project Case Study</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {project.screenshots.slice(0, 2).map((screenshot, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg md:rounded-2xl bg-black/5 aspect-[16/10] hover-glow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation to other projects */}
        <motion.div 
          className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-black/10"
          variants={itemVariants}
        >
          <h3 className="font-space-grotesk font-bold text-lg md:text-xl mb-6 md:mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <motion.div
                  key={otherProject.id}
                  className="bg-white/50 p-6 rounded-2xl cursor-pointer hover-lift hover-glow"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/project/${otherProject.id}`)}
                >
                  <h4 className="font-space-grotesk font-bold text-lg mb-2">
                    {otherProject.title}
                  </h4>
                  <p className="font-inter text-black/70 text-sm">
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

export default ProjectPage