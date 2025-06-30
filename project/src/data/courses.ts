import { Course, CodeExample, BlogPost, CompilerLanguage, User, Certificate } from '../types';
import { pythonCourse } from './pythonSyllabus';
import { javaCourse } from './javaSyllabus';

export const courses: Course[] = [pythonCourse, javaCourse];

// Mock users data for admin panel
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@picode.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date('2024-01-01'),
    lastLogin: new Date(),
    isActive: true,
    progress: [],
    savedCode: [],
    achievements: [],
    certificates: [],
    profile: {
      bio: 'Platform Administrator',
      skills: ['Python', 'Java', 'System Administration'],
      experience: 'advanced',
      learningGoals: ['Platform Management']
    }
  },
  {
    id: '2',
    email: 'john.doe@email.com',
    name: 'John Doe',
    role: 'student',
    createdAt: new Date('2024-01-15'),
    lastLogin: new Date('2024-01-20'),
    isActive: true,
    progress: [
      {
        userId: '2',
        courseId: 'python-complete',
        completedLessons: ['py-1-1', 'py-1-2'],
        completedExercises: ['py-ex-1-1'],
        completedQuizzes: [],
        currentLesson: 'py-1-3',
        score: 85,
        timeSpent: 1200,
        lastAccessedAt: new Date('2024-01-20'),
        certificateIssued: false
      }
    ],
    savedCode: [],
    achievements: [],
    certificates: [],
    profile: {
      bio: 'Aspiring Python developer',
      location: 'New York, USA',
      skills: ['Python Basics'],
      experience: 'beginner',
      learningGoals: ['Web Development', 'Data Science']
    }
  },
  {
    id: '3',
    email: 'jane.smith@email.com',
    name: 'Jane Smith',
    role: 'student',
    createdAt: new Date('2024-01-10'),
    lastLogin: new Date('2024-01-21'),
    isActive: true,
    progress: [
      {
        userId: '3',
        courseId: 'java-complete',
        completedLessons: ['java-1-1', 'java-1-2', 'java-1-3'],
        completedExercises: ['java-ex-1-1', 'java-ex-1-2'],
        completedQuizzes: [],
        currentLesson: 'java-1-4',
        score: 92,
        timeSpent: 2400,
        lastAccessedAt: new Date('2024-01-21'),
        certificateIssued: false
      }
    ],
    savedCode: [],
    achievements: [],
    certificates: [],
    profile: {
      bio: 'Java enthusiast and mobile app developer',
      location: 'California, USA',
      website: 'https://janesmith.dev',
      skills: ['Java', 'Android Development'],
      experience: 'intermediate',
      learningGoals: ['Enterprise Development', 'Spring Framework']
    }
  }
];

