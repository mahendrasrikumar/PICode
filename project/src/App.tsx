import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
import ProtectedRoute from './components/common/ProtectedRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BottomNavigation from './components/layout/BottomNavigation';
import SEO from './components/common/SEO';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Courses = React.lazy(() => import('./pages/Courses'));
const CourseDetail = React.lazy(() => import('./pages/CourseDetail'));
const Examples = React.lazy(() => import('./pages/Examples'));
const Compiler = React.lazy(() => import('./pages/Compiler'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Certification = React.lazy(() => import('./pages/Certification'));

// Admin Components
const AdminLayout = React.lazy(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const UserManagement = React.lazy(() => import('./pages/admin/UserManagement'));
const CourseManagement = React.lazy(() => import('./pages/admin/CourseManagement'));
const CertificateManagement = React.lazy(() => import('./pages/admin/CertificateManagement'));

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="text-primary-500 mb-4" />
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
}

// Main App Layout
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main className="pb-16 md:pb-0">{children}</main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}

// 404 Page Component
function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Page not found</p>
        <a
          href="/"
          className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <Router>
              <SEO />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<AppLayout><Home /></AppLayout>} />
                  <Route path="/examples" element={<AppLayout><Examples /></AppLayout>} />
                  <Route path="/compiler" element={<AppLayout><Compiler /></AppLayout>} />
                  <Route path="/blog" element={<AppLayout><Blog /></AppLayout>} />
                  <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
                  <Route path="/register" element={<AppLayout><Register /></AppLayout>} />

                  {/* Protected Routes - Require Authentication */}
                  <Route path="/courses" element={
                    <ProtectedRoute>
                      <AppLayout><Courses /></AppLayout>
                    </ProtectedRoute>
                  } />
                  <Route path="/courses/:courseId" element={
                    <ProtectedRoute>
                      <AppLayout><CourseDetail /></AppLayout>
                    </ProtectedRoute>
                  } />
                  <Route path="/courses/:courseId/certificate" element={
                    <ProtectedRoute>
                      <AppLayout><Certification /></AppLayout>
                    </ProtectedRoute>
                  } />
                  <Route path="/profile" element={
                    <ProtectedRoute>
                      <AppLayout><Profile /></AppLayout>
                    </ProtectedRoute>
                  } />
                  <Route path="/settings" element={
                    <ProtectedRoute>
                      <AppLayout><Settings /></AppLayout>
                    </ProtectedRoute>
                  } />

                  {/* Admin Routes - Require Admin Role */}
                  <Route path="/admin" element={
                    <ProtectedRoute adminOnly>
                      <AdminLayout />
                    </ProtectedRoute>
                  }>
                    <Route index element={<AdminDashboard />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="courses" element={<CourseManagement />} />
                    <Route path="certificates" element={<CertificateManagement />} />
                    <Route path="analytics" element={<AdminDashboard />} />
                    <Route path="content" element={<AdminDashboard />} />
                    <Route path="settings" element={<AdminDashboard />} />
                  </Route>

                  {/* 404 Route */}
                  <Route path="*" element={<AppLayout><NotFound /></AppLayout>} />
                </Routes>
              </Suspense>
              
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'var(--toast-bg)',
                    color: 'var(--toast-color)',
                  },
                }}
              />
            </Router>
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;