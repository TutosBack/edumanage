import { User, School, Course, Material, Class } from '../types';

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

export const classes: Class[] = [
  // Green Hill School (ID: 1)
  { id: 1, name: "Grade 1A", school_id: 1, grade_level: "Grade 1", created_at: "2024-01-20" },
  { id: 2, name: "Grade 1B", school_id: 1, grade_level: "Grade 1", created_at: "2024-01-20" },
  { id: 3, name: "Grade 2A", school_id: 1, grade_level: "Grade 2", created_at: "2024-01-20" },
  { id: 4, name: "Grade 3A", school_id: 1, grade_level: "Grade 3", created_at: "2024-01-20" },
  { id: 5, name: "Grade 4A", school_id: 1, grade_level: "Grade 4", created_at: "2024-01-20" },
  
  // Bright Future Academy (ID: 2)
  { id: 6, name: "Form 1 Alpha", school_id: 2, grade_level: "Form 1", created_at: "2024-02-15" },
  { id: 7, name: "Form 1 Beta", school_id: 2, grade_level: "Form 1", created_at: "2024-02-15" },
  { id: 8, name: "Form 2 Alpha", school_id: 2, grade_level: "Form 2", created_at: "2024-02-15" },
  { id: 9, name: "Form 3 Alpha", school_id: 2, grade_level: "Form 3", created_at: "2024-02-15" },
  { id: 10, name: "Form 4 Alpha", school_id: 2, grade_level: "Form 4", created_at: "2024-02-15" },
  
  // Excellence High School (ID: 3)
  { id: 11, name: "Year 9A", school_id: 3, grade_level: "Year 9", created_at: "2024-03-12" },
  { id: 12, name: "Year 9B", school_id: 3, grade_level: "Year 9", created_at: "2024-03-12" },
  { id: 13, name: "Year 10A", school_id: 3, grade_level: "Year 10", created_at: "2024-03-12" },
  { id: 14, name: "Year 11A", school_id: 3, grade_level: "Year 11", created_at: "2024-03-12" },
  { id: 15, name: "Year 12A", school_id: 3, grade_level: "Year 12", created_at: "2024-03-12" },
  
  // Riverside Elementary (ID: 4)
  { id: 16, name: "Kindergarten A", school_id: 4, grade_level: "Kindergarten", created_at: "2024-01-10" },
  { id: 17, name: "Kindergarten B", school_id: 4, grade_level: "Kindergarten", created_at: "2024-01-10" },
  { id: 18, name: "Grade 1 Eagles", school_id: 4, grade_level: "Grade 1", created_at: "2024-01-10" },
  { id: 19, name: "Grade 2 Lions", school_id: 4, grade_level: "Grade 2", created_at: "2024-01-10" },
  
  // Mountain View Middle School (ID: 5)
  { id: 20, name: "6th Grade A", school_id: 5, grade_level: "6th Grade", created_at: "2024-02-01" },
  { id: 21, name: "6th Grade B", school_id: 5, grade_level: "6th Grade", created_at: "2024-02-01" },
  { id: 22, name: "7th Grade A", school_id: 5, grade_level: "7th Grade", created_at: "2024-02-01" },
  { id: 23, name: "8th Grade A", school_id: 5, grade_level: "8th Grade", created_at: "2024-02-01" },
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
  
  // Teachers
  {
    id: 10,
    name: "Michael Johnson",
    email: "michael@greenhill.edu",
    username: "michael.j",
    password: "teacher123",
    role: "teacher",
    school_ids: [1, 2],
    class_ids: [1, 2, 6]
  },
  {
    id: 11,
    name: "Sarah Wilson",
    email: "sarah@brightfuture.edu",
    username: "sarah.w",
    password: "teacher456",
    role: "teacher",
    school_ids: [2],
    class_ids: [7, 8]
  },
  {
    id: 12,
    name: "David Thompson",
    email: "david@greenhill.edu",
    username: "david.t",
    password: "teacher789",
    role: "teacher",
    school_ids: [1],
    class_ids: [3, 4, 5]
  },
  {
    id: 13,
    name: "Emma Rodriguez",
    email: "emma@excellence.edu",
    username: "emma.r",
    password: "teacher321",
    role: "teacher",
    school_ids: [3],
    class_ids: [11, 12]
  },
  {
    id: 14,
    name: "James Lee",
    email: "james@riverside.edu",
    username: "james.l",
    password: "teacher654",
    role: "teacher",
    school_ids: [4],
    class_ids: [16, 17]
  },
  {
    id: 15,
    name: "Mary Johnson",
    email: "mary@mountainview.edu",
    username: "mary.j",
    password: "teacher987",
    role: "teacher",
    school_ids: [5],
    class_ids: [20, 21]
  },
  
  // Students
  {
    id: 31,
    name: "David Brown",
    email: "david@greenhill.edu",
    username: "david.b",
    password: "student123",
    role: "student",
    school_ids: [1],
    class_ids: [1]
  },
  {
    id: 32,
    name: "Emily Davis",
    email: "emily@brightfuture.edu",
    username: "emily.d",
    password: "student456",
    role: "student",
    school_ids: [2],
    class_ids: [6]
  },
  {
    id: 33,
    name: "Alex Johnson",
    email: "alex@greenhill.edu",
    username: "alex.j",
    password: "student789",
    role: "student",
    school_ids: [1],
    class_ids: [2]
  },
  {
    id: 34,
    name: "Sophia Martinez",
    email: "sophia@brightfuture.edu",
    username: "sophia.m",
    password: "student321",
    role: "student",
    school_ids: [2],
    class_ids: [7]
  },
  {
    id: 35,
    name: "Ethan Wilson",
    email: "ethan@excellence.edu",
    username: "ethan.w",
    password: "student654",
    role: "student",
    school_ids: [3],
    class_ids: [11]
  },
  {
    id: 36,
    name: "Isabella Garcia",
    email: "isabella@riverside.edu",
    username: "isabella.g",
    password: "student987",
    role: "student",
    school_ids: [4],
    class_ids: [16]
  },
  {
    id: 37,
    name: "Mason Anderson",
    email: "mason@mountainview.edu",
    username: "mason.a",
    password: "student147",
    role: "student",
    school_ids: [5],
    class_ids: [20]
  },
  {
    id: 38,
    name: "Olivia Taylor",
    email: "olivia@greenhill.edu",
    username: "olivia.t",
    password: "student258",
    role: "student",
    school_ids: [1],
    class_ids: [3]
  },
  {
    id: 39,
    name: "Jacob Thomas",
    email: "jacob@brightfuture.edu",
    username: "jacob.t",
    password: "student369",
    role: "student",
    school_ids: [2],
    class_ids: [8]
  },
  {
    id: 40,
    name: "Ava Jackson",
    email: "ava@excellence.edu",
    username: "ava.j",
    password: "student741",
    role: "student",
    school_ids: [3],
    class_ids: [12]
  },
  {
    id: 41,
    name: "William White",
    email: "william.w@riverside.edu",
    username: "william.w",
    password: "student852",
    role: "student",
    school_ids: [4],
    class_ids: [17]
  },
  {
    id: 42,
    name: "Mia Harris",
    email: "mia@mountainview.edu",
    username: "mia.h",
    password: "student963",
    role: "student",
    school_ids: [5],
    class_ids: [21]
  },
  {
    id: 43,
    name: "Benjamin Clark",
    email: "benjamin@greenhill.edu",
    username: "benjamin.c",
    password: "student159",
    role: "student",
    school_ids: [1],
    class_ids: [4]
  },
  {
    id: 44,
    name: "Charlotte Lewis",
    email: "charlotte@brightfuture.edu",
    username: "charlotte.l",
    password: "student357",
    role: "student",
    school_ids: [2],
    class_ids: [9]
  },
  {
    id: 45,
    name: "Lucas Robinson",
    email: "lucas@excellence.edu",
    username: "lucas.r",
    password: "student468",
    role: "student",
    school_ids: [3],
    class_ids: [13]
  }
];

