import type { Developer, Project } from './types';

export const developers: Developer[] = [
  {
    id: 'dev101',
    name: 'Alice Johnson',
    avatarUrl: 'https://picsum.photos/seed/avatar1/200/200',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    rating: 4.9,
    reviews: 120,
    tagline: 'Full-Stack Engineer with a passion for clean code.',
    hourlyRate: 6000,
    completedProjects: 45,
    isAvailable: true,
    description: 'A seasoned full-stack developer with over 8 years of experience building scalable web applications. Expert in the MERN stack and cloud deployment on AWS.'
  },
  {
    id: 'dev102',
    name: 'Bob Williams',
    avatarUrl: 'https://picsum.photos/seed/avatar2/200/200',
    skills: ['Python', 'Django', 'Machine Learning', 'TensorFlow'],
    rating: 4.8,
    reviews: 85,
    tagline: 'AI & Machine Learning Specialist.',
    completedProjects: 22,
    isAvailable: false,
    description: 'Data scientist and ML engineer specializing in natural language processing and computer vision. Proven track record of delivering high-impact AI solutions.'
  },
  {
    id: 'dev103',
    name: 'Charlie Brown',
    avatarUrl: 'https://picsum.photos/seed/avatar3/200/200',
    skills: ['Swift', 'iOS', 'Firebase', 'UI/UX'],
    rating: 5.0,
    reviews: 210,
    tagline: 'Top-rated iOS Developer creating beautiful apps.',
    hourlyRate: 7200,
    completedProjects: 60,
    isAvailable: true,
    description: 'Award-winning mobile developer focused on creating intuitive and high-performance applications for the Apple ecosystem. Strong focus on user experience and design.'
  },
  {
    id: 'dev104',
    name: 'Diana Prince',
    avatarUrl: 'https://picsum.photos/seed/avatar4/200/200',
    skills: ['Next.js', 'Vercel', 'Tailwind CSS', 'Web Accessibility'],
    rating: 4.9,
    reviews: 95,
    tagline: 'Frontend expert specializing in Next.js.',
    hourlyRate: 6400,
    completedProjects: 35,
    isAvailable: true,
    description: 'Frontend developer who loves building fast, accessible, and beautiful websites. Deep expertise in the React ecosystem, especially Next.js and Vercel.'
  },
  {
    id: 'dev105',
    name: 'Ethan Hunt',
    avatarUrl: 'https://picsum.photos/seed/avatar5/200/200',
    skills: ['DevOps', 'Kubernetes', 'Docker', 'GCP'],
    rating: 4.7,
    reviews: 70,
    tagline: 'DevOps Engineer for scalable infrastructure.',
    completedProjects: 50,
    isAvailable: true,
    description: 'Certified DevOps professional skilled in automating CI/CD pipelines and managing cloud infrastructure. Passionate about system reliability and performance.'
  },
    {
    id: 'dev106',
    name: 'Fiona Glenanne',
    avatarUrl: 'https://picsum.photos/seed/avatar6/200/200',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Kafka'],
    rating: 4.8,
    reviews: 110,
    tagline: 'Backend specialist in enterprise systems.',
    hourlyRate: 6800,
    completedProjects: 40,
    isAvailable: false,
    description: 'Backend engineer with extensive experience in designing and building robust, distributed systems for large-scale enterprise applications.'
  }
];

export const projects: Project[] = [
  {
    id: 'proj201',
    title: 'E-commerce Platform for Local Artisans',
    category: 'Web Development',
    budget: 640000,
    deadline: '2024-12-31',
    description: 'A full-featured e-commerce website to help local artisans sell their products online. Requires payment integration and a custom admin dashboard.',
    skills: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    client: {
      name: 'Crafty Co.',
      avatarUrl: 'https://picsum.photos/seed/client1/100/100',
    },
  },
  {
    id: 'proj202',
    title: 'Mobile Fitness Tracker App',
    category: 'Mobile App',
    budget: 960000,
    deadline: '2025-02-28',
    description: 'An iOS and Android app for tracking workouts, setting fitness goals, and social sharing. Needs integration with HealthKit and Google Fit.',
    skills: ['React Native', 'Firebase', 'UI/UX'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    client: {
      name: 'FitLife Inc.',
      avatarUrl: 'https://picsum.photos/seed/client2/100/100',
    },
  },
  {
    id: 'proj203',
    title: 'AI-Powered Customer Support Chatbot',
    category: 'Machine Learning',
    budget: 1200000,
    deadline: '2025-01-15',
    description: 'Develop a chatbot that can handle common customer queries, integrate with our knowledge base, and escalate complex issues to human agents.',
    skills: ['Python', 'NLP', 'TensorFlow', 'Dialogflow'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    client: {
      name: 'Supportify',
      avatarUrl: 'https://picsum.photos/seed/client3/100/100',
    },
  },
  {
    id: 'proj204',
    title: 'Student Final Year Project: Blog Platform',
    category: 'Student Project',
    budget: 40000,
    deadline: '2024-11-30',
    description: 'A simple blog platform for a university project. Requires user authentication, post creation, and comments. Must include full documentation.',
    skills: ['Next.js', 'Tailwind CSS', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    client: {
      name: 'Alex Ray',
      avatarUrl: 'https://picsum.photos/seed/client4/100/100',
    },
  },
    {
    id: 'proj205',
    title: 'Real-time Data Visualization Dashboard',
    category: 'Web Development',
    budget: 600000,
    deadline: '2025-03-10',
    description: 'A web-based dashboard to visualize real-time streaming data from IoT devices. Requires websockets and dynamic charting libraries.',
    skills: ['React', 'D3.js', 'WebSockets', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    client: {
      name: 'DataStream',
      avatarUrl: 'https://picsum.photos/seed/client5/100/100',
    },
  }
];
