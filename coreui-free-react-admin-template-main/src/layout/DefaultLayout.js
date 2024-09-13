import React, { useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Navigate } from 'react-router-dom'

const DefaultLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsLoggedIn(false)
    }
  }, [])

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
