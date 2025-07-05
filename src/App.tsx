import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CourseMaterials from './pages/CourseMaterials';
import Materials from './pages/Materials';
import UploadMaterial from './pages/UploadMaterial';
import CreateUser from './pages/CreateUser';
import ManageUsers from './pages/ManageUsers';
import CreateSchool from './pages/CreateSchool';
import Schools from './pages/Schools';
import SchoolDetails from './pages/SchoolDetails';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseId" element={<CourseDetails />} />
            <Route path="courses/:courseId/materials" element={<CourseMaterials />} />
            <Route path="materials" element={<Materials />} />
            
            <Route path="materials/upload" element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <UploadMaterial />
              </ProtectedRoute>
            } />
            
            <Route path="admin/create-user" element={
              <ProtectedRoute allowedRoles={['school_admin']}>
                <CreateUser />
              </ProtectedRoute>
            } />
            
            <Route path="admin/manage-users" element={
              <ProtectedRoute allowedRoles={['school_admin']}>
                <ManageUsers />
              </ProtectedRoute>
            } />
            
            <Route path="admin/create-school" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <CreateSchool />
              </ProtectedRoute>
            } />
            
            <Route path="schools" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <Schools />
              </ProtectedRoute>
            } />
            
            <Route path="schools/:schoolId" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SchoolDetails />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;