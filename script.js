document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Setting up J&K Career Education system...');

    // --- DATA ---
    const timelineData = [{
        type: 'Competitive Exam Application',
        title: 'JEE Main 2026 Application',
        date: 'Nov 15 - Dec 20, 2025',
        status: 'upcoming',
        description: 'Joint Entrance Examination for Engineering Admissions',
        icon: '📝',
        urgency: 'high'
    }, {
        type: 'Competitive Exam Conduction',
        title: 'JEE Main 2026 Exam',
        date: 'Jan 28 - Feb 5, 2026',
        status: 'upcoming',
        description: 'National level engineering entrance examination',
        icon: '📖',
        urgency: 'high'
    }, {
        type: 'College Application',
        title: 'J&K College Applications',
        date: 'Mar 1 - Apr 15, 2026',
        status: 'upcoming',
        description: 'State college admission application period',
        icon: '🏛️',
        urgency: 'medium'
    }, {
        type: 'Entrance Exam',
        title: 'State Entrance Exam',
        date: 'Apr 20 - May 10, 2026',
        status: 'upcoming',
        description: 'J&K State entrance examination for various courses',
        icon: '🎯',
        urgency: 'medium'
    }];
    const studentMatches = {
        'Science': [{
            name: 'Arjun Sharma',
            initials: 'AS',
            location: 'Jammu',
            course: 'B.Sc. Physics',
            match: '95%',
            online: true,
            college: 'Govt. Degree College Jammu',
            interests: ['Research', 'Quantum Physics']
        }, {
            name: 'Priya Koul',
            initials: 'PK',
            location: 'Srinagar',
            course: 'B.Sc. Chemistry',
            match: '92%',
            online: false,
            college: 'Kashmir University',
            interests: ['Lab Work', 'Organic Chemistry']
        }, ],
        'Arts': [{
            name: 'Aanand Kumar',
            initials: 'AK',
            location: 'Srinagar',
            course: 'B.A. History',
            match: '96%',
            online: true,
            college: 'Kashmir University',
            interests: ['Ancient History', 'Archaeology']
        }, ],
        'Commerce': [{
            name: 'Rajesh Verma',
            initials: 'RV',
            location: 'Jammu',
            course: 'B.Com.',
            match: '94%',
            online: true,
            college: 'Govt. Commerce College',
            interests: ['Accounting', 'Taxation']
        }, ],
        'Engineering': [{
            name: 'Karan Thakur',
            initials: 'KT',
            location: 'Jammu',
            course: 'B.Tech CSE',
            match: '97%',
            online: true,
            college: 'IIT Jammu',
            interests: ['AI/ML', 'Software Development']
        }, ]
    };
    const questions = [{
        q: "I enjoy solving logical puzzles and complex problems that require analytical thinking.",
        options: [{
            text: "Strongly agree",
            values: {
                science: 3,
                engineering: 2
            }
        }, {
            text: "Agree",
            values: {
                science: 2,
                engineering: 1
            }
        }, {
            text: "Neutral",
            values: {
                science: 1
            }
        }, {
            text: "Disagree",
            values: {
                science: 0
            }
        }, ]
    }, {
        q: "I am creative and enjoy expressing myself through writing, art, or cultural activities.",
        options: [{
            text: "Strongly agree",
            values: {
                arts: 3
            }
        }, {
            text: "Agree",
            values: {
                arts: 2
            }
        }, {
            text: "Neutral",
            values: {
                arts: 1
            }
        }, {
            text: "Disagree",
            values: {
                arts: 0
            }
        }, ]
    }, {
        q: "I am fascinated by business operations, economics, and financial markets.",
        options: [{
            text: "Strongly agree",
            values: {
                commerce: 3
            }
        }, {
            text: "Agree",
            values: {
                commerce: 2
            }
        }, {
            text: "Neutral",
            values: {
                commerce: 1
            }
        }, {
            text: "Disagree",
            values: {
                commerce: 0
            }
        }, ]
    }, {
        q: "I am curious about scientific discoveries, experiments, and research methodologies.",
        options: [{
            text: "Strongly agree",
            values: {
                science: 3,
                engineering: 1
            }
        }, {
            text: "Agree",
            values: {
                science: 2,
                engineering: 1
            }
        }, {
            text: "Neutral",
            values: {
                science: 1
            }
        }, {
            text: "Disagree",
            values: {
                science: 0
            }
        }, ]
    }, {
        q: "I enjoy reading about history, sociology, politics, and human behavior patterns.",
        options: [{
            text: "Strongly agree",
            values: {
                arts: 3
            }
        }, {
            text: "Agree",
            values: {
                arts: 2
            }
        }, {
            text: "Neutral",
            values: {
                arts: 1
            }
        }, {
            text: "Disagree",
            values: {
                arts: 0
            }
        }, ]
    }, {
        q: "I am good with numbers, enjoy financial planning, and understanding market trends.",
        options: [{
            text: "Strongly agree",
            values: {
                commerce: 3
            }
        }, {
            text: "Agree",
            values: {
                commerce: 2
            }
        }, {
            text: "Neutral",
            values: {
                commerce: 1
            }
        }, {
            text: "Disagree",
            values: {
                commerce: 0
            }
        }, ]
    }, {
        q: "I like building things, understanding how machines work, and creating technical solutions.",
        options: [{
            text: "Strongly agree",
            values: {
                engineering: 3,
                science: 1
            }
        }, {
            text: "Agree",
            values: {
                engineering: 2
            }
        }, {
            text: "Neutral",
            values: {
                engineering: 1
            }
        }, {
            text: "Disagree",
            values: {
                engineering: 0
            }
        }, ]
    }, {
        q: "I am interested in technology, computer programming, and digital innovation.",
        options: [{
            text: "Strongly agree",
            values: {
                engineering: 3,
                science: 2
            }
        }, {
            text: "Agree",
            values: {
                engineering: 2,
                science: 1
            }
        }, {
            text: "Neutral",
            values: {
                engineering: 1
            }
        }, {
            text: "Disagree",
            values: {
                engineering: 0
            }
        }, ]
    }, ];
    const collegeData = [{
        name: 'IIT Jammu',
        stream: 'Engineering',
        courses: ['B.Tech (CSE)', 'B.Tech (EE)', 'B.Tech (ME)', 'B.Tech (CE)', 'B.Tech (Chemical)'],
        location: 'Jammu',
        description: 'Premier engineering institute with world-class faculty and research facilities. Highest package of ₹53 LPA in 2025. Top choice for engineering aspirants with state-of-the-art laboratories and industry partnerships.',
        admissionRate: '1%',
        image: 'https://iitjammu.ac.in/highlights2021/images/pic21.jpg',
        growthData: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            enrollment: [280, 320, 360, 400, 440]
        }
    }, {
        name: 'NIT Srinagar',
        stream: 'Engineering',
        courses: ['B.Tech (CSE)', 'B.Tech (ECE)', 'B.Tech (EE)', 'B.Tech (ME)', 'B.Tech (CE)', 'B.Tech (IT)'],
        location: 'Srinagar',
        description: 'National Institute of Technology with excellent placement record and scenic campus. Average package ₹4.8 LPA with strong alumni network in tech industry and research organizations.',
        admissionRate: '8%',
        image: 'https://images.shiksha.com/mediadata/images/1550719851phpTttJh9.jpeg',
        growthData: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            enrollment: [450, 470, 480, 500, 510]
        }
    }, {
        name: 'SMVDU Katra',
        stream: 'Engineering',
        courses: ['B.Tech (CSE)', 'B.Tech (ECE)', 'B.Tech (ME)', 'B.Tech (Architecture)'],
        location: 'Katra',
        description: 'Shri Mata Vaishno Devi University offering quality engineering education in serene environment. Known for innovation, research excellence, and holistic development of students.',
        admissionRate: '12%',
        image: 'https://smvdu.ac.in/wp-content/uploads/2024/05/2024-Theme-3.png',
        growthData: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            enrollment: [300, 310, 330, 350, 360]
        }
    }, {
        name: 'Govt. Degree College, Jammu',
        stream: 'Science',
        courses: ['B.Sc. (Physics)', 'B.Sc. (Chemistry)', 'B.Sc. (Math)', 'B.Sc. (Biology)'],
        location: 'Jammu',
        description: 'Leading institution with strong focus on scientific research and academic excellence. Well-equipped laboratories, experienced faculty, and excellent track record in competitive exams.',
        admissionRate: '75%',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAuq4B53xql9GOKs_2aI04kd3gmywUywTvXb84sVyrou9N_hYB2i7UwT3jua8PwBRe1E&usqp=CAU',
        growthData: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            enrollment: [550, 580, 620, 650, 680]
        }
    }, {
        name: 'Govt. Degree College, Srinagar',
        stream: 'Arts',
        courses: ['B.A. (History)', 'B.A. (Sociology)', 'B.A. (Political Science)', 'B.A. (English)'],
        location: 'Srinagar',
        description: 'Prestigious college with rich academic heritage and vibrant environment for humanities. Hub for intellectual discussions, cultural events, and civil services preparation.',
        admissionRate: '80%',
        image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1539_GDCSRINAGAR_APP.jpg?h=260&w=360&mode=crop',
        growthData: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            enrollment: [480, 500, 510, 530, 540]
        }
    }, {
        name: 'Govt. College for Commerce, Jammu',
        stream: 'Commerce',
        courses: ['B.Com.', 'M.Com.', 'BBA'],
        location: 'Jammu',
        description: 'Specialized commerce college with strong foundation in accounting, finance, and trade. High placement rate in local businesses, banks, and financial institutions.',
        admissionRate: '82%',
        image: 'https://content.jdmagicbox.com/v2/comp/jammu/f1/9999px191.x191.140509170930.u1f1/catalogue/government-spmr-college-of-commerce-bakshi-nagar-jammu-colleges-HEVxmA3d5D-250.jpg',
        growthData: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            enrollment: [420, 440, 450, 460, 470]
        }
    }, ];
    const studyMaterials = {
        'Science': ['📚 Physics Class 12 NCERT', '🧪 Chemistry Class 12 NCERT', '🔬 Biology Class 12 NCERT', '📐 Mathematics Class 12 NCERT', '🧬 Laboratory Manuals & Practical Guides'],
        'Arts': ['📜 History of India (Class 12)', '👥 Sociology (Class 12)', '🏛️ Political Science (Class 12)', '📖 English Literature & Language', '🌍 Geography & Social Studies'],
        'Commerce': ['💼 Accountancy Class 12', '📊 Business Studies (Class 12)', '💰 Economics (Class 12)', '📈 Mathematics for Commerce', '🏦 Banking & Finance Fundamentals'],
        'Engineering': ['📘 JEE Main Preparation Books', '⚛️ Physics for JEE by HC Verma', '🔢 Mathematics by RD Sharma', '🧪 Chemistry by OP Tandon', '📝 Previous Year JEE Papers', '⚙️ Engineering Drawing Fundamentals', '💻 Programming & Computer Science Basics']
    };
    const streamData = {
        'Science': {
            title: 'Science Stream',
            description: 'The Science stream focuses on fundamental principles of the physical and natural world. It provides a strong foundation for research, innovation, and technical careers across various industries.',
            degreeCourses: ['B.Sc. (Physics)', 'B.Sc. (Chemistry)', 'B.Sc. (Mathematics)', 'B.Sc. (Biology)', 'B.Sc. (IT)'],
            careerMapping: {
                labels: ['Research Scientist', 'Medical Professional', 'Data Analyst', 'Lab Technician'],
                scores: [90, 85, 80, 75]
            },
            courseScope: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                data: [{
                    name: 'Research Jobs',
                    values: [75, 78, 82, 85, 88]
                }, {
                    name: 'Medical Field',
                    values: [70, 72, 78, 85, 90]
                }]
            },
            courseDetails: ['🔬 B.Sc. (Physics): Study of fundamental laws governing the universe. Opens doors to research, teaching, and high-tech industries.', '🧪 B.Sc. (Chemistry): Exploration of matter and its transformations. Career paths in pharmaceuticals, R&D, and chemical industries.', '📐 B.Sc. (Mathematics): The language of science and logic. Essential for data science, finance, actuarial science, and software development.']
        },
        'Arts': {
            title: 'Arts & Humanities Stream',
            description: 'The Arts stream encompasses humanities and social sciences, developing critical thinking, communication skills, and cultural understanding essential for leadership roles in society.',
            degreeCourses: ['B.A. (History)', 'B.A. (Political Science)', 'B.A. (Sociology)', 'B.A. (English)', 'B.A. (Economics)'],
            careerMapping: {
                labels: ['Civil Services', 'Journalism & Media', 'Legal Profession', 'Education & Research'],
                scores: [95, 85, 80, 75]
            },
            courseScope: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                data: [{
                    name: 'Civil Services',
                    values: [65, 68, 72, 75, 78]
                }, {
                    name: 'Media & Journalism',
                    values: [60, 65, 70, 75, 80]
                }]
            },
            courseDetails: ['📜 B.A. (History): Study of human civilization and cultural evolution. Excellent preparation for civil services, research, and cultural preservation.', '👥 B.A. (Sociology): Understanding society, social behavior, and community dynamics. Ideal for social work, policy-making, and development sectors.', '🏛️ B.A. (Political Science): Analysis of governance, political systems, and public policy. Essential for civil services, journalism, and public administration.']
        },
        'Commerce': {
            title: 'Commerce & Business Stream',
            description: 'The Commerce stream provides comprehensive knowledge of business operations, financial management, and economic principles, preparing students for the dynamic business world.',
            degreeCourses: ['B.Com.', 'B.B.A.', 'B.C.A.', 'M.Com.'],
            careerMapping: {
                labels: ['Chartered Accountant', 'Financial Analyst', 'Business Manager', 'Entrepreneur'],
                scores: [95, 90, 85, 80]
            },
            courseScope: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                data: [{
                    name: 'Accounting & Finance',
                    values: [82, 85, 88, 90, 93]
                }, {
                    name: 'Business Management',
                    values: [75, 78, 82, 85, 88]
                }]
            },
            courseDetails: ['💼 B.Com.: Comprehensive business education covering accounting, finance, and taxation. Gateway to CA, CS, and CMA certifications.', '📊 B.B.A.: Focus on business administration and management principles. Excellent foundation for MBA and corporate leadership roles.', '📈 M.Com.: Advanced commerce degree for specialized knowledge in finance, accounting, and business research.']
        },
        'Engineering': {
            title: 'Engineering & Technology Stream',
            description: 'Professional engineering programs combining theoretical knowledge with practical application. Engineering offers diverse specializations with excellent career prospects in technology and innovation.',
            degreeCourses: ['B.Tech (CSE)', 'B.Tech (ECE)', 'B.Tech (Mechanical)', 'B.Tech (Civil)', 'B.Tech (Electrical)'],
            careerMapping: {
                labels: ['Software Engineer', 'Data Scientist', 'Product Manager', 'Research Engineer'],
                scores: [98, 95, 90, 85]
            },
            courseScope: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                data: [{
                    name: 'Software Engineering',
                    values: [90, 93, 95, 97, 99]
                }, {
                    name: 'Core Engineering',
                    values: [82, 85, 88, 90, 92]
                }]
            },
            courseDetails: ['💻 B.Tech (CSE): Computer Science Engineering with focus on software development, AI, and system design. Highest demand in IT industry with global opportunities.', '📡 B.Tech (ECE): Electronics & Communication Engineering covering digital systems, telecommunications, and signal processing. Core engineering with diverse applications.', '⚙️ B.Tech (Mechanical): Traditional engineering branch dealing with machines, manufacturing, and energy systems. Opportunities in automotive, aerospace, and manufacturing industries.']
        }
    };
    const seniorStudents = [{
        name: 'Aarav Sharma',
        field: 'Engineering',
        year: 'Final Year',
        email: 'aarav@example.com'
    }, {
        name: 'Meera Patel',
        field: 'Medicine',
        year: '3rd Year',
        email: 'meera@example.com'
    }, {
        name: 'Aditya Singh',
        field: 'Commerce',
        year: 'Final Year',
        email: 'aditya@example.com'
    }];
    const facultyMentors = [{
        name: 'Prof. Anil Verma',
        subject: 'Physics',
        college: 'Govt. Science College',
        email: 'anil@example.com'
    }, {
        name: 'Dr. Kavita Nair',
        subject: 'Psychology',
        college: 'Govt. Arts College',
        email: 'kavita@example.com'
    }, {
        name: 'Prof. Ramesh Gupta',
        subject: 'Computer Science',
        college: 'Govt. Engineering College',
        email: 'ramesh@example.com'
    }];
    const counsellors = [{
        name: 'Ms. Priya Mehta',
        expertise: 'Mental Health & Career Guidance',
        email: 'priya@example.com'
    }, {
        name: 'Dr. Sneha Iyer',
        expertise: 'Women\'s Safety & Counselling',
        email: 'sneha@example.com'
    }];
    const allCourses = Array.from(new Set(collegeData.flatMap(c => c.courses))).sort();
    const coursesByStream = {};
    collegeData.forEach(college => {
        if (!coursesByStream[college.stream]) {
            coursesByStream[college.stream] = new Set();
        }
        college.courses.forEach(course => coursesByStream[college.stream].add(course));
    });


    // --- DOM ELEMENTS ---
    const authSection = document.getElementById('auth-section');
    const mainContent = document.getElementById('main-content');
    
    const heroSection = document.getElementById('hero');
    const startJourneyBtn = document.getElementById('start-journey-btn');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const toggleLink = document.getElementById('toggle-auth-link');
    const dividerText = document.getElementById('divider-text');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const navLinksContainer = document.getElementById('nav-links');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const nextButton = document.getElementById('next-button');
    const resultsButton = document.getElementById('results-button');
    const quizSection = document.getElementById('quiz-section');
    const quizCompleteSection = document.getElementById('quiz-complete');
    const streamResultDiv = document.getElementById('stream-result');
    const recommendedCollegesList = document.getElementById('recommended-colleges-list');
    const studyMaterialsList = document.getElementById('study-materials-list');
    const homeStream = document.getElementById('home-stream');
    const homeCourse = document.getElementById('home-course');
    const homeCollege = document.getElementById('home-college');
    const streamFilter = document.getElementById('stream-filter');
    const courseFilter = document.getElementById('course-filter');
    const collegeList = document.getElementById('college-list');
    const noResults = document.getElementById('no-results');
    const collegeModal = document.getElementById('college-modal');
    const closeModalButton = collegeModal.querySelector('#close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalStream = document.getElementById('modal-stream');
    const modalCourses = document.getElementById('modal-courses');
    const modalLocation = document.getElementById('modal-location');
    const modalAdmissionRate = document.getElementById('modal-admission-rate');
    const collegeGrowthChartCanvas = document.getElementById('collegeGrowthChart');
    const streamTitle = document.getElementById('stream-title');
    const streamDescription = document.getElementById('stream-description');
    const courseDetails = document.getElementById('course-details');
    const matchesModal = document.getElementById('matches-modal');
    const closeMatchesModalButton = document.getElementById('close-matches-modal');
    const matchesContainer = document.getElementById('matches-container');
    const matchesCount = document.getElementById('matches-count');
    const timelineContainer = document.getElementById('timeline-container');
    const timelineIndicator = document.getElementById('timeline-indicator');
    const timelinePrev = document.getElementById('timeline-prev');
    const timelineNext = document.getElementById('timeline-next');
    const timelineCounter = document.getElementById('timeline-counter');
    const timelineProgress = document.getElementById('timeline-progress');
    const toggleDashboardBtn = document.getElementById('toggleDashboardBtn');
    const dashboard = document.getElementById('dashboard');
    const contactModal = document.getElementById('contact-modal');
    const contactModalTitle = contactModal.querySelector('#modal-title');
    const contactModalContent = contactModal.querySelector('#modal-content');
    const closeContactModalBtn = contactModal.querySelector('#close-modal');
    const confirmContactBtn = contactModal.querySelector('#confirm-contact');
    const appDownloadBtn = document.getElementById('app-download-btn');
    const chatbotLegacyBtn = document.getElementById('chatbot-button'); // Legacy button

    // Gemini Chatbot DOM Elements
    const chatContainer = document.getElementById('chatgpt-container');
    const messagesContainer = document.getElementById('chatgpt-messages');
    const inputField = document.getElementById('chatgpt-input');
    const sendButton = document.getElementById('chatgpt-send');
    const toggleButton = document.getElementById('chatgpt-toggle');
    const closeButton = document.getElementById('close-chat');
    const typingIndicator = document.getElementById('typing-indicator');
    const quickSuggestions = document.getElementById('quick-suggestions');


    // --- STATE VARIABLES ---
    let isLoginMode = true;
    let users = JSON.parse(localStorage.getItem('j-and-k-career-users')) || {};
    let currentUser = JSON.parse(sessionStorage.getItem('j-and-k-current-user')) || null;
    let currentQuestion = 0;
    let scienceScore = 0,
        artsScore = 0,
        commerceScore = 0,
        engineeringScore = 0;
    let selectedOption = null;
    let careerChartInstance, careerMappingChartInstance, courseScopeChartInstance, collegeGrowthChartInstance;
    let currentTimelineIndex = 0;
    const itemsPerPage = 2;
    let timelineInterval = null;
    let dashboardChartsInitialized = false;

    // --- CORE NAVIGATION FUNCTION ---
    function showPage(pageId) {
        console.log(`Attempting to show page: ${pageId}`);
        document.querySelectorAll('#main-content > section').forEach(section => {
            section.classList.add('hidden');
        });
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            console.log(`Successfully displayed page: ${pageId}`);
        } else {
            console.error(`Page with ID "${pageId}" not found.`);
        }
    }


    // --- AUTHENTICATION ---
    if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (heroSection) heroSection.style.display = 'none';
            if (authSection) authSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    if (toggleLink) {
        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            isLoginMode = !isLoginMode;
            if (isLoginMode) {
                signupContainer.classList.add('hidden');
                loginContainer.classList.remove('hidden');
                toggleLink.textContent = 'Create New Account';
                dividerText.textContent = 'New User?';
            } else {
                loginContainer.classList.add('hidden');
                signupContainer.classList.remove('hidden');
                toggleLink.textContent = 'Already have an account? Sign In';
                dividerText.textContent = 'Existing User?';
            }
        });
    }

    function handleLoginSuccess(user) {
        currentUser = user;
        sessionStorage.setItem('j-and-k-current-user', JSON.stringify(currentUser));
        showSuccess('login-success-message', 'Authenticating...');
        setTimeout(() => {
            if (authSection) authSection.style.display = 'none';
            if (mainContent) mainContent.classList.remove('hidden');
            initializeApp();
        }, 1500);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value;
            if (!username || !password) {
                showError('login-general-error', 'Please enter both username and password.');
                return;
            }
            if (users[username] && users[username].password === password) {
                handleLoginSuccess(users[username]);
            } else {
                showError('login-general-error', 'Invalid username or password.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('signup-username').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const phone = document.getElementById('phone').value.trim();
            const dob = document.getElementById('dob').value;
            const location = document.getElementById('location').value;
            const academicInterest = document.getElementById('academic-interest').value;
            let isValid = true;
            if (users[username]) {
                showError('signup-username-error', 'Username already taken.');
                isValid = false;
            }
            if (password.length < 6) {
                showError('password-error', 'Password must be at least 6 characters.');
                isValid = false;
            }
            if (password !== confirmPassword) {
                showError('confirm-password-error', 'Passwords do not match.');
                isValid = false;
            }
            if (!/^\d{10}$/.test(phone)) {
                showError('phone-error', 'Please enter a valid 10-digit phone number.');
                isValid = false;
            }
            if (!location) {
                showError('location-error', 'Please select your district.');
                isValid = false;
            }
            if (!academicInterest) {
                showError('academic-interest-error', 'Please select your academic interest.');
                isValid = false;
            }
            if (!isValid) {
                showError('signup-general-error', 'Please fix the errors above.');
                return;
            }
            const newUser = {
                name,
                email,
                username,
                password,
                phone,
                dob,
                location,
                academicInterest,
                stream: null
            };
            users[username] = newUser;
            localStorage.setItem('j-and-k-career-users', JSON.stringify(users));
            showSuccess('signup-success-message', 'Account created successfully! Please sign in.');
            setTimeout(() => {
                if (toggleLink) toggleLink.click();
                signupForm.reset();
            }, 2000);
        });
    }

    function showError(elementId, message) {
        const el = document.getElementById(elementId);
        if (el) {
            el.textContent = message;
            el.style.display = 'block';
        }
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
            el.textContent = '';
        });
    }


    // --- PAGE-SPECIFIC INITIALIZERS & RENDERERS ---

    function renderQuestion() {
        if (currentQuestion >= questions.length) {
            quizSection.classList.add('hidden');
            quizCompleteSection.classList.remove('hidden');
            return;
        }
        const q = questions[currentQuestion];
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        if (questionText) questionText.textContent = q.q;
        if (optionsContainer) optionsContainer.innerHTML = '';
        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'w-full py-4 px-6 border-2 border-gray-200 rounded-lg text-left hover:border-blue-300 hover:bg-blue-50 transition-all';
            button.textContent = option.text;
            button.onclick = () => selectOption(button, option.values);
            optionsContainer.appendChild(button);
        });
        if (nextButton) nextButton.disabled = true;
        selectedOption = null;
    }

    function selectOption(button, values) {
        document.querySelectorAll('#options-container button').forEach(btn => {
            btn.classList.remove('border-blue-500', 'bg-blue-100');
        });
        button.classList.add('border-blue-500', 'bg-blue-100');
        selectedOption = values;
        if (nextButton) nextButton.disabled = false;
    }

    function displayFinalResults() {
        const scores = {
            'Science': scienceScore,
            'Arts': artsScore,
            'Commerce': commerceScore,
            'Engineering': engineeringScore
        };
        const recommendedStream = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        currentUser.stream = recommendedStream;
        updateProfilePage(recommendedStream, currentUser.location);
        updateHomePage();
        showPage('profile');
    }

    function updateProfilePage(stream, location) {
        if (streamResultDiv) {
            streamResultDiv.innerHTML = `
            <div class="text-center p-6">
                <div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-3xl">${stream === 'Science' ? '🔬' : stream === 'Arts' ? '📚' : stream === 'Commerce' ? '💼' : '⚙️'}</span>
                </div>
                <h3 class="text-3xl font-bold text-blue-800 mb-4">${stream}</h3>
            </div>`;
        }
        renderRecommendedColleges(stream, location);
        renderStudyMaterials(stream);
        renderCareerChart(stream);
    }

    function renderCareerChart(stream) {
        const careerCtx = document.getElementById('careerChart')?.getContext('2d');
        if (!careerCtx) return;
        if (careerChartInstance) careerChartInstance.destroy();
        careerChartInstance = new Chart(careerCtx, {
            type: 'doughnut',
            data: {
                labels: streamData[stream].careerMapping.labels,
                datasets: [{
                    data: streamData[stream].careerMapping.scores,
                    backgroundColor: ['#0066cc', '#ff6600', '#006630', '#ffaa00']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }


    function renderRecommendedColleges(stream, location) {
        if (!recommendedCollegesList) return;
        recommendedCollegesList.innerHTML = '';
        const filtered = collegeData.filter(c => c.stream === stream).slice(0, 4);
        filtered.forEach(college => {
            const card = document.createElement('div');
            card.className = "official-card p-6";
            card.innerHTML = `<img src="${college.image}" alt="${college.name}" class="college-image mb-4">
                              <h3 class="text-xl font-bold text-blue-800">${college.name}</h3>`;
            recommendedCollegesList.appendChild(card);
        });
    }

    function renderStudyMaterials(stream) {
        if (!studyMaterialsList) return;
        studyMaterialsList.innerHTML = '';
        (studyMaterials[stream] || []).forEach(material => {
            const li = document.createElement('li');
            li.className = "flex items-center space-x-3 p-3 bg-blue-50 rounded-lg";
            li.innerHTML = `<span>${material}</span>`;
            studyMaterialsList.appendChild(li);
        });
    }

    function updateHomePage() {
        if (currentUser && currentUser.stream) {
            if (homeStream) homeStream.textContent = currentUser.stream;
            const recCollege = collegeData.find(c => c.stream === currentUser.stream);
            if (recCollege) {
                if (homeCourse) homeCourse.textContent = recCollege.courses[0];
                if (homeCollege) homeCollege.textContent = recCollege.name;
            }
        }
    }

    function updateStreamsPage(stream) {
        if (streamTitle) streamTitle.textContent = streamData[stream].title;
        if (streamDescription) streamDescription.textContent = streamData[stream].description;
        if (courseDetails) courseDetails.innerHTML = streamData[stream].courseDetails.map(d => `<div class="p-4 bg-blue-50 rounded-lg">${d}</div>`).join('');

        const careerMappingCtx = document.getElementById('careerMappingChart')?.getContext('2d');
        if (careerMappingCtx) {
            if (careerMappingChartInstance) careerMappingChartInstance.destroy();
            careerMappingChartInstance = new Chart(careerMappingCtx, {
                type: 'bar',
                data: {
                    labels: streamData[stream].careerMapping.labels,
                    datasets: [{
                        label: 'Career Relevance',
                        data: streamData[stream].careerMapping.scores,
                        backgroundColor: '#0066cc'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }

        const courseScopeCtx = document.getElementById('courseScopeChart')?.getContext('2d');
        if (courseScopeCtx) {
            if (courseScopeChartInstance) courseScopeChartInstance.destroy();
            courseScopeChartInstance = new Chart(courseScopeCtx, {
                type: 'line',
                data: {
                    labels: streamData[stream].courseScope.labels,
                    datasets: streamData[stream].courseScope.data.map((d, i) => ({
                        label: d.name,
                        data: d.values,
                        borderColor: i === 0 ? '#0066cc' : '#ff6600',
                        fill: false
                    }))
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
    }


    function populateCourseFilter() {
        if (!streamFilter || !courseFilter) return;
        const selectedStream = streamFilter.value;
        const courses = selectedStream === 'All' ? allCourses : Array.from(coursesByStream[selectedStream] || []);
        courseFilter.innerHTML = `<option value="All">All Courses</option>`;
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course;
            option.textContent = course;
            courseFilter.appendChild(option);
        });
    }

    function filterColleges() {
        if (!collegeList || !streamFilter || !courseFilter) return;
        const selectedStream = streamFilter.value;
        const selectedCourse = courseFilter.value;
        collegeList.innerHTML = '';
        const filtered = collegeData.filter(c =>
            (selectedStream === 'All' || c.stream === selectedStream) &&
            (selectedCourse === 'All' || c.courses.includes(selectedCourse))
        );
        if (filtered.length > 0) {
            noResults.classList.add('hidden');
            filtered.forEach(college => {
                const card = document.createElement('div');
                card.className = "official-card p-6 cursor-pointer";
                card.innerHTML = `<img src="${college.image}" alt="${college.name}" class="college-image mb-4">
                                  <h3 class="text-xl font-bold text-blue-800">${college.name}</h3>`;
                card.addEventListener('click', () => showCollegeModal(college));
                collegeList.appendChild(card);
            });
        } else {
            noResults.classList.remove('hidden');
        }
    }

    function showCollegeModal(college) {
        modalTitle.textContent = college.name;
        modalDescription.textContent = college.description;
        modalStream.textContent = college.stream;
        modalCourses.textContent = college.courses.join(', ');
        modalLocation.textContent = college.location;
        modalAdmissionRate.textContent = college.admissionRate;

        if (collegeGrowthChartInstance) collegeGrowthChartInstance.destroy();
        if (collegeGrowthChartCanvas && college.growthData) {
            const ctx = collegeGrowthChartCanvas.getContext('2d');
            collegeGrowthChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: college.growthData.labels,
                    datasets: [{
                        label: 'Enrollment',
                        data: college.growthData.enrollment,
                        borderColor: '#0066cc',
                        fill: true
                    }]
                }
            });
        }
        collegeModal.classList.remove('hidden');
    }

    function showFindMatches() {
        const userStream = currentUser?.stream || 'Engineering'; // Default for demo
        const matches = studentMatches[userStream] || [];
        if (matchesCount) matchesCount.textContent = `${matches.length} matches found`;
        if (matchesContainer) matchesContainer.innerHTML = '';

        matches.forEach(student => {
            const card = document.createElement('div');
            card.className = 'student-card p-4 flex items-start space-x-4';
            card.innerHTML = `
                <div class="student-avatar">${student.initials}</div>
                <div>
                    <h4 class="font-bold">${student.name}</h4>
                    <p class="text-sm text-gray-600">${student.course} @ ${student.college}</p>
                </div>`;
            if (matchesContainer) matchesContainer.appendChild(card);
        });
        if (matchesModal) matchesModal.classList.remove('hidden');
    }

    function populateMentorshipData() {
        const seniorGrid = document.getElementById('senior-students-grid');
        const facultyGrid = document.getElementById('faculty-mentors-grid');
        const counsellorGrid = document.getElementById('counsellors-grid');

        if (seniorGrid) {
            seniorGrid.innerHTML = seniorStudents.map(s => `
                <div class="mentor-card" data-name="${s.name}" data-email="${s.email}">
                    <div class="mentor-info"><h4>${s.name}</h4><p>${s.field} - ${s.year}</p></div>
                    <button class="gov-btn-primary w-full mt-3">Connect</button>
                </div>`).join('');
            seniorGrid.querySelectorAll('.mentor-card').forEach(card => card.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') openContactModal(card.dataset.name, card.dataset.email);
            }));
        }
        if (facultyGrid) {
            facultyGrid.innerHTML = facultyMentors.map(f => `
                <div class="mentor-card" data-name="${f.name}" data-email="${f.email}">
                    <div class="mentor-info"><h4>${f.name}</h4><p>${f.subject} @ ${f.college}</p></div>
                    <button class="gov-btn-primary w-full mt-3">Connect</button>
                </div>`).join('');
            facultyGrid.querySelectorAll('.mentor-card').forEach(card => card.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') openContactModal(card.dataset.name, card.dataset.email);
            }));
        }
        if (counsellorGrid) {
            counsellorGrid.innerHTML = counsellors.map(c => `
                <div class="mentor-card" data-name="${c.name}" data-email="${c.email}">
                    <div class="mentor-info"><h4>${c.name}</h4><p>${c.expertise}</p></div>
                    <button class="gov-btn-primary w-full mt-3">Connect</button>
                </div>`).join('');
            counsellorGrid.querySelectorAll('.mentor-card').forEach(card => card.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') openContactModal(card.dataset.name, card.dataset.email);
            }));
        }
    }


    function openContactModal(name, email) {
        contactModalTitle.textContent = `Connect with ${name}`;
        contactModalContent.innerHTML = `<p>Send a message to <strong>${name}</strong> at <em>${email}</em>.</p>
                                        <textarea class="w-full p-2 border rounded-lg mt-2" rows="4" placeholder="Your message..."></textarea>`;
        contactModal.classList.remove('hidden');
    }

    function initDashboardCharts() {
        if (dashboardChartsInitialized) return;
        const studentsCtx = document.getElementById('studentsChart')?.getContext('2d');
        const collegesCtx = document.getElementById('collegesChart')?.getContext('2d');
        if (studentsCtx) new Chart(studentsCtx, {
            type: 'bar',
            data: {
                labels: ['Appeared for Exams', 'Joined College'],
                datasets: [{
                    label: '# of Students',
                    data: [50000, 13000],
                    backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(239, 68, 68, 0.7)']
                }]
            }
        });
        if (collegesCtx) new Chart(collegesCtx, {
            type: 'bar',
            data: {
                labels: ['Total', 'Undergrad', 'Rural', 'NAAC Accred.'],
                datasets: [{
                    label: '# of Colleges',
                    data: [72, 61, 54, 32],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)'
                }]
            },
            options: {
                indexAxis: 'y'
            }
        });
        dashboardChartsInitialized = true;
    }

    function initializeTimeline() {
        renderTimelineItems();
        startAutoRotation();
    }

    function renderTimelineItems() {
        if (!timelineContainer) return;
        const startIndex = currentTimelineIndex * itemsPerPage;
        const currentItems = timelineData.slice(startIndex, startIndex + itemsPerPage);
        timelineContainer.innerHTML = currentItems.map(item => `
            <div class="timeline-item p-6 ${item.status} ${item.urgency === 'high' ? 'urgent' : ''}">
                <h3 class="font-bold">${item.title}</h3><p>${item.date}</p>
            </div>`).join('');
    }

    function startAutoRotation() {
        if (timelineInterval) clearInterval(timelineInterval);
        timelineInterval = setInterval(() => {
            const totalPages = Math.ceil(timelineData.length / itemsPerPage);
            currentTimelineIndex = (currentTimelineIndex + 1) % totalPages;
            renderTimelineItems();
        }, 8000);
    }

    // --- GEMINI CHATBOT ---
    const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';
    const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    let conversationHistory = [];
    let isTyping = false;

    function openChat() {
        chatContainer.classList.remove('chatbot-hidden');
        chatContainer.classList.add('chatbot-visible');
        inputField.focus();
    }

    function closeChat() {
        chatContainer.classList.remove('chatbot-visible');
        chatContainer.classList.add('chatbot-hidden');
    }

    async function sendMessage() {
        const message = inputField.value.trim();
        if (!message || isTyping) return;
        addMessage(message, 'user');
        inputField.value = '';
        showTypingIndicator();
        // Mock response for now as API key is a placeholder
        setTimeout(() => {
            hideTypingIndicator();
            addMessage("This is a mock response. The AI assistant is being configured.", 'bot');
        }, 1000);
    }

    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `<div class="message-content"><div class="message-text">${content}</div></div>`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTypingIndicator() {
        isTyping = true;
        typingIndicator.style.display = 'block';
    }

    function hideTypingIndicator() {
        isTyping = false;
        typingIndicator.style.display = 'none';
    }


    // --- EVENT LISTENERS ---
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            showPage(pageId);
        });
    });

    document.getElementById('streams-card')?.addEventListener('click', () => {
        showPage('streams-careers-page');
        updateStreamsPage('Science');
    });
    document.getElementById('colleges-card')?.addEventListener('click', () => showPage('colleges'));
    document.getElementById('assessment-card')?.addEventListener('click', () => showPage('Pers_Quiz-page'));
    document.getElementById('find-matches-card')?.addEventListener('click', showFindMatches);
    document.getElementById('mentorship-card')?.addEventListener('click', () => {
        showPage('mentorship-page');
        populateMentorshipData();
    });
    document.getElementById('recommendations-card')?.addEventListener('click', () => showPage('profile'));
    document.querySelectorAll('.gov-tab-button').forEach(btn => btn.addEventListener('click', () => updateStreamsPage(btn.dataset.stream)));
    if (nextButton) nextButton.addEventListener('click', () => {
        if (selectedOption) {
            Object.keys(selectedOption).forEach(key => {
                if (key === 'science') scienceScore += selectedOption[key];
                if (key === 'arts') artsScore += selectedOption[key];
                if (key === 'commerce') commerceScore += selectedOption[key];
                if (key === 'engineering') engineeringScore += selectedOption[key];
            });
            currentQuestion++;
            renderQuestion();
        }
    });
    if (resultsButton) resultsButton.addEventListener('click', displayFinalResults);
    if (streamFilter) streamFilter.addEventListener('change', populateCourseFilter);
    if (streamFilter) streamFilter.addEventListener('change', filterColleges);
    if (courseFilter) courseFilter.addEventListener('change', filterColleges);
    if (closeModalButton) closeModalButton.addEventListener('click', () => collegeModal.classList.add('hidden'));
    if (collegeModal) collegeModal.addEventListener('click', (e) => {
        if (e.target === collegeModal) collegeModal.classList.add('hidden');
    });
    if (closeMatchesModalButton) closeMatchesModalButton.addEventListener('click', () => matchesModal.classList.add('hidden'));
    if (toggleDashboardBtn) toggleDashboardBtn.addEventListener('click', () => {
        dashboard.classList.toggle('hidden');
        initDashboardCharts();
    });
    if (closeContactModalBtn) closeContactModalBtn.addEventListener('click', () => contactModal.classList.add('hidden'));
    if (confirmContactBtn) confirmContactBtn.addEventListener('click', () => {
        alert('Request sent!');
        contactModal.classList.add('hidden');
    });
    if (appDownloadBtn) appDownloadBtn.addEventListener('click', () => alert('App download coming soon!'));
    if (toggleButton) toggleButton.addEventListener('click', openChat);
    if (closeButton) closeButton.addEventListener('click', closeChat);
    if (sendButton) sendButton.addEventListener('click', sendMessage);
    if (chatbotLegacyBtn) chatbotLegacyBtn.addEventListener('click', openChat); // Point legacy button to new chat


    // --- INITIALIZATION ---
    function initializeApp() {
        showPage('home');
        renderQuestion();
        populateCourseFilter();
        filterColleges();
        updateStreamsPage('Science');
        updateHomePage();
        initializeTimeline();
    }

    if (currentUser) {
        if (authSection) authSection.style.display = 'none';
        if (mainContent) mainContent.classList.remove('hidden');
        initializeApp();
    } else {
        if (mainContent) mainContent.classList.add('hidden');
    }
});

