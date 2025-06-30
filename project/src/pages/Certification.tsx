import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Award, 
  Download, 
  Share2, 
  CheckCircle, 
  Calendar,
  User,
  BookOpen,
  Star,
  Trophy,
  Medal,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { courses } from '../data/courses';
import { useAuth } from '../contexts/AuthContext';

export default function Certification() {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [certificate, setCertificate] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const course = courses.find(c => c.id === courseId);
  
  useEffect(() => {
    if (course && user) {
      // Check if user has completed the course
      const userProgress = user.progress.find(p => p.courseId === courseId);
      
      if (userProgress && userProgress.certificateIssued) {
        // Generate certificate data
        const cert = {
          id: `cert-${Date.now()}`,
          userId: user.id,
          courseId: course.id,
          certificateNumber: `PICODE-${course.language.toUpperCase()}-2024-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
          issuedAt: new Date(),
          verificationCode: `${course.language.toUpperCase()}24-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
          grade: userProgress.score >= 95 ? 'A+' : userProgress.score >= 90 ? 'A' : userProgress.score >= 85 ? 'B+' : userProgress.score >= 80 ? 'B' : 'C',
          finalScore: userProgress.score,
          validUntil: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000) // 2 years
        };
        setCertificate(cert);
      }
    }
  }, [course, user, courseId]);

  const handleClaimCertificate = async () => {
    if (!user || !course) return;
    
    setIsGenerating(true);
    
    // Simulate certificate generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newCert = {
      id: `cert-${Date.now()}`,
      userId: user.id,
      courseId: course.id,
      certificateNumber: `PICODE-${course.language.toUpperCase()}-2024-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      issuedAt: new Date(),
      verificationCode: `${course.language.toUpperCase()}24-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      grade: 'A',
      finalScore: 95,
      validUntil: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000)
    };
    
    setCertificate(newCert);
    setIsGenerating(false);
  };

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    alert('Certificate download will be available soon!');
  };

  const handleShare = async () => {
    const shareData = {
      title: `${user?.name} completed ${course?.title}`,
      text: `I just completed the ${course?.title} course on PICODE and earned my certificate!`,
      url: window.location.href
    };
    
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback to copying URL
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const copyVerificationCode = async () => {
    if (certificate) {
      await navigator.clipboard.writeText(certificate.verificationCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Sign in Required
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Please sign in to view your certificates.
          </p>
          <Link to="/login" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const userProgress = user.progress.find(p => p.courseId === courseId);
  const isCompleted = userProgress && userProgress.completedLessons.length === course.lessons.length;
  const completionPercentage = userProgress ? (userProgress.completedLessons.length / course.lessons.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center space-x-1">
            <ArrowLeft className="h-4 w-4" />
            <span>Courses</span>
          </Link>
          <span>/</span>
          <Link to={`/courses/${courseId}`} className="hover:text-primary-600 dark:hover:text-primary-400">
            {course.title}
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Certificate</span>
        </motion.div>

        {!isCompleted ? (
          /* Course Not Completed */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Complete Your Journey
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                You're {completionPercentage.toFixed(0)}% through the {course.title} course. 
                Complete all lessons to earn your certificate!
              </p>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span>Progress</span>
                  <span>{completionPercentage.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>{userProgress?.completedLessons.length || 0} lessons completed</span>
                  <span>{course.lessons.length} total lessons</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to={`/courses/${courseId}`}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Continue Learning</span>
                </Link>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Complete {course.lessons.length - (userProgress?.completedLessons.length || 0)} more lessons to unlock your certificate
                </div>
              </div>
            </div>
          </motion.div>
        ) : certificate ? (
          /* Certificate Available */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle className="h-5 w-5" />
                <span>Certificate Earned!</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Congratulations! 🎉
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                You have successfully completed the <strong>{course.title}</strong> course and earned your certificate of completion.
              </p>
            </div>

            {/* Certificate */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 text-white text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">Certificate of Completion</h2>
                <p className="text-blue-100">PICODE Programming Academy</p>
              </div>

              {/* Certificate Body */}
              <div className="p-12 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                  This is to certify that
                </p>
                
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {user.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                  has successfully completed the course
                </p>
                
                <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                  {course.title}
                </h4>

                {/* Course Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <Star className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        Grade: {certificate.grade}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Final Score: {certificate.finalScore}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        Completed
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {format(certificate.issuedAt, 'MMMM dd, yyyy')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <Medal className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        Duration
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {Math.floor(course.duration / 60)} hours
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                      <strong>Certificate Number:</strong> {certificate.certificateNumber}
                    </div>
                    <div>
                      <strong>Valid Until:</strong> {format(certificate.validUntil, 'MMMM dd, yyyy')}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Verification Code:</strong>
                    </span>
                    <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded font-mono text-sm">
                      {certificate.verificationCode}
                    </code>
                    <button
                      onClick={copyVerificationCode}
                      className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      title="Copy verification code"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="h-5 w-5" />
                <span>Download Certificate</span>
              </button>
              
              <button
                onClick={handleShare}
                className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
              >
                <Share2 className="h-5 w-5" />
                <span>Share Achievement</span>
              </button>
              
              <Link
                to="/courses"
                className="bg-emerald-500 text-white px-8 py-4 rounded-xl hover:bg-emerald-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Explore More Courses</span>
              </Link>
            </motion.div>

            {/* Verification Info */}
            <motion.div 
              className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                Certificate Verification
              </h3>
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                This certificate can be verified using the verification code above. 
                Employers and institutions can verify the authenticity of this certificate 
                by contacting PICODE or visiting our verification portal.
              </p>
              <button className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center justify-center space-x-1 mx-auto">
                <ExternalLink className="h-4 w-4" />
                <span>Verify Certificate Online</span>
              </button>
            </motion.div>
          </motion.div>
        ) : (
          /* Claim Certificate */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🎉 Course Completed!
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Congratulations! You have successfully completed the <strong>{course.title}</strong> course. 
                You're now eligible to claim your certificate of completion.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-200 mb-2">
                  Your Achievement
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-emerald-700 dark:text-emerald-300">Lessons Completed:</span>
                    <div className="font-semibold text-emerald-900 dark:text-emerald-100">
                      {userProgress?.completedLessons.length}/{course.lessons.length}
                    </div>
                  </div>
                  <div>
                    <span className="text-emerald-700 dark:text-emerald-300">Final Score:</span>
                    <div className="font-semibold text-emerald-900 dark:text-emerald-100">
                      {userProgress?.score || 95}%
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClaimCertificate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating Certificate...</span>
                  </>
                ) : (
                  <>
                    <Award className="h-5 w-5" />
                    <span>Claim Your Certificate</span>
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                Your certificate will be generated instantly and will be valid for 2 years
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}