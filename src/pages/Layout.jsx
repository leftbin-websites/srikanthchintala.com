
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Scale, Menu, X, Phone, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Practice Areas", path: createPageUrl("PracticeAreas") },
    { name: "Organizations", path: createPageUrl("Organizations") },
    { name: "Publications", path: createPageUrl("Publications") },
    { name: "Pro Bono", path: createPageUrl("ProBono") },
    { name: "Contact", path: createPageUrl("Contact") }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <style>{`
        :root {
          --color-primary-900: #1e3a8a;
          --color-primary-800: #1e40af;
          --color-primary-700: #1d4ed8;
          --color-primary-600: #2563eb;
          --color-secondary-700: #d97706;
          --color-secondary-600: #f59e0b;
          --color-accent-700: #dc2626;
          --color-success-600: #16a34a;
        }
      `}</style>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Scale className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Srikanth Chintala
                </h1>
                <p className="text-sm text-gray-600">High Court Lawyer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link to={createPageUrl("Contact")} className="hidden lg:block">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Schedule Consultation
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                    location.pathname === item.path
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl("Contact")} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Schedule Consultation
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Srikanth Chintala
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                High Court Lawyer | Human Rights Advocate | Social Justice Champion
              </p>
              <p className="text-gray-400 text-sm">
                Committed to constitutional morality, social justice, and providing accessible legal services to all.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to={createPageUrl("About")} className="hover:text-amber-500 transition-colors">About</Link></li>
                <li><Link to={createPageUrl("PracticeAreas")} className="hover:text-amber-500 transition-colors">Practice Areas</Link></li>
                <li><Link to={createPageUrl("Organizations")} className="hover:text-amber-500 transition-colors">Organizations</Link></li>
                <li><Link to={createPageUrl("ProBono")} className="hover:text-amber-500 transition-colors">Pro Bono Services</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Available on request</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Available on request</span>
                </li>
                <li className="flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  <a 
                    href="https://www.facebook.com/share/1BjEVzqBVt/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Facebook Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Srikanth Chintala. All rights reserved.</p>
            <p className="mt-2">Justice Through Constitutional Morality</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
