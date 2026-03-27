import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminToken') === 'authenticated'
  
  return isAuthenticated ? children : <Navigate to="/admin" replace />
}

export default ProtectedRoute