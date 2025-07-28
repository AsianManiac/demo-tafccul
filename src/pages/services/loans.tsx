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
  Briefcase,
  Calculator,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  Home,
  Shield,
  Tractor,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Loans = () => {
  const loanProducts = [
    {
      icon: User,
      title: "Personal Loans",
      description: "Quick and flexible personal loans for any purpose",
      rate: "From 8.5% APR",
      amount: "Up to 5,000,000 XAF",
      term: "6 - 60 months",
      features: [
        "Quick approval process",
        "Flexible repayment terms",
        "No collateral required for amounts up to 1M XAF",
        "Competitive interest rates",
      ],
      link: "/loans/personal",
    },
    {
      icon: Briefcase,
      title: "Business Loans",
      description:
        "Fuel your business growth with our business financing solutions",
      rate: "From 10% APR",
      amount: "Up to 25,000,000 XAF",
      term: "12 - 84 months",
      features: [
        "Working capital financing",
        "Equipment purchase loans",
        "Business expansion loans",
        "Flexible repayment schedules",
      ],
      link: "/loans/business",
    },
    {
      icon: Home,
      title: "Housing Loans",
      description: "Make your dream home a reality with our housing finance",
      rate: "From 7.5% APR",
      amount: "Up to 50,000,000 XAF",
      term: "60 - 300 months",
      features: [
        "Home purchase loans",
        "Home construction loans",
        "Home improvement loans",
        "Up to 90% financing",
      ],
      link: "/loans/housing",
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Invest in your future with our education financing",
      rate: "From 6% APR",
      amount: "Up to 10,000,000 XAF",
      term: "12 - 120 months",
      features: [
        "Tuition fee financing",
        "Living expenses coverage",
        "Grace period options",
        "Parent and student loans",
      ],
      link: "/loans/education",
    },
    {
      icon: Tractor,
      title: "Agricultural Loans",
      description:
        "Support your farming activities with specialized agri-loans",
      rate: "From 9% APR",
      amount: "Up to 15,000,000 XAF",
      term: "6 - 60 months",
      features: [
        "Seasonal farming loans",
        "Equipment purchase financing",
        "Livestock financing",
        "Crop production loans",
      ],
      link: "/loans/agricultural",
    },
  ];

  const eligibilityRequirements = [
    "Must be a TAFCCUL member for at least 6 months",
    "Age between 18 and 65 years",
    "Steady source of income",
    "Good credit history with TAFCCUL",
    "Valid identification documents",
    "Proof of income (salary slips, business records)",
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Application",
      description: "Complete our loan application form online or at any branch",
    },
    {
      step: 2,
      title: "Documentation",
      description: "Submit required documents for verification",
    },
    {
      step: 3,
      title: "Assessment",
      description: "Our team reviews your application and creditworthiness",
    },
    {
      step: 4,
      title: "Approval",
      description: "Loan approval and terms communication",
    },
    {
      step: 5,
      title: "Disbursement",
      description: "Loan amount disbursed to your account",
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
              Loan Products
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Achieve your dreams with our flexible and affordable loan
              solutions designed to meet your specific needs.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/services/loan-calculator">
                <Button
                  size="lg"
                  className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
                >
                  Calculate Your Loan
                </Button>
              </Link>
              <Link to="/apply/loan">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-banking-navy border-white hover:bg-white hover:text-banking-blue"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Our Loan Products
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Choose from our comprehensive range of loan products, each
              designed to meet specific financial needs with competitive rates
              and flexible terms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loanProducts.map((loan, index) => (
              <Card
                key={loan.title}
                className="group hover:shadow-banking transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-banking animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <loan.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-banking-navy group-hover:text-banking-blue transition-colors">
                        {loan.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {loan.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-sm text-banking-gray">
                        Interest Rate
                      </div>
                      <div className="font-semibold text-banking-navy">
                        {loan.rate}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-banking-gray">
                        Loan Amount
                      </div>
                      <div className="font-semibold text-banking-navy">
                        {loan.amount}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-banking-gray">Term</div>
                      <div className="font-semibold text-banking-navy">
                        {loan.term}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-banking-success" />
                        <span className="text-sm text-banking-gray">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Link to={loan.link} className="flex-1">
                      <Button className="w-full bg-banking-navy text-white hover:bg-banking-blue">
                        Learn More
                      </Button>
                    </Link>
                    <Link to="/apply/loan">
                      <Button
                        variant="outline"
                        className="text-banking-navy border-banking-navy hover:bg-banking-navy hover:text-white"
                      >
                        Apply
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Simple Loan Application Process
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Our streamlined process makes it easy to apply for and receive
              your loan quickly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {applicationProcess.map((step, index) => (
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

      {/* Eligibility Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Eligibility Requirements
              </h2>
              <p className="text-lg text-banking-gray">
                To qualify for a TAFCCUL loan, you must meet the following basic
                requirements:
              </p>

              <div className="space-y-3">
                {eligibilityRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-banking-success mt-0.5 flex-shrink-0" />
                    <p className="text-banking-gray">{requirement}</p>
                  </div>
                ))}
              </div>

              <Link to="/apply/loan">
                <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                  Apply for a Loan
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Calculator className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Loan Calculator
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Calculate your monthly payments
                </p>
                <Link to="/services/loan-calculator">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Calculate
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <FileText className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Required Documents
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  View the document checklist
                </p>
                <Link to="/loans/documents">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    View List
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Clock className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Processing Time
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Fast approval in 3-5 days
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

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Shield className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Loan Protection
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Optional loan insurance available
                </p>
                <Link to="/investments/insurance">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Learn More
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
            Ready to Apply for a Loan?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the next step towards achieving your goals. Our loan
            specialists are ready to help you find the perfect financing
            solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply/loan">
              <Button
                size="lg"
                className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
              >
                Apply Online Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-banking-navy border-white hover:bg-white hover:text-banking-blue"
              >
                Speak to a Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loans;
