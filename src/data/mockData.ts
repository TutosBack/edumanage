import { User, School, Course, Material } from '../types';

export const schools: School[] = [
  {
    id: 1,
    name: "Green Hill School",
    address: "123 Education St, City Center",
    created_at: "2024-01-15"
  },
  {
    id: 2,
    name: "Bright Future Academy",
    address: "456 Learning Ave, Downtown",
    created_at: "2024-02-20"
  },
  {
    id: 3,
    name: "Excellence High School",
    address: "789 Knowledge Blvd, Uptown",
    created_at: "2024-03-10"
  },
  {
    id: 4,
    name: "Riverside Elementary",
    address: "234 River Road, Riverside District",
    created_at: "2023-08-15"
  },
  {
    id: 5,
    name: "Mountain View Middle School",
    address: "567 Peak Avenue, Mountain District",
    created_at: "2023-09-01"
  },
  {
    id: 6,
    name: "Central City High",
    address: "890 Main Street, Central District",
    created_at: "2023-07-20"
  },
  {
    id: 7,
    name: "Oakwood Primary",
    address: "345 Oak Tree Lane, Oakwood",
    created_at: "2023-10-05"
  },
  {
    id: 8,
    name: "Sunrise International School",
    address: "678 International Blvd, Business District",
    created_at: "2024-01-08"
  },
  {
    id: 9,
    name: "Liberty Charter School",
    address: "901 Freedom Way, Liberty Heights",
    created_at: "2023-11-12"
  },
  {
    id: 10,
    name: "Westfield Academy",
    address: "432 West Field Road, Westfield",
    created_at: "2023-12-03"
  }
];

