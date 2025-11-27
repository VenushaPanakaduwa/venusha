export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              Venusha Panakaduwa
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineering student passionate about creating innovative solutions and delivering excellence in every project.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer capitalize whitespace-nowrap"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/venusha-panakaduwa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-teal-600 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a
                href="mailto:venushakumaril23@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-teal-600 transition-colors cursor-pointer"
              >
                <i className="ri-mail-fill text-xl"></i>
              </a>
              <a
                href="tel:+94701609819"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-teal-600 transition-colors cursor-pointer"
              >
                <i className="ri-phone-fill text-xl"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              <i className="ri-map-pin-line mr-2"></i>
              Panadura, Sri Lanka
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Venusha Panakaduwa. All rights reserved.
          </p>
          <a
            href="https://readdy.ai/?origin=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer whitespace-nowrap"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}