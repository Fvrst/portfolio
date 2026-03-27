import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
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

  return (
    <section className="py-24 bg-cream text-black relative overflow-hidden">
      {/* Curved top border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q600,100 1200,0 L1200,100 L0,100 Z" 
            fill="var(--color-light)"
          />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-32 right-4 md:right-20 w-4 h-4 md:w-6 md:h-6 bg-deep-orange/30 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-8 md:left-32 w-3 h-3 md:w-4 md:h-4 border-2 border-deep-orange/50 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            y: [0, -20, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-4 md:left-20 w-6 h-1.5 md:w-8 md:h-2 bg-black/20 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            rotate: [0, 360, 720] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
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
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black/20">
          07
        </div>
        <div className="w-8 md:w-12 h-1 bg-black/30 mt-2"></div>
      </motion.div>

      <motion.div 
        className="container-max section-padding relative z-10 px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6">
            Get In Touch
          </h2>
          <p className="font-inter text-base md:text-lg lg:text-xl text-black/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white/50 p-6 md:p-8 rounded-2xl hover-glow"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-space-grotesk font-bold text-xl md:text-2xl mb-4 md:mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  className="flex items-center gap-3 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-deep-orange rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-space-grotesk font-semibold text-sm md:text-base">Email</p>
                    <p className="font-inter text-black/70 text-sm md:text-base">awwalfvrst@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-deep-orange rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-space-grotesk font-semibold text-sm md:text-base">Location</p>
                    <p className="font-inter text-black/70 text-sm md:text-base">Lagos, Nigeria.</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-deep-orange rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-space-grotesk font-semibold text-sm md:text-base">Response Time</p>
                    <p className="font-inter text-black/70 text-sm md:text-base">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/70 p-6 md:p-8 rounded-2xl hover-glow"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block font-space-grotesk font-semibold mb-2 text-sm md:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-deep-orange focus:border-deep-orange outline-none transition-all duration-300 font-inter text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block font-space-grotesk font-semibold mb-2 text-sm md:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-deep-orange focus:border-deep-orange outline-none transition-all duration-300 font-inter text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block font-space-grotesk font-semibold mb-2 text-sm md:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-deep-orange focus:border-deep-orange outline-none transition-all duration-300 font-inter text-sm md:text-base"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block font-space-grotesk font-semibold mb-2 text-sm md:text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-deep-orange focus:border-deep-orange outline-none transition-all duration-300 resize-none font-inter text-sm md:text-base"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-deep-orange text-white py-3 md:py-4 px-6 md:px-8 rounded-lg font-space-grotesk font-semibold text-base md:text-lg hover:bg-deep-orange/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-3 md:p-4 bg-green-100 text-green-800 rounded-lg font-inter text-sm md:text-base"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection