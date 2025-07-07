import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { courses, materials } from '../../data/mockData';
import { Book, Upload, FileText, Eye } from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  
  const myCourses = courses.filter(course => course.teacher_id === user?.id);
  const myMaterials = materials.filter(material => material.uploaded_by === user?.id);

  return (
    <div className="container-enhanced py-8 fade-in">
      <div className="mb-8">
        <h1 className="heading-primary">{user?.name}</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid-stats mb-8">
        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">My Courses</p>
              <p className="stats-card-value">{myCourses.length}</p>
            </div>
            <div className="stats-card-icon">
              <Book className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Materials Uploaded</p>
              <p className="stats-card-value">{myMaterials.length}</p>
            </div>
            <div className="stats-card-icon bg-green-600">
              <FileText className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Total Views</p>
              <p className="stats-card-value">247</p>
            </div>
            <div className="stats-card-icon bg-purple-600">
              <Eye className="h-6 w-6" />
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
                to="/materials/upload"
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Upload className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-gray-700">Upload New Material</span>
              </Link>
              <Link
                to="/courses"
                className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Book className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-gray-700">View All Courses</span>
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
                <span className="text-sm text-gray-600">Material uploaded</span>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">Course updated</span>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">New student enrolled</span>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses */}
      <div className="dashboard-card slide-up">
        <div className="dashboard-card-header">
          <h2 className="heading-secondary">My Courses</h2>
        </div>
        <div className="dashboard-card-body">
          <div className="grid-responsive">
            {myCourses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{course.name}</h3>
                <p className="text-muted-enhanced mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Created {course.created_at}</span>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-primary-enhanced hover:text-blue-700 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;