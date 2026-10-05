const courses = [
    {
        id: "html-css",
        title: "HTML & CSS Fundamentals",
        category: "Web Development",
        instructor: "John David",
        duration: "4 Weeks",
        level: "Beginner",
        rating: 4.9,
        students: 1240,
        lessons: 28,
        description:
            "Learn how to create responsive and professional websites using HTML and CSS.",
        icon: "fa-brands fa-html5",
        color: "orange"
    },

    {
        id: "javascript",
        title: "JavaScript Essentials",
        category: "Frontend Development",
        instructor: "Emily Wilson",
        duration: "6 Weeks",
        level: "Intermediate",
        rating: 4.8,
        students: 2130,
        lessons: 36,
        description:
            "Build interactive websites and understand modern JavaScript concepts through practical projects.",
        icon: "fa-brands fa-js",
        color: "yellow"
    },

    {
        id: "react",
        title: "React Development",
        category: "Frontend Development",
        instructor: "Michael Brown",
        duration: "6 Weeks",
        level: "Intermediate",
        rating: 4.8,
        students: 1860,
        lessons: 34,
        description:
            "Learn component-based frontend development and build modern React applications.",
        icon: "fa-brands fa-react",
        color: "blue"
    },

    {
        id: "python",
        title: "Python Programming",
        category: "Programming",
        instructor: "Robert Anderson",
        duration: "8 Weeks",
        level: "Beginner",
        rating: 4.9,
        students: 2850,
        lessons: 42,
        description:
            "Learn Python programming, problem solving, functions and object-oriented concepts.",
        icon: "fa-brands fa-python",
        color: "purple"
    },

    {
        id: "java",
        title: "Java Programming",
        category: "Programming",
        instructor: "Sophia Williams",
        duration: "8 Weeks",
        level: "Intermediate",
        rating: 4.7,
        students: 2140,
        lessons: 45,
        description:
            "Master Java programming and object-oriented programming concepts through practical projects.",
        icon: "fa-brands fa-java",
        color: "red"
    },

    {
        id: "dsa",
        title: "Data Structures & Algorithms",
        category: "Computer Science",
        instructor: "David Miller",
        duration: "8 Weeks",
        level: "Advanced",
        rating: 4.8,
        students: 1680,
        lessons: 48,
        description:
            "Strengthen problem-solving skills through data structures, algorithms and coding challenges.",
        icon: "fa-solid fa-diagram-project",
        color: "indigo"
    },

    {
        id: "sql",
        title: "SQL & Database Management",
        category: "Database",
        instructor: "Sarah Johnson",
        duration: "5 Weeks",
        level: "Intermediate",
        rating: 4.8,
        students: 1920,
        lessons: 30,
        description:
            "Learn SQL queries, relational databases, joins, database design and data management.",
        icon: "fa-solid fa-database",
        color: "green"
    },

    {
        id: "data-science",
        title: "Data Science Fundamentals",
        category: "Data Analytics",
        instructor: "Daniel Thomas",
        duration: "8 Weeks",
        level: "Intermediate",
        rating: 4.9,
        students: 1760,
        lessons: 44,
        description:
            "Explore data analysis, visualization and practical data science workflows.",
        icon: "fa-solid fa-chart-column",
        color: "cyan"
    },

    {
        id: "machine-learning",
        title: "Machine Learning Basics",
        category: "Artificial Intelligence",
        instructor: "Dr. James Wilson",
        duration: "10 Weeks",
        level: "Advanced",
        rating: 4.9,
        students: 1450,
        lessons: 52,
        description:
            "Understand machine learning concepts and build practical predictive models.",
        icon: "fa-solid fa-brain",
        color: "pink"
    },

    {
        id: "ui-ux",
        title: "UI/UX Design Fundamentals",
        category: "Design",
        instructor: "Olivia Martin",
        duration: "5 Weeks",
        level: "Beginner",
        rating: 4.7,
        students: 1320,
        lessons: 27,
        description:
            "Learn user interface design, user experience principles, wireframing and prototyping.",
        icon: "fa-solid fa-pen-ruler",
        color: "rose"
    },

    {
        id: "git",
        title: "Git & GitHub",
        category: "Developer Tools",
        instructor: "Alex Johnson",
        duration: "3 Weeks",
        level: "Beginner",
        rating: 4.8,
        students: 2380,
        lessons: 18,
        description:
            "Learn version control, Git commands, branching, GitHub repositories and collaboration.",
        icon: "fa-brands fa-github",
        color: "dark"
    },

    {
        id: "cloud",
        title: "Cloud Computing Fundamentals",
        category: "Cloud",
        instructor: "William Davis",
        duration: "7 Weeks",
        level: "Intermediate",
        rating: 4.7,
        students: 1180,
        lessons: 35,
        description:
            "Understand cloud computing concepts, services, deployment models and cloud infrastructure.",
        icon: "fa-solid fa-cloud",
        color: "sky"
    }
];


const defaultStudents = [
    {
        id: 1,
        name: "Divya S",
        email: "divyaoct2006@gmail.com",
        password: "div2006",
        role: "student",
        status: "Active"
    }
];


const defaultAdmins = [
    {
        id: 1,
        name: "SCMS Administrator",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin"
    }
];


const notifications = [
    {
        id: 1,
        title: "Welcome to SCMS",
        message:
            "Your learning journey starts here. Explore our available courses.",
        date: "Today",
        type: "system"
    },
    {
        id: 2,
        title: "New Course Available",
        message:
            "Machine Learning Basics is now available for enrollment.",
        date: "Yesterday",
        type: "course"
    },
    {
        id: 3,
        title: "Keep Learning",
        message:
            "Continue your current course to maintain your learning progress.",
        date: "2 days ago",
        type: "reminder"
    }
];