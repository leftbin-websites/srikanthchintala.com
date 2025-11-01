import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Scale, Users, CheckCircle, ArrowRight, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProBonoPage() {
  const services = [
    {
      icon: Scale,
      title: "Constitutional Rights Cases",
      description: "Protection of fundamental rights and constitutional challenges"
    },
    {
      icon: Heart,
      title: "Human Rights Violations",
      description: "Cases involving civil liberties and human dignity"
    },
    {
      icon: Users,
      title: "Service & Employment Matters",
      description: "Workplace discrimination and labor rights issues"
    },
    {
      icon: FileText,
      title: "Public Interest Litigation",
      description: "Cases affecting public welfare and marginalized communities"
    }
  ];

  const eligibilityCriteria = [
    "Economically disadvantaged individuals and families",
    "Members of marginalized and vulnerable communities",
    "Cases involving fundamental rights violations",
    "Public interest matters affecting larger community welfare",
    "Those unable to afford regular legal representation"
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Submit Request",
      description: "Fill out the pro bono assistance form with details of your legal matter"
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Your case will be reviewed for eligibility and merit within 3-5 business days"
    },
    {
      step: "3",
      title: "Documentation",
      description: "If eligible, you'll be asked to provide necessary documents and evidence"
    },
    {
      step: "4",
      title: "Legal Representation",
      description: "Free legal assistance will be provided for your case"
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
            <div className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-amber-300 mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Free Legal Assistance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pro Bono Legal Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Committed to making justice accessible to all. Regular free legal assistance is provided to economically disadvantaged individuals and communities in need.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Justice Should Be Accessible to All
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  As a firm believer in constitutional morality and social justice, I am committed to ensuring that legal representation is not a privilege limited to those who can afford it.
                </p>
                <p>
                  Regular pro bono services are provided to individuals from economically disadvantaged backgrounds, marginalized communities, and those whose fundamental rights have been violated.
                </p>
                <p>
                  Through the <strong>Association for Public Interest (API)</strong>, systematic pro bono legal assistance is offered along with Public Interest Litigations to protect the rights of the most vulnerable in our society.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="Legal assistance"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Areas of Pro Bono Assistance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free legal services provided across multiple practice areas with a focus on constitutional rights and social justice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Eligibility Criteria
            </h2>
            <p className="text-xl text-gray-600">
              Who qualifies for pro bono legal assistance
            </p>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
            <CardContent className="p-8">
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-lg text-gray-800 pt-0.5">{criteria}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              How to Apply
            </h2>
            <p className="text-xl text-gray-600">
              Simple process to request pro bono legal assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationProcess.map((step, index) => (
              <Card key={index} className="relative bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
                {index < applicationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-amber-500" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need Free Legal Assistance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            If you are facing a legal issue and cannot afford representation, don't hesitate to reach out. Submit your request and we'll review your case for pro bono assistance.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Request Pro Bono Assistance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <p className="mt-6 text-sm text-blue-200">
            All requests are reviewed confidentially within 3-5 business days
          </p>
        </div>
      </section>
    </div>
  );
}