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
import {
  AlertCircle,
  Bell,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  Eye,
  MapPin,
  QrCode,
  Send,
  Shield,
  Smartphone,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const MobileBanking = () => {
  const features = [
    {
      icon: Eye,
      title: "Account Balance",
      description: "Check your account balance instantly, anytime, anywhere",
    },
    {
      icon: Send,
      title: "Money Transfers",
      description: "Transfer money between TAFCCUL accounts and to other banks",
    },
    {
      icon: CreditCard,
      title: "Bill Payments",
      description: "Pay utility bills, school fees, and other services",
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      description: "Make quick payments by scanning QR codes",
    },
    {
      icon: Download,
      title: "Mini Statements",
      description: "Download and view your transaction history",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Receive instant alerts for all account activities",
    },
    {
      icon: MapPin,
      title: "Branch Locator",
      description: "Find nearest TAFCCUL branches and ATMs",
    },
    {
      icon: Wallet,
      title: "Mobile Wallet",
      description: "Link and manage your mobile money accounts",
    },
  ];

  const securityFeatures = [
    "Multi-factor authentication",
    "Biometric login (fingerprint/face recognition)",
    "End-to-end encryption",
    "Session timeout protection",
    "Transaction confirmation via SMS",
    "Secure PIN and password protection",
  ];

  const supportedServices = [
    {
      category: "Money Transfer",
      services: [
        "TAFCCUL to TAFCCUL",
        "Bank to Bank",
        "International Remittance",
        "Mobile Money Integration",
      ],
    },
    {
      category: "Bill Payments",
      services: [
        "Electricity Bills",
        "Water Bills",
        "School Fees",
        "Insurance Premiums",
        "Loan Repayments",
      ],
    },
    {
      category: "Mobile Money",
      services: [
        "MTN Mobile Money",
        "Orange Money",
        "Express Union",
        "YUP Mobile Money",
      ],
    },
    {
      category: "Airtime & Data",
      services: [
        "MTN Airtime",
        "Orange Airtime",
        "Nexttel Airtime",
        "Data Bundles",
      ],
    },
  ];

  const downloadSteps = [
    {
      step: 1,
      title: "Download App",
      description:
        "Download TAFCCUL Mobile from Google Play Store or App Store",
    },
    {
      step: 2,
      title: "Register Account",
      description: "Use your account number and personal details to register",
    },
    {
      step: 3,
      title: "Verify Identity",
      description: "Complete identity verification process",
    },
    {
      step: 4,
      title: "Set Security",
      description: "Create your mobile banking PIN and enable biometrics",
    },
    {
      step: 5,
      title: "Start Banking",
      description: "Begin enjoying convenient mobile banking services",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Mobile Banking
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Bank on the go with TAFCCUL Mobile. Secure, fast, and convenient
              banking services right in your pocket, available 24/7.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
              >
                <Download className="h-5 w-5 mr-2" />
                Download App
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-banking-navy"
                >
                  Get Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Mobile Banking Features
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Experience comprehensive banking services through our feature-rich
              mobile application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-banking transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-banking animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="bg-gradient-primary p-4 rounded-full mx-auto w-fit group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-banking-navy group-hover:text-banking-blue transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Bank Safe & Secure
              </h2>
              <p className="text-lg text-banking-gray">
                Your security is our top priority. TAFCCUL Mobile employs
                industry-leading security measures to protect your financial
                information.
              </p>

              <div className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-banking-success flex-shrink-0" />
                    <p className="text-banking-gray">{feature}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                <Download className="h-5 w-5 mr-2" />
                Download Now
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="border-banking-success/20 bg-banking-success/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-8 w-8 text-banking-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-banking-navy mb-2">
                        Bank-Grade Security
                      </h3>
                      <p className="text-banking-gray">
                        Our mobile banking platform uses the same security
                        standards as international banks, ensuring your money
                        and data are always protected.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-banking-blue/20 bg-banking-blue/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-8 w-8 text-banking-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-banking-navy mb-2">
                        24/7 Availability
                      </h3>
                      <p className="text-banking-gray">
                        Access your account and perform transactions any time of
                        day or night. Banking has never been more convenient.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Supported Services
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Access a wide range of financial services and payment options
              through our mobile app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportedServices.map((category, index) => (
              <Card
                key={category.category}
                className="border-banking-blue/20 hover:shadow-banking transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-banking-navy">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-banking-success flex-shrink-0" />
                        <span className="text-sm text-banking-gray">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Getting started with TAFCCUL Mobile is quick and easy. Follow
              these simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {downloadSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-banking-navy text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-banking-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-banking-gray">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Download Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
              Download TAFCCUL Mobile
            </h2>
            <p className="text-lg text-banking-gray">
              Available for both Android and iOS devices. Download now and start
              banking on the go.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-banking-navy/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-banking-navy text-white p-3 rounded-lg">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-banking-navy">
                      Android App
                    </h3>
                    <p className="text-sm text-banking-gray">
                      Download from Google Play Store
                    </p>
                  </div>
                  <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                    Download
                  </Button>
                </div>
              </Card>

              <Card className="p-6 border-banking-navy/20">
                <div className="flex items-center space-x-4">
                  <div className="bg-banking-navy text-white p-3 rounded-lg">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-banking-navy">iOS App</h3>
                    <p className="text-sm text-banking-gray">
                      Download from App Store
                    </p>
                  </div>
                  <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                    Download
                  </Button>
                </div>
              </Card>
            </div>

            <Card className="border-banking-warning/20 bg-banking-warning/5">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-banking-warning mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold text-banking-navy mb-2">
                      System Requirements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-banking-gray">
                          <strong>Android:</strong> Version 6.0 or higher
                        </p>
                        <p className="text-sm text-banking-gray">
                          <strong>Storage:</strong> Minimum 50MB available space
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-banking-gray">
                          <strong>iOS:</strong> Version 12.0 or higher
                        </p>
                        <p className="text-sm text-banking-gray">
                          <strong>Internet:</strong> Stable internet connection
                          required
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-banking-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Banking Made Simple
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of TAFCCUL members who are already enjoying the
            convenience of mobile banking. Download the app today and bank
            anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Mobile App
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-banking-navy"
              >
                Need Help?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileBanking;
