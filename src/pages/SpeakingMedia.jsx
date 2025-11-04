import React from "react";
import { Globe, Newspaper, Tv } from "lucide-react";

export default function SpeakingMedia() {
  return (
    <div className="bg-[#fefdfb]">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1e3a5f] to-[#2d4a6f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-6">
            Speaking & Media
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            International Conferences, Publications, and Media Appearances
          </p>
        </div>
      </section>

      {/* International Conferences */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Globe className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f]">
              International Conferences
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "International Conference on Human Rights",
                venue: "London School of Economics, London",
                year: "2015",
                role: "Organizer and Keynote Speaker",
                description: "Led discussions on human rights challenges and constitutional frameworks in developing democracies."
              },
              {
                title: "International Conference on Human Rights",
                venue: "Columbia University, USA",
                year: "2016",
                role: "Organizer and Keynote Speaker",
                description: "Presented on judicial independence and social justice in the Indian constitutional context."
              },
              {
                title: "FNF – Germany",
                venue: "Friedrich Naumann Foundation",
                year: "Multiple Years",
                role: "Participant",
                description: "Regular participation in human rights forums and discussions on constitutional law."
              }
            ].map((conference, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-2">
                  {conference.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-[#636e72] mb-4">
                  <span className="font-medium">{conference.venue}</span>
                  <span>•</span>
                  <span>{conference.year}</span>
                </div>
                <p className="text-[#c89f5d] font-semibold mb-3">{conference.role}</p>
                <p className="text-[#2d3436] leading-relaxed">{conference.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 bg-[#f8f7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Newspaper className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f]">
              Publications & Regular Columns
            </h2>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-4">
              Weekly Legal Column
            </h3>
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block px-4 py-2 bg-[#c89f5d] text-white font-semibold rounded">
                Sakshi (Telugu Daily)
              </span>
            </div>
            <p className="text-[#2d3436] text-lg leading-relaxed mb-6">
              A widely read weekly column offering clarity and practical insights into contemporary legal issues. 
              The column makes complex constitutional and legal matters accessible to the general public, covering 
              topics ranging from fundamental rights to landmark judgments.
            </p>
            
            <div className="border-t pt-6">
              <h4 className="font-bold text-[#1e3a5f] mb-3">Regular Topics Covered:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Constitutional Law",
                  "Public Interest Litigation",
                  "Fundamental Rights",
                  "Legal Rights and Remedies",
                  "Landmark Judgments",
                  "Social Justice Issues"
                ].map((topic) => (
                  <div key={topic} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#c89f5d] rounded-full" />
                    <span className="text-[#2d3436]">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Tv className="w-10 h-10 text-[#c89f5d]" />
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f]">
              Media Appearances
            </h2>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-8">
            <p className="text-xl text-[#2d3436] leading-relaxed mb-8">
              Regular expert commentary on legal and constitutional matters across prominent media outlets.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "iDream Media",
                  role: "Legal Expert & Commentator",
                  focus: "Constitutional law analysis and social justice issues"
                },
                {
                  name: "TV9",
                  role: "Legal Analyst",
                  focus: "Current legal affairs and landmark judgments"
                },
                {
                  name: "Other Outlets",
                  role: "Guest Speaker",
                  focus: "Human rights and public interest matters"
                }
              ].map((media, index) => (
                <div key={index} className="border-l-4 border-[#c89f5d] pl-4">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{media.name}</h3>
                  <p className="text-[#636e72] font-medium mb-2">{media.role}</p>
                  <p className="text-sm text-[#2d3436]">{media.focus}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
              Topics of Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Constitutional Law & Rights",
                "Judicial Independence",
                "Social Justice & Equality",
                "Public Interest Litigation",
                "Human Rights Advocacy",
                "Legal Reforms & Policy"
              ].map((topic) => (
                <div key={topic} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c89f5d] rounded-full" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-12 bg-[#f8f7f5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[#1e3a5f] mb-6">
            Recognition
          </h2>
          <p className="text-xl text-[#2d3436] leading-relaxed">
            Recognized as a leading voice in constitutional law and social justice advocacy, 
            contributing to public discourse on legal rights, judicial reform, and constitutional morality 
            across national and international platforms.
          </p>
        </div>
      </section>
    </div>
  );
}