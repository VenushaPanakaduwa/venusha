import { useState, useEffect, useRef } from 'react';

export default function About() {
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

  const coreStrengths = [
    { icon: 'ri-time-line', title: 'Excellent Time Management', progress: 95 },
    { icon: 'ri-lightbulb-line', title: 'Creative Problem-Solving', progress: 90 },
    { icon: 'ri-rocket-line', title: 'Emerging Technologies', progress: 88 },
    { icon: 'ri-book-open-line', title: 'Continuous Learning', progress: 92 },
  ];

  const technicalSkills = [
    { icon: 'ri-code-s-slash-line', name: 'Java', color: 'text-orange-600' },
    { icon: 'ri-javascript-line', name: 'JavaScript', color: 'text-yellow-500' },
    { icon: 'ri-reactjs-line', name: 'React', color: 'text-blue-500' },
    { icon: 'ri-angular-fill', name: 'Angular', color: 'text-red-600' },
    { icon: 'ri-css3-line', name: 'CSS', color: 'text-blue-600' },
    { icon: 'ri-bootstrap-line', name: 'Bootstrap', color: 'text-purple-600' },
    { icon: 'ri-smartphone-line', name: 'React Native', color: 'text-blue-400' },
    { icon: 'ri-server-line', name: 'Spring Boot', color: 'text-green-600' },
    { icon: 'ri-database-2-line', name: 'MySQL', color: 'text-blue-700' },
    { icon: 'ri-fire-line', name: 'Firebase', color: 'text-orange-500' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Strengths</h3>
            <div className="space-y-6">
              {coreStrengths.map((strength, index) => (
                <div key={index} className="group">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg mr-3 group-hover:bg-teal-600 transition-colors duration-300">
                      <i className={`${strength.icon} text-xl text-teal-600 group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <span className="font-semibold text-gray-800">{strength.title}</span>
                  </div>
                  <div className="ml-13 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-teal-600 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${strength.progress}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mr-4">
                  <i className="ri-graduation-cap-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">BEng (Hons) Software Engineering</h4>
                  <p className="text-teal-600 font-semibold">IIC University of Technology, Cambodia</p>
                  <p className="text-gray-600 text-sm mt-1">April 2021 - April 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600 hover:shadow-xl transition-shadow duration-300 mt-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mr-4">
                  <i className="ri-code-box-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Developer Stack Master Program</h4>
                  <p className="text-gray-600 text-sm mt-1">Advanced Development Course</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Toolbox</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <i className={`${skill.icon} text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <span className="text-sm font-semibold text-gray-800 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}