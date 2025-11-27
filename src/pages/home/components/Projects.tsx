import { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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

  const projects = [
    {
      title: 'ESOFT Full-Stack Ecommerce Web Application',
      description: 'A comprehensive ecommerce platform featuring product management, shopping cart functionality, secure checkout process, and admin dashboard for inventory management.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20ecommerce%20website%20interface%20showing%20product%20catalog%20with%20shopping%20cart%20and%20checkout%20features%2C%20clean%20professional%20design%20with%20product%20cards%20and%20navigation%2C%20bright%20white%20background%20with%20colorful%20product%20images%2C%20responsive%20web%20design%20layout%2C%20high%20quality%20web%20application%20screenshot%20style&width=800&height=500&seq=project-ecommerce-001&orientation=landscape',
      icon: 'ri-shopping-cart-line',
      color: 'bg-blue-500',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard'],
    },
    {
      title: 'LMS - North Central Province Commerce Stream',
      description: 'A robust Learning Management System designed for educational institutions, featuring course management, student enrollment, assignment submission, and progress tracking.',
      technologies: ['Angular', 'Spring', 'TypeScript', 'Java'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20learning%20management%20system%20interface%20with%20course%20dashboard%2C%20student%20progress%20tracking%2C%20assignment%20modules%20and%20educational%20content%2C%20clean%20academic%20design%20with%20organized%20layout%2C%20professional%20education%20platform%20screenshot%2C%20bright%20interface%20with%20blue%20and%20white%20color%20scheme&width=800&height=500&seq=project-lms-002&orientation=landscape',
      icon: 'ri-book-open-line',
      color: 'bg-green-500',
      features: ['Course Management', 'Student Portal', 'Assignment System', 'Progress Tracking'],
    },
    {
      title: 'Criminal Management System - POS System',
      description: 'An integrated Point of Sale system with criminal record management capabilities, featuring transaction processing, inventory tracking, and comprehensive reporting.',
      technologies: ['Java', 'Java Swing', 'MySQL', 'JDBC', 'JasperReports'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20point%20of%20sale%20system%20interface%20with%20transaction%20management%2C%20inventory%20tracking%20and%20reporting%20dashboard%2C%20modern%20desktop%20application%20design%20with%20data%20tables%20and%20charts%2C%20clean%20business%20software%20interface%20with%20organized%20layout%20and%20professional%20styling&width=800&height=500&seq=project-pos-003&orientation=landscape',
      icon: 'ri-file-list-line',
      color: 'bg-purple-500',
      features: ['Transaction Processing', 'Inventory Management', 'Report Generation', 'Data Analytics'],
    },
    {
      title: 'Prototype Robot Car & Robot Arm Projects',
      description: 'Innovative robotics projects featuring autonomous navigation for robot car and precision control for robot arm, demonstrating IoT and embedded systems expertise.',
      technologies: ['Arduino', 'C++', 'Sensors', 'Motors'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20robotics%20project%20with%20Arduino-controlled%20robot%20car%20and%20robotic%20arm%20on%20clean%20white%20workbench%2C%20electronic%20components%20and%20circuit%20boards%20visible%2C%20professional%20engineering%20project%20photography%2C%20bright%20lighting%20with%20technical%20equipment%2C%20innovation%20and%20technology%20theme&width=800&height=500&seq=project-robot-004&orientation=landscape',
      icon: 'ri-robot-line',
      color: 'bg-orange-500',
      features: ['Autonomous Navigation', 'Sensor Integration', 'Motor Control', 'IoT Connectivity'],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects Showcase</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of innovative software solutions and technical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveProject(index)}
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className={`w-12 h-12 flex items-center justify-center ${project.color} rounded-lg`}>
                    <i className={`${project.icon} text-2xl text-white`}></i>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <i className="ri-check-line text-teal-600 mr-1"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeProject !== null && (
          <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 border-l-4 border-teal-600">
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 flex items-center justify-center ${projects[activeProject].color} rounded-lg mr-4`}>
                <i className={`${projects[activeProject].icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Featured: {projects[activeProject].title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{projects[activeProject].description}</p>
            <div className="flex flex-wrap gap-2">
              {projects[activeProject].technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white text-teal-700 text-sm font-semibold rounded-lg shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}