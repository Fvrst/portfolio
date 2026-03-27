import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import MobileProjectPage from './pages/MobileProjectPage'
import BlogPage from './pages/BlogPage'
import AllMobileAppsPage from './pages/AllMobileAppsPage'
import AllBlogsPage from './pages/AllBlogsPage'
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import ProtectedRoute from './components/admin/ProtectedRoute'

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)

  useEffect(() => {
    // Check if admin is already authenticated
    const token = localStorage.getItem('adminToken')
    setIsAdminAuthenticated(token === 'authenticated')
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/mobile-project/:id" element={<MobileProjectPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/mobile-apps" element={<AllMobileAppsPage />} />
          <Route path="/blog" element={<AllBlogsPage />} />
          
          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              isAdminAuthenticated ? 
                <AdminDashboard /> : 
                <AdminLogin onLogin={setIsAdminAuthenticated} />
            } 
          />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App