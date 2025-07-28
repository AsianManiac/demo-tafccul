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
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Banknote,
  Camera,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Globe,
  MapPin,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const CurrentAccounts = () => {
  const accountTypes = [
    {
      icon: Users,
      title: "Standard Current Account",
      description: "Basic current account for everyday banking needs",
      features: [
        "Savings and deposit functionality",
        "Withdrawal services",
        "Account statement access",
        "Branch banking services",
        "Minimum balance: 30,000 XAF",
      ],
      monthlyFee: "Free",
      link: "/apply/account",
    },
    {
      icon: CreditCard,
      title: "Salary Account",
      description: "Designed for employees receiving regular salaries",
      features: [
        "Direct salary deposits",
        "Enhanced withdrawal limits",
        "Priority customer service",
        "Loan eligibility benefits",
        "Free account maintenance",
      ],
      monthlyFee: "Free",
      link: "/apply/account",
    },
    {
      icon: Smartphone,
      title: "Youth Savings Account",
      description: "Special account for young savers aged 16-25",
      features: [
        "Lower minimum balance",
        "Financial literacy training",
        "Educational loan benefits",
        "Mobile banking access",
        "Special youth programs",
      ],
      monthlyFee: "Free",
      link: "/apply/account",
    },
  ];

  const requirements = [
    {
      icon: Camera,
      title: "Passport Photographs",
      description: "2 passport size photographs",
      required: true,
    },
    {
      icon: FileText,
      title: "ID Card Copy",
      description: "Photocopy of national ID card or passport",
      required: true,
    },
    {
      icon: MapPin,
      title: "Location Sketch",
      description: "Hand-drawn sketch of your residential location on A4 paper",
      required: true,
    },
    {
      icon: Banknote,
      title: "Opening Deposit",
      description: "Minimum 30,000 XAF to start your account",
      required: true,
    },
  ];

  const fees = [
    {
      description: "Your Money (Refundable)",
      amount: "50,000 XAF",
      note: "This is your money and is fully refundable",
    },
    {
      description: "Solidarity Fund",
      amount: "20,000 XAF",
      note: "COBAK regulation fee",
    },
    {
      description: "Building Fee",
      amount: "10,000 XAF",
      note: "One-time infrastructure fee",
    },
    {
      description: "Document Processing",
      amount: "7,500 XAF",
      note: "Administrative processing fee",
    },
  ];

  const benefits = [
    "No monthly maintenance fees",
    "Competitive savings interest rates",
    "Loan eligibility after 6 months membership",
    "Access to all TAFCCUL financial services",
    "Flexible deposit and withdrawal options",
    "Professional financial advisory services",
    "Member dividend sharing program",
    "Insurance and investment opportunities",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Current Accounts
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Your gateway to comprehensive banking services with TAFCCUL. One
              account for savings, deposits, and salary management.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/apply/account">
                <Button
                  size="lg"
                  className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
                >
                  Open Account Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-white text-banking-navy"
                >
                  Visit Our Branch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Choose Your Account Type
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              All our current accounts offer the same core functionality -
              savings, deposits, and withdrawals. Choose the one that best fits
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accountTypes.map((account, index) => (
              <Card
                key={account.title}
                className="group hover:shadow-banking transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-banking animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-gradient-primary p-4 rounded-full group-hover:scale-110 transition-transform">
                      <account.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-banking-navy group-hover:text-banking-blue transition-colors">
                        {account.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {account.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-sm text-banking-gray">
                        Monthly Fee
                      </div>
                      <div className="text-2xl font-bold text-banking-success">
                        {account.monthlyFee}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {account.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-banking-success flex-shrink-0" />
                          <span className="text-sm text-banking-gray">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to={account.link} className="block">
                      <Button className="w-full bg-banking-navy text-white hover:bg-banking-blue">
                        Open This Account
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Account Opening Requirements
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Simple and straightforward requirements to open your TAFCCUL
              current account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {requirements.map((requirement, index) => (
              <Card
                key={requirement.title}
                className="text-center p-6 border-banking-blue/20 hover:shadow-banking transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <requirement.icon className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  {requirement.title}
                </h3>
                <p className="text-sm text-banking-gray">
                  {requirement.description}
                </p>
                {requirement.required && (
                  <div className="mt-2">
                    <span className="text-xs bg-banking-warning/20 text-banking-warning px-2 py-1 rounded-full">
                      Required
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Special Note */}
          <Card className="border-banking-success/20 bg-banking-success/5">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-banking-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-banking-navy mb-2">
                    Flexible Opening Process
                  </h3>
                  <p className="text-banking-gray">
                    You can start your account with as little as{" "}
                    <strong>30,000 XAF</strong>. You don't need to bring all the
                    money at once - we understand that financial situations
                    vary. Complete your account requirements over time as your
                    finances allow.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
                Complete Fee Structure
              </h2>
              <p className="text-lg text-banking-gray">
                Transparent pricing with no hidden charges. Total recommended:
                80,875 XAF
              </p>
            </div>

            <Card className="border-banking-navy/20">
              <CardHeader>
                <CardTitle className="text-banking-navy">
                  Fee Breakdown
                </CardTitle>
                <CardDescription>
                  All fees are one-time charges during account opening
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fees.map((fee, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-banking-gray/5 rounded-lg"
                    >
                      <div>
                        <div className="font-semibold text-banking-navy">
                          {fee.description}
                        </div>
                        <div className="text-sm text-banking-gray">
                          {fee.note}
                        </div>
                      </div>
                      <div className="text-xl font-bold text-banking-blue">
                        {fee.amount}
                      </div>
                    </div>
                  ))}

                  <Separator />

                  <div className="flex justify-between items-center p-4 bg-banking-blue/10 rounded-lg">
                    <div className="font-bold text-banking-navy">Total</div>
                    <div className="text-2xl font-bold text-banking-blue">
                      87,500 XAF
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Account Benefits
              </h2>
              <p className="text-lg text-banking-gray">
                Your TAFCCUL current account opens doors to a comprehensive
                suite of financial services designed to help you achieve your
                financial goals.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-banking-success mt-0.5 flex-shrink-0" />
                    <p className="text-banking-gray">{benefit}</p>
                  </div>
                ))}
              </div>

              <Link to="/apply/account">
                <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                  Start Your Application
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Globe className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Online Banking
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Access your account 24/7
                </p>
                <Link to="/services/online-banking">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Learn More
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Smartphone className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Mobile Banking
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Banking on the go
                </p>
                <Link to="/services/mobile-banking">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Learn More
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Shield className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Secure Banking
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Advanced security features
                </p>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Learn More
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Clock className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  24/7 Support
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Always here to help
                </p>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Contact Us
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-banking-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Open Your Account?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied TAFCCUL members. Start your financial
            journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply/account">
              <Button
                size="lg"
                className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
              >
                Open Account Online
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-banking-navy"
              >
                Visit a Branch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CurrentAccounts;
