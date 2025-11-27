import { useState, useEffect, useRef } from 'react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: 'Intern Business Analysis/Project Manager',
      company: 'Sri Lanka Telecom',
      period: 'August 2025 - Present',
      icon: 'ri-briefcase-line',
      color: 'bg-blue-500',
      description: 'Leading business analysis initiatives and managing cross-functional projects to drive digital transformation.',
      highlights: [
        'Conducting comprehensive business analysis for telecom solutions',
        'Managing project timelines and stakeholder communications',
        'Implementing agile methodologies for project delivery',
      ],
    },
    {
      title: 'Intern Software Engineer',
      company: 'Seekers Cloud Pvt Ltd.',
      period: 'September 2024 - May 2025',
      icon: 'ri-code-box-line',
      color: 'bg-teal-500',
      description: 'Collaborated with cross-functional teams to develop, test, and deploy innovative software solutions.',
      highlights: [
        'Developed and deployed over 20 software solutions',
        'Enhanced application performance by optimizing algorithms and data structures',
        'Collaborated with designers and product managers for seamless integration',
      ],
    },
    {
      title: 'IT Officer',
      company: 'Sky Ceylon Pvt Ltd.',
      period: 'March 2023 - July 2024',
      icon: 'ri-computer-line',
      color: 'bg-purple-500',
      description: 'Provided comprehensive technical support and led IT infrastructure projects.',
      highlights: [
        'Provided technical support and troubleshooting for hardware and software issues',
        'Led IT projects and system upgrades to improve operational efficiency',
        'Implemented cybersecurity measures to protect company data',
        'Trained staff on new technologies and best practices',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-teal-600">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 flex items-center justify-center ${exp.color} rounded-lg mr-4`}>
                        <i className={`${exp.icon} text-2xl text-white`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-teal-600 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 flex items-center">
                      <i className="ri-calendar-line mr-2"></i>
                      {exp.period}
                    </p>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <i className="ri-check-line text-teal-600 mr-2 mt-1"></i>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}