export const users: User[] = [
  // Super Admin
  {
    id: 1,
    name: "Edmond Rodriguez",
    email: "edmond@system.com",
    username: "edmond",
    password: "admin123",
    role: "super_admin"
  },
  
  // School Admins
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@greenhill.edu",
    username: "jane.smith",
    password: "password123",
    role: "school_admin",
    school_ids: [1]
  },
  {
    id: 3,
    name: "Robert Taylor",
    email: "robert@schools.edu",
    username: "robert.t",
    password: "admin789",
    role: "school_admin",
    school_ids: [2, 3]
  },
  {
    id: 4,
    name: "Lisa Anderson",
    email: "lisa@riverside.edu",
    username: "lisa.a",
    password: "admin456",
    role: "school_admin",
    school_ids: [4]
  },
  {
    id: 5,
    name: "Mark Williams",
    email: "mark@mountainview.edu",
    username: "mark.w",
    password: "admin654",
    role: "school_admin",
    school_ids: [5]
  },
  {
    id: 6,
    name: "Patricia Davis",
    email: "patricia@centralcity.edu",
    username: "patricia.d",
    password: "admin321",
    role: "school_admin",
    school_ids: [6]
  },
  {
    id: 7,
    name: "Steven Martinez",
    email: "steven@oakwood.edu",
    username: "steven.m",
    password: "admin987",
    role: "school_admin",
    school_ids: [7, 8]
  },
  {
    id: 8,
    name: "Jennifer Garcia",
    email: "jennifer@liberty.edu",
    username: "jennifer.g",
    password: "admin147",
    role: "school_admin",
    school_ids: [9]
  },
  {
    id: 9,
    name: "Christopher Wilson",
    email: "chris@westfield.edu",
    username: "chris.w",
    password: "admin258",
    role: "school_admin",
    school_ids: [10]
  },
  
  // Teachers
  {
    id: 10,
    name: "Michael Johnson",
    email: "michael@greenhill.edu",
    username: "michael.j",
    password: "teacher123",
    role: "teacher",
    school_ids: [1, 2]
  },
  {
    id: 11,
    name: "Sarah Wilson",
    email: "sarah@brightfuture.edu",
    username: "sarah.w",
    password: "teacher456",
    role: "teacher",
    school_ids: [2]
  },
  {
    id: 12,
    name: "David Thompson",
    email: "david@greenhill.edu",
    username: "david.t",
    password: "teacher789",
    role: "teacher",
    school_ids: [1]
  },
  {
    id: 13,
    name: "Emma Rodriguez",
    email: "emma@excellence.edu",
    username: "emma.r",
    password: "teacher321",
    role: "teacher",
    school_ids: [3]
  },
  {
    id: 14,
    name: "James Lee",
    email: "james@riverside.edu",
    username: "james.l",
    password: "teacher654",
    role: "teacher",
    school_ids: [4]
  },
  {
    id: 15,
    name: "Mary Johnson",
    email: "mary@mountainview.edu",
    username: "mary.j",
    password: "teacher987",
    role: "teacher",
    school_ids: [5]
  },
  {
    id: 16,
    name: "Robert Clark",
    email: "robert@centralcity.edu",
    username: "robert.c",
    password: "teacher147",
    role: "teacher",
    school_ids: [6]
  },
  {
    id: 17,
    name: "Linda White",
    email: "linda@oakwood.edu",
    username: "linda.w",
    password: "teacher258",
    role: "teacher",
    school_ids: [7]
  },
  {
    id: 18,
    name: "William Harris",
    email: "william@sunrise.edu",
    username: "william.h",
    password: "teacher369",
    role: "teacher",
    school_ids: [8]
  },
  {
    id: 19,
    name: "Barbara Lewis",
    email: "barbara@liberty.edu",
    username: "barbara.l",
    password: "teacher741",
    role: "teacher",
    school_ids: [9]
  },
  {
    id: 20,
    name: "Thomas Walker",
    email: "thomas@westfield.edu",
    username: "thomas.w",
    password: "teacher852",
    role: "teacher",
    school_ids: [10]
  },
  {
    id: 21,
    name: "Nancy Hall",
    email: "nancy@greenhill.edu",
    username: "nancy.h",
    password: "teacher963",
    role: "teacher",
    school_ids: [1]
  },
  {
    id: 22,
    name: "Charles Young",
    email: "charles@brightfuture.edu",
    username: "charles.y",
    password: "teacher159",
    role: "teacher",
    school_ids: [2, 3]
  },
  {
    id: 23,
    name: "Susan King",
    email: "susan@excellence.edu",
    username: "susan.k",
    password: "teacher357",
    role: "teacher",
    school_ids: [3]
  },
  {
    id: 24,
    name: "Daniel Wright",
    email: "daniel@riverside.edu",
    username: "daniel.w",
    password: "teacher468",
    role: "teacher",
    school_ids: [4, 5]
  },
  {
    id: 25,
    name: "Karen Lopez",
    email: "karen@mountainview.edu",
    username: "karen.l",
    password: "teacher579",
    role: "teacher",
    school_ids: [5]
  },
  {
    id: 26,
    name: "Paul Scott",
    email: "paul@centralcity.edu",
    username: "paul.s",
    password: "teacher680",
    role: "teacher",
    school_ids: [6]
  },
  {
    id: 27,
    name: "Helen Green",
    email: "helen@oakwood.edu",
    username: "helen.g",
    password: "teacher791",
    role: "teacher",
    school_ids: [7, 8]
  },
  {
    id: 28,
    name: "Kevin Adams",
    email: "kevin@sunrise.edu",
    username: "kevin.a",
    password: "teacher802",
    role: "teacher",
    school_ids: [8]
  },
  {
    id: 29,
    name: "Dorothy Baker",
    email: "dorothy@liberty.edu",
    username: "dorothy.b",
    password: "teacher913",
    role: "teacher",
    school_ids: [9]
  },
  {
    id: 30,
    name: "Gary Nelson",
    email: "gary@westfield.edu",
    username: "gary.n",
    password: "teacher024",
    role: "teacher",
    school_ids: [10]
  },
  
  // Students
  {
    id: 31,
    name: "David Brown",
    email: "david@greenhill.edu",
    username: "david.b",
    password: "student123",
    role: "student",
    school_ids: [1]
  },
  {
    id: 32,
    name: "Emily Davis",
    email: "emily@brightfuture.edu",
    username: "emily.d",
    password: "student456",
    role: "student",
    school_ids: [2, 3]
  },
  {
    id: 33,
    name: "Alex Johnson",
    email: "alex@greenhill.edu",
    username: "alex.j",
    password: "student789",
    role: "student",
    school_ids: [1]
  },
  {
    id: 34,
    name: "Sophia Martinez",
    email: "sophia@brightfuture.edu",
    username: "sophia.m",
    password: "student321",
    role: "student",
    school_ids: [2]
  },
  {
    id: 35,
    name: "Ethan Wilson",
    email: "ethan@excellence.edu",
    username: "ethan.w",
    password: "student654",
    role: "student",
    school_ids: [3]
  },
  {
    id: 36,
    name: "Isabella Garcia",
    email: "isabella@riverside.edu",
    username: "isabella.g",
    password: "student987",
    role: "student",
    school_ids: [4]
  },
  {
    id: 37,
    name: "Mason Anderson",
    email: "mason@mountainview.edu",
    username: "mason.a",
    password: "student147",
    role: "student",
    school_ids: [5]
  },
  {
    id: 38,
    name: "Olivia Taylor",
    email: "olivia@centralcity.edu",
    username: "olivia.t",
    password: "student258",
    role: "student",
    school_ids: [6]
  },
  {
    id: 39,
    name: "Jacob Thomas",
    email: "jacob@oakwood.edu",
    username: "jacob.t",
    password: "student369",
    role: "student",
    school_ids: [7]
  },
  {
    id: 40,
    name: "Ava Jackson",
    email: "ava@sunrise.edu",
    username: "ava.j",
    password: "student741",
    role: "student",
    school_ids: [8]
  },
  {
    id: 41,
    name: "William White",
    email: "william.w@liberty.edu",
    username: "william.w",
    password: "student852",
    role: "student",
    school_ids: [9]
  },
  {
    id: 42,
    name: "Mia Harris",
    email: "mia@westfield.edu",
    username: "mia.h",
    password: "student963",
    role: "student",
    school_ids: [10]
  },
  {
    id: 43,
    name: "Benjamin Clark",
    email: "benjamin@greenhill.edu",
    username: "benjamin.c",
    password: "student159",
    role: "student",
    school_ids: [1]
  },
  {
    id: 44,
    name: "Charlotte Lewis",
    email: "charlotte@brightfuture.edu",
    username: "charlotte.l",
    password: "student357",
    role: "student",
    school_ids: [2]
  },
  {
    id: 45,
    name: "Lucas Robinson",
    email: "lucas@excellence.edu",
    username: "lucas.r",
    password: "student468",
    role: "student",
    school_ids: [3]
  },
  {
    id: 46,
    name: "Amelia Walker",
    email: "amelia@riverside.edu",
    username: "amelia.w",
    password: "student579",
    role: "student",
    school_ids: [4]
  },
  {
    id: 47,
    name: "Henry Young",
    email: "henry@mountainview.edu",
    username: "henry.y",
    password: "student680",
    role: "student",
    school_ids: [5]
  },
  {
    id: 48,
    name: "Harper King",
    email: "harper@centralcity.edu",
    username: "harper.k",
    password: "student791",
    role: "student",
    school_ids: [6]
  },
  {
    id: 49,
    name: "Alexander Wright",
    email: "alexander@oakwood.edu",
    username: "alexander.w",
    password: "student802",
    role: "student",
    school_ids: [7]
  },
  {
    id: 50,
    name: "Evelyn Lopez",
    email: "evelyn@sunrise.edu",
    username: "evelyn.l",
    password: "student913",
    role: "student",
    school_ids: [8]
  },
  {
    id: 51,
    name: "Sebastian Hill",
    email: "sebastian@liberty.edu",
    username: "sebastian.h",
    password: "student024",
    role: "student",
    school_ids: [9]
  },
  {
    id: 52,
    name: "Avery Scott",
    email: "avery@westfield.edu",
    username: "avery.s",
    password: "student135",
    role: "student",
    school_ids: [10]
  },
  {
    id: 53,
    name: "Owen Green",
    email: "owen@greenhill.edu",
    username: "owen.g",
    password: "student246",
    role: "student",
    school_ids: [1]
  },
  {
    id: 54,
    name: "Ella Adams",
    email: "ella@brightfuture.edu",
    username: "ella.a",
    password: "student357",
    role: "student",
    school_ids: [2]
  },
  {
    id: 55,
    name: "Liam Baker",
    email: "liam@excellence.edu",
    username: "liam.b",
    password: "student468",
    role: "student",
    school_ids: [3]
  },
  {
    id: 56,
    name: "Scarlett Nelson",
    email: "scarlett@riverside.edu",
    username: "scarlett.n",
    password: "student579",
    role: "student",
    school_ids: [4]
  },
  {
    id: 57,
    name: "Noah Carter",
    email: "noah@mountainview.edu",
    username: "noah.c",
    password: "student680",
    role: "student",
    school_ids: [5]
  },
  {
    id: 58,
    name: "Madison Mitchell",
    email: "madison@centralcity.edu",
    username: "madison.m",
    password: "student791",
    role: "student",
    school_ids: [6]
  },
  {
    id: 59,
    name: "Logan Perez",
    email: "logan@oakwood.edu",
    username: "logan.p",
    password: "student802",
    role: "student",
    school_ids: [7]
  },
  {
    id: 60,
    name: "Chloe Roberts",
    email: "chloe@sunrise.edu",
    username: "chloe.r",
    password: "student913",
    role: "student",
    school_ids: [8]
  }
];

