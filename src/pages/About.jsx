import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Scale, Users, Globe, BookOpen, Award, Heart, ArrowLeft } from 'lucide-react';

export default function About() {
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
              <Link to={createPageUrl('About')} className="text-[#1e3a5f] font-semibold border-b-2 border-[#c89f5d]">
                About
              </Link>
              <Link to={createPageUrl('SpeakingMedia')} className="text-[#636e72] hover:text-[#1e3a5f] transition-colors font-medium">
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
          <Scale className="w-20 h-20 mx-auto mb-6 text-[#c89f5d]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Srikanth Chintala
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            A High Court lawyer by profession, documentary filmmaker by passion, noted Ambedkarite, 
            and humanist by conviction—working at the intersection of constitutional law, social justice, and human rights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#2d3436] leading-relaxed mb-6">
              Srikanth Chintala's professional and personal pursuits are deeply rooted in the ideals of 
              constitutional morality, social justice, and human rights. Through his legal practice, 
              organizational leadership, and public advocacy, he works toward making justice accessible 
              to all and ensuring that constitutional principles translate into lived reality.
            </p>
          </div>
        </section>

        {/* Professional Practice */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-8 h-8 text-[#c89f5d]" />
            <h2 className="text-3xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Professional Practice
            </h2>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0ddd8]">
            <p className="text-lg text-[#2d3436] leading-relaxed mb-6">
              Mr. Chintala is a noted Human Rights and Constitutional Lawyer practicing primarily before 
              the High Courts of Telangana and Andhra Pradesh, as well as the District Judiciary of Hyderabad. 
              He appears in the Supreme Court on selected matters and has represented clients in several 
              prominent matters involving constitutional, criminal, and service laws.
            </p>
            
            <div className="border-l-4 border-[#c89f5d] pl-6 mb-6">
              <h3 className="font-semibold text-xl text-[#1e3a5f] mb-3">Areas of Expertise</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                  <span className="text-[#2d3436]">Constitutional Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                  <span className="text-[#2d3436]">Service & Labour Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                  <span className="text-[#2d3436]">Family Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                  <span className="text-[#2d3436]">Criminal Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                  <span className="text-[#2d3436]">Property Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                  <span className="text-[#2d3436]">Corporate Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full"></div>
                  <span className="text-[#2d3436]">Arbitration</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-[#636e72] italic">
              Known for his commitment to justice and accessibility, he regularly provides free legal 
              assistance to those in need and actively undertakes public interest cases for the 
              protection of fundamental rights.
            </p>
          </div>
        </section>

        {/* Organizations */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-[#c89f5d]" />
            <h2 className="text-3xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Organizations Founded
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Indian Lawyers Association */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Indian Lawyers Association (ILA)
              </h3>
              <p className="text-lg text-[#2d3436] leading-relaxed mb-4">
                One of the leading lawyers associations based and registered in Andhra Pradesh, 
                founded by Srikanth Chintala. The current president is Mr. G. Shantha Kumar.
              </p>
              <p className="text-[#636e72] leading-relaxed mb-4">
                ILA has a strong presence primarily in the states of Andhra Pradesh, Telangana, 
                Maharashtra, and Delhi. The association is backed by several renowned legal experts, 
                professors, and former judges of the High Courts, and has been appreciated by 
                several judges of South Indian States.
              </p>
            </div>

            {/* Association for Public Interest */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-start gap-3 mb-4">
                <Heart className="w-8 h-8 text-[#c89f5d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Association for Public Interest (API)
                  </h3>
                  <p className="text-sm font-semibold text-purple-700 mb-3">Founder & President</p>
                </div>
              </div>
              
              <p className="text-lg text-[#2d3436] leading-relaxed mb-4">
                A non-profit organization established with the objective of promoting constitutional 
                morality and its principles among the public. Under his leadership, API actively works 
                towards progressive socio-political and judicial reforms.
              </p>
              
              <div className="border-l-4 border-[#c89f5d] pl-6">
                <h4 className="font-semibold text-lg text-[#1e3a5f] mb-3">Key Activities</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#2d3436]">Providing pro bono legal services to the economically disadvantaged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#2d3436]">Filing and pursuing Public Interest Litigations (PILs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#2d3436]">Organizing conferences, lectures, and awareness programs on constitutional and legal issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* International Engagements */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-[#c89f5d]" />
            <h2 className="text-3xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              International Engagements
            </h2>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0ddd8]">
            <p className="text-lg text-[#2d3436] leading-relaxed mb-6">
              Mr. Chintala has represented India and his organizations at several prestigious 
              international conferences, serving as both organizer and keynote speaker:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 pb-6 border-b border-[#e0ddd8]">
                <Award className="w-12 h-12 text-[#c89f5d] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    International Conference on Human Rights
                  </h3>
                  <p className="text-[#636e72] mb-1">London School of Economics, London</p>
                  <p className="text-[#2d3436] font-semibold">2015 | Organizer & Keynote Speaker</p>
                </div>
              </div>
              
              <div className="flex gap-4 pb-6 border-b border-[#e0ddd8]">
                <Award className="w-12 h-12 text-[#c89f5d] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    International Conference on Human Rights
                  </h3>
                  <p className="text-[#636e72] mb-1">Columbia University, USA</p>
                  <p className="text-[#2d3436] font-semibold">2016 | Organizer & Keynote Speaker</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Globe className="w-12 h-12 text-[#c89f5d] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl text-[#1e3a5f] mb-2">
                    FNF – Germany
                  </h3>
                  <p className="text-[#636e72]">Participated in conferences on human rights and social justice</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Positions */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-[#c89f5d]" />
            <h2 className="text-3xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Previous Positions & Contributions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0ddd8]">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                National General Secretary - BAMCEF
              </h3>
              <p className="text-[#636e72] mb-4 italic">
                Backward and Minorities Community Employees Federation
              </p>
              <p className="text-[#2d3436] leading-relaxed">
                One of India's foremost organizations advocating for the rights of backward classes. 
                During his tenure, he conducted numerous cadre camps, national seminars, and awareness 
                programs across the country, contributing significantly to the strengthening of the 
                social justice movement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0ddd8]">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                Executive Editor - Bahujan Bharat
              </h3>
              <p className="text-[#2d3436] leading-relaxed">
                An English-language magazine dedicated to issues of equality, justice, and constitutional 
                awareness. The publication serves as a platform for progressive voices and discourse on 
                social justice.
              </p>
            </div>
          </div>
        </section>

        {/* Media & Publications */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-[#c89f5d]" />
            <h2 className="text-3xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Media & Publications
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-lg border border-amber-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Weekly Legal Column</h3>
              <p className="text-[#636e72] mb-3">Sakshi (Telugu Daily)</p>
              <p className="text-[#2d3436] leading-relaxed">
                A widely read column offering clarity and practical insights into contemporary legal issues, 
                making complex legal concepts accessible to the general public.
              </p>
            </div>
            
            <div className="border-t border-amber-200 pt-6">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Media Appearances</h3>
              <p className="text-[#2d3436] leading-relaxed mb-3">
                Regular expert commentary on legal and constitutional matters featured on:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-[#1e3a5f] font-semibold border border-[#c89f5d]">
                  iDream Media
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-[#1e3a5f] font-semibold border border-[#c89f5d]">
                  TV9
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-[#1e3a5f] font-semibold border border-[#c89f5d]">
                  Various News Outlets
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Commitment */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Vision & Commitment
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed text-center">
                Guided by the principles of Dr. B. R. Ambedkar and the Constitution of India, 
                Mr. Chintala envisions a society grounded in equality, liberty, fraternity, and justice. 
                Through his legal practice, social initiatives, and public advocacy, he continues to work 
                towards a more inclusive, informed, and constitutionally conscious India.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-[#2d3436] text-white">
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