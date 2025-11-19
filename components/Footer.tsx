export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/images/eskeeen-logo-final-1024x449.png"
              alt="Eskeen Clinic"
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Expert CO2 laser treatments in London
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+447846888649" className="hover:text-white">
                  +44 7846 888649
                </a>
              </li>
              <li>115 Lower Richmond Rd.</li>
              <li>Putney, London SW15 1EX</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="https://eskeen.co.uk/privacy-policy-2/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="mb-2">&copy; 2024 Eskeen Clinic. All rights reserved.</p>
          <p className="text-xs text-gray-500">
            This site may use Meta tracking technologies to improve user experience and analyze site performance.
          </p>
        </div>
      </div>
    </footer>
  )
}