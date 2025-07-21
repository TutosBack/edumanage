import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  goals, 
  courses,
  createGoal, 
  updateGoalProgress, 
  getUserGoals, 
  deleteGoal 
} from '../data/mockData';
import { 
  Target, 
  Plus, 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Edit, 
  Trash2,
  BarChart3,
  Award,
  BookOpen
} from 'lucide-react';

const Goals: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('daily');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState<number | null>(null);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: 'academic' as 'academic' | 'personal' | 'course_specific',
    course_id: '',
    target_value: '',
    unit: '',
    due_date: ''
  });
  const [progressUpdate, setProgressUpdate] = useState({
    value: '',
    notes: ''
  });

  const userGoals = getUserGoals(user?.id || 0, activeTab);
  const userCourses = courses.filter(c => 
    (user?.role === 'teacher' && c.teacher_id === user.id) ||
    (user?.role === 'student' && user.class_ids?.some(classId => c.class_ids?.includes(classId)))
  );

  const handleCreateGoal = () => {
    if (!newGoal.title || !newGoal.due_date || !user) return;

    const dueDate = activeTab === 'daily' 
      ? new Date(newGoal.due_date + 'T23:59:59Z').toISOString()
      : new Date(newGoal.due_date + 'T23:59:59Z').toISOString();

    createGoal({
      user_id: user.id,
      title: newGoal.title,
      description: newGoal.description,
      goal_type: activeTab,
      category: newGoal.category,
      course_id: newGoal.course_id ? parseInt(newGoal.course_id) : undefined,
      target_value: newGoal.target_value ? parseFloat(newGoal.target_value) : undefined,
      unit: newGoal.unit || undefined,
      status: 'active',
      due_date: dueDate
    });

    setNewGoal({
      title: '',
      description: '',
      category: 'academic',
      course_id: '',
      target_value: '',
      unit: '',
      due_date: ''
    });
    setShowCreateModal(false);
  };

  const handleUpdateProgress = (goalId: number) => {
    if (!progressUpdate.value) return;

    updateGoalProgress(
      goalId, 
      parseFloat(progressUpdate.value), 
      progressUpdate.notes || undefined
    );

    setProgressUpdate({ value: '', notes: '' });
    setShowProgressModal(null);
  };

  const getProgressPercentage = (goal: any) => {
    if (!goal.target_value) return 0;
    return Math.min((goal.current_value / goal.target_value) * 100, 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return <BookOpen className="h-4 w-4" />;
      case 'course_specific': return <Target className="h-4 w-4" />;
      case 'personal': return <Award className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  const getGoalStats = () => {
    const allUserGoals = getUserGoals(user?.id || 0);
    return {
      total: allUserGoals.length,
      completed: allUserGoals.filter(g => g.status === 'completed').length,
      active: allUserGoals.filter(g => g.status === 'active').length,
      completionRate: allUserGoals.length > 0 
        ? Math.round((allUserGoals.filter(g => g.status === 'completed').length / allUserGoals.length) * 100)
        : 0
    };
  };

  const stats = getGoalStats();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Goals</h1>
        <p className="text-gray-600 mt-2">Track your daily and weekly objectives</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Goals</p>
              <p className="text-3xl font-bold text-primary">{stats.total}</p>
            </div>
            <Target className="h-12 w-12 text-primary" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
            </div>
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-3xl font-bold text-blue-600">{stats.active}</p>
            </div>
            <Clock className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-3xl font-bold text-purple-600">{stats.completionRate}%</p>
            </div>
            <TrendingUp className="h-12 w-12 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Tabs and Create Button */}
      <div className="flex items-center justify-between mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'daily', label: 'Daily Goals', icon: Calendar },
              { id: 'weekly', label: 'Weekly Goals', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Goal
        </button>
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        {userGoals.map((goal) => {
          const progressPercentage = getProgressPercentage(goal);
          const course = goal.course_id ? courses.find(c => c.id === goal.course_id) : null;
          const isOverdue = new Date(goal.due_date) < new Date() && goal.status === 'active';

          return (
            <div key={goal.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(goal.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(goal.status)}`}>
                      {goal.status}
                    </span>
                    {isOverdue && (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Overdue
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-3">{goal.description}</p>
                  
                  {course && (
                    <p className="text-sm text-blue-600 mb-3">Course: {course.name}</p>
                  )}

                  {goal.target_value && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          Progress: {goal.current_value} / {goal.target_value} {goal.unit}
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {Math.round(progressPercentage)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Due: {new Date(goal.due_date).toLocaleDateString()}
                    </div>
                    {goal.completed_at && (
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                        Completed: {new Date(goal.completed_at).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {goal.status === 'active' && (
                    <button
                      onClick={() => setShowProgressModal(goal.id)}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Update
                    </button>
                  )}
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {userGoals.length === 0 && (
          <div className="text-center py-12">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab} goals yet</h3>
            <p className="text-gray-600 mb-4">Create your first goal to start tracking your progress</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Goal
            </button>
          </div>
        )}
      </div>

      {/* Create Goal Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Create {activeTab} Goal
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter goal title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="Describe your goal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newGoal.category}
                  onChange={(e) => setNewGoal({...newGoal, category: e.target.value as any})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="academic">Academic</option>
                  <option value="course_specific">Course Specific</option>
                  <option value="personal">Personal</option>
                </select>
              </div>

              {newGoal.category === 'course_specific' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                  <select
                    value={newGoal.course_id}
                    onChange={(e) => setNewGoal({...newGoal, course_id: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    {userCourses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Value</label>
                  <input
                    type="number"
                    value={newGoal.target_value}
                    onChange={(e) => setNewGoal({...newGoal, target_value: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                  <input
                    type="text"
                    value={newGoal.unit}
                    onChange={(e) => setNewGoal({...newGoal, unit: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., hours, pages"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Due Date *</label>
                <input
                  type="date"
                  value={newGoal.due_date}
                  onChange={(e) => setNewGoal({...newGoal, due_date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGoal}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700"
              >
                Create Goal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Update Modal */}
      {showProgressModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Progress</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Progress Value *</label>
                <input
                  type="number"
                  step="0.1"
                  value={progressUpdate.value}
                  onChange={(e) => setProgressUpdate({...progressUpdate, value: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter current progress"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea
                  value={progressUpdate.notes}
                  onChange={(e) => setProgressUpdate({...progressUpdate, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="Add any notes about your progress"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowProgressModal(null)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateProgress(showProgressModal)}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700"
              >
                Update Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goals;