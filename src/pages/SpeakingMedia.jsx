import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mic, Tv, BookOpen, Award, Globe, Newspaper } from 'lucide-react';

export default function SpeakingMedia() {
  return (
    <div className="min-h-screen bg-[#fefdfb]">
      {/* Header */}
      <header className="bg-white border-b border-[#e0ddd8] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('Home')} className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Srikanth Chintala
              </h1>
              <p className="text-sm md:text-base text-[#636e72] mt-1 font-medium">
                High Court Lawyer | Documentary Filmmaker | Ambedkarite | Humanist
              </p>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link to={createPageUrl('Home')} className="text-[#636e72] hover:text-[#1e3a5f] transition-colors font-medium">
                Home
              </Link>
              <Link to={createPageUrl('About')} className="text-[#636e72] hover:text-[#1e3a5f] transition-colors font-medium">
                About
              </Link>
              <Link to={createPageUrl('SpeakingMedia')} className="text-[#1e3a5f] font-semibold border-b-2 border-[#c89f5d]">
                Speaking & Media
              </Link>
            </nav>

            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-6 h-0.5 bg-[#1e3a5f] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#1e3a5f] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#1e3a5f]"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Mic className="w-20 h-20 mx-auto mb-6 text-[#c89f5d]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Speaking & Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            International conferences, media appearances, and publications bringing constitutional 
            discourse and social justice advocacy to diverse audiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* International Conferences */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              International Conferences
            </h2>
          </div>
          
          <p className="text-lg text-[#636e72] mb-10 leading-relaxed">
            Representing India and organizations at prestigious international forums, contributing to 
            global dialogue on human rights, constitutional values, and social justice.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* London Conference */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e0ddd8]">
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-20 h-20 text-white opacity-20" />
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold">2015</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Mic className="w-6 h-6 text-[#c89f5d]" />
                  <span className="text-sm font-semibold text-[#c89f5d] uppercase tracking-wide">
                    Keynote Speaker
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  International Conference on Human Rights
                </h3>
                <p className="text-[#636e72] mb-4 text-lg">
                  London School of Economics, London
                </p>
                <p className="text-[#2d3436] leading-relaxed">
                  Organized and delivered keynote address on human rights challenges and constitutional 
                  protections, engaging with global legal scholars and activists.
                </p>
              </div>
            </div>

            {/* Columbia Conference */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e0ddd8]">
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-600 to-purple-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-20 h-20 text-white opacity-20" />
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold">2016</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Mic className="w-6 h-6 text-[#c89f5d]" />
                  <span className="text-sm font-semibold text-[#c89f5d] uppercase tracking-wide">
                    Keynote Speaker
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  International Conference on Human Rights
                </h3>
                <p className="text-[#636e72] mb-4 text-lg">
                  Columbia University, USA
                </p>
                <p className="text-[#2d3436] leading-relaxed">
                  Organized and presented on social justice movements, caste discrimination, and 
                  constitutional morality at one of America's leading academic institutions.
                </p>
              </div>
            </div>

            {/* FNF Germany */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e0ddd8]">
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-green-600 to-green-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-20 h-20 text-white opacity-20" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-6 h-6 text-[#c89f5d]" />
                  <span className="text-sm font-semibold text-[#c89f5d] uppercase tracking-wide">
                    Participant
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  FNF – Germany Conferences
                </h3>
                <p className="text-[#636e72] mb-4 text-lg">
                  Friedrich Naumann Foundation
                </p>
                <p className="text-[#2d3436] leading-relaxed">
                  Participated in international dialogues on democratic values, human rights advocacy, 
                  and civil society engagement across multiple forums.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Publications & Columns
            </h2>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-amber-100">
            <div className="flex items-start gap-6 mb-8">
              <Newspaper className="w-16 h-16 text-[#c89f5d] flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Weekly Legal Column
                </h3>
                <p className="text-xl text-[#636e72] mb-4">
                  Sakshi (Telugu Daily)
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-[#2d3436] leading-relaxed">
                A widely read weekly column that brings clarity and practical insights into contemporary 
                legal issues. The column makes complex constitutional and legal concepts accessible to the 
                general public, fostering greater legal awareness and civic engagement.
              </p>
              
              <div className="border-l-4 border-[#c89f5d] pl-6">
                <h4 className="font-semibold text-xl text-[#1e3a5f] mb-3">Topics Covered</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                    <span className="text-[#2d3436]">Constitutional Law & Rights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                    <span className="text-[#2d3436]">Public Interest Litigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                    <span className="text-[#2d3436]">Social Justice & Equality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                    <span className="text-[#2d3436]">Legal Rights & Remedies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                    <span className="text-[#2d3436]">Human Rights Advocacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                    <span className="text-[#2d3436]">Judicial Transparency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Appearances */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Tv className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Media Appearances
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#e0ddd8]">
            <p className="text-lg text-[#2d3436] leading-relaxed mb-8">
              Regular expert commentary on legal and constitutional matters, providing analysis and 
              insights to help the public understand complex legal issues and their implications for 
              society and democracy.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-100">
                <Tv className="w-12 h-12 text-[#c89f5d] mb-4" />
                <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">iDream Media</h3>
                <p className="text-[#636e72]">
                  Expert analysis on constitutional law, social justice, and legal reforms
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                <Tv className="w-12 h-12 text-[#c89f5d] mb-4" />
                <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">TV9</h3>
                <p className="text-[#636e72]">
                  Commentary on legal matters, public interest cases, and human rights
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                <Tv className="w-12 h-12 text-[#c89f5d] mb-4" />
                <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">Various Outlets</h3>
                <p className="text-[#636e72]">
                  Featured as legal expert on constitutional issues and judicial matters
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-[#2d3436] leading-relaxed italic">
                "As a recognized voice in the legal media landscape, Mr. Chintala brings constitutional 
                principles to life through accessible, informed commentary that bridges the gap between 
                law and public understanding."
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Bringing Constitutional Discourse to Global Platforms
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Through international conferences, regular media appearances, and weekly publications, 
              making complex legal matters accessible to diverse audiences.
            </p>
            <Link 
              to={createPageUrl('About')}
              className="inline-block bg-[#c89f5d] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b38a4d] transition-colors text-lg"
            >
              Learn More About My Work
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-[#2d3436] text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Srikanth Chintala
              </h3>
              <p className="text-gray-400 leading-relaxed">
                High Court Lawyer | Documentary Filmmaker | Ambedkarite | Humanist
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-[#c89f5d]">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to={createPageUrl('Home')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to={createPageUrl('About')} className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link to={createPageUrl('SpeakingMedia')} className="text-gray-400 hover:text-white transition-colors">
                  Speaking & Media
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-[#c89f5d]">Connect</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-[#3d4446] rounded-full flex items-center justify-center hover:bg-[#c89f5d] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-[#3d4446] rounded-full flex items-center justify-center hover:bg-[#c89f5d] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 Srikanth Chintala. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}