import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { blogPosts } from '../data/portfolioData'

const AllBlogsPage = () => {
  const navigate = useNavigate()
  const [allBlogs, setAllBlogs] = useState([])

  useEffect(() => {
    // Combine static blog posts with admin-created blogs
    const adminBlogs = JSON.parse(localStorage.getItem('blogs') || '[]')
    const combinedBlogs = [...blogPosts, ...adminBlogs]
    setAllBlogs(combinedBlogs)
  }, [])

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`)
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
            All My <span className="text-deep-orange">Thoughts</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            A collection of my thoughts on development, design patterns, and the tools that make 
            building better software possible. These are the things that keep me up at night thinking.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="container-max grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {allBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => handleBlogClick(post.id)}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-deep-orange/50 transition-all duration-300 h-full">
                {/* Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-deep-orange/20 text-deep-orange rounded-full text-sm font-space-grotesk font-medium">
                    {post.category}
                  </span>
                  <span className="text-white/50 text-sm font-inter">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-space-grotesk font-bold text-xl md:text-2xl mb-3 group-hover:text-deep-orange transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-inter text-white/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-sm font-inter">
                    {post.date}
                  </span>
                  <motion.div
                    className="text-deep-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State if no posts */}
        {blogPosts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            variants={itemVariants}
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="font-space-grotesk font-bold text-2xl mb-2">No Blog Posts Yet</h3>
            <p className="text-white/60">I'm working on some amazing content. Check back soon!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default AllBlogsPage