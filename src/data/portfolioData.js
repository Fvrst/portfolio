import { 
  FlutterIcon,
  FlutterFlowIcon,
  DartIcon,
  FirebaseIcon,
  GitIcon,
  FigmaIcon,
  PostmanIcon,
  RestApiIcon,
  BlocIcon,
  WebSocketIcon,
  ReactIcon
} from '../components/TechIcons'

// Skills data
export const skills = [
  { name: 'Dart', icon: DartIcon },
  { name: 'Flutter', icon: FlutterIcon },
  { name: 'FlutterFlow', icon: FlutterFlowIcon },
  { name: 'Firebase', icon: FirebaseIcon },
  { name: 'REST API', icon: RestApiIcon },
  { name: 'Provider', icon: BlocIcon },
  { name: 'Riverpod', icon: BlocIcon },
  { name: 'BLoC', icon: BlocIcon },
  { name: 'Git/GitHub', icon: GitIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Postman', icon: PostmanIcon },
  { name: 'WebSockets', icon: WebSocketIcon }
];

// Projects data (mobile apps as main projects)
export const projects = [
  {
    id: 1,
    title: 'SnappyPay',
    description: 'Fintech platform for gift cards, bill payments, airtime, data, and virtual dollar cards',
    thumbnail: '/Images/Selected-Works/Mobile-works/snappypay1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Payment Integration'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/snappypay1.png',
      '/Images/Selected-Works/Mobile-works/snappypay2.png'
    ],
    fullDescription: 'SnappyPay is a fintech platform that enables users to buy gift cards, pay bills, purchase airtime and data, and access virtual dollar cards with ease and security.'
  },
  {
    id: 2,
    title: 'TAFAfrica Tech Hub',
    description: 'Disability-inclusive election monitoring app used during the Anambra State gubernatorial election',
    thumbnail: '/Images/Selected-Works/Mobile-works/taf1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'Live Streaming', 'Offline-First'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/taf1.png',
      '/Images/Selected-Works/Mobile-works/taf2.png'
    ],
    fullDescription: 'TAF Africa Tech Hub is an election observation and advocacy platform dedicated to promoting disability inclusion. It empowers persons with disabilities (PWDs) by monitoring electoral processes and documenting their experiences. Features include live streaming, offline-first report submission, and media uploads. Approved for use by INEC.'
  },
  {
    id: 3,
    title: 'TalkAm',
    description: 'Human rights awareness app for reporting, tracking, and monitoring human rights abuses',
    thumbnail: '/Images/Selected-Works/Mobile-works/talkam1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/talkam1.png',
      '/Images/Selected-Works/Mobile-works/talkam2.png'
    ],
    fullDescription: 'TalkAm is an app that allows users to report, track and monitor human rights abuses, empowering citizens to document and share incidents for accountability and advocacy.'
  },
  {
    id: 4,
    title: 'Milarn',
    description: 'Employee financial access platform giving instant access to earned wages before payday',
    thumbnail: '/Images/Selected-Works/Mobile-works/milarn1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'Payment Integration', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/milarn1.png',
      '/Images/Selected-Works/Mobile-works/milarn2.png'
    ],
    fullDescription: 'Milarn is a financial empowerment app that gives employees instant access to their earned wages before payday. It provides the freedom to manage expenses without waiting for a paycheck or resorting to high-interest loans. With Milarn, users enjoy financial flexibility, transparency, and control.'
  },
  {
    id: 5,
    title: 'DitchRide',
    description: 'Ride-hailing and transportation platform with real-time tracking and booking',
    thumbnail: '/Images/Selected-Works/Mobile-works/ditch1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/ditch1.png',
      '/Images/Selected-Works/Mobile-works/ditch2.png',
      '/Images/Selected-Works/Mobile-works/ditch3.png'
    ],
    fullDescription: 'DitchRide is a ride-hailing mobile application featuring real-time location tracking, seamless booking flows, and driver-passenger matching. Built with Flutter for cross-platform performance on both Android and iOS.'
  },
  {
    id: 6,
    title: 'Zaida',
    description: 'Feature-rich mobile application with modern UI and seamless user experience',
    thumbnail: '/Images/Selected-Works/Mobile-works/ziada1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/ziada1.png',
      '/Images/Selected-Works/Mobile-works/ziada2.png'
    ],
    fullDescription: 'Zaida is a mobile application built with Flutter, delivering a smooth and intuitive user experience with modern design principles and robust backend integration.'
  },
  {
    id: 7,
    title: 'Nana Luxe',
    description: 'Premium fashion e-commerce app with personalized feed, real-time order tracking, and minimal monochrome UI',
    thumbnail: '/Images/Selected-Works/Mobile-works/nanaluxe1.png',
    tech: ['FlutterFlow', 'Firebase', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/nanaluxe1.png',
      '/Images/Selected-Works/Mobile-works/nanaluxe2.png'
    ],
    fullDescription: 'Developed Nana Luxe, a premium fashion e-commerce app built with Flutter. Features a personalized home feed with curated recommendations, real-time order tracking, and category filters. Users can browse product pages with ratings and reviews, manage cart quantities, apply promo codes, and view live subtotals before checkout. Implemented clean state management, smooth navigation, and a minimal monochrome UI that keeps product photography front and center.'
  },
  {
    id: 8,
    title: 'DriveX',
    description: 'Modern ride-hailing passenger app with real-time driver tracking, seamless booking, and multiple payment options',
    thumbnail: '/Images/Selected-Works/Mobile-works/drivex1.png',
    tech: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'Firebase', 'Google Maps'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/drivex1.png',
      '/Images/Selected-Works/Mobile-works/drivex2.png'
    ],
    fullDescription: 'DriveX is a modern ride-hailing mobile application designed to provide users with a seamless, reliable, and efficient transportation experience. Features real-time ride booking and driver matching, live GPS tracking, multiple payment options, ride history, and push notifications. Built with Flutter and Riverpod for scalable architecture, with optimized performance for faster ride requests and real-time tracking.'
  },
  {
    id: 9,
    title: 'DriveX Driver',
    description: 'Driver-side ride-hailing app with real-time ride requests, earnings dashboard, and turn-by-turn navigation',
    thumbnail: '/Images/Selected-Works/Mobile-works/drivex_driver1.png',
    tech: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'Firebase', 'Google Maps'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: [
      '/Images/Selected-Works/Mobile-works/drivex_driver1.png',
      '/Images/Selected-Works/Mobile-works/drivex_driver2.png'
    ],
    fullDescription: 'DriveX Driver is the companion driver-facing app for the DriveX platform. Enables drivers to accept/decline ride requests in real-time, navigate with turn-by-turn directions, track earnings and trip analytics, and toggle availability. Built with Flutter and Riverpod, featuring background location tracking, smooth ride lifecycle management (accept → start → complete), and an earnings dashboard.'
  }
];

