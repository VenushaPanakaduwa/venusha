import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Innovating Software Solutions';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    alert('CV download functionality will be implemented with your actual CV file.');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20minimalist%20professional%20workspace%20with%20clean%20desk%20setup%20featuring%20laptop%20and%20coding%20environment%2C%20soft%20natural%20lighting%20from%20large%20windows%2C%20contemporary%20office%20interior%20with%20plants%20and%20tech%20equipment%2C%20professional%20atmosphere%20with%20teal%20and%20white%20color%20scheme%2C%20ultra-wide%20angle%20view%20with%20left%20side%20having%20soft%20gradient%20white%20space%20for%20text%20overlay%2C%20right%20side%20showing%20detailed%20workspace%20elements%2C%20photorealistic%20style%2C%20high-end%20professional%20photography&width=1920&height=1080&seq=hero-bg-001&orientation=landscape)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              VP
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Venusha Panakaduwa
          </h1>

          <div className="mb-8 h-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-600">
              {displayText}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl animate-fade-in-delay">
            Highly motivated Software Engineering student with a strong academic background, 
            committed to continuous learning and delivering innovative, real-world solutions.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              View Projects
            </button>
            <button
              onClick={downloadCV}
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-download-line mr-2"></i>
              Download CV
            </button>
          </div>

          <div className="mt-12 flex gap-4 animate-fade-in-delay-3">
            <a
              href="https://www.linkedin.com/in/venusha-panakaduwa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <i className="ri-linkedin-fill text-2xl text-teal-600"></i>
            </a>
            <a
              href="mailto:venushakumaril23@gmail.com"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <i className="ri-mail-fill text-2xl text-teal-600"></i>
            </a>
            <a
              href="tel:+94701609819"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <i className="ri-phone-fill text-2xl text-teal-600"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-teal-600"></i>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }
      `}</style>
    </section>
  );
}