export const courses: Course[] = [
  // Green Hill School (ID: 1)
  {
    id: 1,
    name: "Mathematics 101",
    description: "Introduction to basic mathematics concepts including arithmetic, basic algebra, and problem-solving techniques. This course builds foundational skills essential for advanced mathematical studies.",
    school_id: 1,
    teacher_id: 10,
    class_ids: [1, 2],
    created_at: "2024-01-20"
  },
  {
    id: 2,
    name: "English Literature",
    description: "Classical and modern literature analysis covering poetry, prose, and drama. Students will develop critical thinking and analytical writing skills through comprehensive study of literary works.",
    school_id: 1,
    teacher_id: 10,
    class_ids: [3, 4],
    created_at: "2024-03-01"
  },
  {
    id: 3,
    name: "History of World Civilizations",
    description: "Comprehensive study of world history from ancient civilizations to modern times. Explores cultural, political, and social developments that shaped human civilization.",
    school_id: 1,
    teacher_id: 12,
    class_ids: [4, 5],
    created_at: "2024-01-25"
  },
  {
    id: 4,
    name: "Physical Science",
    description: "Introduction to physics and chemistry concepts with hands-on laboratory experiences. Covers matter, energy, motion, and basic chemical reactions.",
    school_id: 1,
    teacher_id: 12,
    class_ids: [5],
    created_at: "2024-02-10"
  },
  
  // Bright Future Academy (ID: 2)
  {
    id: 5,
    name: "Biology Fundamentals",
    description: "Basic principles of biology and life sciences including cell structure, genetics, ecology, and human anatomy. Laboratory work enhances theoretical understanding.",
    school_id: 2,
    teacher_id: 11,
    class_ids: [6, 7],
    created_at: "2024-02-15"
  },
  {
    id: 6,
    name: "Chemistry Basics",
    description: "Introduction to chemical principles including atomic structure, chemical bonding, reactions, and stoichiometry. Emphasis on practical applications and safety.",
    school_id: 2,
    teacher_id: 10,
    class_ids: [8, 9],
    created_at: "2024-03-15"
  },
  {
    id: 7,
    name: "Advanced Mathematics",
    description: "Algebra II and Trigonometry covering quadratic functions, exponential and logarithmic functions, and trigonometric identities. Prepares students for calculus.",
    school_id: 2,
    teacher_id: 11,
    class_ids: [9, 10],
    created_at: "2024-02-20"
  },
  
  // Excellence High School (ID: 3)
  {
    id: 8,
    name: "AP Calculus",
    description: "Advanced Placement Calculus AB covering limits, derivatives, integrals, and applications. Prepares students for college-level mathematics and AP examination.",
    school_id: 3,
    teacher_id: 13,
    class_ids: [14, 15],
    created_at: "2024-03-12"
  },
  {
    id: 9,
    name: "World Languages: Spanish",
    description: "Spanish language and culture study focusing on communication skills, grammar, vocabulary, and cultural understanding of Spanish-speaking countries.",
    school_id: 3,
    teacher_id: 13,
    class_ids: [11, 12, 13],
    created_at: "2024-03-18"
  },
  
  // Riverside Elementary (ID: 4)
  {
    id: 10,
    name: "Elementary Math",
    description: "Basic arithmetic and problem solving for young learners. Covers counting, addition, subtraction, multiplication, division, and introduction to fractions.",
    school_id: 4,
    teacher_id: 14,
    class_ids: [16, 17, 18],
    created_at: "2024-01-10"
  },
  {
    id: 11,
    name: "Reading Comprehension",
    description: "Developing reading skills and vocabulary through age-appropriate literature. Focus on phonics, sight words, and comprehension strategies.",
    school_id: 4,
    teacher_id: 14,
    class_ids: [18, 19],
    created_at: "2024-01-12"
  },
  
  // Mountain View Middle School (ID: 5)
  {
    id: 12,
    name: "Pre-Algebra",
    description: "Preparation for high school algebra covering integers, rational numbers, basic equations, and introduction to algebraic thinking.",
    school_id: 5,
    teacher_id: 15,
    class_ids: [22, 23],
    created_at: "2024-02-01"
  },
  {
    id: 13,
    name: "Earth Science",
    description: "Geology, meteorology, and environmental science. Students explore Earth's systems, weather patterns, and environmental challenges.",
    school_id: 5,
    teacher_id: 15,
    class_ids: [20, 21],
    created_at: "2024-02-03"
  }
];