// Mobile Projects data (same as projects for Awwal)
export const mobileProjects = [
  {
    id: 1,
    title: 'SnappyPay',
    description: 'Fintech platform for gift cards, bill payments, airtime, data, and virtual dollar cards',
    thumbnail: '/Images/Selected-Works/Mobile-works/snappypay1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Payment Integration'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/snappypay1.png', '/Images/Selected-Works/Mobile-works/snappypay2.png'],
    fullDescription: 'SnappyPay is a fintech platform that enables users to buy gift cards, pay bills, purchase airtime and data, and access virtual dollar cards with ease and security.'
  },
  {
    id: 2,
    title: 'TAFAfrica Tech Hub',
    description: 'Disability-inclusive election monitoring app approved for use by INEC',
    thumbnail: '/Images/Selected-Works/Mobile-works/taf1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'Live Streaming', 'Offline-First'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/taf1.png', '/Images/Selected-Works/Mobile-works/taf2.png'],
    fullDescription: 'TAF Africa Tech Hub is an election observation and advocacy platform dedicated to promoting disability inclusion. Features live streaming, offline-first report submission, and media uploads. Approved for use by INEC.'
  },
  {
    id: 3,
    title: 'TalkAm',
    description: 'Human rights awareness app for reporting and monitoring human rights abuses',
    thumbnail: '/Images/Selected-Works/Mobile-works/talkam1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/talkam1.png', '/Images/Selected-Works/Mobile-works/talkam2.png'],
    fullDescription: 'TalkAm is an app that allows users to report, track and monitor human rights abuses, empowering citizens to document and share incidents for accountability.'
  },
  {
    id: 4,
    title: 'Milarn',
    description: 'Employee financial access platform — earned wages before payday',
    thumbnail: '/Images/Selected-Works/Mobile-works/milarn1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'Payment Integration', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/milarn1.png', '/Images/Selected-Works/Mobile-works/milarn2.png'],
    fullDescription: 'Milarn gives employees instant access to their earned wages before payday, providing financial flexibility and control without high-interest loans.'
  },
  {
    id: 5,
    title: 'DitchRide',
    description: 'Ride-hailing platform with real-time tracking and booking',
    thumbnail: '/Images/Selected-Works/Mobile-works/ditch1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/ditch1.png', '/Images/Selected-Works/Mobile-works/ditch2.png', '/Images/Selected-Works/Mobile-works/ditch3.png'],
    fullDescription: 'DitchRide is a ride-hailing mobile application featuring real-time location tracking, seamless booking flows, and driver-passenger matching.'
  },
  {
    id: 6,
    title: 'Zaida',
    description: 'Feature-rich mobile application with modern UI and seamless user experience',
    thumbnail: '/Images/Selected-Works/Mobile-works/ziada1.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/ziada1.png', '/Images/Selected-Works/Mobile-works/ziada2.png'],
    fullDescription: 'Zaida is a mobile application built with Flutter, delivering a smooth and intuitive user experience with modern design principles and robust backend integration.'
  },
  {
    id: 7,
    title: 'Nana Luxe',
    description: 'Premium fashion e-commerce app with personalized feed, real-time order tracking, and minimal monochrome UI',
    thumbnail: '/Images/Selected-Works/Mobile-works/nanaluxe1.png',
    tech: ['FlutterFlow', 'Firebase', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/nanaluxe1.png', '/Images/Selected-Works/Mobile-works/nanaluxe2.png'],
    fullDescription: 'Developed Nana Luxe, a premium fashion e-commerce app built with FlutterFlow. Features a personalized home feed with curated recommendations, real-time order tracking, and category filters. Users can browse product pages with ratings and reviews, manage cart quantities, apply promo codes, and view live subtotals before checkout. Implemented clean state management, smooth navigation, and a minimal monochrome UI that keeps product photography front and center.'
  },
  {
    id: 8,
    title: 'DriveX',
    description: 'Modern ride-hailing passenger app with real-time driver tracking, seamless booking, and multiple payment options',
    thumbnail: '/Images/Selected-Works/Mobile-works/drivex1.png',
    tech: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'Firebase', 'Google Maps'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/drivex1.png', '/Images/Selected-Works/Mobile-works/drivex2.png'],
    fullDescription: 'DriveX is a modern ride-hailing mobile application designed to provide users with a seamless, reliable, and efficient transportation experience. Features real-time ride booking and driver matching, live GPS tracking, multiple payment options, ride history, and push notifications. Built with Flutter and Riverpod for scalable architecture, with optimized performance for faster ride requests and real-time tracking.'
  },
  {
    id: 9,
    title: 'DriveX Driver',
    description: 'Driver-side ride-hailing app with real-time ride requests, earnings dashboard, and turn-by-turn navigation',
    thumbnail: '/Images/Selected-Works/Mobile-works/drivex_driver1.png',
    tech: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'Firebase', 'Google Maps'],
    liveUrl: '#',
    githubUrl: '#',
    screenshots: ['/Images/Selected-Works/Mobile-works/drivex_driver1.png', '/Images/Selected-Works/Mobile-works/drivex_driver2.png'],
    fullDescription: 'DriveX Driver is the companion driver-facing app for the DriveX platform. Enables drivers to accept/decline ride requests in real-time, navigate with turn-by-turn directions, track earnings and trip analytics, and toggle availability. Built with Flutter and Riverpod, featuring background location tracking, smooth ride lifecycle management (accept → start → complete), and an earnings dashboard.'
  }
];

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Flutter Apps with BLoC',
    excerpt: 'Learn how to architect large-scale Flutter applications using the BLoC pattern for clean, testable state management.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&crop=center',
    date: '2024-01-15',
    readTime: '8 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 2,
    title: 'Flutter vs React Native in 2024',
    excerpt: 'A comprehensive comparison of the two leading cross-platform mobile frameworks to help you choose the right one.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center',
    date: '2024-01-10',
    readTime: '12 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 3,
    title: 'Optimizing API Performance in Flutter',
    excerpt: 'Tips and techniques for reducing API latency and improving network performance in Flutter mobile apps.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop&crop=center',
    date: '2024-01-05',
    readTime: '10 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 4,
    title: 'Offline-First Architecture in Flutter',
    excerpt: 'How to build Flutter apps that work seamlessly without internet connectivity and sync when back online.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    date: '2023-12-28',
    readTime: '6 min read',
    content: 'Full blog post content here...'
  },
  {
    id: 5,
    title: 'Firebase Integration Best Practices for Flutter',
    excerpt: 'Discover the best ways to integrate Firebase Auth, Firestore, and Cloud Messaging in your Flutter projects.',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop&crop=center',
    date: '2023-12-20',
    readTime: '9 min read',
    content: 'Full blog post content here...'
  }
];

