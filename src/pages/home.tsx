// import heroImage from "@/assets/hero-banking.jpg";
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
  Award,
  Calculator,
  Clock,
  CreditCard,
  Phone,
  PiggyBank,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: PiggyBank,
      title: "Savings Accounts",
      description:
        "Secure savings with competitive interest rates and flexible access to your funds.",
      link: "/services/savings",
    },
    {
      icon: CreditCard,
      title: "Personal Loans",
      description:
        "Quick and affordable personal loans with flexible repayment terms.",
      link: "/loans/personal",
    },
    {
      icon: TrendingUp,
      title: "Investment Plans",
      description:
        "Grow your wealth with our diverse investment options and expert guidance.",
      link: "/investments/plans",
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description:
        "Bank anywhere, anytime with our secure and user-friendly mobile app.",
      link: "/services/mobile",
    },
    {
      icon: Shield,
      title: "Insurance Services",
      description:
        "Protect yourself and your family with comprehensive insurance coverage.",
      link: "/investments/insurance",
    },
    {
      icon: Users,
      title: "Business Banking",
      description:
        "Tailored financial solutions to help your business grow and succeed.",
      link: "/services/business",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Active Members" },
    { number: "25+", label: "Years of Service" },
    { number: "15", label: "Branch Locations" },
    { number: "99.9%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('hero-banking-B6uM3qN0.jpg')` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Your Trusted Financial Partner
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              TAFCCUL Cooperative Credit Union - Building stronger communities
              through exceptional financial services and member-focused
              solutions.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/apply/account">
                <Button
                  size="lg"
                  className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90 text-lg px-8 py-6"
                >
                  Open Your Account Today
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-white text-banking-navy text-lg px-8 py-6"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Banking Made Simple
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Experience seamless banking with our comprehensive range of
              financial services designed to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-banking transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-banking animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-banking-navy group-hover:text-banking-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-banking-gray mb-4">
                    {service.description}
                  </CardDescription>
                  <Link to={service.link}>
                    <Button
                      variant="outline"
                      className="w-full text-banking-navy border-banking-navy hover:bg-banking-navy hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-banking-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-banking-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Why Choose TAFCCUL?
              </h2>
              <p className="text-lg text-banking-gray">
                As a member-owned cooperative, we prioritize your financial
                success and community development above profit.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-banking-blue/10 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-banking-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-banking-navy">
                      Member-Owned
                    </h3>
                    <p className="text-banking-gray">
                      Owned and operated by our members, for our members.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-banking-blue/10 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-banking-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-banking-navy">
                      25+ Years Experience
                    </h3>
                    <p className="text-banking-gray">
                      Trusted financial partner since 1999.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-banking-blue/10 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-banking-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-banking-navy">
                      Secure & Protected
                    </h3>
                    <p className="text-banking-gray">
                      Your deposits are insured and protected.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Calculator className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Loan Calculator
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Calculate your loan payments
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
                <Phone className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  24/7 Support
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  We're here when you need us
                </p>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Contact
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join TAFCCUL?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become a member today and experience the difference of cooperative
            banking. Your financial success is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply/account">
              <Button
                size="lg"
                className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
              >
                Open Account Now
              </Button>
            </Link>
            <Link to="/apply/membership">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white text-banking-navy"
              >
                Apply for Membership
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
