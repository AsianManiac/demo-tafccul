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
  Baby,
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  Home,
  PiggyBank,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Savings = () => {
  const savingsProducts = [
    {
      icon: PiggyBank,
      title: "Regular Savings Account",
      description:
        "Your everyday savings account with competitive interest rates",
      rate: "2.5% per annum",
      minBalance: "5,000 XAF",
      features: [
        "No monthly maintenance fees",
        "Free online and mobile banking",
        "Free ATM card",
        "Unlimited deposits",
        "Quarterly interest payments",
      ],
      link: "/services/savings/regular",
    },
    {
      icon: TrendingUp,
      title: "Premium Savings Account",
      description: "Higher returns for larger balances with premium benefits",
      rate: "3.5% per annum",
      minBalance: "100,000 XAF",
      features: [
        "Higher interest rates",
        "Priority customer service",
        "Free checkbook",
        "SMS transaction alerts",
        "Dedicated relationship manager",
      ],
      link: "/services/savings/premium",
    },
    {
      icon: Baby,
      title: "Children's Savings Account",
      description:
        "Start your child's financial journey early with our kids account",
      rate: "3.0% per annum",
      minBalance: "1,000 XAF",
      features: [
        "No monthly fees",
        "Educational resources",
        "Parental controls",
        "Birthday bonuses",
        "Financial literacy programs",
      ],
      link: "/services/savings/children",
    },
    {
      icon: GraduationCap,
      title: "Student Savings Account",
      description: "Special account for students with educational benefits",
      rate: "2.8% per annum",
      minBalance: "2,000 XAF",
      features: [
        "Reduced minimum balance",
        "No transaction fees",
        "Study loan privileges",
        "Educational workshops",
        "Scholarship opportunities",
      ],
      link: "/services/savings/student",
    },
    {
      icon: Home,
      title: "Home Savings Plan",
      description: "Save systematically for your dream home",
      rate: "4.0% per annum",
      minBalance: "25,000 XAF",
      features: [
        "Higher interest rates",
        "Home loan privileges",
        "Flexible deposit schedules",
        "Property investment advice",
        "Real estate partnerships",
      ],
      link: "/services/savings/home",
    },
    {
      icon: Users,
      title: "Group Savings Account",
      description: "Perfect for clubs, associations, and group investments",
      rate: "3.2% per annum",
      minBalance: "10,000 XAF",
      features: [
        "Multiple signatories",
        "Group loan facilities",
        "Meeting room booking",
        "Bulk transaction discounts",
        "Group insurance options",
      ],
      link: "/services/savings/group",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Deposit Protection",
      description:
        "Your deposits are protected under COBAK regulations and deposit insurance schemes.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description:
        "Enjoy competitive interest rates that help your money grow faster.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description:
        "Access your account anytime through our online and mobile banking platforms.",
    },
    {
      icon: Calculator,
      title: "No Hidden Fees",
      description:
        "Transparent pricing with no hidden charges or surprise fees.",
    },
  ];

  const savingsTips = [
    "Set up automatic transfers to build savings consistently",
    "Take advantage of compound interest with regular deposits",
    "Use our savings calculator to plan your financial goals",
    "Consider opening multiple accounts for different purposes",
    "Review and adjust your savings strategy annually",
    "Take advantage of special promotions and bonus rates",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Savings Accounts
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Build your financial future with our comprehensive range of
              savings products offering competitive rates and flexible terms.
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
                  Open Savings Account
                </Button>
              </Link>
              <Link to="/tools/savings-calculator">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-banking-navy"
                >
                  Savings Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Our Savings Products
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Choose the savings account that best fits your financial goals and
              lifestyle. All accounts come with competitive rates and excellent
              member benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {savingsProducts.map((product, index) => (
              <Card
                key={product.title}
                className="group hover:shadow-banking transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-banking animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-banking-navy group-hover:text-banking-blue transition-colors">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {product.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-sm text-banking-gray">
                        Interest Rate
                      </div>
                      <div className="font-semibold text-banking-navy">
                        {product.rate}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-banking-gray">
                        Minimum Balance
                      </div>
                      <div className="font-semibold text-banking-navy">
                        {product.minBalance}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-banking-navy">
                      Key Features:
                    </h4>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-banking-success flex-shrink-0" />
                        <span className="text-sm text-banking-gray">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Link to={product.link} className="flex-1">
                      <Button className="w-full bg-banking-navy text-white hover:bg-banking-blue">
                        Learn More
                      </Button>
                    </Link>
                    <Link to="/apply/account">
                      <Button
                        variant="outline"
                        className="text-banking-navy border-banking-navy hover:bg-banking-navy hover:text-white"
                      >
                        Open Account
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Save with TAFCCUL */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Why Save with TAFCCUL?
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Experience the cooperative difference with member-focused benefits
              and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="text-center p-6 border-0 shadow-card-banking hover:shadow-banking transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-banking-gray text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Smart Savings Tips
              </h2>
              <p className="text-lg text-banking-gray">
                Maximize your savings potential with these proven strategies and
                make your money work harder for you.
              </p>

              <div className="space-y-3">
                {savingsTips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="bg-banking-blue/10 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-banking-blue rounded-full"></div>
                    </div>
                    <p className="text-banking-gray">{tip}</p>
                  </div>
                ))}
              </div>

              <Link to="/resources/financial-education">
                <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                  Financial Education Resources
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Calculator className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Savings Calculator
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Calculate your savings growth
                </p>
                <Link to="/tools/savings-calculator">
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
                <Calendar className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Goal Planner
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Plan your savings goals
                </p>
                <Link to="/tools/goal-planner">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    Plan Goals
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <FileText className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Rate Sheet
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Current interest rates
                </p>
                <Link to="/rates">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    View Rates
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Users className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Member Benefits
                </h3>
                <p className="text-sm text-banking-gray mb-4">
                  Exclusive member perks
                </p>
                <Link to="/members/benefits">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-banking-blue border-banking-blue"
                  >
                    View Benefits
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rates Comparison */}
      <section className="py-16 bg-banking-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Interest Rates
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our competitive interest rates help your savings grow faster.
              Rates are reviewed regularly to ensure market competitiveness.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-banking-gold mb-2">
                      2.5%
                    </div>
                    <div className="text-white/80">Regular Savings</div>
                    <div className="text-sm text-white/60">
                      Minimum 5,000 XAF
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-banking-gold mb-2">
                      3.5%
                    </div>
                    <div className="text-white/80">Premium Savings</div>
                    <div className="text-sm text-white/60">
                      Minimum 100,000 XAF
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-banking-gold mb-2">
                      4.0%
                    </div>
                    <div className="text-white/80">Home Savings Plan</div>
                    <div className="text-sm text-white/60">
                      Minimum 25,000 XAF
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-sm text-white/70 mb-4">
                    * Rates are subject to change. Interest is calculated
                    monthly and paid quarterly.
                  </p>
                  <Link to="/rates">
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-banking-navy"
                    >
                      View Complete Rate Sheet
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
            Start Saving Today
          </h2>
          <p className="text-xl text-banking-gray mb-8 max-w-2xl mx-auto">
            Join thousands of members who are building their financial future
            with TAFCCUL. Open your savings account today and start earning
            competitive returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply/account">
              <Button
                size="lg"
                className="bg-banking-navy text-white hover:bg-banking-blue"
              >
                Open Savings Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-banking-navy border-banking-navy hover:bg-banking-navy hover:text-white"
              >
                Speak to an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Savings;