function showSuccess(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = message;
        el.style.display = 'block';
        setTimeout(() => {
            el.style.display = 'none';
        }, 2000);
    }
}

// === LOGOUT FUNCTIONALITY (ADD AT END OF SCRIPT.JS) ===
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Setting up logout functionality...');
    
    // Wait a bit for all other DOM elements to load
    setTimeout(() => {
        const logoutBtn = document.getElementById('logout-btn');
        
        if (logoutBtn) {
            console.log('✅ Logout button found');
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🚪 Logout clicked');
                
                if (confirm('Are you sure you want to logout?')) {
                    console.log('✅ Confirmed - logging out');
                    
                    // Hide main content
                    const mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.classList.add('hidden');
                        mainContent.style.display = 'none';
                    }
                    
                    // Show hero and auth sections
                    const heroSection = document.getElementById('hero');
                    const authSection = document.getElementById('auth-section');
                    
                    if (heroSection) {
                        heroSection.style.display = 'block';
                    }
                    
                    if (authSection) {
                        authSection.style.display = 'block';
                    }
                    
                    // Reset forms
                    const authForm = document.getElementById('auth-form');
                    if (authForm) {
                        authForm.reset();
                    }
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                    
                    console.log('🎉 Logout successful');
                    alert('You have been logged out successfully!');
                }
            });
        } else {
            console.error('❌ Logout button not found!');
        }
    }, 1000);
});

