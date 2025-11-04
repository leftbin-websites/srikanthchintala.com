import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calendar, Clock, ArrowRight, Gavel, Scale, BookOpen } from 'lucide-react';

// Article data embedded in code
const articles = [
  {
    id: 1,
    slug: 'collegium-system-invisible-barriers',
    title: 'Judges Appointing Judges: The Invisible Barriers in India\'s Judiciary',
    excerpt: 'The Collegium System shapes India\'s judiciary through judicial interpretation, not constitutional mandate. This article examines how caste dynamics influence judicial appointments and why transparent, inclusive reform is urgently needed.',
    category: 'Constitutional Law',
    date: 'January 15, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=675&fit=crop',
    featured: true
  },
  {
    id: 2,
    slug: 'constitutional-morality-pro-bono',
    title: 'Constitutional Morality in Practice: Why Pro Bono Legal Work Matters',
    excerpt: 'Access to justice remains elusive for millions. Through the lens of public interest litigation and pro bono work, this article explores how legal professionals can bridge the gap between constitutional rights and lived reality.',
    category: 'Social Justice',
    date: 'January 8, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=675&fit=crop',
    featured: true
  },
  {
    id: 3,
    slug: 'know-your-fundamental-rights',
    title: 'Know Your Fundamental Rights: A Citizen\'s Guide to Constitutional Protections',
    excerpt: 'Every Indian citizen has rights enshrined in the Constitution—from equality to freedom, from protection against exploitation to the right to seek redress. This comprehensive guide makes these rights accessible to all.',
    category: 'Legal Education',
    date: 'December 28, 2024',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=675&fit=crop',
    featured: false
  }
];

const categoryColors = {
  'Constitutional Law': 'bg-blue-100 text-blue-800',
  'Social Justice': 'bg-purple-100 text-purple-800',
  'Legal Education': 'bg-green-100 text-green-800',
  'Human Rights': 'bg-orange-100 text-orange-800'
};

export default function Home() {
  const featuredArticle = articles.find(a => a.featured && a.id === 1);
  const otherArticles = articles.filter(a => a.id !== 1);

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
              <Link to={createPageUrl('Home')} className="text-[#1e3a5f] font-semibold border-b-2 border-[#c89f5d]">
                Home
              </Link>
              <Link to={createPageUrl('About')} className="text-[#636e72] hover:text-[#1e3a5f] transition-colors font-medium">
                About
              </Link>
              <Link to={createPageUrl('SpeakingMedia')} className="text-[#636e72] hover:text-[#1e3a5f] transition-colors font-medium">
                Speaking & Media
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-6 h-0.5 bg-[#1e3a5f] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#1e3a5f] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#1e3a5f]"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Featured Article */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <Link to={createPageUrl('Article', `?id=${featuredArticle.slug}`)} className="group block">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryColors[featuredArticle.category]}`}>
                  {featuredArticle.category}
                </span>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-[#c89f5d] transition-colors" 
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {featuredArticle.title}
                </h2>
                
                <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Latest Articles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {otherArticles.map((article) => (
            <Link 
              key={article.id} 
              to={createPageUrl('Article', `?id=${article.slug}`)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e0ddd8]"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2d3436] mb-3 group-hover:text-[#1e3a5f] transition-colors leading-tight" 
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {article.title}
                </h3>
                
                <p className="text-[#636e72] leading-relaxed mb-4 text-lg">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#e0ddd8]">
                  <div className="flex items-center gap-4 text-sm text-[#636e72]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <span className="text-[#c89f5d] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-12">
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <Gavel className="w-16 h-16 mx-auto mb-6 text-[#c89f5d]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Making Constitutional Morality Accessible
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploring the intersections of law, justice, and human rights through thoughtful commentary and advocacy.
          </p>
          <Link 
            to={createPageUrl('About')}
            className="inline-flex items-center gap-2 bg-[#c89f5d] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b38a4d] transition-colors text-lg"
          >
            Learn About My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

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