// Social links data
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Fvrst',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://ng.linkedin.com/in/awwal-olaniyi-b1a375344',
    icon: 'linkedin'
  },
  {
    name: 'Resume',
    url: '#',
    icon: 'document'
  }
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: 'Muiez Kolawole O.',
    position: 'Senior Software Engineer',
    image: '/Images/testimonials/avatar1.jpg',
    rating: 5,
    testimonial: 'Awwal is a highly skilled Flutter developer with a strong eye for detail and a deep understanding of mobile architecture. His ability to deliver production-ready apps consistently is impressive.',
    project: 'Mobile Development',
    date: '2024'
  },
  {
    id: 2,
    name: 'Edoki Chukwuyem',
    position: 'Senior Mobile Developer',
    phone: '+234 814 1584 265',
    image: '/Images/testimonials/avatar2.jpg',
    rating: 5,
    testimonial: 'Awwal is a strong team player with excellent communication skills, making collaboration seamless across teams. He approaches development with clarity and purpose, consistently delivering solutions that align with both user needs and project goals.',
    project: 'Mobile Development',
    date: '2024'
  },
  {
    id: 3,
    name: 'Idris Desmond Adedeji',
    position: 'UI/UX Designer',
    image: '/Images/testimonials/avatar3.jpg',
    rating: 5,
    testimonial: 'Awwal is the kind of developer every designer hopes to work with. He doesn\'t just build interfaces—he elevates them. His attention to detail, deep understanding of user experience, and ability to translate design into fluid, high-performing apps is exceptional. Every collaboration with him results in a product that feels both intentional and refined.',
    project: 'Product Design & Mobile Development',
    date: '2024'
  }
];

// Personal information
export const personalInfo = {
  name: 'Awwal Olaniyi',
  title: 'Mobile Application Developer',
  bio: 'Proficient in cross-platform mobile development with Flutter/Dart. I build mobile apps that combine intuitive design with innovative functionality, creating solutions that meet user needs and align with business objectives.',
  education: 'Bachelor of Agriculture, University of Ilorin',
  location: 'Lagos, Nigeria',
  email: 'awwalfvrst@gmail.com',
  phone: '+234 8135183380'
};
