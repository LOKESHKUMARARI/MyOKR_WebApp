import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand & description */}
        <div>
          <h3 className="text-xl font-bold mb-3">MyOKR</h3>
          <p className="text-gray-600">
            Simple, transparent OKR management to align your teams and drive outcomes.
          </p>
        </div>
        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          {['How it Works', 'Pricing', 'Resources', 'About'].map((name) => (
            <Link 
              key={name} 
              to={'/' + name.toLowerCase().replace(/\s+/g, '-')} 
              className="block py-1 hover:underline"
            >
              {name}
            </Link>
          ))}
        </div>
        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          {['Careers', 'Blog', 'Privacy Policy', 'Terms of Service'].map((name) => (
            <a key={name} href="#" className="block py-1 hover:underline">
              {name}
            </a>
          ))}
        </div>
        {/* Social */}
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex space-x-4">
            {['LinkedIn', 'Twitter', 'Facebook'].map((name) => (
              <a key={name} href="#" className="hover:text-blue-600">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyOKR. All rights reserved.
      </div>
    </footer>
  );
}
