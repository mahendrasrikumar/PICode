import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin,
  Edit,
  Save,
  X,
  Award,
  BookOpen,
  Clock,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/courses';
import ProgressBar from '../components/common/ProgressBar';

export default function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.profile.bio || '',
    location: user?.profile.location || '',
    website: user?.profile.website || '',
    github: user?.profile.github || '',
    linkedin: user?.profile.linkedin || ''
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Sign in Required
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Please sign in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    // In a real app, this would update the user profile via API
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      bio: user.profile.bio || '',
      location: user.profile.location || '',
      website: user.profile.website || '',
      github: user.profile.github || '',
      linkedin: user.profile.linkedin || ''
    });
    setIsEditing(false);
  };

  const enrolledCourses = courses.filter(course => 
    user.progress.some(p => p.courseId === course.id)
  );

  const totalLessonsCompleted = user.progress.reduce(
    (total, progress) => total + progress.completedLessons.length, 0
  );

  const averageScore = user.progress.length > 0 
    ? user.progress.reduce((total, progress) => total + progress.score, 0) / user.progress.length
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
          
          <div className="relative px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-16 mb-6">
              <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="text-2xl font-bold bg-transparent border-b-2 border-blue-500 text-gray-900 dark:text-white focus:outline-none"
                      />
                    ) : (
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {user.name}
                      </h1>
                    )}
                    <p className="text-gray-600 dark:text-gray-300 flex items-center mt-1">
                      <Mail className="h-4 w-4 mr-2" />
                      {user.email}
                    </p>
                  </div>
                  
                  <div className="mt-4 sm:mt-0">
                    {isEditing ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSave}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                        >
                          <Save className="h-4 w-4" />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
                        >
                          <X className="h-4 w-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Edit Profile</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  About
                </h3>
                {isEditing ? (
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Tell us about yourself..."
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    rows={4}
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    {user.profile.bio || 'No bio provided yet.'}
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-3" />
                    <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                  </div>
                  
                  {(isEditing || user.profile.location) && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-3" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Your location"
                          className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        <span>{user.profile.location}</span>
                      )}
                    </div>
                  )}
                  
                  {(isEditing || user.profile.website) && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Globe className="h-4 w-4 mr-3" />
                      {isEditing ? (
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="Your website"
                          className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        <a href={user.profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                          {user.profile.website}
                        </a>
                      )}
                    </div>
                  )}
                  
                  {(isEditing || user.profile.github) && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Github className="h-4 w-4 mr-3" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          placeholder="GitHub username"
                          className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        <a href={`https://github.com/${user.profile.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                          @{user.profile.github}
                        </a>
                      )}
                    </div>
                  )}
                  
                  {(isEditing || user.profile.linkedin) && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Linkedin className="h-4 w-4 mr-3" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.linkedin}
                          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          placeholder="LinkedIn profile"
                          className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                        />
                      ) : (
                        <a href={user.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                          LinkedIn Profile
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {enrolledCourses.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Courses Enrolled</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalLessonsCompleted}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Lessons Completed</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {averageScore.toFixed(0)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Average Score</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {Math.floor(user.progress.reduce((total, p) => total + p.timeSpent, 0) / 60)}h
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Time Spent</div>
          </div>
        </motion.div>

        {/* Course Progress */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Course Progress
          </h2>
          
          {enrolledCourses.length > 0 ? (
            <div className="space-y-6">
              {enrolledCourses.map((course) => {
                const progress = user.progress.find(p => p.courseId === course.id);
                const completionPercentage = progress 
                  ? (progress.completedLessons.length / course.lessons.length) * 100 
                  : 0;
                
                return (
                  <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {progress?.completedLessons.length || 0} of {course.lessons.length} lessons completed
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {progress?.score || 0}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Score
                        </div>
                      </div>
                    </div>
                    
                    <ProgressBar 
                      progress={completionPercentage}
                      color={completionPercentage === 100 ? 'success' : 'primary'}
                      showPercentage={false}
                    />
                    
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-2">
                      <span>{completionPercentage.toFixed(0)}% complete</span>
                      <span>{Math.floor((progress?.timeSpent || 0) / 60)} hours spent</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No courses enrolled yet
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Start your learning journey by enrolling in a course.
              </p>
              <a
                href="/courses"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Browse Courses
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}