import { Course, Lesson } from '../types';

export const pythonCourse: Course = {
  id: 'python-complete',
  title: 'Complete Python Programming Mastery',
  description: 'Master Python programming from basics to advanced concepts with hands-on projects and real-world applications.',
  language: 'python',
  difficulty: 'beginner',
  duration: 4800, // 80 hours
  thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
  instructor: 'Dr. Sarah Johnson',
  rating: 4.9,
  enrollmentCount: 15420,
  isPublished: true,
  price: 0,
  prerequisites: ['Basic computer knowledge', 'Mathematical thinking'],
  learningOutcomes: [
    'Write clean, efficient Python code',
    'Build web applications with Django/Flask',
    'Perform data analysis with pandas and NumPy',
    'Create machine learning models',
    'Develop desktop applications with Tkinter',
    'Work with databases and APIs'
  ],
  syllabus: {
    modules: [
      {
        id: 'python-basics',
        title: 'Python Fundamentals',
        description: 'Learn the core concepts of Python programming',
        duration: 600, // 10 hours
        order: 1,
        topics: [
          'Python installation and setup',
          'Variables and data types',
          'Operators and expressions',
          'Input/output operations',
          'Comments and documentation'
        ],
        learningObjectives: [
          'Set up Python development environment',
          'Understand Python syntax and semantics',
          'Work with different data types',
          'Perform basic operations'
        ]
      },
      {
        id: 'control-structures',
        title: 'Control Structures',
        description: 'Master decision making and loops in Python',
        duration: 480, // 8 hours
        order: 2,
        topics: [
          'Conditional statements (if, elif, else)',
          'Comparison and logical operators',
          'For loops and while loops',
          'Break and continue statements',
          'Nested loops and conditions'
        ],
        learningObjectives: [
          'Implement conditional logic',
          'Create efficient loops',
          'Handle complex decision trees',
          'Optimize control flow'
        ]
      },
      {
        id: 'data-structures',
        title: 'Data Structures',
        description: 'Work with Python\'s built-in data structures',
        duration: 720, // 12 hours
        order: 3,
        topics: [
          'Lists: creation, indexing, slicing, methods',
          'Tuples: immutable sequences',
          'Dictionaries: key-value pairs',
          'Sets: unique collections',
          'String manipulation and formatting'
        ],
        learningObjectives: [
          'Choose appropriate data structures',
          'Manipulate collections efficiently',
          'Understand mutability concepts',
          'Perform advanced string operations'
        ]
      },
      {
        id: 'functions',
        title: 'Functions and Modules',
        description: 'Create reusable code with functions and modules',
        duration: 600, // 10 hours
        order: 4,
        topics: [
          'Function definition and calling',
          'Parameters and arguments',
          'Return statements and scope',
          'Lambda functions',
          'Modules and packages',
          'Standard library overview'
        ],
        learningObjectives: [
          'Write modular, reusable code',
          'Understand scope and namespaces',
          'Use built-in functions effectively',
          'Create and import modules'
        ]
      },
      {
        id: 'oop',
        title: 'Object-Oriented Programming',
        description: 'Master OOP concepts in Python',
        duration: 720, // 12 hours
        order: 5,
        topics: [
          'Classes and objects',
          'Attributes and methods',
          'Inheritance and polymorphism',
          'Encapsulation and abstraction',
          'Special methods (dunder methods)',
          'Property decorators'
        ],
        learningObjectives: [
          'Design object-oriented solutions',
          'Implement inheritance hierarchies',
          'Use polymorphism effectively',
          'Apply OOP best practices'
        ]
      },
      {
        id: 'error-handling',
        title: 'Error Handling and Debugging',
        description: 'Handle errors gracefully and debug effectively',
        duration: 360, // 6 hours
        order: 6,
        topics: [
          'Exception types and handling',
          'Try, except, finally blocks',
          'Raising custom exceptions',
          'Debugging techniques',
          'Testing with unittest',
          'Code profiling'
        ],
        learningObjectives: [
          'Handle errors gracefully',
          'Debug code effectively',
          'Write robust applications',
          'Test code systematically'
        ]
      },
      {
        id: 'file-handling',
        title: 'File Handling and I/O',
        description: 'Work with files and external data',
        duration: 480, // 8 hours
        order: 7,
        topics: [
          'File operations (read, write, append)',
          'Working with CSV files',
          'JSON data handling',
          'Regular expressions',
          'Command line arguments',
          'Environment variables'
        ],
        learningObjectives: [
          'Process external data files',
          'Handle different file formats',
          'Use regular expressions',
          'Build command-line tools'
        ]
      },
      {
        id: 'advanced-topics',
        title: 'Advanced Python Concepts',
        description: 'Explore advanced Python features',
        duration: 600, // 10 hours
        order: 8,
        topics: [
          'Decorators and closures',
          'Generators and iterators',
          'Context managers',
          'Metaclasses',
          'Async programming',
          'Memory management'
        ],
        learningObjectives: [
          'Use advanced Python features',
          'Write efficient, pythonic code',
          'Understand Python internals',
          'Optimize performance'
        ]
      },
      {
        id: 'web-development',
        title: 'Web Development with Python',
        description: 'Build web applications using Python frameworks',
        duration: 720, // 12 hours
        order: 9,
        topics: [
          'Flask framework basics',
          'Django framework introduction',
          'HTTP requests and responses',
          'Templates and static files',
          'Database integration',
          'RESTful APIs'
        ],
        learningObjectives: [
          'Build web applications',
          'Create RESTful APIs',
          'Handle HTTP requests',
          'Integrate with databases'
        ]
      },
      {
        id: 'data-science',
        title: 'Data Science and Analytics',
        description: 'Analyze data using Python libraries',
        duration: 720, // 12 hours
        order: 10,
        topics: [
          'NumPy for numerical computing',
          'Pandas for data manipulation',
          'Matplotlib and Seaborn for visualization',
          'Data cleaning and preprocessing',
          'Statistical analysis',
          'Machine learning basics with scikit-learn'
        ],
        learningObjectives: [
          'Analyze and visualize data',
          'Clean and preprocess datasets',
          'Perform statistical analysis',
          'Build basic ML models'
        ]
      }
    ],
    totalHours: 80,
    projectsCount: 15,
    assessmentsCount: 25
  },
  lessons: [
    // Module 1: Python Fundamentals
    {
      id: 'py-1-1',
      courseId: 'python-complete',
      moduleId: 'python-basics',
      title: 'Introduction to Python',
      content: `Welcome to Python programming! Python is one of the most popular programming languages in the world, known for its simplicity and readability.

## What is Python?

Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It's designed to be easy to read and write, making it perfect for beginners.

## Why Learn Python?

1. **Easy to Learn**: Python's syntax is similar to English
2. **Versatile**: Used in web development, data science, AI, automation
3. **Large Community**: Millions of developers worldwide
4. **Great Libraries**: Thousands of pre-built tools and libraries
5. **High Demand**: One of the most sought-after programming skills

## Python Applications

- **Web Development**: Django, Flask
- **Data Science**: NumPy, Pandas, Matplotlib
- **Machine Learning**: TensorFlow, PyTorch
- **Automation**: Scripting and task automation
- **Desktop Applications**: Tkinter, PyQt

## Your First Python Program

Let's start with the traditional "Hello, World!" program:`,
      videoUrl: '',
      code: `# This is your first Python program!
print("Hello, World!")
print("Welcome to Python programming!")

# You can also print variables
name = "Python Learner"
print("Hello,", name)

# Try changing the message and run the code
print("I'm learning Python with PICODE!")`,
      language: 'python',
      order: 1,
      duration: 30,
      exercises: [
        {
          id: 'py-ex-1-1',
          title: 'Your First Python Program',
          description: 'Write a Python program that prints your name and a welcome message.',
          difficulty: 'easy',
          starterCode: `# Write your code here
# Print your name and a welcome message

`,
          solution: `# Solution
name = "Your Name"
print("Hello, my name is", name)
print("Welcome to my Python journey!")`,
          testCases: [
            {
              input: '',
              expectedOutput: 'Hello, my name is Your Name\nWelcome to my Python journey!',
              description: 'Should print name and welcome message'
            }
          ],
          hints: [
            'Use the print() function to display text',
            'You can store your name in a variable',
            'Use commas to print multiple items'
          ],
          points: 10
        }
      ],
      resources: [
        {
          id: 'py-res-1-1',
          title: 'Python Official Documentation',
          type: 'link',
          url: 'https://docs.python.org/3/',
          description: 'Official Python documentation and tutorials'
        }
      ],
      isPreview: true
    },
    {
      id: 'py-1-2',
      courseId: 'python-complete',
      moduleId: 'python-basics',
      title: 'Variables and Data Types',
      content: `In Python, variables are containers that store data values. Unlike other programming languages, Python has no command for declaring a variable - you create one the moment you assign a value to it.

## Creating Variables

Variables in Python are created when you assign a value to them:`,
      videoUrl: '',
      code: `# Creating variables
name = "Alice"          # String (text)
age = 25               # Integer (whole number)
height = 5.6           # Float (decimal number)
is_student = True      # Boolean (True/False)

# Print variables
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is student:", is_student)

# You can change variable values
age = 26
print("New age:", age)

# Multiple assignment
x, y, z = 1, 2, 3
print("x =", x, "y =", y, "z =", z)`,
      language: 'python',
      order: 2,
      duration: 45,
      exercises: [
        {
          id: 'py-ex-1-2',
          title: 'Working with Variables',
          description: 'Create variables for a person\'s information and display them.',
          difficulty: 'easy',
          starterCode: `# Create variables for:
# - first_name (string)
# - last_name (string) 
# - age (integer)
# - gpa (float)
# - is_graduated (boolean)

# Print all the information

`,
          solution: `first_name = "John"
last_name = "Doe"
age = 22
gpa = 3.8
is_graduated = False

print("First Name:", first_name)
print("Last Name:", last_name)
print("Age:", age)
print("GPA:", gpa)
print("Graduated:", is_graduated)`,
          testCases: [
            {
              input: '',
              expectedOutput: 'First Name: John\nLast Name: Doe\nAge: 22\nGPA: 3.8\nGraduated: False',
              description: 'Should create and print all variables'
            }
          ],
          hints: [
            'Use quotes for strings',
            'Numbers don\'t need quotes',
            'Boolean values are True or False'
          ],
          points: 15
        }
      ],
      resources: [],
      isPreview: false
    },
    {
      id: 'py-1-3',
      courseId: 'python-complete',
      moduleId: 'python-basics',
      title: 'Basic Operations and Input',
      content: `Python supports various operations for working with numbers, strings, and getting input from users.

## Arithmetic Operations

Python provides standard mathematical operations:`,
      videoUrl: '',
      code: `# Arithmetic operations
a = 10
b = 3

print("Addition:", a + b)        # 13
print("Subtraction:", a - b)     # 7
print("Multiplication:", a * b)  # 30
print("Division:", a / b)        # 3.333...
print("Floor Division:", a // b) # 3
print("Modulus:", a % b)         # 1
print("Exponentiation:", a ** b) # 1000

# String operations
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print("Full name:", full_name)

# Getting user input
name = input("What's your name? ")
print("Hello,", name)

# Converting input to numbers
age = int(input("What's your age? "))
print("Next year you'll be", age + 1)`,
      language: 'python',
      order: 3,
      duration: 40,
      exercises: [
        {
          id: 'py-ex-1-3',
          title: 'Calculator Program',
          description: 'Create a simple calculator that takes two numbers and performs basic operations.',
          difficulty: 'easy',
          starterCode: `# Get two numbers from user
# Perform and display all arithmetic operations

`,
          solution: `# Get input from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform operations
print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)
print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)
print("Exponentiation:", num1 ** num2)`,
          testCases: [
            {
              input: '10\n5',
              expectedOutput: 'Addition: 15.0\nSubtraction: 5.0\nMultiplication: 50.0\nDivision: 2.0\nExponentiation: 100000.0',
              description: 'Should perform all arithmetic operations'
            }
          ],
          hints: [
            'Use input() to get user input',
            'Convert strings to numbers with int() or float()',
            'Use arithmetic operators: +, -, *, /, **'
          ],
          points: 20
        }
      ],
      resources: [],
      isPreview: false
    },
    // Module 2: Control Structures
    {
      id: 'py-2-1',
      courseId: 'python-complete',
      moduleId: 'control-structures',
      title: 'Conditional Statements',
      content: `Conditional statements allow your program to make decisions based on different conditions. Python uses if, elif, and else statements for this purpose.

## Basic If Statement

The if statement executes code only if a condition is true:`,
      videoUrl: '',
      code: `# Basic if statement
age = 18

if age >= 18:
    print("You are an adult!")
    print("You can vote!")

# If-else statement
temperature = 25

if temperature > 30:
    print("It's hot outside!")
else:
    print("It's not too hot.")

# If-elif-else statement
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")

# Multiple conditions
age = 20
has_license = True

if age >= 18 and has_license:
    print("You can drive!")
elif age >= 18 and not has_license:
    print("You need to get a license first.")
else:
    print("You're too young to drive.")`,
      language: 'python',
      order: 1,
      duration: 45,
      exercises: [
        {
          id: 'py-ex-2-1',
          title: 'Grade Calculator',
          description: 'Write a program that determines letter grade based on numerical score.',
          difficulty: 'easy',
          starterCode: `# Get score from user and determine letter grade
# A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60

`,
          solution: `score = float(input("Enter your score: "))

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")`,
          testCases: [
            {
              input: '95',
              expectedOutput: 'Grade: A',
              description: 'Should return A for score 95'
            },
            {
              input: '75',
              expectedOutput: 'Grade: C',
              description: 'Should return C for score 75'
            }
          ],
          hints: [
            'Use if-elif-else statements',
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
      id: 'py-2-2',
      courseId: 'python-complete',
      moduleId: 'control-structures',
      title: 'Loops - For and While',
      content: `Loops allow you to repeat code multiple times. Python has two main types of loops: for loops and while loops.

## For Loops

For loops are used to iterate over sequences (like lists, strings, or ranges):`,
      videoUrl: '',
      code: `# For loop with range
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(i)

# For loop with list
fruits = ["apple", "banana", "orange"]
print("\nFruits:")
for fruit in fruits:
    print(f"I like {fruit}")

# For loop with string
word = "Python"
print(f"\nLetters in '{word}':")
for letter in word:
    print(letter)

# While loop
print("\nCountdown:")
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off!")

# While loop with user input
print("\nGuess the number (1-10):")
secret_number = 7
guess = 0

while guess != secret_number:
    guess = int(input("Enter your guess: "))
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    else:
        print("Correct! You win!")`,
      language: 'python',
      order: 2,
      duration: 50,
      exercises: [
        {
          id: 'py-ex-2-2',
          title: 'Multiplication Table',
          description: 'Create a program that prints the multiplication table for a given number.',
          difficulty: 'medium',
          starterCode: `# Get a number from user and print its multiplication table (1-10)

`,
          solution: `number = int(input("Enter a number: "))

print(f"Multiplication table for {number}:")
for i in range(1, 11):
    result = number * i
    print(f"{number} x {i} = {result}")`,
          testCases: [
            {
              input: '5',
              expectedOutput: 'Multiplication table for 5:\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50',
              description: 'Should print multiplication table for 5'
            }
          ],
          hints: [
            'Use a for loop with range(1, 11)',
            'Multiply the number by each value in the range',
            'Use f-strings for formatted output'
          ],
          points: 25
        }
      ],
      resources: [],
      isPreview: false
    },
    // Module 3: Data Structures
    {
      id: 'py-3-1',
      courseId: 'python-complete',
      moduleId: 'data-structures',
      title: 'Working with Lists',
      content: `Lists are one of the most important data structures in Python. They allow you to store multiple items in a single variable and are ordered, changeable, and allow duplicate values.

## Creating and Using Lists

Lists are created using square brackets:`,
      videoUrl: '',
      code: `# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed_list = ["hello", 42, True, 3.14]

print("Fruits:", fruits)
print("Numbers:", numbers)
print("Mixed list:", mixed_list)

# Accessing list items
print("\nAccessing items:")
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])
print("Second and third fruits:", fruits[1:3])

# Adding items to lists
fruits.append("grape")  # Add to end
fruits.insert(1, "mango")  # Insert at position
print("\nAfter adding:", fruits)

# Modifying list items
fruits[0] = "green apple"
print("After modification:", fruits)

# List methods
print(f"\nList length: {len(fruits)}")
print(f"Index of 'banana': {fruits.index('banana')}")
print(f"Count of 'apple': {fruits.count('apple')}")

# Removing items
removed_fruit = fruits.pop()  # Remove last item
print(f"Removed: {removed_fruit}")
fruits.remove("mango")  # Remove specific item
print("After removal:", fruits)

# List operations
numbers1 = [1, 2, 3]
numbers2 = [4, 5, 6]
combined = numbers1 + numbers2
print("\nCombined lists:", combined)

# List comprehension
squares = [x**2 for x in range(1, 6)]
even_numbers = [x for x in range(1, 11) if x % 2 == 0]
print("Squares:", squares)
print("Even numbers:", even_numbers)`,
      language: 'python',
      order: 1,
      duration: 50,
      exercises: [
        {
          id: 'py-ex-3-1',
          title: 'Shopping List Manager',
          description: 'Create a program that manages a shopping list with add, remove, and display functions.',
          difficulty: 'medium',
          starterCode: `# Create a shopping list program
# Allow user to add items, remove items, and display the list

`,
          solution: `shopping_list = []

def add_item(item):
    shopping_list.append(item)
    print(f"Added '{item}' to the shopping list")

def remove_item(item):
    if item in shopping_list:
        shopping_list.remove(item)
        print(f"Removed '{item}' from the shopping list")
    else:
        print(f"'{item}' not found in the shopping list")

def display_list():
    if shopping_list:
        print("Shopping List:")
        for i, item in enumerate(shopping_list, 1):
            print(f"{i}. {item}")
    else:
        print("Shopping list is empty")

# Example usage
add_item("milk")
add_item("bread")
add_item("eggs")
display_list()
remove_item("bread")
display_list()`,
          testCases: [
            {
              input: '',
              expectedOutput: 'Added \'milk\' to the shopping list\nAdded \'bread\' to the shopping list\nAdded \'eggs\' to the shopping list\nShopping List:\n1. milk\n2. bread\n3. eggs\nRemoved \'bread\' from the shopping list\nShopping List:\n1. milk\n2. eggs',
              description: 'Should manage shopping list correctly'
            }
          ],
          hints: [
            'Use append() to add items',
            'Use remove() to delete items',
            'Use enumerate() for numbered lists'
          ],
          points: 30
        }
      ],
      resources: [],
      isPreview: false
    },
    {
      id: 'py-3-2',
      courseId: 'python-complete',
      moduleId: 'data-structures',
      title: 'Dictionaries and Key-Value Pairs',
      content: `Dictionaries are used to store data values in key-value pairs. They are ordered, changeable, and do not allow duplicates.

## Creating and Using Dictionaries

Dictionaries are created using curly braces:`,
      videoUrl: '',
      code: `# Creating dictionaries
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
print(f"Items: {list(student.items())}")

# Checking if key exists
if "name" in student:
    print("Name is in the dictionary")

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
      order: 2,
      duration: 45,
      exercises: [
        {
          id: 'py-ex-3-2',
          title: 'Student Grade Book',
          description: 'Create a grade book system using dictionaries to store student information.',
          difficulty: 'medium',
          starterCode: `# Create a grade book system
# Store student names and their grades in different subjects

`,
          solution: `grade_book = {}

def add_student(name):
    if name not in grade_book:
        grade_book[name] = {}
        print(f"Added student: {name}")
    else:
        print(f"Student {name} already exists")

def add_grade(name, subject, grade):
    if name in grade_book:
        grade_book[name][subject] = grade
        print(f"Added {subject} grade {grade} for {name}")
    else:
        print(f"Student {name} not found")

def get_average(name):
    if name in grade_book and grade_book[name]:
        grades = list(grade_book[name].values())
        return sum(grades) / len(grades)
    return 0

def display_grades():
    for student, subjects in grade_book.items():
        print(f"\n{student}:")
        for subject, grade in subjects.items():
            print(f"  {subject}: {grade}")
        avg = get_average(student)
        print(f"  Average: {avg:.1f}")

# Example usage
add_student("Alice")
add_student("Bob")
add_grade("Alice", "Math", 95)
add_grade("Alice", "Science", 87)
add_grade("Bob", "Math", 82)
add_grade("Bob", "Science", 90)
display_grades()`,
          testCases: [
            {
              input: '',
              expectedOutput: 'Added student: Alice\nAdded student: Bob\nAdded Math grade 95 for Alice\nAdded Science grade 87 for Alice\nAdded Math grade 82 for Bob\nAdded Science grade 90 for Bob\n\nAlice:\n  Math: 95\n  Science: 87\n  Average: 91.0\n\nBob:\n  Math: 82\n  Science: 90\n  Average: 86.0',
              description: 'Should manage student grades correctly'
            }
          ],
          hints: [
            'Use nested dictionaries for students and subjects',
            'Check if student exists before adding grades',
            'Calculate average using sum() and len()'
          ],
          points: 35
        }
      ],
      resources: [],
      isPreview: false
    }
    // Add more lessons for remaining modules...
  ],
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-15')
};