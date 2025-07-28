import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Building,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const branches = [
    {
      name: "Head Office - Yaoundé",
      address: "123 Banking Street, Centre, Yaoundé",
      phone: "+237 123 456 789",
      email: "info@tafccul.org",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
      services: [
        "Full Banking Services",
        "Loan Applications",
        "Account Opening",
        "Customer Service",
      ],
    },
    {
      name: "Douala Branch",
      address: "456 Commerce Avenue, Akwa, Douala",
      phone: "+237 123 456 790",
      email: "douala@tafccul.org",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
      services: [
        "Full Banking Services",
        "Business Banking",
        "Foreign Exchange",
        "ATM Services",
      ],
    },
    {
      name: "Bamenda Branch",
      address: "789 Commercial Street, Bamenda",
      phone: "+237 123 456 791",
      email: "bamenda@tafccul.org",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 1:00 PM",
      services: [
        "Personal Banking",
        "Savings Accounts",
        "Loan Services",
        "Mobile Banking",
      ],
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our customer service team",
      details: "+237 123 456 789",
      action: "Call Now",
      available: "24/7 for emergencies, Mon-Sat 8AM-6PM for general inquiries",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions and we'll respond within 24 hours",
      details: "info@tafccul.org",
      action: "Send Email",
      available: "Response within 24 hours during business days",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      details: "Available on our website",
      action: "Start Chat",
      available: "Mon-Fri 8AM-6PM, Sat 9AM-2PM",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated support for account holders",
      details: "+237 123 456 700",
      action: "Get Support",
      available: "Mon-Fri 8AM-8PM, Sat 9AM-5PM",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Contact TAFCCUL
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              We're here to help you with all your banking needs. Reach out to
              us through any of our convenient contact methods.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Choose the most convenient way to contact us. Our team is ready to
              assist you with any questions or banking needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className="text-center p-6 border-banking-blue/20 hover:shadow-banking transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <method.icon className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  {method.title}
                </h3>
                <p className="text-banking-gray text-sm mb-3">
                  {method.description}
                </p>
                <div className="font-medium text-banking-blue mb-3">
                  {method.details}
                </div>
                <p className="text-xs text-banking-gray mb-4">
                  {method.available}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-banking-blue border-banking-blue hover:bg-banking-blue hover:text-white"
                >
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-banking border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-banking-navy">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+237 123 456 789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Inquiry Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        handleInputChange("category", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">
                          General Information
                        </SelectItem>
                        <SelectItem value="accounts">
                          Account Services
                        </SelectItem>
                        <SelectItem value="loans">Loan Information</SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="membership">Membership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-banking-navy text-white hover:bg-banking-blue"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Information */}
            <div className="space-y-6">
              <Card className="p-6 border-banking-blue/20">
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-banking-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      Business Hours
                    </h3>
                    <div className="space-y-1 text-sm text-banking-gray">
                      <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                      <div>Saturday: 9:00 AM - 1:00 PM</div>
                      <div>Sunday: Closed</div>
                      <div className="font-medium text-banking-blue mt-2">
                        24/7 emergency support available
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-banking-blue/20">
                <div className="flex items-start space-x-4">
                  <Mail className="h-8 w-8 text-banking-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      Email Support
                    </h3>
                    <div className="space-y-1 text-sm text-banking-gray">
                      <div>General: info@tafccul.org</div>
                      <div>Loans: loans@tafccul.org</div>
                      <div>Support: support@tafccul.org</div>
                      <div>Complaints: complaints@tafccul.org</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-banking-blue/20">
                <div className="flex items-start space-x-4">
                  <Phone className="h-8 w-8 text-banking-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      Phone Numbers
                    </h3>
                    <div className="space-y-1 text-sm text-banking-gray">
                      <div>Main Line: +237 123 456 789</div>
                      <div>Customer Service: +237 123 456 700</div>
                      <div>Loan Hotline: +237 123 456 701</div>
                      <div>Emergency: +237 123 456 911</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-banking-success/20 bg-banking-success/5">
                <h3 className="font-semibold text-banking-navy mb-3">
                  Emergency Services
                </h3>
                <p className="text-sm text-banking-gray mb-3">
                  For lost/stolen cards, suspicious account activity, or urgent
                  banking issues:
                </p>
                <div className="font-medium text-banking-success">
                  24/7 Emergency Hotline: +237 123 456 911
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Visit any of our convenient branch locations for personalized
              banking services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <Card
                key={branch.name}
                className="hover:shadow-banking transition-all duration-300 hover:-translate-y-2 border-banking-blue/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <Building className="h-6 w-6 text-banking-blue mt-1" />
                    <div>
                      <CardTitle className="text-banking-navy">
                        {branch.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-banking-gray mt-1 flex-shrink-0" />
                    <span className="text-sm text-banking-gray">
                      {branch.address}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-banking-gray" />
                    <span className="text-sm text-banking-gray">
                      {branch.phone}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-banking-gray" />
                    <span className="text-sm text-banking-gray">
                      {branch.email}
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-banking-gray mt-1 flex-shrink-0" />
                    <span className="text-sm text-banking-gray">
                      {branch.hours}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-banking-navy text-sm mb-2">
                      Services Available:
                    </h4>
                    <div className="space-y-1">
                      {branch.services.map((service, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-banking-gray flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-banking-blue rounded-full mr-2"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-banking-blue border-banking-blue"
                    >
                      <Navigation className="h-4 w-4 mr-1" />
                      Directions
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-banking-blue border-banking-blue"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-banking-navy mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-banking-gray">
              Locate our branches across Cameroon
            </p>
          </div>

          <Card className="h-96 bg-gradient-to-br from-banking-light-blue to-banking-blue/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-banking-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-banking-navy mb-2">
                Interactive Map
              </h3>
              <p className="text-banking-gray">
                Interactive map integration will be available soon
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
