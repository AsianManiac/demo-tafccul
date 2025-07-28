import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRightLeft,
  Clock,
  CreditCard,
  FileText,
  Globe,
  Monitor,
  PieChart,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const OnlineBanking = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-banking-blue" />,
      title: "Account Management",
      description:
        "View balances, transaction history, and manage multiple accounts from one dashboard",
      benefits: [
        "Real-time balance updates",
        "Transaction categorization",
        "Account statements",
      ],
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8 text-banking-success" />,
      title: "Money Transfers",
      description:
        "Transfer funds between accounts, to other members, and external banks",
      benefits: [
        "Instant TAFCCUL transfers",
        "Scheduled payments",
        "Bulk transfers",
      ],
    },
    {
      icon: <PieChart className="h-8 w-8 text-banking-warning" />,
      title: "Financial Planning",
      description:
        "Track spending, set budgets, and monitor your financial goals",
      benefits: ["Spending analytics", "Budget alerts", "Goal tracking"],
    },
    {
      icon: <FileText className="h-8 w-8 text-banking-purple" />,
      title: "Loan Services",
      description:
        "Apply for loans, check loan status, and make payments online",
      benefits: [
        "Online applications",
        "Payment scheduling",
        "Loan calculator",
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-banking-navy" />,
      title: "Bill Payments",
      description:
        "Pay utilities, phone bills, and other services directly from your account",
      benefits: ["Multiple billers", "Recurring payments", "Payment history"],
    },
    {
      icon: <Zap className="h-8 w-8 text-banking-accent" />,
      title: "Quick Actions",
      description: "Perform common banking tasks with just a few clicks",
      benefits: ["Favorite transactions", "Quick transfer", "Recent payees"],
    },
  ];

  const securityFeatures = [
    "256-bit SSL encryption",
    "Two-factor authentication",
    "Biometric login support",
    "Session timeout protection",
    "Transaction alerts",
    "Fraud monitoring",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Online Banking
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Bank anytime, anywhere with TAFCCUL's secure online banking
              platform
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" variant="secondary" className="animate-fade-in">
                <Monitor className="h-5 w-5 mr-2" />
                Access Online Banking
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="animate-fade-in border-white hover:bg-white hover:text-banking-blue text-primary"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Download Mobile App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
                Banking Made Simple
              </h2>
              <p className="text-lg text-banking-gray max-w-2xl mx-auto">
                Experience the convenience of modern banking with our
                comprehensive online platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-banking-blue/20 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {feature.icon}
                      <CardTitle className="text-banking-navy">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-banking-gray">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-banking-blue rounded-full"></div>
                          <span className="text-sm text-banking-gray">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-banking-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-banking-success/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-banking-success" />
                </div>
                <CardTitle className="text-2xl text-banking-navy">
                  Bank-Grade Security
                </CardTitle>
                <CardDescription>
                  Your financial information is protected with the highest
                  security standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Security Features
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {securityFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Shield className="h-4 w-4 text-banking-success" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Best Practices
                    </h3>
                    <div className="space-y-3 text-sm text-banking-gray">
                      <p>• Always log out when finished banking</p>
                      <p>• Never share your login credentials</p>
                      <p>• Use strong, unique passwords</p>
                      <p>• Keep your contact information updated</p>
                      <p>• Report suspicious activity immediately</p>
                      <p>• Use secure networks for banking</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-banking-blue" />
                  <CardTitle>24/7 Access</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Service Availability
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Online Banking:</span>
                        <Badge variant="secondary">24/7</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Transfers (TAFCCUL):</span>
                        <Badge variant="secondary">Instant</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>External Transfers:</span>
                        <Badge variant="outline">Business Hours</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Customer Support:</span>
                        <Badge variant="outline">Mon-Fri 8AM-6PM</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Getting Started
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <span className="bg-banking-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          1
                        </span>
                        <span>Visit our branch to activate online banking</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="bg-banking-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          2
                        </span>
                        <span>Receive your temporary login credentials</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="bg-banking-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          3
                        </span>
                        <span>
                          Set up your permanent password and security questions
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="bg-banking-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          4
                        </span>
                        <span>Start banking online immediately</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="mr-4">
                    Get Started Today
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Support
                  </Button>
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

export default OnlineBanking;
