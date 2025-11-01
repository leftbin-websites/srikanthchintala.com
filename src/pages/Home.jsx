import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Scale, BookOpen, Users, Globe, Award, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Constitutional Law",
      description: "Expert representation in constitutional matters and fundamental rights cases"
    },
    {
      icon: Heart,
      title: "Human Rights Law",
      description: "Defending human dignity and fundamental freedoms for all"
    },
    {
      icon: Users,
      title: "Service & Labour Law",
      description: "Protecting workers' rights and employment-related matters"
    },
    {
      icon: BookOpen,
      title: "Criminal Law",
      description: "Comprehensive criminal defense and prosecution services"
    }
  ];

  const achievements = [
    {
      icon: Globe,
      title: "International Recognition",
      description: "Keynote speaker at LSE London (2015) and Columbia University (2016)"
    },
    {
      icon: Users,
      title: "Founder, ILA & API",
      description: "Leading social justice organizations across India"
    },
    {
      icon: Award,
      title: "Media Expert",
      description: "Regular legal columnist for Sakshi Daily and media commentator"
    },
    {
      icon: Heart,
      title: "Pro Bono Commitment",
      description: "Providing free legal services to economically disadvantaged"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-amber-300 mb-6">
                <Scale className="w-4 h-4" />
                <span className="text-sm font-medium">High Court Lawyer | Human Rights Advocate</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Justice Through<br />
                <span className="text-amber-400">Constitutional Morality</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Committed to defending fundamental rights, promoting social justice, and providing accessible legal services to all communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("ProBono")}>
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors w-full sm:w-auto">
                    Pro Bono Assistance
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-blue-700">
                <div>
                  <p className="text-3xl font-bold text-amber-400">15+</p>
                  <p className="text-sm text-blue-200">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">1000+</p>
                  <p className="text-sm text-blue-200">Cases Handled</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">2</p>
                  <p className="text-sm text-blue-200">Organizations Founded</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=1000&fit=crop"
                  alt="Srikanth Chintala - High Court Lawyer"
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Areas of Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal expertise across multiple domains with a focus on constitutional rights and social justice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("PracticeAreas")}>
              <Button size="lg" className="bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
                View All Practice Areas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Committed to Justice & Social Change
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As a noted Ambedkarite and humanist, my practice is deeply rooted in the ideals of constitutional morality, equality, and social justice. I am dedicated to defending fundamental rights and empowering marginalized communities through legal advocacy.
              </p>
              <Link to={createPageUrl("About")}>
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                  Learn More About My Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <achievement.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Leading Social Justice Organizations
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Founder of organizations dedicated to constitutional awareness and public interest advocacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Indian Lawyers Association (ILA)</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  One of the leading lawyers' associations based in Andhra Pradesh with a strong presence across Telangana, Maharashtra, and Delhi. Backed by renowned legal experts, professors, and former High Court judges.
                </p>
                <Link to={createPageUrl("Organizations")}>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Association for Public Interest (API)</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Promoting constitutional morality through pro bono legal services, Public Interest Litigations, and awareness programs on constitutional and legal issues for the economically disadvantaged.
                </p>
                <Link to={createPageUrl("Organizations")}>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Schedule a consultation or learn about pro bono legal services for those in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 w-full sm:w-auto">
                Schedule Consultation
              </Button>
            </Link>
            <Link to={createPageUrl("ProBono")}>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 transition-colors w-full sm:w-auto">
                Pro Bono Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}