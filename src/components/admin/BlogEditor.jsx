import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const BlogEditor = ({ blog, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    tags: '',
    status: 'draft',
    author: 'Abiola Azeez',
    category: 'Technology'
  })

  const [previewMode, setPreviewMode] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        image: blog.image || '',
        tags: blog.tags ? blog.tags.join(', ') : '',
        status: blog.status || 'draft',
        author: blog.author || 'Abiola Azeez',
        category: blog.category || 'Technology'
      })
    }
  }, [blog])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = async (status = formData.status) => {
    setSaving(true)
    
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const blogData = {
      ...formData,
      status,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      updatedAt: new Date().toISOString()
    }
    
    onSave(blogData)
    setSaving(false)
  }

  const handleQuickFormat = (format) => {
    const textarea = document.getElementById('content-editor')
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = formData.content.substring(start, end)
    
    let formattedText = selectedText
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`
        break
      case 'italic':
        formattedText = `*${selectedText}*`
        break
      case 'heading':
        formattedText = `## ${selectedText}`
        break
      case 'link':
        formattedText = `[${selectedText}](url)`
        break
      case 'code':
        formattedText = `\`${selectedText}\``
        break
      default:
        break
    }
    
    const newContent = formData.content.substring(0, start) + formattedText + formData.content.substring(end)
    setFormData(prev => ({ ...prev, content: newContent }))
  }

  const renderPreview = () => {
    // Simple markdown-to-HTML conversion
    let html = formData.content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>')
      .replace(/\n/g, '<br>')
    
    return { __html: html }
  }

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-space-grotesk font-bold text-2xl text-gray-800">
            {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          <p className="text-gray-500 font-inter">
            {blog ? 'Update your blog content' : 'Share your thoughts with the world'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setPreviewMode(!previewMode)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-inter font-medium hover:bg-gray-200 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {previewMode ? '✏️ Edit' : '👁️ Preview'}
          </motion.button>
          <motion.button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg font-inter font-medium hover:bg-gray-600 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            {!previewMode ? (
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-gray-700 font-space-grotesk font-medium mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter blog title..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter"
                    required
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-gray-700 font-space-grotesk font-medium mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief description of your blog post..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter resize-none"
                    required
                  />
                </div>

                {/* Formatting Toolbar */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-inter text-gray-600">Quick Format:</span>
                    {[
                      { label: 'B', action: 'bold', title: 'Bold' },
                      { label: 'I', action: 'italic', title: 'Italic' },
                      { label: 'H2', action: 'heading', title: 'Heading' },
                      { label: '🔗', action: 'link', title: 'Link' },
                      { label: '</>', action: 'code', title: 'Code' }
                    ].map((btn) => (
                      <motion.button
                        key={btn.action}
                        onClick={() => handleQuickFormat(btn.action)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm font-mono font-medium transition-colors duration-200"
                        title={btn.title}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {btn.label}
                      </motion.button>
                    ))}
                  </div>

                  {/* Content Editor */}
                  <textarea
                    id="content-editor"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your blog content here... 

You can use markdown formatting:
- **bold text**
- *italic text*
- ## Headings
- `code`
- [links](url)"
                    rows={15}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-mono text-sm resize-none"
                    required
                  />
                </div>
              </div>
            ) : (
              /* Preview Mode */
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h1 className="font-space-grotesk font-bold text-3xl text-gray-800 mb-2">
                    {formData.title || 'Blog Title'}
                  </h1>
                  <p className="text-gray-600 font-inter">
                    {formData.excerpt || 'Blog excerpt will appear here...'}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 font-inter">
                    <span>By {formData.author}</span>
                    <span>•</span>
                    <span>{formData.category}</span>
                    <span>•</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                <div 
                  className="prose max-w-none font-inter"
                  dangerouslySetInnerHTML={renderPreview()}
                />
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publishing Options */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-space-grotesk font-semibold text-lg text-gray-800 mb-4">
              Publishing
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={() => handleSave('draft')}
                  disabled={saving || !formData.title || !formData.excerpt}
                  className="flex-1 py-2 bg-gray-500 text-white rounded-lg font-inter font-medium hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {saving ? '💾 Saving...' : '📄 Save Draft'}
                </motion.button>
                <motion.button
                  onClick={() => handleSave('published')}
                  disabled={saving || !formData.title || !formData.excerpt}
                  className="flex-1 py-2 bg-deep-orange text-white rounded-lg font-inter font-medium hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {saving ? '🚀 Publishing...' : '🚀 Publish'}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Meta Information */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-space-grotesk font-semibold text-lg text-gray-800 mb-4">
              Meta Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter"
                >
                  <option value="Technology">Technology</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Programming">Programming</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="react, javascript, tutorial"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-inter font-medium mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-deep-orange transition-colors duration-200 font-inter"
                />
                {formData.image && (
                  <div className="mt-2">
                    <img 
                      src={formData.image} 
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogEditor