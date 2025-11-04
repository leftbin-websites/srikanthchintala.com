
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Linkedin, Twitter } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speaking & Media", path: "/speaking-media" }
  ];

  const isActivePath = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <style>{`
        :root {
          --color-primary: #1e3a5f;
          --color-accent: #c89f5d;
          --color-text: #2d3436;
          --color-text-secondary: #636e72;
          --color-background: #fefdfb;
          --color-background-alt: #f8f7f5;
          --color-link: #1e3a5f;
          --color-link-hover: #c89f5d;
          --color-border: #e0ddd8;
          --font-heading: 'Playfair Display', Georgia, serif;
          --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --max-width-content: 1200px;
          --max-width-reading: 720px;
        }

        * {
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-body);
          color: var(--color-text);
          background: var(--color-background);
          line-height: 1.7;
          font-size: 18px;
          margin: 0;
          padding: 0;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
          font-weight: 700;
          line-height: 1.2;
          color: var(--color-primary);
        }

        a {
          color: var(--color-link);
          text-decoration: none;
          transition: color 0.2s;
        }

        a:hover {
          color: var(--color-link-hover);
        }

        img {
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          body {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white border-b-2 border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <Link to="/" className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] font-['Playfair_Display']">
                  Srikanth Chintala
                </h1>
                <p className="text-xs md:text-sm text-[#636e72] mt-1">
                  High Court Lawyer | Documentary Filmmaker | Ambedkarite | Humanist
                </p>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-base font-medium transition-colors ${
                      isActivePath(item.path)
                        ? "text-[#c89f5d]"
                        : "text-[#2d3436] hover:text-[#c89f5d]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Social Icons */}
                <div className="flex items-center gap-3 ml-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#636e72] hover:text-[#c89f5d] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#636e72] hover:text-[#c89f5d] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#2d3436]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#2d3436]" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t pt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-2 text-base font-medium ${
                      isActivePath(item.path)
                        ? "text-[#c89f5d]"
                        : "text-[#2d3436]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Social Icons */}
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#636e72] hover:text-[#c89f5d]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#636e72] hover:text-[#c89f5d]"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#1e3a5f] text-white mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold font-['Playfair_Display'] mb-4">
                  Srikanth Chintala
                </h3>
                <p className="text-sm text-gray-300">
                  High Court Lawyer | Human Rights Advocate
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="flex flex-col gap-2">
                  <Link to="/" className="text-sm text-gray-300 hover:text-[#c89f5d]">
                    Home
                  </Link>
                  <Link to="/about" className="text-sm text-gray-300 hover:text-[#c89f5d]">
                    About
                  </Link>
                  <Link to="/speaking-media" className="text-sm text-gray-300 hover:text-[#c89f5d]">
                    Speaking & Media
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#c89f5d]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#c89f5d]"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-300">
                © 2025 Srikanth Chintala. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
