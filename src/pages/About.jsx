import React from "react";
import { Scale, Award, Globe, Users, Heart, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const timeline = [
    {
      year: "Present",
      title: "High Court Lawyer & Founder",
      description: "Practicing before High Courts of Telangana and Andhra Pradesh, founder of ILA and API"
    },
    {
      year: "2016",
      title: "Columbia University Conference",
      description: "Organizer and Keynote Speaker at International Conference on Human Rights"
    },
    {
      year: "2015",
      title: "London School of Economics",
      description: "Organizer and Keynote Speaker at International Conference on Human Rights"
    },
    {
      year: "Previous",
      title: "National General Secretary, BAMCEF",
      description: "Led national seminars and awareness programs across India for social justice"
    },
    {
      year: "Previous",
      title: "Executive Editor, Bahujan Bharat",
      description: "English-language magazine dedicated to equality and constitutional awareness"
    }
  ];

  const values = [
    {
      icon: Scale,
      title: "Constitutional Morality",
      description: "Upholding the principles enshrined in the Indian Constitution"
    },
    {
      icon: Heart,
      title: "Social Justice",
      description: "Fighting for equality, liberty, and fraternity for all"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Providing pro bono legal services to the economically disadvantaged"
    },
    {
      icon: BookOpen,
      title: "Education & Awareness",
      description: "Promoting legal literacy and constitutional awareness"
    },
    {
      icon: Globe,
      title: "Humanistic Advocacy",
      description: "Defending human rights with compassion and conviction"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards of legal practice and ethics"
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
              About Srikanth Chintala
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              High Court Lawyer | Documentary Filmmaker | Ambedkarite | Humanist
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="sticky top-24">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=1000&fit=crop"
                  alt="Srikanth Chintala"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Srikanth Chintala is a <strong>High Court lawyer by profession</strong>, a <strong>documentary filmmaker by passion</strong>, a noted <strong>Ambedkarite</strong>, and a <strong>humanist by conviction</strong>. His professional and personal pursuits are deeply rooted in the ideals of constitutional morality, social justice, and human rights.
              </p>

              <p>
                He is a noted <strong>Human Rights and Constitutional Lawyer</strong> practicing primarily before the High Courts of Telangana and Andhra Pradesh, as well as the District Judiciary of Hyderabad. He appears in the Supreme Court on selected matters and has appeared in several prominent matters involving constitutional, criminal, and service laws.
              </p>

              <p>
                Known for his commitment to justice and accessibility, he regularly provides <strong>free legal assistance</strong> to those in need and actively undertakes <strong>public interest cases</strong> for the protection of fundamental rights.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vision Statement</h3>
                <p className="text-gray-700 italic">
                  "Guided by the principles of Dr. B.R. Ambedkar and the Constitution of India, I envision a society grounded in equality, liberty, fraternity, and justice. Through legal practice, social initiatives, and public advocacy, I work towards a more inclusive, informed, and constitutionally conscious India."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Recognition</h3>
              <p>
                Mr. Chintala has represented India at prestigious international conferences, serving as <strong>Organizer and Keynote Speaker</strong> at:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>International Conference on Human Rights</strong> - London School of Economics, London (2015)</li>
                <li><strong>International Conference on Human Rights</strong> - Columbia University, USA (2016)</li>
                <li><strong>FNF – Germany</strong> - India Representative</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Media & Publications</h3>
              <p>
                Mr. Chintala is a recognized voice in the legal media landscape. His <strong>weekly legal column in the Telugu Daily Sakshi</strong> is widely read and appreciated for its clarity and practical insights into contemporary legal issues.
              </p>
              <p>
                He is frequently featured in <strong>iDream Media, TV9</strong>, and several other media outlets for expert opinions and commentary on legal and constitutional matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Core Values & Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by the ideals of Dr. B.R. Ambedkar and the Constitution of India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in the pursuit of justice and social change
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-5 w-7 h-7 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-sm font-bold text-amber-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Positions */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">National General Secretary, BAMCEF</h3>
                <p className="text-blue-100 leading-relaxed">
                  Served at BAMCEF (Backward and Minorities Community Employees Federation), one of India's foremost organizations advocating for the rights of backward classes. Conducted numerous cadre camps, national seminars, and awareness programs across the country, contributing to strengthening the social justice movement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Executive Editor, Bahujan Bharat</h3>
                <p className="text-blue-100 leading-relaxed">
                  Led editorial direction for Bahujan Bharat, an English-language magazine dedicated to issues of equality, justice, and constitutional awareness. The publication served as a platform for promoting Ambedkarite thought and social justice discourse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}