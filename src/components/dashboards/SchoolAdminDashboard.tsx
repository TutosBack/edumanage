import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { courses, users, materials, classes } from '../../data/mockData';
import { Book, Users, FileText, Plus, GraduationCap, UserCheck } from 'lucide-react';

const SchoolAdminDashboard: React.FC = () => {
  const { user, school } = useAuth();
  
  const schoolCourses = courses.filter(course => course.school_id === user?.current_school_id);
  const schoolUsers = users.filter(u => u.school_ids?.includes(user?.current_school_id || 0));
  const schoolClasses = classes.filter(c => c.school_id === user?.current_school_id);
  const schoolMaterials = materials.filter(material => 
    schoolCourses.some(course => course.id === material.course_id)
  );

  const teachers = schoolUsers.filter(u => u.role === 'teacher');
  const students = schoolUsers.filter(u => u.role === 'student');

  return (
    <div className="container-enhanced py-8 fade-in">
      <div className="mb-8">
        <h1 className="heading-primary">{school?.name}</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid-stats mb-8">
        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Courses</p>
              <p className="stats-card-value">{schoolCourses.length}</p>
            </div>
            <div className="stats-card-icon">
              <Book className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Teachers</p>
              <p className="stats-card-value">{teachers.length}</p>
            </div>
            <div className="stats-card-icon bg-green-600">
              <UserCheck className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Students</p>
              <p className="stats-card-value">{students.length}</p>
            </div>
            <div className="stats-card-icon bg-purple-600">
              <GraduationCap className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Classes</p>
              <p className="stats-card-value">{schoolClasses.length}</p>
            </div>
            <div className="stats-card-icon bg-indigo-600">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Materials</p>
              <p className="stats-card-value">{schoolMaterials.length}</p>
            </div>
            <div className="stats-card-icon bg-orange-600">
              <FileText className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="dashboard-card slide-up">
          <div className="dashboard-card-header">
            <h3 className="heading-secondary">Quick Actions</h3>
          </div>
          <div className="dashboard-card-body">
            <div className="space-y-3">
              <Link
                to="/admin/create-user"
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Plus className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-gray-700">Add Teacher/Student</span>
              </Link>
              <Link
                to="/admin/manage-users"
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Users className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-gray-700">Manage Users</span>
              </Link>
              <Link
                to="/courses"
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Book className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-gray-700">Manage Courses</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="dashboard-card slide-up">
          <div className="dashboard-card-header">
            <h3 className="heading-secondary">Recent Activity</h3>
          </div>
          <div className="dashboard-card-body">
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">New course created</span>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">Teacher added</span>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">Material uploaded</span>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Courses */}
      <div className="dashboard-card slide-up">
        <div className="dashboard-card-header">
          <h2 className="heading-secondary">Recent Courses</h2>
        </div>
        <div className="dashboard-card-body p-0">
          <div className="divide-y divide-gray-200">
            {schoolCourses.slice(0, 5).map((course) => (
              <div key={course.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                    <p className="text-muted-enhanced">{course.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Classes: {course.class_ids?.length || 0}</span>
                      <span>Materials: {materials.filter(m => m.course_id === course.id).length}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-enhanced">Created</p>
                    <p className="text-sm font-medium text-gray-900">{course.created_at}</p>
                    <Link
                      to={`/courses/${course.id}`}
                      className="text-primary-enhanced hover:text-blue-700 text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolAdminDashboard;