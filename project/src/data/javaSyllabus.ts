import { Course, Lesson } from '../types';

export const javaCourse: Course = {
  id: 'java-complete',
  title: 'Complete Java Programming Mastery',
  description: 'Master Java programming from fundamentals to enterprise development with Spring Boot and microservices.',
  language: 'java',
  difficulty: 'beginner',
  duration: 5400, // 90 hours
  thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
  instructor: 'Prof. Michael Chen',
  rating: 4.8,
  enrollmentCount: 12850,
  isPublished: true,
  price: 0,
  prerequisites: ['Basic programming concepts', 'Object-oriented thinking'],
  learningOutcomes: [
    'Master Java syntax and OOP principles',
    'Build enterprise applications with Spring Boot',
    'Develop Android applications',
    'Work with databases using JDBC and JPA',
    'Create microservices architecture',
    'Implement design patterns'
  ],
  syllabus: {
    modules: [
      {
        id: 'java-fundamentals',
        title: 'Java Fundamentals',
        description: 'Learn the core concepts of Java programming',
        duration: 720, // 12 hours
        order: 1,
        topics: [
          'Java history and features',
          'JDK, JRE, and JVM',
          'Setting up development environment',
          'First Java program',
          'Java syntax and structure',
          'Compilation and execution process'
        ],
        learningObjectives: [
          'Understand Java ecosystem',
          'Set up development environment',
          'Write and execute Java programs',
          'Understand compilation process'
        ]
      },
      {
        id: 'variables-datatypes',
        title: 'Variables and Data Types',
        description: 'Master Java data types and variables',
        duration: 480, // 8 hours
        order: 2,
        topics: [
          'Primitive data types',
          'Reference data types',
          'Variable declaration and initialization',
          'Type casting and conversion',
          'Constants and literals',
          'Scope and lifetime of variables'
        ],
        learningObjectives: [
          'Work with different data types',
          'Understand memory allocation',
          'Perform type conversions',
          'Manage variable scope'
        ]
      },
      {
        id: 'operators-expressions',
        title: 'Operators and Expressions',
        description: 'Learn Java operators and expression evaluation',
        duration: 360, // 6 hours
        order: 3,
        topics: [
          'Arithmetic operators',
          'Relational and logical operators',
          'Assignment operators',
          'Bitwise operators',
          'Operator precedence',
          'Expression evaluation'
        ],
        learningObjectives: [
          'Use operators effectively',
          'Understand operator precedence',
          'Write complex expressions',
          'Optimize calculations'
        ]
      },
      {
        id: 'control-flow',
        title: 'Control Flow Statements',
        description: 'Master decision making and iteration in Java',
        duration: 600, // 10 hours
        order: 4,
        topics: [
          'If-else statements',
          'Switch statements',
          'For loops (traditional and enhanced)',
          'While and do-while loops',
          'Break and continue statements',
          'Nested control structures'
        ],
        learningObjectives: [
          'Implement conditional logic',
          'Create efficient loops',
          'Handle complex control flow',
          'Optimize program execution'
        ]
      },
      {
        id: 'arrays-strings',
        title: 'Arrays and Strings',
        description: 'Work with arrays and string manipulation',
        duration: 600, // 10 hours
        order: 5,
        topics: [
          'Array declaration and initialization',
          'Multi-dimensional arrays',
          'Array operations and algorithms',
          'String class and methods',
          'StringBuilder and StringBuffer',
          'Regular expressions'
        ],
        learningObjectives: [
          'Manipulate arrays efficiently',
          'Process string data',
          'Implement array algorithms',
          'Use regular expressions'
        ]
      },
      {
        id: 'oop-basics',
        title: 'Object-Oriented Programming Basics',
        description: 'Learn fundamental OOP concepts in Java',
        duration: 720, // 12 hours
        order: 6,
        topics: [
          'Classes and objects',
          'Constructors and destructors',
          'Instance and static members',
          'Method overloading',
          'Access modifiers',
          'Package organization'
        ],
        learningObjectives: [
          'Design classes and objects',
          'Understand encapsulation',
          'Organize code with packages',
          'Use access modifiers effectively'
        ]
      },
      {
        id: 'inheritance-polymorphism',
        title: 'Inheritance and Polymorphism',
        description: 'Master advanced OOP concepts',
        duration: 720, // 12 hours
        order: 7,
        topics: [
          'Inheritance hierarchy',
          'Method overriding',
          'Super keyword',
          'Abstract classes and methods',
          'Interfaces and implementation',
          'Polymorphism and dynamic binding'
        ],
        learningObjectives: [
          'Implement inheritance hierarchies',
          'Use polymorphism effectively',
          'Design with interfaces',
          'Apply OOP principles'
        ]
      },
      {
        id: 'exception-handling',
        title: 'Exception Handling',
        description: 'Handle errors and exceptions gracefully',
        duration: 480, // 8 hours
        order: 8,
        topics: [
          'Exception hierarchy',
          'Try-catch-finally blocks',
          'Checked and unchecked exceptions',
          'Custom exception classes',
          'Exception propagation',
          'Best practices'
        ],
        learningObjectives: [
          'Handle exceptions properly',
          'Create custom exceptions',
          'Write robust code',
          'Debug effectively'
        ]
      },
      {
        id: 'collections-generics',
        title: 'Collections Framework and Generics',
        description: 'Master Java collections and generic programming',
        duration: 720, // 12 hours
        order: 9,
        topics: [
          'Collection interfaces and classes',
          'List, Set, and Map implementations',
          'Iterators and enhanced for loops',
          'Generics and type safety',
          'Comparable and Comparator',
          'Collections utility methods'
        ],
        learningObjectives: [
          'Use collections effectively',
          'Implement generic classes',
          'Sort and search collections',
          'Choose appropriate data structures'
        ]
      },
      {
        id: 'io-streams',
        title: 'Input/Output and Streams',
        description: 'Handle file I/O and stream processing',
        duration: 600, // 10 hours
        order: 10,
        topics: [
          'File and directory operations',
          'Byte and character streams',
          'Buffered I/O',
          'Object serialization',
          'NIO package',
          'Stream API (Java 8+)'
        ],
        learningObjectives: [
          'Process files and directories',
          'Handle different I/O operations',
          'Serialize objects',
          'Use modern stream API'
        ]
      },
      {
        id: 'multithreading',
        title: 'Multithreading and Concurrency',
        description: 'Build concurrent and parallel applications',
        duration: 720, // 12 hours
        order: 11,
        topics: [
          'Thread creation and lifecycle',
          'Synchronization and locks',
          'Thread communication',
          'Executor framework',
          'Concurrent collections',
          'CompletableFuture'
        ],
        learningObjectives: [
          'Create multithreaded applications',
          'Handle synchronization',
          'Use concurrent utilities',
          'Optimize performance'
        ]
      },
      {
        id: 'database-connectivity',
        title: 'Database Connectivity (JDBC)',
        description: 'Connect Java applications to databases',
        duration: 600, // 10 hours
        order: 12,
        topics: [
          'JDBC architecture',
          'Database connections',
          'Statement and PreparedStatement',
          'ResultSet processing',
          'Transaction management',
          'Connection pooling'
        ],
        learningObjectives: [
          'Connect to databases',
          'Execute SQL queries',
          'Handle transactions',
          'Optimize database operations'
        ]
      },
      {
        id: 'spring-framework',
        title: 'Spring Framework and Spring Boot',
        description: 'Build enterprise applications with Spring',
        duration: 900, // 15 hours
        order: 13,
        topics: [
          'Spring Core and IoC',
          'Dependency Injection',
          'Spring Boot basics',
          'RESTful web services',
          'Spring Data JPA',
          'Spring Security basics'
        ],
        learningObjectives: [
          'Build Spring applications',
          'Create REST APIs',
          'Integrate with databases',
          'Implement security'
        ]
      }
    ],
    totalHours: 90,
    projectsCount: 20,
    assessmentsCount: 30
  },
  lessons: [
    // Module 1: Java Fundamentals
    {
      id: 'java-1-1',
      courseId: 'java-complete',
      moduleId: 'java-fundamentals',
      title: 'Introduction to Java',
      content: `Welcome to Java programming! Java is one of the most popular and powerful programming languages in the world, used by millions of developers to build everything from mobile apps to enterprise systems.

## What is Java?

Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle) in 1995. It was designed with the philosophy "Write Once, Run Anywhere" (WORA).

## Key Features of Java

1. **Platform Independent**: Java code runs on any device with a Java Virtual Machine (JVM)
2. **Object-Oriented**: Everything in Java is an object (except primitives)
3. **Secure**: Built-in security features protect against malicious code
4. **Robust**: Strong memory management and exception handling
5. **Multithreaded**: Built-in support for concurrent programming

## Java Applications

- **Enterprise Applications**: Large-scale business systems
- **Android Development**: Mobile app development
- **Web Development**: Server-side development with Spring
- **Desktop Applications**: Cross-platform GUI applications
- **Big Data**: Apache Hadoop, Apache Spark

## Your First Java Program

Let's start with the classic "Hello, World!" program:`,
      videoUrl: '',
      code: `// This is your first Java program!
public class HelloWorld {
    public static void main(String[] args) {
        // Print a welcome message
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java programming!");
        
        // You can also print variables
        String name = "Java Learner";
        System.out.println("Hello, " + name);
        
        // Try changing the message and run the code
        System.out.println("I'm learning Java with PICODE!");
    }
}`,
      language: 'java',
      order: 1,
      duration: 30,
      exercises: [
        {
          id: 'java-ex-1-1',
          title: 'Your First Java Program',
          description: 'Write a Java program that prints your name and a welcome message.',
          difficulty: 'easy',
          starterCode: `public class MyFirstProgram {
    public static void main(String[] args) {
        // Write your code here
        // Print your name and a welcome message
        
    }
}`,
          solution: `public class MyFirstProgram {
    public static void main(String[] args) {
        String name = "Your Name";
        System.out.println("Hello, my name is " + name);
        System.out.println("Welcome to my Java journey!");
    }
}`,
          testCases: [
            {
              input: '',
              expectedOutput: 'Hello, my name is Your Name\nWelcome to my Java journey!',
              description: 'Should print name and welcome message'
            }
          ],
          hints: [
            'Use System.out.println() to print text',
            'You can store your name in a String variable',
            'Use + to concatenate strings'
          ],
          points: 10
        }
      ],
      resources: [
        {
          id: 'java-res-1-1',
          title: 'Oracle Java Documentation',
          type: 'link',
          url: 'https://docs.oracle.com/en/java/',
          description: 'Official Java documentation and tutorials'
        }
      ],
      isPreview: true
    },
    {
      id: 'java-1-2',
      courseId: 'java-complete',
      moduleId: 'java-fundamentals',
      title: 'Java Program Structure',
      content: `Understanding the structure of a Java program is crucial for writing effective code. Let's break down the components of a Java program.

## Basic Structure

Every Java program follows a specific structure:`,
      videoUrl: '',
      code: `// 1. Package declaration (optional)
package com.example.myapp;

// 2. Import statements (optional)
import java.util.Scanner;
import java.time.LocalDate;

// 3. Class declaration (required)
public class ProgramStructure {
    
    // 4. Class variables (fields)
    private static String companyName = "PICODE";
    private int studentCount = 0;
    
    // 5. Constructor (optional)
    public ProgramStructure() {
        studentCount = 100;
    }
    
    // 6. Main method (entry point)
    public static void main(String[] args) {
        System.out.println("Welcome to " + companyName);
        
        // Create an instance of the class
        ProgramStructure program = new ProgramStructure();
        program.displayInfo();
        
        // Call static method
        showCurrentDate();
    }
    
    // 7. Instance methods
    public void displayInfo() {
        System.out.println("Number of students: " + studentCount);
    }
    
    // 8. Static methods
    public static void showCurrentDate() {
        LocalDate today = LocalDate.now();
        System.out.println("Today's date: " + today);
    }
}`,
      language: 'java',
      order: 2,
      duration: 45,
      exercises: [
        {
          id: 'java-ex-1-2',
          title: 'Student Information System',
          description: 'Create a Java class that manages student information with proper structure.',
          difficulty: 'easy',
          starterCode: `public class StudentInfo {
    // Add class variables for school name and student count
    
    // Add constructor
    
    // Add main method
    public static void main(String[] args) {
        // Create instance and call methods
    }
    
    // Add method to display student information
    
}`,
          solution: `public class StudentInfo {
    private static String schoolName = "PICODE Academy";
    private String studentName;
    private int studentAge;
    
    public StudentInfo(String name, int age) {
        this.studentName = name;
        this.studentAge = age;
    }
    
    public static void main(String[] args) {
        System.out.println("Welcome to " + schoolName);
        
        StudentInfo student = new StudentInfo("Alice", 20);
        student.displayInfo();
    }
    
    public void displayInfo() {
        System.out.println("Student Name: " + studentName);
        System.out.println("Student Age: " + studentAge);
    }
}`,
          testCases: [
            {
              input: '',
              expectedOutput: 'Welcome to PICODE Academy\nStudent Name: Alice\nStudent Age: 20',
              description: 'Should display school and student information'
            }
          ],
          hints: [
            'Use static variables for class-level data',
            'Create a constructor to initialize instance variables',
            'Use instance methods to display object data'
          ],
          points: 20
        }
      ],
      resources: [],
      isPreview: false
    },
    {
      id: 'java-1-3',
      courseId: 'java-complete',
      moduleId: 'variables-datatypes',
      title: 'Variables and Data Types',
      content: `Java is a strongly-typed language, which means every variable must have a declared type. Let's explore Java's data types and how to work with variables.

## Primitive Data Types

Java has 8 primitive data types:`,
      videoUrl: '',
      code: `public class DataTypesDemo {
    public static void main(String[] args) {
        // Integer types
        byte smallNumber = 127;           // 8-bit: -128 to 127
        short mediumNumber = 32000;       // 16-bit: -32,768 to 32,767
        int regularNumber = 2000000;      // 32-bit: -2^31 to 2^31-1
        long bigNumber = 9000000000L;     // 64-bit: -2^63 to 2^63-1
        
        // Floating-point types
        float decimal1 = 3.14f;           // 32-bit floating point
        double decimal2 = 3.14159265359;  // 64-bit floating point
        
        // Character type
        char letter = 'A';                // 16-bit Unicode character
        char unicode = '\u0041';          // Unicode representation of 'A'
        
        // Boolean type
        boolean isJavaFun = true;         // true or false
        boolean isComplete = false;
        
        // Display all variables
        System.out.println("Byte: " + smallNumber);
        System.out.println("Short: " + mediumNumber);
        System.out.println("Int: " + regularNumber);
        System.out.println("Long: " + bigNumber);
        System.out.println("Float: " + decimal1);
        System.out.println("Double: " + decimal2);
        System.out.println("Char: " + letter);
        System.out.println("Unicode: " + unicode);
        System.out.println("Boolean 1: " + isJavaFun);
        System.out.println("Boolean 2: " + isComplete);
        
        // String (reference type)
        String message = "Hello, Java!";
        System.out.println("String: " + message);
        
        // Type casting
        int intValue = 100;
        double doubleValue = intValue;    // Implicit casting (widening)
        int backToInt = (int) doubleValue; // Explicit casting (narrowing)
        
        System.out.println("Original int: " + intValue);
        System.out.println("Converted to double: " + doubleValue);
        System.out.println("Back to int: " + backToInt);
    }
}`,
      language: 'java',
      order: 3,
      duration: 50,
      exercises: [
        {
          id: 'java-ex-1-3',
          title: 'Personal Information Program',
          description: 'Create a program that stores and displays personal information using appropriate data types.',
          difficulty: 'medium',
          starterCode: `public class PersonalInfo {
    public static void main(String[] args) {
        // Declare variables for:
        // - name (String)
        // - age (int)
        // - height (double)
        // - initial (char)
        // - isStudent (boolean)
        
        // Display all information with appropriate labels
        
    }
}`,
          solution: `public class PersonalInfo {
    public static void main(String[] args) {
        String name = "John Doe";
        int age = 25;
        double height = 5.9;
        char initial = 'J';
        boolean isStudent = true;
        
        System.out.println("Personal Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age + " years");
        System.out.println("Height: " + height + " feet");
        System.out.println("Initial: " + initial);
        System.out.println("Is Student: " + isStudent);
    }
}`,
          testCases: [
            {
              input: '',
              expectedOutput: 'Personal Information:\nName: John Doe\nAge: 25 years\nHeight: 5.9 feet\nInitial: J\nIs Student: true',
              description: 'Should display all personal information with proper data types'
            }
          ],
          hints: [
            'Use String for text data',
            'Use int for whole numbers',
            'Use double for decimal numbers',
            'Use char for single characters',
            'Use boolean for true/false values'
          ],
          points: 25
        }
      ],
      resources: [],
      isPreview: false
    },
    // Module 4: Control Flow
    {
      id: 'java-4-1',
      courseId: 'java-complete',
      moduleId: 'control-flow',
      title: 'If-Else Statements',
      content: `Control flow statements allow your program to make decisions. Java provides if-else statements for conditional execution.

## Basic If Statement

The if statement executes code only when a condition is true:`,
      videoUrl: '',
      code: `public class ConditionalStatements {
    public static void main(String[] args) {
        // Basic if statement
        int age = 18;
        
        if (age >= 18) {
            System.out.println("You are an adult!");
            System.out.println("You can vote!");
        }
        
        // If-else statement
        int temperature = 25;
        
        if (temperature > 30) {
            System.out.println("It's hot outside!");
        } else {
            System.out.println("It's not too hot.");
        }
        
        // If-else if-else chain
        int score = 85;
        String grade;
        
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        
        System.out.println("Score: " + score + ", Grade: " + grade);
        
        // Multiple conditions with logical operators
        boolean hasLicense = true;
        int driverAge = 20;
        
        if (driverAge >= 18 && hasLicense) {
            System.out.println("You can drive!");
        } else if (driverAge >= 18 && !hasLicense) {
            System.out.println("You need to get a license first.");
        } else {
            System.out.println("You're too young to drive.");
        }
        
        // Nested if statements
        String weather = "sunny";
        int temp = 25;
        
        if (weather.equals("sunny")) {
            if (temp > 20) {
                System.out.println("Perfect day for a picnic!");
            } else {
                System.out.println("Sunny but a bit cold.");
            }
        } else {
            System.out.println("Maybe stay indoors today.");
        }
    }
}`,
      language: 'java',
      order: 1,
      duration: 45,
      exercises: [
        {
          id: 'java-ex-4-1',
          title: 'Grade Calculator',
          description: 'Write a program that determines letter grade and status based on numerical score.',
          difficulty: 'easy',
          starterCode: `import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Get score from user and determine:
        // - Letter grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60)
        // - Pass/Fail status (Pass: 60 and above, Fail: below 60)
        
    }
}`,
          solution: `import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your score: ");
        int score = scanner.nextInt();
        
        String grade;
        String status;
        
        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        
        if (score >= 60) {
            status = "Pass";
        } else {
            status = "Fail";
        }
        
        System.out.println("Grade: " + grade);
        System.out.println("Status: " + status);
        
        scanner.close();
    }
}`,
          testCases: [
            {
              input: '95',
              expectedOutput: 'Grade: A\nStatus: Pass',
              description: 'Should return A and Pass for score 95'
            },
            {
              input: '55',
              expectedOutput: 'Grade: F\nStatus: Fail',
              description: 'Should return F and Fail for score 55'
            }
          ],
          hints: [
            'Use if-else if-else statements',
            'Check conditions from highest to lowest',
            'Use >= for comparisons'
          ],
          points: 20
        }
      ],
      resources: [],
      isPreview: false
    },
    {
      id: 'java-4-2',
      courseId: 'java-complete',
      moduleId: 'control-flow',
      title: 'Loops in Java',
      content: `Loops allow you to repeat code multiple times. Java provides several types of loops: for, while, and do-while.

## For Loops

For loops are ideal when you know how many times you want to repeat code:`,
      videoUrl: '',
      code: `public class LoopsExample {
    public static void main(String[] args) {
        // Basic for loop
        System.out.println("Counting from 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
        
        // Enhanced for loop (for arrays)
        String[] fruits = {"apple", "banana", "orange"};
        System.out.println("\nFruits:");
        for (String fruit : fruits) {
            System.out.println("I like " + fruit);
        }
        
        // While loop
        System.out.println("\nCountdown:");
        int count = 5;
        while (count > 0) {
            System.out.println(count + "...");
            count--;
        }
        System.out.println("Blast off!");
        
        // Do-while loop (executes at least once)
        System.out.println("\nDo-while example:");
        int number = 1;
        do {
            System.out.println("Number: " + number);
            number++;
        } while (number <= 3);
        
        // Nested loops
        System.out.println("\nMultiplication table (3x3):");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print((i * j) + "\t");
            }
            System.out.println(); // New line after each row
        }
        
        // Break and continue
        System.out.println("\nNumbers 1-10, skipping 5:");
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                continue; // Skip 5
            }
            if (i == 8) {
                break; // Stop at 8
            }
            System.out.print(i + " ");
        }
        System.out.println();
        
        // Finding sum of numbers
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        System.out.println("\nSum of 1 to 10: " + sum);
        
        // Finding factorial
        int factorial = 1;
        int n = 5;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + n + ": " + factorial);
    }
}`,
      language: 'java',
      order: 2,
      duration: 50,
      exercises: [
        {
          id: 'java-ex-4-2',
          title: 'Number Pattern Generator',
          description: 'Create a program that generates various number patterns using loops.',
          difficulty: 'medium',
          starterCode: `public class PatternGenerator {
    public static void main(String[] args) {
        // Generate the following patterns:
        // 1. Numbers 1 to 10
        // 2. Even numbers from 2 to 20
        // 3. Multiplication table for 7
        // 4. Triangle pattern with stars
        
    }
}`,
          solution: `public class PatternGenerator {
    public static void main(String[] args) {
        // 1. Numbers 1 to 10
        System.out.println("Numbers 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
        
        // 2. Even numbers from 2 to 20
        System.out.println("Even numbers from 2 to 20:");
        for (int i = 2; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
        
        // 3. Multiplication table for 7
        System.out.println("Multiplication table for 7:");
        for (int i = 1; i <= 10; i++) {
            System.out.println("7 x " + i + " = " + (7 * i));
        }
        System.out.println();
        
        // 4. Triangle pattern with stars
        System.out.println("Triangle pattern:");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
          testCases: [
            {
              input: '',
              expectedOutput: 'Numbers 1 to 10:\n1 2 3 4 5 6 7 8 9 10 \n\nEven numbers from 2 to 20:\n2 4 6 8 10 12 14 16 18 20 \n\nMultiplication table for 7:\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\n\nTriangle pattern:\n* \n* * \n* * * \n* * * * \n* * * * * ',
              description: 'Should generate all patterns correctly'
            }
          ],
          hints: [
            'Use different loop types for different patterns',
            'Use nested loops for the triangle pattern',
            'Use increment operators for efficiency'
          ],
          points: 30
        }
      ],
      resources: [],
      isPreview: false
    }
    // Add more Java lessons for remaining modules...
  ],
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-15')
};