import React from "react";
import { Scale, Users, Globe, Newspaper } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#fefdfb]">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1e3a5f] to-[#2d4a6f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6">
            About Srikanth Chintala
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            High Court Lawyer | Documentary Filmmaker | Ambedkarite | Humanist
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#2d3436] leading-relaxed mb-6">
              Srikanth Chintala is a High Court lawyer by profession, a documentary filmmaker by passion, 
              a noted Ambedkarite, and a humanist by conviction. His professional and personal pursuits 
              are deeply rooted in the ideals of constitutional morality, social justice, and human rights.
            </p>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-12 bg-[#f8f7f5]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-12 text-center">
            Organizations Founded
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* ILA */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-[#c89f5d]" />
                <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f]">
                  Indian Lawyers Association
                </h3>
              </div>
              <p className="text-[#636e72] leading-relaxed">
                One of the leading lawyers associations based and registered in Andhra Pradesh, founded by 
                Srikanth Chintala. The current president is Mr. G. Shantha Kumar. ILA has a strong presence 
                in Andhra Pradesh, Telangana, Maharashtra, and Delhi, backed by renowned legal experts, 
                professors, and former High Court judges.
              </p>
            </div>

            {/* API */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-[#c89f5d]" />
                <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f]">
                  Association for Public Interest
                </h3>
              </div>
              <p className="text-[#636e72] leading-relaxed mb-4">
                Founder and President of this non-profit organization promoting constitutional morality 
                and its principles. API works towards progressive socio-political and judicial reforms through:
              </p>
              <ul className="list-disc list-inside text-[#636e72] space-y-2">
                <li>Pro bono legal services to the economically disadvantaged</li>
                <li>Filing and pursuing Public Interest Litigations (PILs)</li>
                <li>Organizing conferences, lectures, and awareness programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Practice */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-8">
            Professional Practice
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#2d3436] leading-relaxed mb-6">
              Mr. Chintala is a noted Human Rights and Constitutional Lawyer practicing primarily before 
              the High Courts of Telangana and Andhra Pradesh, as well as the District Judiciary of Hyderabad. 
              He appears in the Supreme Court on selected matters and has appeared in several prominent matters 
              involving constitutional, criminal, and service laws.
            </p>
            
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-4">
              Areas of Expertise
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Constitutional Law",
                "Service & Labour Law",
                "Family Law",
                "Criminal Law",
                "Property Law",
                "Corporate Law",
                "Arbitration"
              ].map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full" />
                  <span className="text-[#2d3436]">{area}</span>
                </div>
              ))}
            </div>
            
            <p className="text-[#2d3436] leading-relaxed">
              Known for his commitment to justice and accessibility, he regularly provides free legal assistance 
              to those in need and actively undertakes public interest cases for the protection of fundamental rights.
            </p>
          </div>
        </div>
      </section>

      {/* International Engagements */}
      <section className="py-12 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f]">
              International Engagements
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                International Conference on Human Rights
              </h3>
              <p className="text-[#636e72] mb-1">London School of Economics, London (2015)</p>
              <p className="text-[#c89f5d] font-medium">Organizer and Keynote Speaker</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                International Conference on Human Rights
              </h3>
              <p className="text-[#636e72] mb-1">Columbia University, USA (2016)</p>
              <p className="text-[#c89f5d] font-medium">Organizer and Keynote Speaker</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                FNF – Germany
              </h3>
              <p className="text-[#636e72]">Participation in human rights forums</p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Positions */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-8">
            Previous Positions & Contributions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-3">
                National General Secretary - BAMCEF
              </h3>
              <p className="text-[#2d3436] leading-relaxed">
                BAMCEF (Backward and Minorities Community Employees Federation) is one of India's foremost 
                organizations advocating for the rights of backward classes. During his tenure, Mr. Chintala 
                conducted numerous cadre camps, national seminars, and awareness programs across India, 
                contributing to the strengthening of the social justice movement.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-3">
                Executive Editor - Bahujan Bharat
              </h3>
              <p className="text-[#2d3436] leading-relaxed">
                An English-language magazine dedicated to issues of equality, justice, and constitutional awareness, 
                providing a platform for progressive voices and social justice discourse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Publications */}
      <section className="py-12 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f]">
              Media & Publications
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#2d3436] leading-relaxed mb-6">
              Mr. Chintala is a recognized voice in the legal media landscape. His <strong>weekly legal column 
              in the Telugu Daily Sakshi</strong> is widely read and appreciated for its clarity and practical 
              insights into contemporary legal issues.
            </p>
            
            <p className="text-[#2d3436] leading-relaxed">
              He is frequently featured in <strong>iDream Media, TV9</strong>, and several other media outlets 
              for his expert opinions and commentary on legal and constitutional matters.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-8">
            Vision & Commitment
          </h2>
          
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] text-white p-8 md:p-12 rounded-lg">
            <p className="text-xl leading-relaxed">
              Guided by the principles of Dr. B. R. Ambedkar and the Constitution of India, Mr. Chintala 
              envisions a society grounded in <strong>equality, liberty, fraternity, and justice</strong>. 
              Through his legal practice, social initiatives, and public advocacy, he continues to work 
              towards a more inclusive, informed, and constitutionally conscious India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}