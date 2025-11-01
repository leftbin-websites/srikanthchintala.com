import React from "react";
import { Users, Heart, Scale, BookOpen, Award, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function OrganizationsPage() {
  const ilaFeatures = [
    "Strong presence across Andhra Pradesh, Telangana, Maharashtra, and Delhi",
    "Backed by renowned legal experts, professors, and former High Court judges",
    "Appreciated by several judges of South Indian States",
    "Leading lawyers' association registered in Andhra Pradesh",
    "Active legal education and advocacy programs"
  ];

  const apiActivities = [
    {
      icon: Heart,
      title: "Pro Bono Legal Services",
      description: "Providing free legal assistance to the economically disadvantaged"
    },
    {
      icon: Scale,
      title: "Public Interest Litigations",
      description: "Filing and pursuing PILs for protection of fundamental rights"
    },
    {
      icon: BookOpen,
      title: "Constitutional Awareness",
      description: "Organizing conferences, lectures, and awareness programs"
    },
    {
      icon: Award,
      title: "Progressive Reforms",
      description: "Working towards socio-political and judicial reforms"
    }
  ];

  const locations = [
    { state: "Telangana", icon: MapPin },
    { state: "Andhra Pradesh", icon: MapPin },
    { state: "Maharashtra", icon: MapPin },
    { state: "Delhi", icon: MapPin }
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
              Leading Social Justice Organizations
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Founder and President of organizations dedicated to constitutional awareness, public interest advocacy, and the promotion of social justice across India.
            </p>
          </div>
        </div>
      </section>

      {/* Indian Lawyers Association */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-900 font-semibold mb-6">
                <Users className="w-5 h-5" />
                Founder
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Indian Lawyers Association
              </h2>
              <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
                <p>
                  The Indian Lawyers Association (ILA) is one of the leading lawyers' associations based and registered in Andhra Pradesh, founded by <strong>Srikanth Chintala</strong>. The organization is currently led by President <strong>Mr. G. Shantha Kumar</strong>.
                </p>
                <p>
                  ILA has established a strong presence across multiple states and is recognized for its commitment to legal excellence, professional development, and advocacy for justice.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {ilaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 border-none text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Geographic Presence</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {locations.map((location, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <location.icon className="w-8 h-8 text-amber-500 mb-2" />
                        <p className="font-semibold">{location.state}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <h4 className="font-semibold mb-4">Leadership</h4>
                    <div className="space-y-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-sm text-blue-200">Founder</p>
                        <p className="font-bold text-lg">Srikanth Chintala</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-sm text-blue-200">Current President</p>
                        <p className="font-bold text-lg">Mr. G. Shantha Kumar</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Association for Public Interest */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-900 font-semibold mb-6">
              <Scale className="w-5 h-5" />
              Founder & President
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Association for Public Interest (API)
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A non-profit organization established with the objective of promoting constitutional morality and its principles among the public. Under Srikanth Chintala's leadership, API actively works towards progressive socio-political and judicial reforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {apiActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <activity.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To promote constitutional morality and work towards a society grounded in equality, liberty, and justice for all citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Focus Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                    <span>Constitutional awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                    <span>Legal education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                    <span>Social justice advocacy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Empowering marginalized communities through legal assistance, awareness programs, and strategic public interest litigation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Guided by Constitutional Principles
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Both organizations are deeply rooted in the ideals of Dr. B.R. Ambedkar and the Constitution of India, working towards a more inclusive, informed, and constitutionally conscious society.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg italic text-blue-100 leading-relaxed">
                "Through organized advocacy, pro bono services, and public interest litigation, we strive to make justice accessible to all, particularly those most in need. Our commitment is to constitutional morality, social justice, and the protection of fundamental rights for every citizen."
              </p>
              <p className="mt-4 font-semibold text-amber-400">— Srikanth Chintala</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}