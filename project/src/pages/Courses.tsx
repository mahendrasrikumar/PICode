import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Star, 
  Search,
  BookOpen,
  Code2,
  CheckCircle,
  Play,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Target,
  ChevronDown,
  ChevronUp,
  Lock,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { expandedCourses } from '../data/expandedCourses';
import { useAuth } from '../contexts/AuthContext';

export default function Courses() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  const filteredCourses = expandedCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    const matchesLanguage = selectedLanguage === 'all' || course.language === selectedLanguage;
    
    return matchesSearch && matchesDifficulty && matchesLanguage;
  });

  const languages = [...new Set(expandedCourses.map(course => course.language))];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'intermediate':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      case 'advanced':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <Sparkles className="h-4 w-4" />;
      case 'intermediate':
        return <TrendingUp className="h-4 w-4" />;
      case 'advanced':
        return <Zap className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const toggleSyllabus = (courseId: string) => {
    setExpandedSyllabus(expandedSyllabus === courseId ? null : courseId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="h-5 w-5" />
              <span>Comprehensive Learning Paths</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Master Programming
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">From Beginner to Expert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Choose your learning path and progress from fundamentals to advanced concepts with our structured curriculum designed by industry experts.
            </p>

            {!user && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 max-w-2xl mx-auto mb-8">
                <div className="flex items-center space-x-3">
                  <Lock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  <div className="text-left">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-200">
                      Sign in to access courses
                    </h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Create a free account to enroll in courses and track your progress
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3">
                  <Link
                    to="/register"
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                  >
                    Create Account
                  </Link>
                  <Link
                    to="/login"
                    className="border border-amber-600 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors text-sm font-medium"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Learning Paths Overview */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Progress through carefully designed curricula that build upon each other
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Python Path */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🐍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Python Learning Path</h3>
                  <p className="text-gray-600 dark:text-gray-300">Beginner → Intermediate → Advanced</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Beginner</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">40 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Intermediate</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">60 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Advanced</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">80 hours</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Total:</strong> 180 hours • 35 projects • 60 assessments
              </div>
            </motion.div>

            {/* Java Path */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">☕</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Java Learning Path</h3>
                  <p className="text-gray-600 dark:text-gray-300">Beginner → Intermediate → Advanced</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Beginner</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">50 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Intermediate</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">70 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Advanced</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">90 hours</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Total:</strong> 210 hours • 45 projects • 70 assessments
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 w-full border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
              >
                <option value="all">🎯 All Skill Levels</option>
                <option value="beginner">✨ Beginner Friendly</option>
                <option value="intermediate">⚡ Intermediate</option>
                <option value="advanced">🚀 Advanced</option>
              </select>

              {/* Language Filter */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
              >
                <option value="all">🌐 All Languages</option>
                {languages.map(language => (
                  <option key={language} value={language}>
                    {language === 'python' ? '🐍 Python' : '☕ Java'}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Course Cards */}
          <div className="space-y-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Course Image and Basic Info */}
                  <div className="lg:col-span-1 relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    
                    {/* Overlay with badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                        {getDifficultyIcon(course.difficulty)}
                        <span>{course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}</span>
                      </span>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {course.language === 'python' ? '🐍 Python' : '☕ Java'}
                      </span>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ✨ FREE
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{course.enrollmentCount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="lg:col-span-2 p-8">
                    {/* Instructor */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        with {course.instructor}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Course Metrics */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <Clock className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {Math.floor(course.duration / 60)}h
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <BookOpen className="h-5 w-5 text-purple-500 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {course.syllabus.modules.length}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Modules</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <Code2 className="h-5 w-5 text-green-500 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {course.syllabus.projectsCount}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <Award className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {course.syllabus.assessmentsCount}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Assessments</div>
                      </div>
                    </div>

                    {/* Syllabus Toggle */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleSyllabus(course.id)}
                        className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Course Syllabus ({course.syllabus.modules.length} Modules)
                          </span>
                        </div>
                        {expandedSyllabus === course.id ? (
                          <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        )}
                      </button>

                      {/* Expanded Syllabus */}
                      {expandedSyllabus === course.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-3"
                        >
                          {course.syllabus.modules.map((module, moduleIndex) => (
                            <div
                              key={module.id}
                              className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                  <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                                    Module {moduleIndex + 1}: {module.title}
                                  </h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                    {module.description}
                                  </p>
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 ml-4">
                                  {Math.floor(module.duration / 60)}h
                                </div>
                              </div>
                              
                              {/* Topics Preview */}
                              <div className="flex flex-wrap gap-1">
                                {module.topics.slice(0, 3).map((topic, topicIndex) => (
                                  <span
                                    key={topicIndex}
                                    className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                                  >
                                    {topic}
                                  </span>
                                ))}
                                {module.topics.length > 3 && (
                                  <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                                    +{module.topics.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Learning Outcomes Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-emerald-500" />
                        What you'll master:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.learningOutcomes.slice(0, 4).map((outcome, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                          FREE
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Complete Course
                        </span>
                      </div>
                      
                      {user ? (
                        <Link
                          to={`/courses/${course.id}`}
                          className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          <Play className="h-5 w-5" />
                          <span>Start Learning</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <div className="flex items-center space-x-3">
                          <Lock className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            Sign in to access
                          </span>
                          <Link
                            to="/login"
                            className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors font-semibold"
                          >
                            Sign In
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No courses found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search criteria or explore our featured content.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDifficulty('all');
                  setSelectedLanguage('all');
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}