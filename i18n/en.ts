import type { Translations } from './translations';

const text: Translations = {
  Main: {
    director: {
      alt: 'Prof. B. V. Ramana Reddy',
      title: 'DIRECTOR’S CORNER',
      name: 'Prof. B. V. Ramana Reddy',
      quote: [
        `India, the land of seekers, is at the cusp of becoming Vishwa Guru all
      over again after 1100 years of subjugation, wars, annexures and
      humiliation. It is again a free country due to the sacrifices made by our
      leaders, freedom fighters and has learnt the art of standing tall in the
      midst of many a challenge of building the nation with its rich diversity,
      cultures, languages all over again since the last 75 years. Unity in
      Diversity is our mantra while making our nation stronger in every
      sphere.`,
        'I heartily welcome everyone who visits the website of this institution.',
      ],
      more: 'Read more',
    },
  },

  Clubs: { title: 'CLUBS' },
  Committee: {
    building: 'BUILDING & WORK COMMITTEE',
    financial: 'FINANCIAL COMMITTEE',
    governor: 'BOARD OF GOVERNORS',
    members: {
      title: 'Members',
      serial: 'Sr. No.',
      nomination: 'Nomination',
      name: 'Name',
      servingAs: 'Serving As',
    },
    meetings: {
      title: 'Meetings',
      serial: 'Meeting No.',
      date: 'Date',
      place: 'Place',
      agenda: 'Agenda',
      minutes: 'Minutes',
    },
  },
  Curricula: {
    pageTitle: 'CURRICULA',
    code: 'Code',
    title: 'Title',
    major: 'Major',
    credits: 'L-T-P',
    totalCredits: 'Credits',
    syllabus: 'Syllabus',
  },
  Departments: { title: 'DEPARTMENTS' },
  Department: {
    headings: {
      about: 'About',
      vision: 'Vision',
      and: '&',
      mission: 'Mission',
      hod: {
        title: 'HOD’s Message',
        session: (from: string) => `Academic Session ${from} - current`,
      },
      programmes: {
        title: 'Programmes',
        undergrad: 'Under Graduate',
        postgrad: 'Post Graduate',
        doctorate: 'Doctorate',
      },
      gallery: 'Gallery',
    },
    facultyAndStaff: 'Faculty & Staff',
    laboratories: 'Laboratories',
    achievements: 'Student Achievements',
  },
  FacultyAndStaff: {
    placeholder: 'Search by name or email',
    departmentHead: 'Head of Department',
  },
  FAQ: { title: 'Frequently Asked Questions' },
  Footer: {
    logo: 'Logo',
    nit: 'National Institute of Technology, Kurukshetra',
    location: 'Thanesar, Haryana, India 136119',
    design: 'Artwork',
    headings: ['Quick Links', 'Quick Links', 'Quick Links'],
    lorem: 'Lorem Ipsum',
    copyright:
      '© 2024 National Institute of Technology Kurukshetra. All Rights Reserved.',
  },
  Forms: { title: 'FORMS' },
  Header: {
    institute: 'Institute',
    academics: 'Academics',
    faculty: 'Faculty & Staff',
    placement: 'Training & Placement',
    alumni: 'Alumni',
    activities: 'Student Activities',
    logo: 'Logo',
    search: 'Quick Search...',
    login: 'Login',
    profile: { alt: 'Profile image', view: 'View Profile' },
  },
  Login: {
    title: 'Sign In',
    enterEmail: 'Enter your email',
    continueButton: 'Continue (Not implemented)',
    signInWithGoogle: 'Sign in with Google',
  },
  Notifications: {
    title: 'NOTIFICATIONS',
    categories: {
      academic: 'Academic',
      tender: 'Tenders',
      workshop: 'Workshops',
      recruitment: 'Recruitment',
    },
    viewAll: 'View All',
  },
  NotFound: {
    title: 'Not Found',
    description: 'Could not find requested resource',
    backHome: 'Return Home',
  },
  Profile: {
    tabs: {
      personal: {
        title: 'PERSONAL DETAILS',
        basic: {
          title: 'Basic',
          name: 'Name',
          rollNumber: 'Roll Number',
          sex: 'Sex',
          dateOfBirth: 'Date of Birth',
        },
        contact: {
          title: 'Contact',
          email: 'Institute email',
          personalEmail: 'Personal email',
          telephone: 'Telephone',
          alternateTelephone: 'Alternate telephone',
        },
        institute: {
          title: 'Institute',
          degree: 'Degree',
          major: 'Major',
          currentSemester: 'Current semester',
          section: 'Section',
        },
        admission: {
          title: 'Admission',
          applicationNumber: 'Application number',
          candidateCategory: 'Candidate category',
          admissionCategory: 'Admission category',
          admissionSubcategory: 'Admission Sub-category',
          dateOfAdmission: 'Date of Admission',
        },
        guardians: {
          title: 'Guardians',
          father: 'Father',
          mother: 'Mother',
          local: 'Local Guardian',
          name: 'Name',
          telephone: 'Telephone',
          email: 'Email',
        },
        address: {
          title: 'Address',
          permanent: 'Permanent Address',
          pinCode: 'Pin code',
        },
      },
      notifications: { title: 'NOTIFICATIONS' },
      courses: { title: 'COURSES' },
      clubs: { title: 'CLUBS' },
      results: { title: 'RESULTS & DMCs' },
      bookmarks: { title: 'BOOKMARKS' },
      quickSend: { title: 'QUICK SEND' },
    },
    logout: 'LOG OUT',
  },
  Search: {
    placeholder: 'Quick Search...',
    categories: {
      allResults: 'All Results',
      webPages: 'Web Pages',
      people: 'People',
      documents: 'Documents',
      events: 'Events',
      news: 'News',
      courses: 'Courses',
      clubs: 'Clubs',
      positions: 'Positions',
    },
    viewAll: 'View All',
    default: {
      recents: 'Recent Searches',
      clearRecents: 'clear recents',
      mostSearched: 'Most Searched at NITKKR',
      studentLinks: {
        title: 'Student Quick Links',
        clubs: 'Clubs',
        courses: 'Courses',
        departments: 'Departments',
        notifications: 'Notifications',
        results: 'Results',
      },
      facultyLinks: {
        title: 'Faculty Quick Links',
        notifications: 'Notifications',
        profile: 'My Profile',
      },
    },
  },
  Section: {
    about: 'ABOUT',
    gallery: 'GALLERY',

    Account: {},
    CentralLibrary: {},
    CentralWorkshop: {},
    CentreOfComputingAndNetworking: {
      title: 'Centre of Computing & Networking',
      label: {
        about: 'About Us',
        facilities: 'Facilities',
      },
      responsibilitiesTitle:
        'Centre of Computing and Networking (CCN) is the central computing and networking facility of the Institute, entrusted with the following responsibilities:',
      responsibilities: [
        'Development of the computing and networking infrastructure',
        'Maintaining and updating the Institute’s website',
        'E-mail services for the students, faculty and staff',
        'Extending IT infrastructure for online tests for placement of the students',
        'Development and operation of online applications',
        'Printing and scanning facilities.',
        'CCN has equipped with Super computer Param Shavak from CDAC. The students and faculty are utilizing this facility for high end computing.',
      ],
      clickHere: 'Click here to see :',
      clickHereInfo: 'NIT Kurukshetra IT Infrastructure Usage Policy ',
      staffTable: {
        name: 'Name',
        designation: 'Administrative and Technical Staff',
        profIncharge: 'Prof. in-Charge',
      },
      workTimeTitle: 'Working Hours',
      workTime:
        '9:00 AM to 5:30 PM (Monday to Saturday). CCN remains closed on Sunday and National holidays.',
      networkingTitle: 'Networking Facilities',
      networking: [
        'Campus wide LAN on OFC backbone supported by two leased lines for internet access',
        '1 Gbps from RailTel Corporation of India Ltd',
        '500 Mbps from Reliance Jio Infocomm Ltd',
        'Network upgraded from 1G to 10G',
        'Structured networking supporting 7000 nodes',
        'Wi-Fi Networking with the support of 3000 concurrent users',
        'Bio-Metric Attendance System (BAS) is being looked after by CCN',
        "Installed HoneyPot Sensor (Raspberry Pi) under the project 'Scalable Attack Data Capture and Analysis framework for CTI Generation' by C-DAC, Mohali",
      ],
      resourcesTitle: 'Computing Facilities Hardware Resources',
      resourcesTableTitle: {
        sno: 'S.No.',
        item: 'Item',
        quantity: 'Quantity',
      },
      resources: [
        'Servers',
        'Desktop PCs (i7)',
        'Video Conferencing device(s)',
        'Outdoor LED Panels installed at four prime locations in the campus.',
        'NEXT GENERTION FIREWALL FORTINET (FortiGate 2000E)',
      ],
      softwareTitle: 'Software Packages',
      software: [
        'Endpoint Security',
        'Word-processing: MS office Professional 2016',
        'EIGAP Plus (50 User-5 year) including ENVI Single Use Software (ESRI India Technologies Ltd.)',
        'FE Analysis Engineering/Multi-Physics Software Solution.',
        'MATLAB 2021 Campus Wide',
      ],
    },
    ElectricalMaintenance: {},
    Estate: {},
    GeneralAdministration: {},
    HealthCentre: {},
    Security: {},
    Sports: {},
    Store: {},
  },
  StudentActivities: {
    title: 'STUDENT ACTIVITIES',
    headings: {
      clubs: 'Clubs',
      council: 'Student Council',
      events: 'Events',
      thoughtLab: 'Thought Lab',
      nss: 'NSS',
      ncc: 'NCC',
    },
    sections: { clubs: { title: 'CLUBS', more: 'Explore all clubs' } },
  },
  Unauthorised: {
    title: 'Unauthorised',
    description: 'You are not authorised to view this page.',
  },
  WorkInProgress: {
    title: 'Work In Progress',
    description:
      'This page is currently being worked on. Please visit another time',
  },
};

export default text;
