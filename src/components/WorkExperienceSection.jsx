import { useState, useRef } from 'react'

const workExperience = [
  {
    id: 1,
    position: 'Mobile App Developer (Flutter)',
    company: 'Special Man Global Solution LTD',
    period: '2024 – Present',
    duration: 'Ongoing | Lagos, Nigeria',
    description: 'Engineered and delivered scalable, production-ready mobile applications across multiple client projects, ensuring high performance, responsiveness, and cross-platform consistency.',
    responsibilities: [
      'Engineered scalable, production-ready mobile apps across multiple client projects',
      'Championed code quality through structured code reviews and best practices',
      'Collaborated with cross-functional teams to translate complex requirements into robust solutions',
      'Optimized UI performance and rendering, reducing lag across devices and screen sizes',
      'Delivered applications used by real users in production'
    ],
    projects: ['Production Mobile Apps', 'Cross-Platform Solutions', 'UI Performance Optimization'],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'BLoC', 'Riverpod', 'Git'],
    isActive: true
  },
  {
    id: 2,
    position: 'Mobile App Developer (Flutter)',
    company: 'Ziada Global Ltd',
    period: 'January 2021 – Present',
    duration: '3+ years | Currently Active',
    description: 'Led mobile application development at Ziada Global Ltd, building and maintaining cross-platform Flutter apps with a focus on performance, scalability, and seamless user experience.',
    responsibilities: [
      'Led end-to-end Flutter mobile app development across multiple product lines',
      'Implemented clean architecture patterns for scalable and maintainable codebases',
      'Collaborated with designers and backend engineers to deliver polished user experiences',
      'Supervised code quality through structured reviews and best practices',
      'Increased app performance and reduced crash rates by 30%',
      'Improved user retention through optimized onboarding and UI flows'
    ],
    projects: ['Ziada Mobile App', 'Cross-Platform Flutter Solution', 'Performance Optimization Initiative'],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'BLoC', 'Riverpod', 'Git', 'Figma'],
    isActive: true
  },
  {
    id: 3,
    position: 'Mobile App Developer (Flutter)',
    company: 'TAF (Election Observer PWD Hub)',
    period: '2024',
    duration: ' Nigeria',
    description: 'Contributed to the development of a real-time election monitoring system used during the Anambra State gubernatorial election, approved by INEC.',
    responsibilities: [
      'Built features for citizens to report and document election irregularities via media uploads',
      'Implemented live streaming functionality for real-time broadcasting of on-ground events',
      'Designed an offline-first submission system for capturing reports without connectivity',
      'Optimized media handling and network performance for low-bandwidth conditions',
      'Supported a platform approved for use by INEC in a high-stakes environment'
    ],
    projects: ['TAFAfrica Election Monitoring App', 'Offline-First Report System', 'Live Streaming Feature'],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Live Streaming', 'Offline Storage', 'REST API'],
    isActive: false
  },
  {
    id: 4,
    position: 'Mobile App Developer (Flutter)',
    company: 'Spotzz Technologies',
    period: '06/2024 – 08/2024',
    duration: '3 months (Contract)',
    description: 'Architected merchant-facing dashboards and led end-to-end REST API integrations, improving operational efficiency and data flow reliability.',
    responsibilities: [
      'Architected and developed merchant-facing dashboards for real-time seller interaction',
      'Led end-to-end REST API integrations across multiple services',
      'Designed and implemented a secure role-based authentication system',
      'Optimized API communication and UI rendering for faster response times',
      'Delivered performance improvements contributing to higher user engagement'
    ],
    projects: ['Merchant Dashboard', 'Role-Based Auth System', 'API Integration Layer'],
    technologies: ['Flutter', 'Dart', 'REST API', 'Firebase', 'BLoC', 'Git'],
    isActive: false
  },
  {
    id: 5,
    position: 'Mobile App Developer (Flutter)',
    company: 'TechNova',
    period: '12/2023 – 02/2024',
    duration: '3 months (Contract) | Austin, Texas, USA',
    description: 'Transformed a low-performing mobile application by restructuring API architecture and integrating a secure payment gateway, reducing API latency by 25–40%.',
    responsibilities: [
      'Restructured API architecture and optimized network requests, reducing latency by 25–40%',
      'Spearheaded integration of a secure payment gateway for reliable financial transactions',
      'Identified and resolved critical performance bottlenecks',
      'Strengthened application resilience through improved error handling',
      'Improved overall responsiveness, contributing to better user retention'
    ],
    projects: ['API Architecture Overhaul', 'Payment Gateway Integration', 'Performance Optimization'],
    technologies: ['Flutter', 'Dart', 'REST API', 'Payment Gateway', 'Firebase', 'Git'],
    isActive: false
  },
  {
    id: 6,
    position: 'Mobile App Developer (Flutter)',
    company: 'NextGen Innovations',
    period: '08/2023 – 01/2024',
    duration: '6 months (Contract)',
    description: 'Re-architected a disorganized codebase into a clean, modular, scalable architecture achieving a 90% reduction in bugs and leading development using agile methodologies.',
    responsibilities: [
      'Re-architected codebase into clean, modular architecture — 90% reduction in bugs',
      'Led development using agile methodologies, increasing team productivity by 30%',
      'Established robust code review processes, reducing post-release issues by 20%',
      'Owned the pull request lifecycle, ensuring clean merges and codebase integrity',
      'Played a key role in investor-facing product demos'
    ],
    projects: ['Codebase Re-architecture', 'Agile Development Process', 'Investor Demo App'],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Provider', 'Git', 'JIRA'],
    isActive: false
  },
  {
    id: 7,
    position: 'Mobile App Developer (Flutter)',
    company: 'DriveX',
    period: '2025',
    duration: '6 months (Contract)',
    description: 'Built both the passenger and driver-side applications for DriveX, a modern ride-hailing platform. Delivered two production-ready Flutter apps with real-time tracking, payments, and seamless ride lifecycle management.',
    responsibilities: [
      'Developed cross-platform passenger and driver apps using Flutter & Dart',
      'Implemented state management using Riverpod for scalable architecture',
      'Integrated REST APIs for ride booking, user authentication, and payments',
      'Built real-time ride request handling and background location tracking',
      'Developed earnings dashboard and trip analytics for drivers',
      'Handled error states, loading states, and network resilience'
    ],
    projects: ['DriveX Passenger App', 'DriveX Driver App', 'Real-time Ride Tracking', 'Earnings Dashboard'],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'Firebase', 'Google Maps', 'Git'],
    isActive: false
  }
]

const WorkExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(workExperience[0])
  const [hoveredCard, setHoveredCard] = useState(null)
  const detailsRef = useRef(null)

  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience)
    try {
      if (typeof window !== 'undefined' && window.innerWidth < 1024 && detailsRef.current) {
        setTimeout(() => {
          if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    } catch (error) {
      console.log('Scroll error handled')
    }
  }

  return (
    <section id="work-experience" className="min-h-screen py-16 md:py-24 bg-navy text-white relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-8 md:top-12 left-4 md:left-8 z-10">
        <div className="font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-white/20">
          04
        </div>
        <div className="w-8 md:w-12 h-1 bg-white/30 mt-2"></div>
      </div>

      <div className="max-w-7xl mx-auto py-16 md:py-20 relative z-10 px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
            My Work <span className="text-deep-orange">Experience</span>
          </h2>
          <p className="font-inter text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            Over 2 years of crafting high-performance mobile experiences across startups and established companies.
            Each role has shaped my expertise in building scalable, user-centric Flutter applications.
          </p>
        </div>

        {/* Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Experience List - Left Side */}
          <div className="lg:col-span-1 space-y-4 order-1 lg:order-1">
            <h3 className="font-space-grotesk font-bold text-lg md:text-xl mb-4 md:mb-6 text-deep-orange">
              Companies & Roles
            </h3>
            <div className="space-y-3">
              {workExperience.map((exp) => (
                <div
                  key={exp.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    selectedExperience.id === exp.id
                      ? 'bg-deep-orange/20 border-deep-orange text-white'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  onClick={() => handleExperienceSelect(exp)}
                  onMouseEnter={() => setHoveredCard(exp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-space-grotesk font-semibold text-sm md:text-base">
                      {exp.company}
                    </h4>
                    {exp.isActive && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-xs md:text-sm text-white/60 mb-1">{exp.position}</p>
                  <p className="font-inter text-xs md:text-sm text-white/50">{exp.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Details - Right Side */}
          <div ref={detailsRef} className="lg:col-span-2 order-2 lg:order-2">
            {selectedExperience && (
              <div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
                key={`experience-${selectedExperience.id}`}
              >
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl">
                      {selectedExperience.position}
                    </h3>
                    {selectedExperience.isActive && (
                      <span className="px-4 py-2 bg-deep-orange/20 text-deep-orange text-sm rounded-full font-semibold mt-2 md:mt-0 w-fit">
                        Currently Active
                      </span>
                    )}
                  </div>
                  <h4 className="font-space-grotesk font-semibold text-xl text-deep-orange mb-2">
                    {selectedExperience.company}
                  </h4>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/60">
                    <span className="font-inter text-sm">{selectedExperience.period}</span>
                    <span className="hidden md:block">•</span>
                    <span className="font-inter text-sm">{selectedExperience.duration}</span>
                  </div>
                </div>

                <p className="font-inter text-white/80 leading-relaxed mb-6">
                  {selectedExperience.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-space-grotesk font-semibold text-lg mb-3 text-white">
                    Key Responsibilities
                  </h5>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedExperience.responsibilities && selectedExperience.responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-deep-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-inter text-sm text-white/70 leading-relaxed">
                          {responsibility}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-space-grotesk font-semibold text-lg mb-3 text-white">
                    Key Projects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.projects && selectedExperience.projects.map((project, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-deep-orange/10 text-deep-orange border border-deep-orange/20 rounded-full text-sm font-inter hover:scale-105 transition-transform duration-200"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-space-grotesk font-semibold text-lg mb-3 text-white">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies && selectedExperience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/10 text-white rounded-full text-sm font-inter hover:bg-white/20 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-4 gap-6">
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '15+', label: 'Apps Delivered' },
            { number: '7+', label: 'Companies Worked With' },
            { number: '90%', label: 'Bug Reduction Achieved' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="font-space-grotesk font-bold text-3xl md:text-4xl text-deep-orange mb-2">
                {stat.number}
              </div>
              <div className="font-inter text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceSection
