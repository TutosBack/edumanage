import React from 'react';
import { Link } from 'react-router-dom';
import { schools, users } from '../../data/mockData';
import { Building2, Users, TrendingUp, Plus } from 'lucide-react';

const SuperAdminDashboard: React.FC = () => {
  const totalSchools = schools.length;
  const totalUsers = users.length;
  const recentSchools = schools.slice(-3);

  return (
    <div className="container-enhanced py-8 fade-in">
      <div className="mb-8">
        <h1 className="heading-primary">Admin Dashboard</h1>
        <p className="text-muted-enhanced mt-2">Manage all schools and system-wide settings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid-stats mb-8">
        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Total Schools</p>
              <p className="stats-card-value">{totalSchools}</p>
            </div>
            <div className="stats-card-icon">
              <Building2 className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Total Users</p>
              <p className="stats-card-value">{totalUsers}</p>
            </div>
            <div className="stats-card-icon bg-green-600">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="stats-card-label">Growth Rate</p>
              <p className="stats-card-value">+12%</p>
            </div>
            <div className="stats-card-icon bg-purple-600">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Schools */}
      <div className="dashboard-card slide-up">
        <div className="dashboard-card-header">
          <div className="flex items-center justify-between">
            <h2 className="heading-secondary">Recent Schools</h2>
            <Link
              to="/admin/create-school"
              className="btn-primary-enhanced"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add School
            </Link>
          </div>
        </div>
        <div className="dashboard-card-body p-0">
          <div className="divide-y divide-gray-200">
            {recentSchools.map((school) => (
              <div key={school.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{school.name}</h3>
                    <p className="text-muted-enhanced">{school.address}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-enhanced">Created</p>
                    <p className="text-sm font-medium text-gray-900">{school.created_at}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <Link
              to="/schools"
              className="text-primary-enhanced hover:text-blue-700 font-medium text-sm"
            >
              View all schools →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;