export const courses: Course[] = [
  // Green Hill School (ID: 1)
  {
    id: 1,
    name: "Mathematics 101",
    description: "Introduction to basic mathematics concepts",
    school_id: 1,
    teacher_id: 10,
    created_at: "2024-01-20"
  },
  {
    id: 2,
    name: "English Literature",
    description: "Classical and modern literature analysis",
    school_id: 1,
    teacher_id: 10,
    created_at: "2024-03-01"
  },
  {
    id: 3,
    name: "History of World Civilizations",
    description: "Comprehensive study of world history",
    school_id: 1,
    teacher_id: 12,
    created_at: "2024-01-25"
  },
  {
    id: 4,
    name: "Physical Science",
    description: "Introduction to physics and chemistry concepts",
    school_id: 1,
    teacher_id: 21,
    created_at: "2024-02-10"
  },
  {
    id: 5,
    name: "Art and Design",
    description: "Creative expression through visual arts",
    school_id: 1,
    teacher_id: 12,
    created_at: "2024-02-15"
  },
  
  // Bright Future Academy (ID: 2)
  {
    id: 6,
    name: "Biology Fundamentals",
    description: "Basic principles of biology and life sciences",
    school_id: 2,
    teacher_id: 11,
    created_at: "2024-02-15"
  },
  {
    id: 7,
    name: "Chemistry Basics",
    description: "Introduction to chemical principles",
    school_id: 2,
    teacher_id: 10,
    created_at: "2024-03-15"
  },
  {
    id: 8,
    name: "Advanced Mathematics",
    description: "Algebra II and Trigonometry",
    school_id: 2,
    teacher_id: 22,
    created_at: "2024-02-20"
  },
  {
    id: 9,
    name: "Computer Science Basics",
    description: "Introduction to programming and computer systems",
    school_id: 2,
    teacher_id: 11,
    created_at: "2024-03-05"
  },
  {
    id: 10,
    name: "Psychology 101",
    description: "Introduction to human behavior and mental processes",
    school_id: 2,
    teacher_id: 22,
    created_at: "2024-03-10"
  },
  
  // Excellence High School (ID: 3)
  {
    id: 11,
    name: "AP Calculus",
    description: "Advanced Placement Calculus AB",
    school_id: 3,
    teacher_id: 13,
    created_at: "2024-03-12"
  },
  {
    id: 12,
    name: "AP Physics",
    description: "Advanced Placement Physics C",
    school_id: 3,
    teacher_id: 23,
    created_at: "2024-03-15"
  },
  {
    id: 13,
    name: "World Languages: Spanish",
    description: "Spanish language and culture",
    school_id: 3,
    teacher_id: 13,
    created_at: "2024-03-18"
  },
  {
    id: 14,
    name: "Economics",
    description: "Principles of micro and macroeconomics",
    school_id: 3,
    teacher_id: 22,
    created_at: "2024-03-20"
  },
  {
    id: 15,
    name: "Creative Writing",
    description: "Fiction and poetry writing workshop",
    school_id: 3,
    teacher_id: 23,
    created_at: "2024-03-22"
  },
  
  // Riverside Elementary (ID: 4)
  {
    id: 16,
    name: "Elementary Math",
    description: "Basic arithmetic and problem solving",
    school_id: 4,
    teacher_id: 14,
    created_at: "2024-01-10"
  },
  {
    id: 17,
    name: "Reading Comprehension",
    description: "Developing reading skills and vocabulary",
    school_id: 4,
    teacher_id: 24,
    created_at: "2024-01-12"
  },
  {
    id: 18,
    name: "Science Exploration",
    description: "Hands-on science experiments for young learners",
    school_id: 4,
    teacher_id: 14,
    created_at: "2024-01-15"
  },
  {
    id: 19,
    name: "Social Studies",
    description: "Community and citizenship studies",
    school_id: 4,
    teacher_id: 24,
    created_at: "2024-01-18"
  },
  
  // Mountain View Middle School (ID: 5)
  {
    id: 20,
    name: "Pre-Algebra",
    description: "Preparation for high school algebra",
    school_id: 5,
    teacher_id: 15,
    created_at: "2024-02-01"
  },
  {
    id: 21,
    name: "Earth Science",
    description: "Geology, meteorology, and environmental science",
    school_id: 5,
    teacher_id: 25,
    created_at: "2024-02-03"
  },
  {
    id: 22,
    name: "Language Arts",
    description: "Grammar, writing, and literature",
    school_id: 5,
    teacher_id: 24,
    created_at: "2024-02-05"
  },
  {
    id: 23,
    name: "American History",
    description: "United States history from colonial times to present",
    school_id: 5,
    teacher_id: 15,
    created_at: "2024-02-08"
  },
  
  // Central City High (ID: 6)
  {
    id: 24,
    name: "Geometry",
    description: "Plane and solid geometry principles",
    school_id: 6,
    teacher_id: 16,
    created_at: "2024-02-10"
  },
  {
    id: 25,
    name: "Biology",
    description: "High school level biology and lab work",
    school_id: 6,
    teacher_id: 26,
    created_at: "2024-02-12"
  },
  {
    id: 26,
    name: "English Composition",
    description: "Essay writing and communication skills",
    school_id: 6,
    teacher_id: 16,
    created_at: "2024-02-15"
  },
  {
    id: 27,
    name: "World History",
    description: "Global historical perspectives",
    school_id: 6,
    teacher_id: 26,
    created_at: "2024-02-18"
  },
  
  // Oakwood Primary (ID: 7)
  {
    id: 28,
    name: "Beginning Math",
    description: "Numbers, counting, and basic operations",
    school_id: 7,
    teacher_id: 17,
    created_at: "2024-01-20"
  },
  {
    id: 29,
    name: "Phonics and Reading",
    description: "Letter sounds and early reading skills",
    school_id: 7,
    teacher_id: 27,
    created_at: "2024-01-22"
  },
  {
    id: 30,
    name: "Nature Studies",
    description: "Exploring the natural world around us",
    school_id: 7,
    teacher_id: 17,
    created_at: "2024-01-25"
  },
  
  // Sunrise International School (ID: 8)
  {
    id: 31,
    name: "International Baccalaureate Mathematics",
    description: "IB Mathematics Standard Level",
    school_id: 8,
    teacher_id: 18,
    created_at: "2024-02-01"
  },
  {
    id: 32,
    name: "Global Perspectives",
    description: "Understanding international issues and cultures",
    school_id: 8,
    teacher_id: 28,
    created_at: "2024-02-03"
  },
  {
    id: 33,
    name: "Modern Languages: French",
    description: "French language and francophone cultures",
    school_id: 8,
    teacher_id: 27,
    created_at: "2024-02-05"
  },
  {
    id: 34,
    name: "Environmental Science",
    description: "Sustainability and environmental awareness",
    school_id: 8,
    teacher_id: 18,
    created_at: "2024-02-08"
  },
  
  // Liberty Charter School (ID: 9)
  {
    id: 35,
    name: "Integrated Mathematics",
    description: "Blended approach to mathematical concepts",
    school_id: 9,
    teacher_id: 19,
    created_at: "2024-02-10"
  },
  {
    id: 36,
    name: "Project-Based Science",
    description: "Science learning through hands-on projects",
    school_id: 9,
    teacher_id: 29,
    created_at: "2024-02-12"
  },
  {
    id: 37,
    name: "Digital Literacy",
    description: "Technology skills and digital citizenship",
    school_id: 9,
    teacher_id: 19,
    created_at: "2024-02-15"
  },
  
  // Westfield Academy (ID: 10)
  {
    id: 38,
    name: "Statistics and Data Analysis",
    description: "Applied statistics and data interpretation",
    school_id: 10,
    teacher_id: 20,
    created_at: "2024-02-18"
  },
  {
    id: 39,
    name: "Biotechnology",
    description: "Modern applications of biological science",
    school_id: 10,
    teacher_id: 30,
    created_at: "2024-02-20"
  },
  {
    id: 40,
    name: "Media Studies",
    description: "Analysis of media and communication",
    school_id: 10,
    teacher_id: 20,
    created_at: "2024-02-22"
  },
  {
    id: 41,
    name: "Philosophy and Ethics",
    description: "Critical thinking and moral reasoning",
    school_id: 10,
    teacher_id: 30,
    created_at: "2024-02-25"
  }
];