export const materials: Material[] = [
  // Materials for Green Hill School courses
  {
    id: 1,
    title: "Algebra Fundamentals",
    description: "Complete guide to algebraic expressions and basic equation solving techniques",
    file_type: "pdf",
    file_url: "/materials/algebra.pdf",
    course_id: 1,
    uploaded_by: 10,
    created_at: "2024-01-25"
  },
  {
    id: 2,
    title: "Quadratic Equations Workbook",
    description: "Practice problems for quadratic equations with step-by-step solutions",
    file_type: "pdf",
    file_url: "/materials/quadratic-workbook.pdf",
    course_id: 1,
    uploaded_by: 10,
    created_at: "2024-02-01"
  },
  {
    id: 3,
    title: "Mathematics Video Lecture Series",
    description: "Comprehensive video tutorials covering all mathematics fundamentals",
    file_type: "video",
    file_url: "/materials/math-lectures.mp4",
    course_id: 1,
    uploaded_by: 10,
    created_at: "2024-02-05"
  },
  {
    id: 4,
    title: "Shakespeare Analysis",
    description: "Study guide for Hamlet with character analysis and themes",
    file_type: "document",
    file_url: "/materials/hamlet-analysis.docx",
    course_id: 2,
    uploaded_by: 10,
    created_at: "2024-03-05"
  },
  {
    id: 5,
    title: "Poetry Interpretation Guide",
    description: "Understanding metaphors, symbolism, and literary devices in poetry",
    file_type: "pdf",
    file_url: "/materials/poetry-guide.pdf",
    course_id: 2,
    uploaded_by: 10,
    created_at: "2024-03-10"
  },
  {
    id: 6,
    title: "Ancient Civilizations Timeline",
    description: "Interactive timeline of major civilizations and their contributions",
    file_type: "pdf",
    file_url: "/materials/ancient-timeline.pdf",
    course_id: 3,
    uploaded_by: 12,
    created_at: "2024-02-01"
  },
  {
    id: 7,
    title: "World War II Documentary",
    description: "Educational video on WWII events and their global impact",
    file_type: "video",
    file_url: "/materials/wwii-documentary.mp4",
    course_id: 3,
    uploaded_by: 12,
    created_at: "2024-02-15"
  },
  {
    id: 8,
    title: "Physics Lab Manual",
    description: "Laboratory experiments and procedures for physical science",
    file_type: "pdf",
    file_url: "/materials/physics-lab.pdf",
    course_id: 4,
    uploaded_by: 12,
    created_at: "2024-02-20"
  },
  
  // Materials for Bright Future Academy courses
  {
    id: 9,
    title: "Cell Structure Diagrams",
    description: "Detailed diagrams of plant and animal cells with labeled components",
    file_type: "pdf",
    file_url: "/materials/cell-structure.pdf",
    course_id: 5,
    uploaded_by: 11,
    created_at: "2024-02-20"
  },
  {
    id: 10,
    title: "Genetics Video Series",
    description: "Video explanations of DNA, RNA, and inheritance patterns",
    file_type: "video",
    file_url: "/materials/genetics-videos.mp4",
    course_id: 5,
    uploaded_by: 11,
    created_at: "2024-02-25"
  },
  {
    id: 11,
    title: "Chemical Reactions Workbook",
    description: "Practice problems for balancing equations and reaction types",
    file_type: "pdf",
    file_url: "/materials/chemistry-workbook.pdf",
    course_id: 6,
    uploaded_by: 10,
    created_at: "2024-03-20"
  },
  {
    id: 12,
    title: "Trigonometry Reference Sheet",
    description: "Essential trigonometric identities and formulas",
    file_type: "pdf",
    file_url: "/materials/trig-reference.pdf",
    course_id: 7,
    uploaded_by: 11,
    created_at: "2024-03-01"
  },
  
  // Materials for Excellence High School courses
  {
    id: 13,
    title: "Calculus Problem Sets",
    description: "Advanced calculus problems with detailed solutions",
    file_type: "pdf",
    file_url: "/materials/calculus-problems.pdf",
    course_id: 8,
    uploaded_by: 13,
    created_at: "2024-03-15"
  },
  {
    id: 14,
    title: "Spanish Conversation Practice",
    description: "Audio files for Spanish pronunciation and conversation practice",
    file_type: "video",
    file_url: "/materials/spanish-conversation.mp4",
    course_id: 9,
    uploaded_by: 13,
    created_at: "2024-03-20"
  },
  
  // Materials for Riverside Elementary courses
  {
    id: 15,
    title: "Counting and Numbers Workbook",
    description: "Fun exercises for learning numbers and basic counting",
    file_type: "pdf",
    file_url: "/materials/counting-workbook.pdf",
    course_id: 10,
    uploaded_by: 14,
    created_at: "2024-01-15"
  },
  {
    id: 16,
    title: "Phonics Learning Videos",
    description: "Interactive videos for learning letter sounds and phonics",
    file_type: "video",
    file_url: "/materials/phonics-videos.mp4",
    course_id: 11,
    uploaded_by: 14,
    created_at: "2024-01-20"
  },
  
  // Materials for Mountain View Middle School courses
  {
    id: 17,
    title: "Pre-Algebra Study Guide",
    description: "Comprehensive guide to pre-algebra concepts and problem solving",
    file_type: "pdf",
    file_url: "/materials/pre-algebra-guide.pdf",
    course_id: 12,
    uploaded_by: 15,
    created_at: "2024-02-05"
  },
  {
    id: 18,
    title: "Earth Science Lab Activities",
    description: "Hands-on activities for exploring Earth's systems and processes",
    file_type: "document",
    file_url: "/materials/earth-science-labs.docx",
    course_id: 13,
    uploaded_by: 15,
    created_at: "2024-02-10"
  }
]