import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    practice_area: "",
    message: "",
    consultation_type: "No Preference",
    pro_bono_request: false
  });

  const [submitted, setSubmitted] = useState(false);

  const createRequestMutation = useMutation({
    mutationFn: (data) => base44.entities.ContactRequest.create(data),
    onSuccess: () => {
      setSubmitted(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        practice_area: "",
        message: "",
        consultation_type: "No Preference",
        pro_bono_request: false
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createRequestMutation.mutate(formData);
  };

  const practiceAreas = [
    "Constitutional Law",
    "Human Rights Law",
    "Service & Labour Law",
    "Criminal Law",
    "Family Law",
    "Property Law",
    "Corporate Law",
    "Arbitration",
    "Other"
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <Card className="max-w-2xl mx-4">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out. Your consultation request has been received and will be reviewed within 1-2 business days. You will be contacted via email or phone to schedule a consultation.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Schedule a legal consultation or request pro bono assistance. All inquiries are reviewed promptly and confidentially.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Office Location</p>
                        <p className="text-gray-600">Hyderabad, Telangana</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">Available upon request</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">Available upon request</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 border-none text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm text-blue-100">
                    <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                          id="full_name"
                          required
                          value={formData.full_name}
                          onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="practice_area">Practice Area *</Label>
                        <Select
                          value={formData.practice_area}
                          onValueChange={(value) => setFormData({...formData, practice_area: value})}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select practice area" />
                          </SelectTrigger>
                          <SelectContent>
                            {practiceAreas.map((area) => (
                              <SelectItem key={area} value={area}>
                                {area}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="consultation_type">Consultation Preference</Label>
                      <Select
                        value={formData.consultation_type}
                        onValueChange={(value) => setFormData({...formData, consultation_type: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="In-Person">In-Person</SelectItem>
                          <SelectItem value="Virtual">Virtual</SelectItem>
                          <SelectItem value="No Preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Brief Description of Legal Matter *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Please provide a brief description of your legal matter..."
                        rows={6}
                      />
                    </div>

                    <div className="flex items-center space-x-2 bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <Checkbox
                        id="pro_bono"
                        checked={formData.pro_bono_request}
                        onCheckedChange={(checked) => setFormData({...formData, pro_bono_request: checked})}
                      />
                      <Label htmlFor="pro_bono" className="text-sm text-gray-700 cursor-pointer">
                        I am requesting pro bono (free) legal assistance due to economic hardship
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                      disabled={createRequestMutation.isPending}
                    >
                      {createRequestMutation.isPending ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Request
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      All requests are reviewed confidentially. You will be contacted within 1-2 business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}