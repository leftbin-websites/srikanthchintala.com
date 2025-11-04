import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Clock } from "lucide-react";
import { format } from "date-fns";

export default function ArticleCard({ article, featured = false }) {
  const articleUrl = `/article/${article.slug}`;

  if (featured) {
    return (
      <Link
        to={articleUrl}
        className="block group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={article.featured_image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200"}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-[#c89f5d] text-white text-sm font-medium rounded">
                {article.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-3 group-hover:text-[#c89f5d] transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-200 mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>{format(new Date(article.published_date), "MMMM d, yyyy")}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.read_time} min read
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={articleUrl}
      className="block group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={article.featured_image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-[#1e3a5f] bg-opacity-10 text-[#1e3a5f] text-sm font-medium rounded">
            {article.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-3 group-hover:text-[#c89f5d] transition-colors">
          {article.title}
        </h3>
        
        <p className="text-[#636e72] mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center gap-3 text-sm text-[#636e72]">
          <span>{format(new Date(article.published_date), "MMM d, yyyy")}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.read_time} min read
          </span>
        </div>
      </div>
    </Link>
  );
}