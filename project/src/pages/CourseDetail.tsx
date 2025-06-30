import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  BookOpen, 
  Star, 
  Play, 
  CheckCircle, 
  Lock,
  ArrowLeft,
  Download,
  Share2,
  Heart,
  Award,
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import { useAuth } from '../contexts/AuthContext';
import CodeBlock from '../components/common/CodeBlock';

export default function CourseDetail() {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [activeLesson, setActiveLesson] = useState(0);
  const [isEnrolled, setIsEnrolled] = useState(!!user);

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course not found
          </h1>
          <Link to="/courses" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  // Check if lessons exist
  if (!course.lessons || course.lessons.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div 
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center space-x-1">
              <ArrowLeft className="h-4 w-4" />
              <span>Courses</span>
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{course.title}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Course Sidebar */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-8">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                
                <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h1>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                  </span>
                  <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-2 py-1 rounded text-xs">
                    {course.language.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>{Math.floor(course.duration / 60)}h {course.duration % 60}m</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <BookOpen className="h-4 w-4" />
                    <span>0 lessons</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{course.rating} ({course.enrollmentCount.toLocaleString()} enrolled)</span>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    Course content is being prepared. Check back soon!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                <div className="text-center py-16">
                  <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Course Content Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                    We're working hard to create engaging lessons for this course. 
                    In the meantime, you can explore the course syllabus below.
                  </p>
                  
                  {/* Course Syllabus Preview */}
                  {course.syllabus && (
                    <div className="mt-8 text-left">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Course Syllabus
                      </h4>
                      <div className="space-y-4">
                        {course.syllabus.modules.map((module, index) => (
                          <div key={module.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                                  Module {index + 1}: {module.title}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                  {module.description}
                                </p>
                                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                                  <span>{Math.floor(module.duration / 60)}h {module.duration % 60}m</span>
                                  <span>{module.topics.length} topics</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  const currentLesson = course.lessons[activeLesson];

  // Check if user has completed the course
  const userProgress = user?.progress.find(p => p.courseId === courseId);
  const isCompleted = userProgress && userProgress.completedLessons.length === course.lessons.length;
  const completionPercentage = userProgress ? (userProgress.completedLessons.length / course.lessons.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center space-x-1">
            <ArrowLeft className="h-4 w-4" />
            <span>Courses</span>
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{course.title}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Course Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-8">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                  {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                </span>
                <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-2 py-1 rounded text-xs">
                  {course.language.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4" />
                  <span>{Math.floor(course.duration / 60)}h {course.duration % 60}m</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.lessons.length} lessons</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{course.rating} ({course.enrollmentCount.toLocaleString()} enrolled)</span>
                </div>
              </div>

              {/* Progress Bar */}
              {isEnrolled && userProgress && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span>Progress</span>
                    <span>{completionPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Certificate Button */}
              {isCompleted && (
                <div className="mb-6">
                  <Link
                    to={`/courses/${courseId}/certificate`}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-3 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Trophy className="h-5 w-5" />
                    <span>Get Certificate</span>
                  </Link>
                </div>
              )}

              {isEnrolled ? (
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Enrolled</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm">
                      Continue Learning
                    </button>
                    <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <Heart className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <button 
                    onClick={() => setIsEnrolled(true)}
                    className="w-full bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium"
                  >
                    Enroll for Free
                  </button>
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                      <Share2 className="h-4 w-4 mr-1 inline" />
                      Share
                    </button>
                    <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                      <Download className="h-4 w-4 mr-1 inline" />
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {/* Lesson Navigation */}
              <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {course.lessons.map((lesson, index) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(index)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        index === activeLesson
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      } ${!isEnrolled && index > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!isEnrolled && index > 0}
                    >
                      <div className="flex items-center space-x-1">
                        {!isEnrolled && index > 0 ? (
                          <Lock className="h-3 w-3" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                        <span className="hidden sm:inline">{lesson.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lesson Content */}
              <div className="p-6">
                {isEnrolled || activeLesson === 0 ? (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {currentLesson.title}
                    </h2>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
                      <div 
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ 
                          __html: currentLesson.content.replace(/\n/g, '<br />') 
                        }} 
                      />
                    </div>

                    {currentLesson.code && (
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Try this code:
                        </h3>
                        <CodeBlock
                          code={currentLesson.code}
                          language={currentLesson.language}
                          showRunButton={true}
                        />
                      </div>
                    )}

                    {currentLesson.exercises && currentLesson.exercises.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Practice Exercise
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            {currentLesson.exercises[0].title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {currentLesson.exercises[0].description}
                          </p>
                          <Link
                            to={`/compiler?exercise=${currentLesson.exercises[0].id}`}
                            className="inline-flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                          >
                            <Play className="h-4 w-4" />
                            <span>Start Exercise</span>
                          </Link>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                        disabled={activeLesson === 0}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Previous
                      </button>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {activeLesson + 1} of {course.lessons.length}
                      </span>
                      <button
                        onClick={() => setActiveLesson(Math.min(course.lessons.length - 1, activeLesson + 1))}
                        disabled={activeLesson === course.lessons.length - 1 || (!isEnrolled && activeLesson === 0)}
                        className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Lock className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Enroll to access all lessons
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Get full access to all course materials and exercises.
                    </p>
                    <button 
                      onClick={() => setIsEnrolled(true)}
                      className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium"
                    >
                      Enroll for Free
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}