import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { courses, materials, classes } from '../../data/mockData';
import { Book, FileText, Clock, GraduationCap } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Students only see courses they're enrolled in (through their classes)
  const enrolledCourses = courses.filter(course => 
    course.school_id === user?.current_school_id &&
    course.class_ids?.some(classId => user?.class_ids?.includes(classId))
  );
  
  const availableMaterials = materials.filter(material => 
    enrolledCourses.some(course => course.id === material.course_id)
  );

  // Get student's classes
  const studentClasses = classes.filter(cls => 
    user?.class_ids?.includes(cls.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
        {studentClasses.length > 0 && (
          <p className="text-sm text-gray-500 mt-1">
            Classes: {studentClasses.map(cls => cls.name).join(', ')}
          </p>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">My Courses</p>
              <p className="text-3xl font-bold text-blue-600">{enrolledCourses.length}</p>
            </div>
            <Book className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Study Materials</p>
              <p className="text-3xl font-bold text-green-600">{availableMaterials.length}</p>
            </div>
            <FileText className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">My Classes</p>
              <p className="text-3xl font-bold text-purple-600">{studentClasses.length}</p>
            </div>
            <GraduationCap className="h-12 w-12 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Study Hours</p>
              <p className="text-3xl font-bold text-orange-600">42</p>
            </div>
            <Clock className="h-12 w-12 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
          <div className="space-y-3">
            <Link
              to="/courses"
              className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Book className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-gray-700">My Courses</span>
            </Link>
            <Link
              to="/materials"
              className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FileText className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-gray-700">Study Materials</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Downloads</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Algebra Fundamentals</span>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Cell Structure Video</span>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Physics Lab Manual</span>
              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">My Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{course.name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {materials.filter(m => m.course_id === course.id).length} materials
                </span>
                <div className="flex space-x-2">
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View
                  </Link>
                  <Link
                    to={`/courses/${course.id}/materials`}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Materials
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {enrolledCourses.length === 0 && (
          <div className="text-center py-12">
            <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses enrolled</h3>
            <p className="text-gray-600">
              You are not enrolled in any courses yet. Contact your school administrator for assistance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;