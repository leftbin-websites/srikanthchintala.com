import React from "react";
import { useParams, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Clock, ArrowLeft, Linkedin, Twitter, Share2 } from "lucide-react";
import { format } from "date-fns";

export default function Article() {
  const { slug } = useParams();
  
  const { data: articles } = useQuery({
    queryKey: ['articles'],
    queryFn: () => base44.entities.Article.list(),
    initialData: [],
  });

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">Article Not Found</h1>
          <Link to="/" className="text-[#c89f5d] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = article.title;

  const handleShare = (platform) => {
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
    };
    
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-[#fefdfb]">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#636e72] hover:text-[#c89f5d] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <article className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#1e3a5f] bg-opacity-10 text-[#1e3a5f] text-sm font-semibold rounded">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-[#636e72] mb-8 pb-8 border-b">
            <span className="font-medium">By Srikanth Chintala</span>
            <span>•</span>
            <span>{format(new Date(article.published_date), "MMMM d, yyyy")}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.read_time} min read
            </span>
          </div>

          {/* Featured Image */}
          {article.featured_image && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "var(--color-text)"
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Social Share Buttons */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center gap-4">
              <span className="text-[#636e72] font-medium flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share this article:
              </span>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-full bg-[#1e3a5f] bg-opacity-10 text-[#1e3a5f] hover:bg-opacity-20 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-full bg-[#1e3a5f] bg-opacity-10 text-[#1e3a5f] hover:bg-opacity-20 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="p-2 rounded-full bg-[#1e3a5f] bg-opacity-10 text-[#1e3a5f] hover:bg-opacity-20 transition-colors"
                aria-label="Share on WhatsApp"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-8 bg-[#f8f7f5] rounded-lg">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-4">
              About the Author
            </h3>
            <p className="text-[#2d3436] leading-relaxed mb-4">
              <strong>Srikanth Chintala</strong> is a practicing advocate at the High Court of Telangana and 
              the founder of the Indian Lawyers Association. He specializes in Constitutional Law, Criminal Law, 
              and Civil Law, with a deep commitment to social justice and human rights advocacy.
            </p>
            <Link
              to="/about"
              className="inline-block text-[#c89f5d] hover:text-[#1e3a5f] font-medium transition-colors"
            >
              Learn more about Srikanth Chintala →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}