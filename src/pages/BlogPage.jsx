import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { blogPosts } from '../data/portfolioData'

const BlogPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    // Check static blog posts first
    const staticPost = blogPosts.find(p => p.id === parseInt(id))
    if (staticPost) {
      setPost(staticPost)
      return
    }

    // Check admin-created blogs
    const adminBlogs = JSON.parse(localStorage.getItem('blogs') || '[]')
    const adminPost = adminBlogs.find(p => p.id === id || p.id === parseInt(id))
    if (adminPost) {
      setPost(adminPost)
    }
  }, [id])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="text-center">
          <h1 className="font-space-grotesk font-bold text-4xl mb-4">Blog Post Not Found</h1>
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
      className="min-h-screen pt-16 pb-24 section-padding"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-max max-w-4xl">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-3 text-black hover:text-deep-orange transition-colors duration-300 font-space-grotesk font-semibold"
          variants={itemVariants}
          whileHover={{ x: -5 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </motion.button>

        {/* Blog Header */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="flex items-center gap-4 text-sm text-black/60 font-inter mb-6">
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-black/70 leading-relaxed">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/5 aspect-[16/9]">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Blog Content */}
        <motion.div 
          className="prose prose-lg max-w-none"
          variants={itemVariants}
        >
          <div className="font-inter text-lg leading-relaxed text-black/80 space-y-6">
            {post.content ? (
              // Render admin-created blog content (could be markdown)
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
            ) : (
              // Static blog placeholder content
              <>
                <p>
                  This is where the full blog post content would be displayed. In a real implementation, 
                  you would fetch the content from a CMS or markdown files and render it here.
                </p>
                <p>
                  The blog post content would include rich text formatting, code snippets, images, 
                  and other media to create engaging technical content for your readers.
                </p>
                <p>
                  You could use libraries like react-markdown or MDX to render markdown content 
                  with React components embedded within the posts.
                </p>
              </>
            )}
          </div>
        </motion.div>

        {/* Author Info */}
        <motion.div 
          className="mt-16 pt-8 border-t border-black/10"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center text-cream font-space-grotesk font-bold text-xl">
              AQ
            </div>
            <div>
              <h3 className="font-space-grotesk font-bold text-lg">Abiola Azeez Quadri</h3>
              <p className="font-inter text-black/70">Software Engineer</p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div 
          className="mt-16 pt-8 border-t border-black/10"
          variants={itemVariants}
        >
          <h3 className="font-space-grotesk font-bold text-2xl mb-8">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  className="bg-white/50 p-6 rounded-2xl cursor-pointer hover-lift hover-glow"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  <h4 className="font-space-grotesk font-bold text-lg mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="font-inter text-black/70 text-sm mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <span className="font-inter text-xs text-black/50">
                    {relatedPost.readTime}
                  </span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BlogPage