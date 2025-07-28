import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Clock,
  CreditCard,
  Headphones,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

const EmergencyContact = () => {
  const emergencyContacts = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Emergency Hotline",
      description:
        "For immediate assistance with account security, fraud, or urgent banking needs",
      contact: "+237 678 911 000",
      availability: "24/7",
      type: "urgent",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-banking-warning" />,
      title: "Card Services",
      description:
        "Report lost/stolen cards, suspicious transactions, or ATM problems",
      contact: "+237 678 901 234",
      availability: "24/7",
      type: "card",
    },
    {
      icon: <Shield className="h-8 w-8 text-banking-blue" />,
      title: "Fraud Protection",
      description:
        "Report suspected fraud, unauthorized transactions, or security concerns",
      contact: "+237 678 911 111",
      availability: "24/7",
      type: "fraud",
    },
    {
      icon: <Headphones className="h-8 w-8 text-banking-success" />,
      title: "Customer Support",
      description: "General inquiries, account issues, and service assistance",
      contact: "+237 678 901 234",
      availability: "Mon-Fri 8AM-6PM",
      type: "support",
    },
  ];

  const emergencyActions = [
    {
      title: "Lost or Stolen Cards",
      steps: [
        "Call our 24/7 card services hotline immediately",
        "Provide your member number and card details",
        "Request immediate card blocking",
        "Report any unauthorized transactions",
        "Visit nearest branch to get replacement card",
      ],
      icon: <CreditCard className="h-6 w-6 text-banking-warning" />,
    },
    {
      title: "Suspicious Activity",
      steps: [
        "Do not attempt any transactions",
        "Call fraud protection hotline immediately",
        "Preserve all evidence (SMS, emails, etc.)",
        "Change your passwords immediately",
        "Monitor your accounts closely",
      ],
      icon: <Shield className="h-6 w-6 text-banking-blue" />,
    },
    {
      title: "Account Lockout",
      steps: [
        "Contact customer support immediately",
        "Verify your identity with personal details",
        "Explain the circumstances of lockout",
        "Follow security verification process",
        "Reset passwords if required",
      ],
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
    },
  ];

  const branchLocations = [
    {
      name: "TAFCCUL Head Office",
      address: "123 Banking Street, Yaoundé, Cameroon",
      phone: "+237 678 901 234",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 1:00 PM",
    },
    {
      name: "Douala Branch",
      address: "456 Commerce Avenue, Douala, Cameroon",
      phone: "+237 678 901 235",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 1:00 PM",
    },
    {
      name: "Bamenda Branch",
      address: "789 Market Road, Bamenda, Cameroon",
      phone: "+237 678 901 236",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 1:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-white animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Emergency Contact
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Get immediate help when you need it most. We're here 24/7 for
              banking emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Emergency Hotlines
              </h2>
              <p className="text-banking-gray">
                Call these numbers for immediate assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    contact.type === "urgent"
                      ? "border-red-500/30 bg-red-50/50"
                      : contact.type === "card"
                        ? "border-banking-warning/30"
                        : contact.type === "fraud"
                          ? "border-banking-blue/30"
                          : "border-banking-success/30"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {contact.icon}
                      <div>
                        <CardTitle className="text-banking-navy">
                          {contact.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge
                            variant={
                              contact.availability === "24/7"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {contact.availability}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-banking-gray text-sm">
                      {contact.description}
                    </p>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-banking-navy">
                          {contact.contact}
                        </span>
                        <Button size="sm" className="ml-4">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Actions */}
      <section className="py-16 bg-banking-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                What To Do In An Emergency
              </h2>
              <p className="text-banking-gray">
                Follow these steps for common banking emergencies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {emergencyActions.map((action, index) => (
                <Card key={index} className="border-banking-blue/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      {action.icon}
                      <CardTitle className="text-banking-navy">
                        {action.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {action.steps.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex items-start space-x-3"
                        >
                          <span className="bg-banking-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-banking-gray">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Branch Locations
              </h2>
              <p className="text-banking-gray">
                Visit our branches for in-person assistance
              </p>
            </div>

            <div className="space-y-6">
              {branchLocations.map((branch, index) => (
                <Card key={index} className="border-banking-blue/20">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-banking-blue" />
                          <h3 className="font-semibold text-banking-navy">
                            {branch.name}
                          </h3>
                        </div>
                        <p className="text-sm text-banking-gray">
                          {branch.address}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-5 w-5 text-banking-success" />
                          <span className="font-medium">{branch.phone}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-banking-warning" />
                          <span className="text-sm">{branch.hours}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <CardTitle className="text-red-700">
                    Important Security Notice
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <p className="text-banking-gray">
                    <strong>TAFCCUL will NEVER:</strong>
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • Ask for your PIN, password, or full card details over
                      the phone
                    </li>
                    <li>• Request account information via email or SMS</li>
                    <li>
                      • Ask you to transfer money to "verify" your account
                    </li>
                    <li>
                      • Send unsolicited links asking for login credentials
                    </li>
                  </ul>
                  <p className="text-banking-gray mt-4">
                    <strong>
                      If someone claims to be from TAFCCUL and asks for
                      sensitive information, hang up immediately and call our
                      official emergency hotline to verify.
                    </strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergencyContact;