export const codeExamples: CodeExample[] = [
  // Python Examples
  {
    id: '1',
    title: 'Python Variables and Data Types',
    description: 'Learn how to create variables and work with different data types in Python',
    code: `# Python Variables and Data Types
# Creating different types of variables

# String variables
name = "Alice"
message = "Welcome to Python!"
print(f"Hello, {name}!")
print(message)

# Numeric variables
age = 25
height = 5.6
temperature = -10.5

print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Temperature: {temperature}°C")

# Boolean variables
is_student = True
is_graduated = False

print(f"Is student: {is_student}")
print(f"Is graduated: {is_graduated}")

# List (collection of items)
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

print("Fruits:", fruits)
print("Numbers:", numbers)

# Dictionary (key-value pairs)
person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}

print("Person info:", person)
print(f"Name: {person['name']}")

# Type checking
print(f"Type of name: {type(name)}")
print(f"Type of age: {type(age)}")
print(f"Type of fruits: {type(fruits)}")`,
    language: 'python',
    category: 'Python Fundamentals',
    tags: ['variables', 'data types', 'python basics', 'beginner'],
    difficulty: 'beginner',
    author: 'PICODE Team',
    likes: 245,
    views: 1520,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '2',
    title: 'Python Conditional Statements',
    description: 'Master if, elif, and else statements for decision making in Python',
    code: `# Python Conditional Statements
# Making decisions in your programs

# Basic if statement
age = 18
if age >= 18:
    print("You are an adult!")

# If-else statement
temperature = 25
if temperature > 30:
    print("It's hot outside!")
else:
    print("It's not too hot.")

# If-elif-else for multiple conditions
score = 85

if score >= 90:
    grade = "A"
    print("Excellent work!")
elif score >= 80:
    grade = "B"
    print("Good job!")
elif score >= 70:
    grade = "C"
    print("You passed!")
elif score >= 60:
    grade = "D"
    print("You need to improve.")
else:
    grade = "F"
    print("You failed. Try again!")

print(f"Your grade is: {grade}")

# Multiple conditions with and/or
age = 20
has_license = True

if age >= 18 and has_license:
    print("You can drive!")
elif age >= 18 and not has_license:
    print("You need to get a license first.")
else:
    print("You're too young to drive.")

# Nested conditions
weather = "sunny"
temperature = 25

if weather == "sunny":
    if temperature > 20:
        print("Perfect day for a picnic!")
    else:
        print("Sunny but a bit cold.")
else:
    print("Maybe stay indoors today.")`,
    language: 'python',
    category: 'Control Structures',
    tags: ['conditionals', 'if statements', 'decision making', 'beginner'],
    difficulty: 'beginner',
    author: 'PICODE Team',
    likes: 189,
    views: 1205,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '3',
    title: 'Python Loops - For and While',
    description: 'Learn how to repeat code using for loops and while loops in Python',
    code: `# Python Loops - For and While
# Repeating code efficiently

# For loop with range
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(f"Count: {i}")

print("\nEven numbers from 2 to 10:")
for num in range(2, 11, 2):
    print(num)

# For loop with lists
fruits = ["apple", "banana", "orange", "grape"]
print("\nMy favorite fruits:")
for fruit in fruits:
    print(f"I love {fruit}!")

# For loop with strings
word = "Python"
print(f"\nLetters in '{word}':")
for letter in word:
    print(letter)

# While loop
print("\nCountdown:")
count = 5
while count > 0:
    print(f"{count}...")
    count -= 1
print("Blast off! 🚀")

# While loop with user input simulation
print("\nNumber guessing game:")
secret_number = 7
guess = 0
attempts = 0

while guess != secret_number and attempts < 3:
    # Simulating user input
    guesses = [5, 8, 7]  # Simulated guesses
    guess = guesses[attempts]
    attempts += 1
    
    print(f"Guess #{attempts}: {guess}")
    
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    else:
        print("Correct! You win! 🎉")

# Nested loops
print("\nMultiplication table:")
for i in range(1, 4):
    for j in range(1, 4):
        result = i * j
        print(f"{i} x {j} = {result}")
    print()  # Empty line after each row`,
    language: 'python',
    category: 'Control Structures',
    tags: ['loops', 'for loop', 'while loop', 'iteration', 'beginner'],
    difficulty: 'beginner',
    author: 'PICODE Team',
    likes: 156,
    views: 892,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '4',
    title: 'Python Functions',
    description: 'Create reusable code with functions, parameters, and return values',
    code: `# Python Functions
# Creating reusable blocks of code

# Basic function
def greet():
    print("Hello, World!")
    print("Welcome to Python functions!")

# Call the function
greet()

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")
    print("Nice to meet you!")

greet_person("Alice")
greet_person("Bob")

# Function with multiple parameters
def introduce(name, age, city):
    print(f"Hi, I'm {name}")
    print(f"I'm {age} years old")
    print(f"I live in {city}")

introduce("Charlie", 25, "New York")

# Function with return value
def add_numbers(a, b):
    result = a + b
    return result

sum1 = add_numbers(5, 3)
sum2 = add_numbers(10, 20)
print(f"5 + 3 = {sum1}")
print(f"10 + 20 = {sum2}")

# Function with default parameters
def greet_with_title(name, title="Mr."):
    return f"Hello, {title} {name}!"

print(greet_with_title("Smith"))
print(greet_with_title("Johnson", "Dr."))

# Function that returns multiple values
def calculate(a, b):
    addition = a + b
    subtraction = a - b
    multiplication = a * b
    division = a / b if b != 0 else "Cannot divide by zero"
    return addition, subtraction, multiplication, division

# Unpack the returned values
add, sub, mul, div = calculate(10, 5)
print(f"10 + 5 = {add}")
print(f"10 - 5 = {sub}")
print(f"10 * 5 = {mul}")
print(f"10 / 5 = {div}")

# Function with variable arguments
def print_scores(*scores):
    print("Student scores:")
    for i, score in enumerate(scores, 1):
        print(f"Student {i}: {score}")

print_scores(85, 92, 78, 96)

# Lambda function (anonymous function)
square = lambda x: x ** 2
print(f"Square of 5: {square(5)}")

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(f"Original: {numbers}")
print(f"Squared: {squared_numbers}")`,
    language: 'python',
    category: 'Functions and Modules',
    tags: ['functions', 'parameters', 'return values', 'lambda', 'intermediate'],
    difficulty: 'intermediate',
    author: 'PICODE Team',
    likes: 203,
    views: 1340,
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: '5',
    title: 'Python Lists and Dictionaries',
    description: 'Master Python\'s most important data structures: lists and dictionaries',
    code: `# Python Lists and Dictionaries
# Working with collections of data

# Creating and working with lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed_list = ["hello", 42, True, 3.14]

print("Original fruits:", fruits)

# Adding items to lists
fruits.append("grape")  # Add to end
fruits.insert(1, "mango")  # Insert at position
print("After adding:", fruits)

# Accessing list items
print(f"First fruit: {fruits[0]}")
print(f"Last fruit: {fruits[-1]}")
print(f"First three: {fruits[:3]}")

# Modifying list items
fruits[0] = "green apple"
print("After modification:", fruits)

# List methods
print(f"Length of list: {len(fruits)}")
print(f"Index of 'banana': {fruits.index('banana')}")

# Removing items
removed_fruit = fruits.pop()  # Remove last item
print(f"Removed: {removed_fruit}")
fruits.remove("mango")  # Remove specific item
print("After removal:", fruits)

# List comprehension
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]
even_numbers = [x for x in numbers if x % 2 == 0]

print(f"Numbers: {numbers}")
print(f"Squares: {squares}")
print(f"Even numbers: {even_numbers}")

print("\n" + "="*40 + "\n")

# Creating and working with dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Science", "English"]
}

print("Student info:", student)

# Accessing dictionary values
print(f"Name: {student['name']}")
print(f"Age: {student['age']}")
print(f"Subjects: {student['subjects']}")

# Adding new key-value pairs
student["gpa"] = 3.8
student["graduated"] = False
print("After adding GPA:", student)

# Modifying values
student["age"] = 21
student["grade"] = "A+"
print("After updates:", student)

# Dictionary methods
print(f"Keys: {list(student.keys())}")
print(f"Values: {list(student.values())}")

# Iterating through dictionary
print("\nStudent details:")
for key, value in student.items():
    print(f"{key}: {value}")

# Nested dictionaries
classroom = {
    "student1": {"name": "Alice", "grade": "A"},
    "student2": {"name": "Bob", "grade": "B"},
    "student3": {"name": "Charlie", "grade": "A-"}
}

print("\nClassroom roster:")
for student_id, info in classroom.items():
    print(f"{student_id}: {info['name']} - Grade: {info['grade']}")

# Dictionary comprehension
grades = {"Alice": 95, "Bob": 87, "Charlie": 92}
letter_grades = {name: "A" if score >= 90 else "B" for name, score in grades.items()}
print(f"\nLetter grades: {letter_grades}")`,
    language: 'python',
    category: 'Data Structures',
    tags: ['lists', 'dictionaries', 'data structures', 'collections', 'intermediate'],
    difficulty: 'intermediate',
    author: 'PICODE Team',
    likes: 178,
    views: 1120,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  // Java Examples
  {
    id: '6',
    title: 'Java Variables and Data Types',
    description: 'Learn Java\'s primitive data types and how to declare variables',
    code: `// Java Variables and Data Types
// Understanding Java's type system

public class DataTypesExample {
    public static void main(String[] args) {
        // Integer types
        byte smallNumber = 127;           // 8-bit: -128 to 127
        short mediumNumber = 32000;       // 16-bit: -32,768 to 32,767
        int regularNumber = 2000000;      // 32-bit: most common integer type
        long bigNumber = 9000000000L;     // 64-bit: note the 'L' suffix
        
        System.out.println("Integer Types:");
        System.out.println("Byte: " + smallNumber);
        System.out.println("Short: " + mediumNumber);
        System.out.println("Int: " + regularNumber);
        System.out.println("Long: " + bigNumber);
        
        // Floating-point types
        float decimal1 = 3.14f;           // 32-bit: note the 'f' suffix
        double decimal2 = 3.14159265359;  // 64-bit: more precise
        
        System.out.println("\nFloating-point Types:");
        System.out.println("Float: " + decimal1);
        System.out.println("Double: " + decimal2);
        
        // Character and Boolean
        char letter = 'A';                // Single character
        char unicode = '\u0041';          // Unicode representation
        boolean isJavaFun = true;         // true or false
        
        System.out.println("\nOther Types:");
        System.out.println("Char: " + letter);
        System.out.println("Unicode: " + unicode);
        System.out.println("Boolean: " + isJavaFun);
        
        // String (reference type, not primitive)
        String message = "Hello, Java!";
        String name = "Alice";
        
        System.out.println("\nStrings:");
        System.out.println("Message: " + message);
        System.out.println("Name: " + name);
        System.out.println("Combined: " + message + " Welcome, " + name);
        
        // Constants (final variables)
        final double PI = 3.14159;
        final String COMPANY = "PICODE";
        
        System.out.println("\nConstants:");
        System.out.println("PI: " + PI);
        System.out.println("Company: " + COMPANY);
        
        // Type casting
        int intValue = 100;
        double doubleValue = intValue;        // Implicit casting (widening)
        int backToInt = (int) doubleValue;    // Explicit casting (narrowing)
        
        System.out.println("\nType Casting:");
        System.out.println("Original int: " + intValue);
        System.out.println("Converted to double: " + doubleValue);
        System.out.println("Back to int: " + backToInt);
        
        // Variable scope demonstration
        {
            int localVariable = 50;
            System.out.println("\nLocal variable: " + localVariable);
        }
        // localVariable is not accessible here
    }
}`,
    language: 'java',
    category: 'Java Fundamentals',
    tags: ['variables', 'data types', 'primitives', 'java basics', 'beginner'],
    difficulty: 'beginner',
    author: 'PICODE Team',
    likes: 167,
    views: 980,
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-14')
  },
  {
    id: '7',
    title: 'Java Control Flow Statements',
    description: 'Master if-else statements, switch cases, and loops in Java',
    code: `// Java Control Flow Statements
// Making decisions and repeating code

public class ControlFlowExample {
    public static void main(String[] args) {
        // If-else statements
        int age = 20;
        
        if (age >= 18) {
            System.out.println("You are an adult!");
        } else {
            System.out.println("You are a minor.");
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
        
        // Switch statement
        int dayOfWeek = 3;
        String dayName;
        
        switch (dayOfWeek) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
        }
        
        System.out.println("Day " + dayOfWeek + " is " + dayName);
        
        // For loops
        System.out.println("\nCounting from 1 to 5:");
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
        
        // Do-while loop
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
    }
}`,
    language: 'java',
    category: 'Control Flow',
    tags: ['if statements', 'switch', 'loops', 'control flow', 'beginner'],
    difficulty: 'beginner',
    author: 'PICODE Team',
    likes: 145,
    views: 876,
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16')
  },
  {
    id: '8',
    title: 'Java Arrays and Strings',
    description: 'Work with arrays and string manipulation in Java',
    code: `// Java Arrays and Strings
// Working with collections of data and text

public class ArraysAndStringsExample {
    public static void main(String[] args) {
        // Creating arrays
        int[] numbers = {1, 2, 3, 4, 5};
        String[] names = {"Alice", "Bob", "Charlie"};
        double[] grades = new double[5]; // Array of size 5
        
        // Initializing array elements
        grades[0] = 85.5;
        grades[1] = 92.0;
        grades[2] = 78.5;
        grades[3] = 96.0;
        grades[4] = 88.5;
        
        // Accessing array elements
        System.out.println("First number: " + numbers[0]);
        System.out.println("Last number: " + numbers[numbers.length - 1]);
        System.out.println("Array length: " + numbers.length);
        
        // Iterating through arrays
        System.out.println("\nAll numbers:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }
        
        System.out.println("\nAll names (enhanced for loop):");
        for (String name : names) {
            System.out.println("Hello, " + name + "!");
        }
        
        // Array operations
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        double average = (double) sum / numbers.length;
        System.out.println("\nSum: " + sum);
        System.out.println("Average: " + average);
        
        // Finding maximum value
        double maxGrade = grades[0];
        for (double grade : grades) {
            if (grade > maxGrade) {
                maxGrade = grade;
            }
        }
        System.out.println("Highest grade: " + maxGrade);
        
        // Multi-dimensional arrays
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("\n3x3 Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        
        // String operations
        String message = "Hello, Java Programming!";
        String name = "Alice";
        
        System.out.println("\nString Operations:");
        System.out.println("Original: " + message);
        System.out.println("Length: " + message.length());
        System.out.println("Uppercase: " + message.toUpperCase());
        System.out.println("Lowercase: " + message.toLowerCase());
        
        // String methods
        System.out.println("Contains 'Java': " + message.contains("Java"));
        System.out.println("Starts with 'Hello': " + message.startsWith("Hello"));
        System.out.println("Index of 'Java': " + message.indexOf("Java"));
        
        // String concatenation
        String greeting = "Hello, " + name + "!";
        String formatted = String.format("Welcome, %s! You have %d messages.", name, 5);
        
        System.out.println("\nString Concatenation:");
        System.out.println(greeting);
        System.out.println(formatted);
        
        // String comparison
        String str1 = "Java";
        String str2 = "Java";
        String str3 = new String("Java");
        
        System.out.println("\nString Comparison:");
        System.out.println("str1 == str2: " + (str1 == str2));
        System.out.println("str1 == str3: " + (str1 == str3));
        System.out.println("str1.equals(str3): " + str1.equals(str3));
        
        // StringBuilder for efficient string building
        StringBuilder sb = new StringBuilder();
        sb.append("Java");
        sb.append(" is");
        sb.append(" awesome!");
        
        System.out.println("\nStringBuilder result: " + sb.toString());
        
        // String splitting
        String sentence = "Java,Python,JavaScript,C++";
        String[] languages = sentence.split(",");
        
        System.out.println("\nProgramming languages:");
        for (String language : languages) {
            System.out.println("- " + language);
        }
    }
}`,
    language: 'java',
    category: 'Arrays and Strings',
    tags: ['arrays', 'strings', 'collections', 'string manipulation', 'intermediate'],
    difficulty: 'intermediate',
    author: 'PICODE Team',
    likes: 134,
    views: 756,
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19')
  },
  {
    id: '9',
    title: 'Java Object-Oriented Programming Basics',
    description: 'Introduction to classes, objects, and OOP concepts in Java',
    code: `// Java Object-Oriented Programming Basics
// Classes, Objects, and Encapsulation

// Student class definition
class Student {
    // Instance variables (attributes)
    private String name;
    private int age;
    private double gpa;
    private String major;
    
    // Constructor
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
        this.gpa = 0.0; // Default GPA
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    public String getMajor() {
        return major;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        }
    }
    
    public void setMajor(String major) {
        this.major = major;
    }
    
    // Instance methods
    public void study(String subject) {
        System.out.println(name + " is studying " + subject);
    }
    
    public void displayInfo() {
        System.out.println("Student Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + gpa);
    }
    
    public String getGradeLevel() {
        if (gpa >= 3.5) {
            return "Honors";
        } else if (gpa >= 3.0) {
            return "Good Standing";
        } else if (gpa >= 2.0) {
            return "Satisfactory";
        } else {
            return "Probation";
        }
    }
}

// Course class
class Course {
    private String courseName;
    private String courseCode;
    private int credits;
    private String instructor;
    
    public Course(String courseName, String courseCode, int credits, String instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.credits = credits;
        this.instructor = instructor;
    }
    
    // Getters
    public String getCourseName() { return courseName; }
    public String getCourseCode() { return courseCode; }
    public int getCredits() { return credits; }
    public String getInstructor() { return instructor; }
    
    public void displayCourseInfo() {
        System.out.println("Course: " + courseName + " (" + courseCode + ")");
        System.out.println("Credits: " + credits);
        System.out.println("Instructor: " + instructor);
    }
}

// Main class
public class OOPBasicsExample {
    public static void main(String[] args) {
        // Creating objects (instances of classes)
        Student student1 = new Student("Alice Johnson", 20, "Computer Science");
        Student student2 = new Student("Bob Smith", 19, "Mathematics");
        
        // Using setter methods
        student1.setGpa(3.8);
        student2.setGpa(3.2);
        
        // Displaying student information
        System.out.println("=== Student 1 ===");
        student1.displayInfo();
        System.out.println("Grade Level: " + student1.getGradeLevel());
        
        System.out.println("\n=== Student 2 ===");
        student2.displayInfo();
        System.out.println("Grade Level: " + student2.getGradeLevel());
        
        // Using instance methods
        System.out.println("\n=== Student Activities ===");
        student1.study("Data Structures");
        student2.study("Calculus");
        
        // Creating course objects
        Course course1 = new Course("Introduction to Programming", "CS101", 3, "Dr. Wilson");
        Course course2 = new Course("Advanced Mathematics", "MATH201", 4, "Prof. Davis");
        
        System.out.println("\n=== Available Courses ===");
        course1.displayCourseInfo();
        System.out.println();
        course2.displayCourseInfo();
        
        // Demonstrating object interaction
        System.out.println("\n=== Course Enrollment ===");
        System.out.println(student1.getName() + " enrolled in " + course1.getCourseName());
        System.out.println(student2.getName() + " enrolled in " + course2.getCourseName());
        
        // Array of objects
        Student[] students = {student1, student2};
        
        System.out.println("\n=== All Students ===");
        for (Student student : students) {
            System.out.println(student.getName() + " - GPA: " + student.getGpa());
        }
        
        // Calculating average GPA
        double totalGpa = 0;
        for (Student student : students) {
            totalGpa += student.getGpa();
        }
        double averageGpa = totalGpa / students.length;
        System.out.println("Average GPA: " + String.format("%.2f", averageGpa));
    }
}`,
    language: 'java',
    category: 'Object-Oriented Programming',
    tags: ['classes', 'objects', 'encapsulation', 'oop', 'intermediate'],
    difficulty: 'intermediate',
    author: 'PICODE Team',
    likes: 198,
    views: 1150,
    createdAt: new Date('2024-01-22'),
    updatedAt: new Date('2024-01-22')
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Python vs Java: Which Programming Language Should You Learn First?',
    excerpt: 'A comprehensive comparison of Python and Java for beginners, covering syntax, career prospects, and learning curves.',
    content: `# Python vs Java: Which Programming Language Should You Learn First?

Choosing your first programming language is one of the most important decisions in your coding journey. Two of the most popular choices for beginners are Python and Java. Both languages have their strengths and are widely used in the industry, but they serve different purposes and have different learning curves.

## Python: The Beginner-Friendly Giant

Python has gained massive popularity due to its simple, readable syntax that closely resembles natural language. Here's why Python might be your ideal first language:

### Advantages of Python:
- **Simple Syntax**: Python's syntax is clean and intuitive, making it easier for beginners to focus on programming concepts rather than complex syntax rules.
- **Versatile Applications**: From web development to data science, machine learning to automation, Python is used everywhere.
- **Large Community**: Extensive documentation, tutorials, and community support make learning easier.
- **Rapid Development**: You can build applications quickly with Python's extensive standard library.

### Python Code Example:
\`\`\`python
# Simple and readable
def calculate_average(numbers):
    return sum(numbers) / len(numbers)

grades = [85, 92, 78, 96, 88]
average = calculate_average(grades)
print(f"Average grade: {average}")
\`\`\`

## Java: The Enterprise Powerhouse

Java has been a cornerstone of enterprise development for decades. It's known for its "write once, run anywhere" philosophy and robust performance.

### Advantages of Java:
- **Platform Independence**: Java applications run on any device with a Java Virtual Machine (JVM).
- **Strong Type System**: Helps catch errors early and makes code more maintainable.
- **Enterprise Focus**: Widely used in large-scale enterprise applications.
- **Performance**: Generally faster execution compared to Python.

### Java Code Example:
\`\`\`java
public class GradeCalculator {
    public static double calculateAverage(int[] numbers) {
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        return (double) sum / numbers.length;
    }
    
    public static void main(String[] args) {
        int[] grades = {85, 92, 78, 96, 88};
        double average = calculateAverage(grades);
        System.out.println("Average grade: " + average);
    }
}
\`\`\`

## Career Prospects

### Python Careers:
- Data Scientist
- Machine Learning Engineer
- Web Developer (Django/Flask)
- Automation Engineer
- DevOps Engineer

### Java Careers:
- Enterprise Software Developer
- Android App Developer
- Backend Developer
- System Architect
- Big Data Engineer

## Learning Curve Comparison

**Python** has a gentler learning curve. You can start writing useful programs within days and see immediate results. The syntax is forgiving, and you can focus on learning programming concepts.

**Java** has a steeper initial learning curve due to its verbose syntax and object-oriented requirements. However, this structure teaches good programming practices from the beginning.

## Which Should You Choose?

### Choose Python if:
- You're completely new to programming
- You're interested in data science or machine learning
- You want to see quick results and build projects fast
- You prefer a more flexible, dynamic approach

### Choose Java if:
- You want to work in enterprise environments
- You're interested in mobile app development (Android)
- You prefer structure and strong typing
- You want to learn fundamental OOP concepts thoroughly

## Conclusion

Both Python and Java are excellent choices for beginners. Python offers easier entry and faster initial progress, while Java provides a solid foundation in programming principles and opens doors to enterprise development.

The good news? Learning one makes learning the other easier. Many successful developers know both languages and use them for different purposes.

**Our Recommendation**: Start with Python if you're unsure. Its gentle learning curve will help you build confidence and understand programming concepts. Once you're comfortable, learning Java (or any other language) becomes much easier.

Remember, the best programming language is the one you'll actually stick with and continue learning. Both Python and Java offer excellent career opportunities and have vibrant communities to support your learning journey.`,
    author: 'Dr. Sarah Johnson',
    authorAvatar: 'SJ',
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['python', 'java', 'beginner', 'career advice', 'programming languages'],
    category: 'Career Guidance',
    publishedAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
    readTime: 8,
    views: 2450,
    likes: 189,
    isPublished: true,
    seoTitle: 'Python vs Java: Complete Beginner\'s Guide to Choosing Your First Programming Language',
    seoDescription: 'Comprehensive comparison of Python and Java for beginners. Learn which programming language to choose first based on career goals, learning curve, and industry demand.'
  },
  {
    id: '2',
    title: 'Top 10 Python Libraries Every Developer Should Master in 2024',
    excerpt: 'Discover the most essential Python libraries that will boost your productivity and help you build amazing applications across different domains.',
    content: `# Top 10 Python Libraries Every Developer Should Master in 2024

Python's strength lies not just in its simple syntax, but in its vast ecosystem of libraries that can help you accomplish almost anything. Whether you're building web applications, analyzing data, or creating machine learning models, there's likely a Python library that can make your job easier.

Here are the 10 most essential Python libraries that every developer should master in 2024.

## 1. NumPy - The Foundation of Scientific Computing

NumPy (Numerical Python) is the foundation of the Python scientific computing ecosystem. It provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on them.

\`\`\`python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# Mathematical operations
print(arr * 2)  # [2, 4, 6, 8, 10]
print(np.mean(arr))  # 3.0
print(np.dot(matrix, matrix))  # Matrix multiplication
\`\`\`

**Use Cases**: Scientific computing, data analysis, machine learning preprocessing

## 2. Pandas - Data Manipulation and Analysis

Pandas is the go-to library for data manipulation and analysis. It provides data structures like DataFrame and Series that make working with structured data intuitive and efficient.

\`\`\`python
import pandas as pd

# Create DataFrame
data = {'Name': ['Alice', 'Bob', 'Charlie'], 
        'Age': [25, 30, 35],
        'Salary': [50000, 60000, 70000]}
df = pd.DataFrame(data)

# Data operations
print(df.describe())  # Statistical summary
filtered = df[df['Age'] > 25]  # Filtering
grouped = df.groupby('Age').mean()  # Grouping
\`\`\`

**Use Cases**: Data cleaning, analysis, ETL processes, business intelligence

## 3. Matplotlib & Seaborn - Data Visualization

Matplotlib is the foundational plotting library, while Seaborn provides a higher-level interface for creating beautiful statistical visualizations.

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns

# Matplotlib
plt.figure(figsize=(10, 6))
plt.plot([1, 2, 3, 4], [1, 4, 2, 3])
plt.title('Simple Line Plot')
plt.show()

# Seaborn
sns.scatterplot(data=df, x='Age', y='Salary')
plt.show()
\`\`\`

**Use Cases**: Data visualization, reporting, exploratory data analysis

## 4. Requests - HTTP for Humans

Requests makes HTTP requests simple and human-friendly. It's essential for web scraping, API consumption, and web service integration.

\`\`\`python
import requests

# GET request
response = requests.get('https://api.github.com/users/octocat')
data = response.json()
print(data['name'])

# POST request with data
payload = {'key1': 'value1', 'key2': 'value2'}
response = requests.post('https://httpbin.org/post', data=payload)
\`\`\`

**Use Cases**: API integration, web scraping, microservices communication

## 5. Flask/Django - Web Development

Flask is a lightweight web framework, while Django is a full-featured framework for rapid web development.

\`\`\`python
# Flask example
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users')
def get_users():
    return jsonify([{'id': 1, 'name': 'Alice'}])

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

**Use Cases**: Web applications, REST APIs, microservices

## 6. SQLAlchemy - Database Toolkit

SQLAlchemy is a powerful SQL toolkit and Object-Relational Mapping (ORM) library for Python.

\`\`\`python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    email = Column(String(100))

# Database operations
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)
\`\`\`

**Use Cases**: Database operations, ORM, data persistence

## 7. Scikit-learn - Machine Learning

Scikit-learn provides simple and efficient tools for machine learning and data mining.

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Sample data
X = [[1], [2], [3], [4], [5]]
y = [2, 4, 6, 8, 10]

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LinearRegression()
model.fit(X_train, y_train)

# Predictions
predictions = model.predict(X_test)
\`\`\`

**Use Cases**: Machine learning, predictive modeling, data science

## 8. Beautiful Soup - Web Scraping

Beautiful Soup makes it easy to scrape information from web pages by providing Pythonic ways to navigate and search the parse tree.

\`\`\`python
from bs4 import BeautifulSoup
import requests

# Scrape webpage
url = 'https://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Extract data
title = soup.find('title').text
links = [a['href'] for a in soup.find_all('a', href=True)]
\`\`\`

**Use Cases**: Web scraping, data extraction, content parsing

## 9. Pytest - Testing Framework

Pytest makes it easy to write simple and scalable test cases for your Python code.

\`\`\`python
# test_calculator.py
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

# Run with: pytest test_calculator.py
\`\`\`

**Use Cases**: Unit testing, integration testing, test automation

## 10. Pillow - Image Processing

Pillow (PIL Fork) is the friendly PIL fork that adds image processing capabilities to your Python interpreter.

\`\`\`python
from PIL import Image, ImageFilter

# Open and manipulate image
img = Image.open('example.jpg')
img_resized = img.resize((800, 600))
img_blurred = img.filter(ImageFilter.BLUR)
img_resized.save('resized_example.jpg')
\`\`\`

**Use Cases**: Image processing, computer vision preprocessing, graphics manipulation

## Getting Started

To install these libraries, use pip:

\`\`\`bash
pip install numpy pandas matplotlib seaborn requests flask django sqlalchemy scikit-learn beautifulsoup4 pytest pillow
\`\`\`

## Conclusion

These 10 libraries form the backbone of Python development across various domains. Mastering them will significantly boost your productivity and open up new possibilities for your projects.

Start with the libraries most relevant to your current projects, and gradually expand your toolkit. Remember, the key to mastering these libraries is practice – build projects, experiment with different features, and don't be afraid to dive into the documentation.

Each of these libraries has extensive documentation and active communities, making them excellent choices for both beginners and experienced developers. Happy coding!`,
    author: 'Prof. Michael Chen',
    authorAvatar: 'MC',
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['python', 'libraries', 'development', 'tutorial', 'productivity'],
    category: 'Technical Tutorial',
    publishedAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
    readTime: 12,
    views: 3200,
    likes: 267,
    isPublished: true,
    seoTitle: 'Top 10 Essential Python Libraries for Developers in 2024',
    seoDescription: 'Master these 10 essential Python libraries to boost your productivity. Complete guide covering NumPy, Pandas, Flask, Django, and more with code examples.'
  }
];

export const compilerLanguages: CompilerLanguage[] = [
  { 
    id: 71, 
    name: 'python', 
    displayName: 'Python', 
    version: '3.11.0', 
    extension: '.py', 
    defaultCode: '# Welcome to Python!\nprint("Hello, World!")\n\n# Try some basic operations\nnumbers = [1, 2, 3, 4, 5]\nprint(f"Sum: {sum(numbers)}")\nprint(f"Average: {sum(numbers) / len(numbers)}")',
    isActive: true 
  },
  { 
    id: 62, 
    name: 'java', 
    displayName: 'Java', 
    version: 'OpenJDK 17.0.1', 
    extension: '.java', 
    defaultCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        \n        // Try some basic operations\n        int[] numbers = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for (int num : numbers) {\n            sum += num;\n        }\n        System.out.println("Sum: " + sum);\n        System.out.println("Average: " + (double) sum / numbers.length);\n    }\n}',
    isActive: true 
  }
];

// Mock certificates data
export const mockCertificates: Certificate[] = [
  {
    id: 'cert-001',
    userId: '2',
    courseId: 'python-complete',
    certificateNumber: 'PICODE-PY-2024-001',
    issuedAt: new Date('2024-01-15'),
    verificationCode: 'PY24-ABC123-XYZ789',
    grade: 'A',
    finalScore: 92,
    validUntil: new Date('2026-01-15')
  },
  {
    id: 'cert-002',
    userId: '3',
    courseId: 'java-complete',
    certificateNumber: 'PICODE-JV-2024-002',
    issuedAt: new Date('2024-01-18'),
    verificationCode: 'JV24-DEF456-UVW012',
    grade: 'A+',
    finalScore: 96,
    validUntil: new Date('2026-01-18')
  }
];