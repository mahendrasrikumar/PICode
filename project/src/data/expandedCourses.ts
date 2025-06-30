import { Course } from '../types';

export const expandedCourses: Course[] = [
  {
    id: 'python-beginner',
    title: 'Python for Absolute Beginners',
    description: 'Start your programming journey with Python. Learn the fundamentals of programming through hands-on exercises and real-world examples.',
    language: 'python',
    difficulty: 'beginner',
    duration: 2400, // 40 hours
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.9,
    enrollmentCount: 25420,
    isPublished: true,
    price: 0,
    prerequisites: ['Basic computer knowledge'],
    learningOutcomes: [
      'Understand Python syntax and basic programming concepts',
      'Work with variables, data types, and operators',
      'Use control structures (if statements, loops)',
      'Create and use functions',
      'Handle basic file operations',
      'Debug simple programs'
    ],
    syllabus: {
      modules: [
        {
          id: 'python-intro',
          title: 'Introduction to Python',
          description: 'Get started with Python programming',
          duration: 300,
          order: 1,
          topics: ['What is Python?', 'Installing Python', 'Python IDLE', 'First program'],
          learningObjectives: ['Set up Python environment', 'Write your first program']
        },
        {
          id: 'python-basics',
          title: 'Python Basics',
          description: 'Learn fundamental Python concepts',
          duration: 600,
          order: 2,
          topics: ['Variables', 'Data types', 'Operators', 'Input/Output'],
          learningObjectives: ['Use variables and data types', 'Perform basic operations']
        },
        {
          id: 'python-control',
          title: 'Control Structures',
          description: 'Master decision making and loops',
          duration: 480,
          order: 3,
          topics: ['If statements', 'For loops', 'While loops', 'Break and continue'],
          learningObjectives: ['Write conditional logic', 'Create efficient loops']
        },
        {
          id: 'python-functions',
          title: 'Functions',
          description: 'Create reusable code with functions',
          duration: 420,
          order: 4,
          topics: ['Function definition', 'Parameters', 'Return values', 'Scope'],
          learningObjectives: ['Write modular code', 'Understand scope']
        },
        {
          id: 'python-data-structures',
          title: 'Data Structures',
          description: 'Work with lists, dictionaries, and more',
          duration: 600,
          order: 5,
          topics: ['Lists', 'Dictionaries', 'Tuples', 'Sets'],
          learningObjectives: ['Manipulate data structures', 'Choose appropriate structures']
        }
      ],
      totalHours: 40,
      projectsCount: 8,
      assessmentsCount: 15
    },
    lessons: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'python-intermediate',
    title: 'Intermediate Python Programming',
    description: 'Take your Python skills to the next level with object-oriented programming, file handling, and popular libraries.',
    language: 'python',
    difficulty: 'intermediate',
    duration: 3600, // 60 hours
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Prof. Michael Chen',
    rating: 4.8,
    enrollmentCount: 18750,
    isPublished: true,
    price: 0,
    prerequisites: ['Python Basics', 'Understanding of functions and data structures'],
    learningOutcomes: [
      'Master object-oriented programming in Python',
      'Handle files and exceptions effectively',
      'Work with popular Python libraries',
      'Build real-world applications',
      'Understand advanced Python concepts',
      'Write clean, maintainable code'
    ],
    syllabus: {
      modules: [
        {
          id: 'python-oop',
          title: 'Object-Oriented Programming',
          description: 'Learn OOP concepts in Python',
          duration: 720,
          order: 1,
          topics: ['Classes and objects', 'Inheritance', 'Polymorphism', 'Encapsulation'],
          learningObjectives: ['Design object-oriented solutions', 'Use inheritance effectively']
        },
        {
          id: 'python-files',
          title: 'File Handling and I/O',
          description: 'Work with files and external data',
          duration: 480,
          order: 2,
          topics: ['File operations', 'CSV files', 'JSON data', 'Error handling'],
          learningObjectives: ['Process external data', 'Handle errors gracefully']
        },
        {
          id: 'python-libraries',
          title: 'Python Libraries',
          description: 'Explore popular Python libraries',
          duration: 600,
          order: 3,
          topics: ['NumPy basics', 'Pandas introduction', 'Matplotlib', 'Requests'],
          learningObjectives: ['Use external libraries', 'Analyze data']
        },
        {
          id: 'python-projects',
          title: 'Real-World Projects',
          description: 'Build practical applications',
          duration: 900,
          order: 4,
          topics: ['Web scraping', 'Data analysis', 'GUI applications', 'API integration'],
          learningObjectives: ['Build complete applications', 'Integrate multiple concepts']
        }
      ],
      totalHours: 60,
      projectsCount: 12,
      assessmentsCount: 20
    },
    lessons: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'python-advanced',
    title: 'Advanced Python Mastery',
    description: 'Master advanced Python concepts including decorators, generators, async programming, and performance optimization.',
    language: 'python',
    difficulty: 'advanced',
    duration: 4800, // 80 hours
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Dr. Emily Rodriguez',
    rating: 4.9,
    enrollmentCount: 8920,
    isPublished: true,
    price: 0,
    prerequisites: ['Intermediate Python', 'OOP concepts', 'Basic understanding of algorithms'],
    learningOutcomes: [
      'Master advanced Python features and patterns',
      'Write high-performance Python code',
      'Understand async programming and concurrency',
      'Build scalable applications',
      'Optimize code for production',
      'Contribute to open-source projects'
    ],
    syllabus: {
      modules: [
        {
          id: 'python-advanced-features',
          title: 'Advanced Python Features',
          description: 'Explore advanced language features',
          duration: 960,
          order: 1,
          topics: ['Decorators', 'Generators', 'Context managers', 'Metaclasses'],
          learningObjectives: ['Use advanced Python features', 'Write pythonic code']
        },
        {
          id: 'python-async',
          title: 'Async Programming',
          description: 'Master asynchronous programming',
          duration: 720,
          order: 2,
          topics: ['Async/await', 'Asyncio', 'Concurrent programming', 'Threading'],
          learningObjectives: ['Write concurrent code', 'Handle async operations']
        },
        {
          id: 'python-performance',
          title: 'Performance Optimization',
          description: 'Optimize Python applications',
          duration: 600,
          order: 3,
          topics: ['Profiling', 'Memory optimization', 'Cython', 'Multiprocessing'],
          learningObjectives: ['Optimize code performance', 'Profile applications']
        },
        {
          id: 'python-architecture',
          title: 'Software Architecture',
          description: 'Design scalable Python applications',
          duration: 720,
          order: 4,
          topics: ['Design patterns', 'Testing', 'Documentation', 'Deployment'],
          learningObjectives: ['Design scalable systems', 'Write maintainable code']
        }
      ],
      totalHours: 80,
      projectsCount: 15,
      assessmentsCount: 25
    },
    lessons: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'java-beginner',
    title: 'Java Programming Fundamentals',
    description: 'Learn Java programming from scratch. Master object-oriented programming concepts and build your first Java applications.',
    language: 'java',
    difficulty: 'beginner',
    duration: 3000, // 50 hours
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Prof. David Kim',
    rating: 4.8,
    enrollmentCount: 19850,
    isPublished: true,
    price: 0,
    prerequisites: ['Basic programming concepts'],
    learningOutcomes: [
      'Understand Java syntax and OOP principles',
      'Build console and GUI applications',
      'Work with Java collections and generics',
      'Handle exceptions and file I/O',
      'Use Java development tools',
      'Apply best practices in Java development'
    ],
    syllabus: {
      modules: [
        {
          id: 'java-intro',
          title: 'Introduction to Java',
          description: 'Get started with Java programming',
          duration: 360,
          order: 1,
          topics: ['Java history', 'JDK setup', 'First program', 'Compilation process'],
          learningObjectives: ['Set up Java environment', 'Understand Java ecosystem']
        },
        {
          id: 'java-basics',
          title: 'Java Fundamentals',
          description: 'Learn core Java concepts',
          duration: 600,
          order: 2,
          topics: ['Variables', 'Data types', 'Operators', 'Control structures'],
          learningObjectives: ['Master Java syntax', 'Write basic programs']
        },
        {
          id: 'java-oop',
          title: 'Object-Oriented Programming',
          description: 'Master OOP in Java',
          duration: 900,
          order: 3,
          topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism', 'Interfaces'],
          learningObjectives: ['Design OOP solutions', 'Use inheritance effectively']
        },
        {
          id: 'java-advanced',
          title: 'Advanced Java Features',
          description: 'Explore advanced Java concepts',
          duration: 720,
          order: 4,
          topics: ['Collections', 'Generics', 'Exception handling', 'File I/O'],
          learningObjectives: ['Use advanced features', 'Handle complex scenarios']
        }
      ],
      totalHours: 50,
      projectsCount: 10,
      assessmentsCount: 18
    },
    lessons: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'java-intermediate',
    title: 'Intermediate Java Development',
    description: 'Advance your Java skills with Spring Framework, database connectivity, and enterprise development patterns.',
    language: 'java',
    difficulty: 'intermediate',
    duration: 4200, // 70 hours
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Dr. Lisa Wang',
    rating: 4.7,
    enrollmentCount: 12340,
    isPublished: true,
    price: 0,
    prerequisites: ['Java Fundamentals', 'OOP concepts', 'Basic database knowledge'],
    learningOutcomes: [
      'Build enterprise Java applications',
      'Master Spring Framework and Spring Boot',
      'Work with databases using JPA/Hibernate',
      'Create RESTful web services',
      'Implement security in Java applications',
      'Deploy Java applications'
    ],
    syllabus: {
      modules: [
        {
          id: 'java-spring',
          title: 'Spring Framework',
          description: 'Learn Spring and Spring Boot',
          duration: 1080,
          order: 1,
          topics: ['Spring Core', 'Dependency Injection', 'Spring Boot', 'Auto-configuration'],
          learningObjectives: ['Build Spring applications', 'Use dependency injection']
        },
        {
          id: 'java-data',
          title: 'Data Access',
          description: 'Work with databases in Java',
          duration: 900,
          order: 2,
          topics: ['JDBC', 'JPA', 'Hibernate', 'Spring Data'],
          learningObjectives: ['Access databases', 'Use ORM frameworks']
        },
        {
          id: 'java-web',
          title: 'Web Development',
          description: 'Build web applications',
          duration: 1080,
          order: 3,
          topics: ['REST APIs', 'Spring MVC', 'Thymeleaf', 'Security'],
          learningObjectives: ['Create web services', 'Implement security']
        },
        {
          id: 'java-testing',
          title: 'Testing and Deployment',
          description: 'Test and deploy Java applications',
          duration: 720,
          order: 4,
          topics: ['JUnit', 'Mockito', 'Integration testing', 'Docker'],
          learningObjectives: ['Write comprehensive tests', 'Deploy applications']
        }
      ],
      totalHours: 70,
      projectsCount: 15,
      assessmentsCount: 22
    },
    lessons: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'java-advanced',
    title: 'Advanced Java Enterprise Development',
    description: 'Master enterprise Java development with microservices, cloud deployment, and advanced architectural patterns.',
    language: 'java',
    difficulty: 'advanced',
    duration: 5400, // 90 hours
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Prof. Robert Chen',
    rating: 4.9,
    enrollmentCount: 6780,
    isPublished: true,
    price: 0,
    prerequisites: ['Intermediate Java', 'Spring Framework', 'Database knowledge', 'Web services'],
    learningOutcomes: [
      'Design and build microservices architecture',
      'Implement advanced Spring features',
      'Deploy applications to cloud platforms',
      'Optimize Java applications for production',
      'Lead enterprise Java projects',
      'Contribute to large-scale systems'
    ],
    syllabus: {
      modules: [
        {
          id: 'java-microservices',
          title: 'Microservices Architecture',
          description: 'Build microservices with Spring',
          duration: 1440,
          order: 1,
          topics: ['Microservices patterns', 'Spring Cloud', 'Service discovery', 'API Gateway'],
          learningObjectives: ['Design microservices', 'Implement service communication']
        },
        {
          id: 'java-cloud',
          title: 'Cloud Development',
          description: 'Deploy Java applications to cloud',
          duration: 1080,
          order: 2,
          topics: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD'],
          learningObjectives: ['Deploy to cloud', 'Implement DevOps practices']
        },
        {
          id: 'java-performance',
          title: 'Performance and Monitoring',
          description: 'Optimize Java applications',
          duration: 900,
          order: 3,
          topics: ['JVM tuning', 'Monitoring', 'Profiling', 'Caching'],
          learningObjectives: ['Optimize performance', 'Monitor applications']
        },
        {
          id: 'java-architecture',
          title: 'Enterprise Architecture',
          description: 'Design enterprise systems',
          duration: 1080,
          order: 4,
          topics: ['Design patterns', 'Clean architecture', 'Domain-driven design', 'Event sourcing'],
          learningObjectives: ['Design scalable systems', 'Apply architectural patterns']
        }
      ],
      totalHours: 90,
      projectsCount: 20,
      assessmentsCount: 30
    },
    lessons: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  }
];