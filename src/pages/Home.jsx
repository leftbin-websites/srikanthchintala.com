import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: () => base44.entities.Article.list('-published_date'),
    initialData: [],
  });

  const featuredArticle = articles.find(a => a.is_featured) || articles[0];
  const latestArticles = articles.filter(a => a.id !== featuredArticle?.id).slice(0, 6);

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-gray-200 rounded-lg" />
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-64 bg-gray-200 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fefdfb]">
      {/* Featured Article Section */}
      {featuredArticle && (
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6">
            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        </section>
      )}

      {/* Latest Articles Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-8">
            Latest Articles
          </h2>
          
          {latestArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-[#636e72] text-center py-12">
              No articles published yet. Check back soon for insights on constitutional law, human rights, and social justice.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}