export const materials: Material[] = [
  // Materials for Green Hill School courses
  {
    id: 1,
    title: "Algebra Fundamentals",
    description: "Complete guide to algebraic expressions",
    file_type: "pdf",
    file_url: "/materials/algebra.pdf",
    course_id: 1,
    uploaded_by: 10,
    created_at: "2024-01-25"
  },
  {
    id: 2,
    title: "Quadratic Equations Workbook",
    description: "Practice problems for quadratic equations",
    file_type: "pdf",
    file_url: "/materials/quadratic-workbook.pdf",
    course_id: 1,
    uploaded_by: 10,
    created_at: "2024-02-01"
  },
  {
    id: 3,
    title: "Shakespeare Analysis",
    description: "Study guide for Hamlet",
    file_type: "document",
    file_url: "/materials/hamlet-analysis.docx",
    course_id: 2,
    uploaded_by: 10,
    created_at: "2024-03-05"
  },
  {
    id: 4,
    title: "Poetry Interpretation Guide",
    description: "Understanding metaphors and literary devices",
    file_type: "pdf",
    file_url: "/materials/poetry-guide.pdf",
    course_id: 2,
    uploaded_by: 10,
    created_at: "2024-03-10"
  },
  {
    id: 5,
    title: "Ancient Civilizations Timeline",
    description: "Interactive timeline of major civilizations",
    file_type: "pdf",
    file_url: "/materials/ancient-timeline.pdf",
    course_id: 3,
    uploaded_by: 12,
    created_at: "2024-02-01"
  },
  {
    id: 6,
    title: "World War II Documentary",
    description: "Educational video on WWII events",
    file_type: "video",
    file_url: "/materials/wwii-documentary.mp4",
    course_id: 3,
    uploaded_by: 12,
    created_at: "2024-02-15"
  }
]