import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BlogManager from './BlogManager'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    views: 0
  })
  const navigate = useNavigate()

  useEffect(() => {
    // Load stats from localStorage
    const blogs = JSON.parse(localStorage.getItem('adminBlogs') || '[]')
    setStats({
      totalBlogs: blogs.length,
      publishedBlogs: blogs.filter(blog => blog.status === 'published').length,
      draftBlogs: blogs.filter(blog => blog.status === 'draft').length,
      views: blogs.reduce((sum, blog) => sum + (blog.views || 0), 0)
    })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin')
  }

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'blogs', name: 'Blog Posts', icon: '📝' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        className="w-64 bg-white shadow-lg border-r border-gray-200"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="font-space-grotesk font-bold text-xl text-gray-800">
            Admin Panel
          </h1>
          <p className="text-gray-500 text-sm font-inter">Portfolio CMS</p>
          <button
            onClick={() => navigate('/')}
            className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-inter"
          >
            ← Back to Portfolio
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-deep-orange text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span className="font-inter font-medium">{item.name}</span>
            </motion.button>
          ))}
        </nav>

        {/* Logout */}
        <motion.button
          onClick={handleLogout}
          className="absolute bottom-6 left-6 right-6 py-2 px-4 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 font-inter text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          🚪 Logout
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <motion.header
          className="bg-white shadow-sm border-b border-gray-200 p-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-space-grotesk font-bold text-2xl text-gray-800 capitalize">
                {activeTab}
              </h2>
              <p className="text-gray-500 font-inter">
                Manage your portfolio content
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-space-grotesk font-semibold text-gray-800">
                  Abiola Azeez
                </p>
                <p className="text-gray-500 text-sm font-inter">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-deep-orange rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </motion.header>

        {/* Content Area */}
        <motion.main
          className="p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Total Blogs', value: stats.totalBlogs, color: 'blue', icon: '📝' },
                  { title: 'Published', value: stats.publishedBlogs, color: 'green', icon: '✅' },
                  { title: 'Drafts', value: stats.draftBlogs, color: 'yellow', icon: '📄' },
                  { title: 'Total Views', value: stats.views, color: 'purple', icon: '👁️' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                    variants={itemVariants}
                    whileHover={{ y: -2, shadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm font-inter">{stat.title}</p>
                        <p className="text-2xl font-space-grotesk font-bold text-gray-800 mt-1">
                          {stat.value}
                        </p>
                      </div>
                      <div className="text-2xl">{stat.icon}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={itemVariants}
              >
                <h3 className="font-space-grotesk font-bold text-lg text-gray-800 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.button
                    onClick={() => setActiveTab('blogs')}
                    className="p-4 bg-deep-orange text-white rounded-lg font-inter font-medium hover:bg-orange-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📝 Create New Blog
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('blogs')}
                    className="p-4 bg-blue-500 text-white rounded-lg font-inter font-medium hover:bg-blue-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📊 View All Blogs
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/')}
                    className="p-4 bg-gray-500 text-white rounded-lg font-inter font-medium hover:bg-gray-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🌐 View Portfolio
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'blogs' && <BlogManager />}

          {activeTab === 'settings' && (
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              variants={itemVariants}
            >
              <h3 className="font-space-grotesk font-bold text-lg text-gray-800 mb-4">
                Settings
              </h3>
              <p className="text-gray-500 font-inter">
                Settings panel coming soon...
              </p>
            </motion.div>
          )}
        </motion.main>
      </div>
    </div>
  )
}

export default AdminDashboard