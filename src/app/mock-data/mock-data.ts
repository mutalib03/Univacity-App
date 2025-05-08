// src/app/mock-data/mock-data.ts
import { Program } from '../models/models';

export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: 'Computer Technologies and Environmental Engineering',
    university: 'University of Liverpool',
    country: 'Canada',
    level: 'Masters',
    duration: '2 years',
    attendance: 'Fulltime',
    language: 'English Language',
    tuition: '$363.36/per semester',
    isPartner: true,
    badgeMark: '../../assets/icon/CircleWavyCheck.svg',
    image: '../../../assets/images/universityImage.png',
    logo: '../../../assets/images/universityLogo.png',
    flag: '../../assets/icon/canadaFlag.svg',
    description: 'The master\'s programme in Computer Technologies and Environmental Engineering at the University of Liverpool offers a wide spectrum of disciplines, challenging students to develop improved strategies and solutions for environmental systems. This unique programme equips students with the skills to tackle environmental problems effectively using computer technologies.',
    views: 15782,
    impressions: 241632,
    requirements: [
      'Completed relevant degree program',
      'Copy of a valid Identification Card or Passport',
      'Degree Diploma',
      'Documents of completed university degree with a minimum study duration of three years (bachelor\'s program or diploma program)',
      'English language proficiency (IELTS 6.5 or equivalent)',
      'Statement of purpose explaining your interest in the program'
    ],
    structure: 'Studying Computer Technologies and Environmental Engineering at University of Liverpool opens up a world of opportunities. By combining various disciplines and developing cross-sectional competencies, students gain a comprehensive understanding of environmental systems enhanced by computing technologies. This program focuses on climate monitoring, data analysis, and developing sustainable solutions for environmental challenges using computational methods.',
    fees: {
      serviceFee: 'Service fee is $25.',
      internationalStudentFee: 'For international degree students, the tuition fee is $ 1,450.',
      housingFee: '$750/month',
      acceptanceFee: '$150',
      tuitionFee: '$363.36/per semester',
      applicationFee: '$75',
      livingFee: '$1,200/month'
    },
    extraInfo: [
      {
        title: 'Main: Portiesige Wall, Portierige RoiSrV, Portierige Hauptgebäude',
        subtitle: 'Campus(es)'
      },
      {
        title: 'Fall 2025',
        subtitle: 'Start Date'
      },
      {
        title: 'English Language',
        subtitle: 'Study Language'
      }
    ],
    disciplines: ['Computer Science', 'Environmental Engineering', 'Design']
  },
  {
    id: 2,
    title: 'Data Science and Machine Learning',
    university: 'University of Rio de Janeiro',
    country: 'Brasil',
    level: 'Masters',
    duration: '2 years',
    attendance: 'Fulltime',
    language: 'English Language',
    tuition: '$314.50/per semester',
    isPartner: true,
    badgeMark: '../../assets/icon/CircleWavyCheck.svg',
    image: '../../../assets/images/universityImage.png',
    logo: '../../../assets/images/universityLogo.png',
    flag: '../../assets/icon/brasilFlag.svg',
    description: 'The Data Science and Machine Learning program at the University of Rio de Janeiro prepares students for careers in data analytics, machine learning engineering, and AI research. With a focus on practical application and research methodology, students learn to develop cutting-edge algorithms and data-driven solutions.',
    views: 18941,
    impressions: 267530,
    requirements: [
      'Bachelor\'s degree in Computer Science, Mathematics, Statistics, or related field',
      'Minimum GPA of 3.0 on a 4.0 scale',
      'Proof of English proficiency (TOEFL or IELTS)',
      'Programming experience in Python or R',
      'Statement of purpose',
      'Two letters of recommendation'
    ],
    structure: 'This comprehensive program covers statistical learning, deep learning, natural language processing, computer vision, and big data technologies. Students develop both theoretical knowledge and practical skills through coursework, lab sessions, and a capstone project. The curriculum is designed in collaboration with industry partners to ensure relevance to current market needs.',
    fees: {
      serviceFee: 'Service fee is $30.',
      internationalStudentFee: 'For international degree students, the tuition fee is $ 1,250.',
      housingFee: '$650/month',
      acceptanceFee: '$120',
      tuitionFee: '$314.50/per semester',
      applicationFee: '$65',
      livingFee: '$950/month'
    },
    extraInfo: [
      {
        title: 'Central Campus, Technology Park',
        subtitle: 'Campus(es)'
      },
      {
        title: 'Spring 2025',
        subtitle: 'Start Date'
      },
      {
        title: 'English Language',
        subtitle: 'Study Language'
      }
    ],
    disciplines: ['Computer Science', 'Mathematics', 'Design', 'Programing']
  },
  {
    id: 3,
    title: 'Sustainable Architecture and Urban Planning',
    university: 'ETH Zurich',
    country: 'Switzerland',
    level: 'Masters',
    duration: '1.5 years',
    attendance: 'Fulltime',
    language: 'English Language',
    tuition: '$425.75/per semester',
    isPartner: false,
    badgeMark: '../../assets/icon/CircleWavyCheck.svg',
    image: '../../../assets/images/universityImage.png',
    logo: '../../../assets/images/universityLogo.png',
    flag: '../../assets/icon/canadaFlag.svg',
    description: 'The Sustainable Architecture and Urban Planning program at ETH Zurich focuses on environmentally conscious design principles and innovative approaches to urban development. Students learn to create architecturally significant structures that minimize environmental impact and promote sustainability.',
    views: 12456,
    impressions: 189742,
    requirements: [
      'Bachelor\'s degree in Architecture, Urban Planning, or related field',
      'Portfolio of previous design work',
      'Statement of purpose',
      'CV/Resume',
      'Two letters of recommendation',
      'English proficiency (C1 level)'
    ],
    structure: 'This program combines design studios, theoretical courses, and practical workshops to provide a holistic education in sustainable architecture. Students work on real-world projects, collaborate with community stakeholders, and develop innovative solutions to contemporary urban challenges. The curriculum emphasizes interdisciplinary approaches and international perspectives.',
    fees: {
      serviceFee: 'Service fee is $40.',
      internationalStudentFee: 'For international degree students, the tuition fee is $ 1,680.',
      housingFee: '$900/month',
      acceptanceFee: '$180',
      tuitionFee: '$425.75/per semester',
      applicationFee: '$90',
      livingFee: '$1,400/month'
    },
    extraInfo: [
      {
        title: 'Hönggerberg Campus, City Center Campus',
        subtitle: 'Campus(es)'
      },
      {
        title: 'Fall 2025',
        subtitle: 'Start Date'
      },
      {
        title: 'English Language',
        subtitle: 'Study Language'
      }
    ],
    disciplines: ['Architecture', 'Urban Planning', 'Design', 'Engineering']
  },
  {
    id: 4,
    title: 'International Business and Finance',
    university: 'Harvard University',
    country: 'United States',
    level: 'Masters',
    duration: '2 years',
    attendance: 'Fulltime',
    language: 'English Language',
    tuition: '$490.25/per semester',
    isPartner: true,
    badgeMark: '../../assets/icon/CircleWavyCheck.svg',
    image: '../../../assets/images/universityImage.png',
    logo: '../../../assets/images/universityLogo.png',
    flag: '../../assets/icon/brasilFlag.svg',
    description: 'The International Business and Finance program at Harvard University prepares future business leaders for global careers. With a curriculum covering financial management, international trade, strategic planning, and leadership development, students develop the skills needed to succeed in a competitive global marketplace.',
    views: 22345,
    impressions: 320165,
    requirements: [
      'Bachelor\'s degree in Business, Economics, Finance, or related field',
      'GMAT or GRE scores',
      'Minimum 2 years of professional work experience',
      'Statement of purpose',
      'Three letters of recommendation',
      'TOEFL or IELTS for non-native English speakers'
    ],
    structure: 'This rigorous program combines case-based learning, quantitative analysis, and practical business applications. Students engage with real-world business challenges, develop leadership skills, and build a global professional network. The curriculum includes core business courses, specialized finance electives, and international business seminars.',
    fees: {
      serviceFee: 'Service fee is €50.',
      internationalStudentFee: 'For international degree students, the tuition fee is € 2,100.',
      housingFee: '$1,200/month',
      acceptanceFee: '$200',
      tuitionFee: '€490.25/per semester',
      applicationFee: '$100',
      livingFee: '$1,800/month'
    },
    extraInfo: [
      {
        title: 'Harvard Business School Campus',
        subtitle: 'Campus(es)'
      },
      {
        title: 'Fall 2025',
        subtitle: 'Start Date'
      },
      {
        title: 'English Language',
        subtitle: 'Study Language'
      }
    ],
    disciplines: ['Business', 'Finance', 'Economics', 'Management']
  },
  {
    id: 5,
    title: 'Environmental Systems Sciences and Climate Monitoring',
    university: 'University of Graz',
    country: 'Canada',
    level: 'Masters',
    duration: '2 years',
    attendance: 'Fulltime',
    language: 'English Language',
    tuition: '€377.90/per semester',
    isPartner: true,
    badgeMark: '../../assets/icon/CircleWavyCheck.svg',
    image: '../../../assets/images/universityImage.png',
    logo: '../../../assets/images/universityLogo.png',
    flag: '../../assets/icon/canadaFlag.svg',
    description: 'The master\'s programme in Environmental Systems Sciences / Climate and Environmental Monitoring at the University of Graz offers a wide spectrum of disciplines, challenging students to develop improved strategies and solutions. This unique programme equips students with the skills to tackle environmental problems effectively.',
    views: 19126,
    impressions: 293612,
    requirements: [
      'Completed relevant degree program',
      'Copy of a valid Identification Card or Passport',
      'Degree Diploma',
      'Documents of completed university degree with a minimum study duration of three years (bachelor\'s program or diploma program)'
    ],
    structure: 'Studying Environmental Systems Sciences at the University of Graz opens up a world of opportunities. By combining various disciplines and developing cross-sectional competencies, students gain a comprehensive understanding of environmental systems. This program focuses on climate monitoring, data analysis, and developing sustainable solutions for environmental challenges.',
    fees: {
      serviceFee: 'Service fee is €20.',
      internationalStudentFee: 'For international degree students, the tuition fee is € 1,306.',
      housingFee: '$0',
      acceptanceFee: '$0',
      tuitionFee: '$37,706 per semester',
      applicationFee: '$51.88',
      livingFee: '$0'
    },
    extraInfo: [
      {
        title: 'Main: Portiesige Wall, Portierige RoiSrV, Portierige Hauptgebäude',
        subtitle: 'Campus(es)'
      },
      {
        title: 'Winter 2024',
        subtitle: ''
      },
      {
        title: 'English Language',
        subtitle: 'Study Language'
      }
    ],
    disciplines: ['Environmental Science', 'Climate Science', 'Programing', 'Data Analysis']
  }
];