// === DEBUG LOGIN SUCCESS - ADD AT END OF SCRIPT.JS ===
function fixLoginDisplay() {
    console.log('🔧 Fixing login display...');
    
    // Hide auth and hero
    const authSection = document.getElementById('auth-section');
    const heroSection = document.getElementById('hero');
    if (authSection) authSection.style.display = 'none';
    if (heroSection) heroSection.style.display = 'none';
    
    // Show main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.remove('hidden');
        mainContent.style.display = 'block';
    }
    
    // Show home section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.style.display = 'block';
        console.log('✅ Home section now visible'); 
    } else {
        console.error('❌ Home section missing from HTML!');
    }
    
    // Show navigation
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.remove('hidden');
}

// Call this function after successful login
// You can also call it manually from browser console: fixLoginDisplay()



//personalized quiz



// ===================== Quiz Data =====================
// ===================== Quiz Data =====================
const interestQuizData = {
  science: [
    { question: "Do you enjoy solving complex problems with logical reasoning?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Problem Solving" },
    { question: "Are you fascinated by how machines or gadgets work?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Engineering Curiosity" },
    { question: "Do you like conducting experiments and observing results?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Experimental Skills" },
    { question: "Would you enjoy designing software or applications?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"IT Skills" },
    { question: "Are you interested in mathematics and data analysis?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Analytical Thinking" },
    { question: "Do you enjoy learning about robotics or AI?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Future Tech" },
    { question: "Would you like a career in medical or healthcare research?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Medical Science" },
    { question: "Are you curious about space, astronomy or astrophysics?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Space Science" }
  ],
  humanities: [
    { question: "Do you enjoy reading about history or society?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"History & Society" },
    { question: "Are you interested in human behavior and psychology?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Psychology" },
    { question: "Do you like writing, journalism, or content creation?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Writing & Media" },
    { question: "Would you enjoy debating or discussing social issues?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Social Awareness" },
    { question: "Are you curious about economics or financial policies?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Economics" },
    { question: "Do you like working with NGOs or social work?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Social Work" },
    { question: "Would you like a career in law or legal advisory?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Law" }
  ],
  general: [
    { question: "What is the largest planet in our solar system?", options: ["Jupiter","Saturn","Earth"], correctAnswer:0, category:"Science" },
    { question: "Which is the longest river in the world?", options: ["Nile","Amazon","Yangtze"], correctAnswer:0, category:"Geography" },
    { question: "Who is known as the father of computers?", options: ["Charles Babbage","Alan Turing","Bill Gates"], correctAnswer:0, category:"Technology" },
    { question: "Which year did World War II end?", options: ["1945","1939","1918"], correctAnswer:0, category:"History" },
    { question: "What is the capital city of Japan?", options: ["Tokyo","Kyoto","Osaka"], correctAnswer:0, category:"Geography" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen","Gold","Silver"], correctAnswer:0, category:"Science" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell","Thomas Edison","Nikola Tesla"], correctAnswer:0, category:"Technology" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["Brazil","China","UK"], correctAnswer:0, category:"Sports" },
    { question: "What is the national language of Egypt?", options: ["Arabic","English","French"], correctAnswer:0, category:"Culture" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars","Venus","Mercury"], correctAnswer:0, category:"Science" }
  ],
  commerce: [
    { question: "Are you interested in finance and investment?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Finance" },
    { question: "Do you enjoy managing projects or business operations?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Business Management" },
    { question: "Would you like to become an entrepreneur or start a business?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Entrepreneurship" },
    { question: "Do you enjoy marketing or analyzing customer behavior?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Marketing" },
    { question: "Are you curious about accounting or auditing?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Accounting" },
    { question: "Would you enjoy working in hospitality or tourism management?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Hospitality" },
    { question: "Do you like actuarial analysis or risk assessment?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Actuarial Science" }
  ],
  arts: [
    { question: "Do you enjoy drawing, painting, or visual arts?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Visual Arts" },
    { question: "Are you interested in fashion, graphic, or UI/UX design?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Design" },
    { question: "Would you like to work in film, photography, or media production?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Media & Film" },
    { question: "Do you enjoy acting, dancing, or performing arts?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Performing Arts" },
    { question: "Are you curious about architecture or interior design?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Architecture" },
    { question: "Do you like crafting, sculpting, or fine arts?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Fine Arts" }
  ],
  vocational: [
    { question: "Do you like learning hands-on skills or trades?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Hands-On Skills" },
    { question: "Are you interested in IT short courses like web development or digital marketing?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"IT Skills" },
    { question: "Do you enjoy cooking, baking, or hospitality services?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Hospitality & Culinary" },
    { question: "Are you curious about beauty, wellness, or cosmetology?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Beauty & Wellness" },
    { question: "Do you like working with medical equipment or paramedical work?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Paramedical" },
    { question: "Are you interested in photography, videography, or sound engineering?", options:["Yes","Sometimes","No"], correctAnswer:0, category:"Media & Entertainment" }
  ]
};


const regularQuizData = [
  { question:"During a challenging puzzle or brain teaser, what do you usually do?", options:["I enjoy figuring it out step by step","I try but get frustrated","I avoid it"], correctAnswer:0, category:"Analytical" },
  { question:"How do you handle deadlines?", options:["Plan ahead carefully","Rush last minute","Ignore until reminded"], correctAnswer:0, category:"Time Management" }
];

// ===================== Global Variables =====================
let currentQuiz = [];
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let categoryScores = {};
let currentUser = { userName:"Anonymous", userPhone:"-", userEmail:"-" };
let isInterestQuiz = false;

// ===================== Utility Functions =====================
function selectInterest(interest){
  isInterestQuiz = true;
  currentQuiz = interestQuizData[interest];
  document.getElementById('interest-page').classList.add('hidden');
  document.getElementById('quiz-page').classList.remove('hidden');
  showIntro(interest);
}

function showIntro(interest){
  document.getElementById('intro'
