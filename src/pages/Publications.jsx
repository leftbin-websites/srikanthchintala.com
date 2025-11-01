import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { FileText, Newspaper, TvIcon, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default function PublicationsPage() {
  const { data: publications = [] } = useQuery({
    queryKey: ['publications'],
    queryFn: () => base44.entities.Publication.list('-publication_date'),
    initialData: []
  });

  const { data: mediaAppearances = [] } = useQuery({
    queryKey: ['media-appearances'],
    queryFn: () => base44.entities.MediaAppearance.list('-appearance_date'),
    initialData: []
  });

  const categoryColors = {
    "Legal Column": "bg-blue-100 text-blue-800",
    "Article": "bg-green-100 text-green-800",
    "Opinion": "bg-purple-100 text-purple-800",
    "Academic": "bg-amber-100 text-amber-800",
    "Media Commentary": "bg-red-100 text-red-800"
  };

  const mediaTypeColors = {
    "Interview": "bg-blue-100 text-blue-800",
    "Panel Discussion": "bg-green-100 text-green-800",
    "Expert Commentary": "bg-purple-100 text-purple-800",
    "Documentary Feature": "bg-amber-100 text-amber-800"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Publications & Media
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Legal columns, articles, and media appearances sharing insights on constitutional law, human rights, and social justice issues.
            </p>
          </div>
        </div>
      </section>

      {/* Sakshi Column Highlight */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Weekly Legal Column - Sakshi Daily</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Regular legal columnist for Sakshi, one of Telugu's leading daily newspapers. The weekly column is widely read and appreciated for its clarity and practical insights into contemporary legal issues, making complex legal concepts accessible to the general public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Publications & Articles
            </h2>
          </div>

          {publications.length === 0 ? (
            <Card className="bg-white">
              <CardContent className="p-12 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500 mb-2">Publications Coming Soon</p>
                <p className="text-gray-400">Legal articles and publications will be featured here</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((publication) => (
                <Card key={publication.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={categoryColors[publication.category]}>
                        {publication.category}
                      </Badge>
                      {publication.featured && (
                        <Badge className="bg-amber-600 text-white">Featured</Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{publication.title}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Newspaper className="w-4 h-4" />
                        <span>{publication.publication_name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(publication.publication_date), 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{publication.excerpt}</p>
                    
                    {publication.tags && publication.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {publication.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    {publication.external_link && (
                      <a
                        href={publication.external_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                      >
                        Read Full Article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <TvIcon className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Media Appearances
            </h2>
          </div>

          <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-lg text-gray-700">
              Frequently featured in <strong>iDream Media</strong>, <strong>TV9</strong>, and several other prominent media outlets as an expert commentator on legal and constitutional matters.
            </p>
          </div>

          {mediaAppearances.length === 0 ? (
            <Card className="bg-gray-50">
              <CardContent className="p-12 text-center">
                <TvIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500 mb-2">Media Appearances Coming Soon</p>
                <p className="text-gray-400">TV interviews and panel discussions will be featured here</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaAppearances.map((appearance) => (
                <Card key={appearance.id} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    {appearance.thumbnail && (
                      <img
                        src={appearance.thumbnail}
                        alt={appearance.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={mediaTypeColors[appearance.type]}>
                        {appearance.type}
                      </Badge>
                      {appearance.featured && (
                        <Badge className="bg-amber-600 text-white">Featured</Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{appearance.title}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <TvIcon className="w-4 h-4" />
                        <span>{appearance.media_outlet}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(appearance.appearance_date), 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{appearance.description}</p>
                    
                    {appearance.video_url && (
                      <a
                        href={appearance.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                      >
                        Watch Video
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bahujan Bharat Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bahujan Bharat
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Former <strong>Executive Editor</strong> of Bahujan Bharat, an English-language magazine dedicated to issues of equality, justice, and constitutional awareness. The publication served as a platform for promoting Ambedkarite thought and social justice discourse.
          </p>
        </div>
      </section>
    </div>
  );
}