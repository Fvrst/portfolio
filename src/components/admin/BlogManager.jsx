import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlogEditor from './BlogEditor'

const BlogManager = () => {
  const [blogs, setBlogs] = useState([])
  const [showEditor, setShowEditor] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = () => {
    const savedBlogs = JSON.parse(localStorage.getItem('adminBlogs') || '[]')
    setBlogs(savedBlogs)
  }

  const saveBlogs = (updatedBlogs) => {
    localStorage.setItem('adminBlogs', JSON.stringify(updatedBlogs))
    setBlogs(updatedBlogs)
  }

  const handleCreateBlog = () => {
    setEditingBlog(null)
    setShowEditor(true)
  }

  const handleEditBlog = (blog) => {
    setEditingBlog(blog)
    setShowEditor(true)
  }

  const handleDeleteBlog = (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== blogId)
      saveBlogs(updatedBlogs)
    }
  }

  const handleSaveBlog = (blogData) => {
    let updatedBlogs
    if (editingBlog) {
      // Update existing blog
      updatedBlogs = blogs.map(blog => 
        blog.id === editingBlog.id ? { ...blogData, id: editingBlog.id } : blog
      )
    } else {
      // Create new blog
      const newBlog = {
        ...blogData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        views: 0
      }
      updatedBlogs = [newBlog, ...blogs]
    }
    saveBlogs(updatedBlogs)
    setShowEditor(false)
    setEditingBlog(null)
  }

  const handlePublishToggle = (blogId) => {
    const updatedBlogs = blogs.map(blog => {
      if (blog.id === blogId) {
        return {
          ...blog,
          status: blog.status === 'published' ? 'draft' : 'published',
          publishedAt: blog.status === 'draft' ? new Date().toISOString() : blog.publishedAt
        }
      }
      return blog
    })
    saveBlogs(updatedBlogs)
  }

  const filteredBlogs = blogs.filter(blog => {
    const matchesFilter = filter === 'all' || blog.status === filter
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  if (showEditor) {
    return (
      <BlogEditor
        blog={editingBlog}
        onSave={handleSaveBlog}
        onCancel={() => {
          setShowEditor(false)
          setEditingBlog(null)
        }}
      />
    )
  }

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Actions */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center"
        variants={itemVariants}
      >
        <div className="flex items-center gap-4">
          <motion.button
            onClick={handleCreateBlog}
            className="px-6 py-3 bg-deep-orange text-white rounded-lg font-space-grotesk font-semibold hover:bg-orange-600 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ✍️ Create New Blog
          </motion.button>
          
          {/* Filter Buttons */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {['all', 'published', 'draft'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-md text-sm font-inter font-medium transition-all duration-200 capitalize ${
                  filter === filterType
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <motion.input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Blog Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={itemVariants}
      >
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm font-inter">Total Blogs</p>
          <p className="text-2xl font-space-grotesk font-bold text-gray-800">{blogs.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm font-inter">Published</p>
          <p className="text-2xl font-space-grotesk font-bold text-green-600">
            {blogs.filter(b => b.status === 'published').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-gray-500 text-sm font-inter">Drafts</p>
          <p className="text-2xl font-space-grotesk font-bold text-yellow-600">
            {blogs.filter(b => b.status === 'draft').length}
          </p>
        </div>
      </motion.div>

      {/* Blog List */}
      <motion.div className="space-y-4" variants={itemVariants}>
        <AnimatePresence>
          {filteredBlogs.length === 0 ? (
            <motion.div
              className="bg-white rounded-lg p-8 text-center border border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-space-grotesk font-semibold text-lg text-gray-800 mb-2">
                No blogs found
              </h3>
              <p className="text-gray-500 font-inter mb-4">
                {blogs.length === 0 
                  ? "Get started by creating your first blog post!"
                  : "Try adjusting your search or filter criteria."
                }
              </p>
              {blogs.length === 0 && (
                <motion.button
                  onClick={handleCreateBlog}
                  className="px-6 py-2 bg-deep-orange text-white rounded-lg font-inter font-medium hover:bg-orange-600 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Create First Blog
                </motion.button>
              )}
            </motion.div>
          ) : (
            filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <div className="flex items-start gap-4">
                  {/* Blog Image */}
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    {blog.image ? (
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        📝
                      </div>
                    )}
                  </div>

                  {/* Blog Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-space-grotesk font-semibold text-lg text-gray-800 mb-1">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 font-inter text-sm mb-2 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 font-inter">
                          <span>
                            {blog.status === 'published' ? '✅ Published' : '📄 Draft'}
                          </span>
                          <span>
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </span>
                          <span>👁️ {blog.views || 0} views</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() => handlePublishToggle(blog.id)}
                          className={`px-3 py-1 rounded text-xs font-inter font-medium transition-colors duration-200 ${
                            blog.status === 'published'
                              ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                        </motion.button>
                        <motion.button
                          onClick={() => handleEditBlog(blog)}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-inter font-medium hover:bg-blue-200 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Edit
                        </motion.button>
                        <motion.button
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-inter font-medium hover:bg-red-200 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Delete
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default BlogManager