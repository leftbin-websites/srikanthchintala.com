import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Scale, Heart, Users, Gavel, Home, Briefcase, FileText, HandshakeIcon, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Constitutional Law",
      description: "Expert representation in constitutional matters, fundamental rights cases, and challenges to legislative actions. Extensive experience appearing before High Courts and the Supreme Court on constitutional questions.",
      highlights: [
        "Fundamental Rights Protection",
        "Writ Petitions (Habeas Corpus, Mandamus, Certiorari)",
        "Constitutional Challenges",
        "Public Interest Litigation"
      ]
    },
    {
      icon: Heart,
      title: "Human Rights Law",
      description: "Passionate advocacy for human dignity, civil liberties, and protection against human rights violations. Committed to defending the rights of marginalized communities and vulnerable populations.",
      highlights: [
        "Civil Liberties Defense",
        "Rights of Marginalized Communities",
        "Protection Against Discrimination",
        "International Human Rights Standards"
      ]
    },
    {
      icon: Users,
      title: "Service & Labour Law",
      description: "Comprehensive representation in service matters, employment disputes, labor rights, and workplace discrimination cases. Protecting workers' rights and ensuring fair treatment in employment.",
      highlights: [
        "Service Matters & Disciplinary Proceedings",
        "Employment Disputes",
        "Labour Rights Protection",
        "Workplace Discrimination Cases"
      ]
    },
    {
      icon: Gavel,
      title: "Criminal Law",
      description: "Robust criminal defense representation ensuring fair trial rights and due process. Handling a wide range of criminal matters from investigation stage through trial and appeals.",
      highlights: [
        "Criminal Defense",
        "Bail Applications",
        "Trial Representation",
        "Criminal Appeals"
      ]
    },
    {
      icon: Home,
      title: "Family Law",
      description: "Compassionate and effective representation in family disputes including matrimonial matters, custody issues, and domestic relations. Focused on protecting the interests of vulnerable family members.",
      highlights: [
        "Matrimonial Disputes",
        "Child Custody Matters",
        "Domestic Violence Cases",
        "Maintenance & Alimony"
      ]
    },
    {
      icon: FileText,
      title: "Property Law",
      description: "Comprehensive legal services in property disputes, title verification, and real estate transactions. Protecting property rights and resolving complex land disputes.",
      highlights: [
        "Property Disputes",
        "Title Verification",
        "Real Estate Transactions",
        "Land Acquisition Matters"
      ]
    },
    {
      icon: Briefcase,
      title: "Corporate Law",
      description: "Corporate legal advisory services for businesses including compliance, contracts, and commercial disputes. Providing practical legal solutions for corporate clients.",
      highlights: [
        "Corporate Compliance",
        "Commercial Contracts",
        "Business Disputes",
        "Corporate Governance"
      ]
    },
    {
      icon: HandshakeIcon,
      title: "Arbitration",
      description: "Alternative dispute resolution through arbitration proceedings. Representing clients in domestic and commercial arbitrations for efficient conflict resolution.",
      highlights: [
        "Domestic Arbitration",
        "Commercial Arbitration",
        "Arbitration Awards",
        "Alternative Dispute Resolution"
      ]
    }
  ];

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
              Areas of Practice
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive legal expertise across multiple domains with a steadfast commitment to constitutional rights, social justice, and the protection of fundamental freedoms.
            </p>
          </div>
        </div>
      </section>

      {/* Courts of Practice */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-600 mb-2">Supreme Court</p>
              <p className="text-gray-600">of India</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-amber-600 mb-2">High Court</p>
              <p className="text-gray-600">of Telangana</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-amber-600 mb-2">High Court</p>
              <p className="text-gray-600">of Andhra Pradesh</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-amber-600 mb-2">District Courts</p>
              <p className="text-gray-600">Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-amber-500">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Key Services:</p>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Committed to Accessible Justice
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Beyond technical expertise, every case is approached with a deep commitment to constitutional morality and social justice. Regular pro bono services are provided to ensure legal representation is accessible to all, regardless of economic status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("ProBono")}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Pro Bono Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}