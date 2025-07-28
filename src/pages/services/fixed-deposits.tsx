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
  AlertTriangle,
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const FixedDeposits = () => {
  const depositPlans = [
    {
      icon: Clock,
      title: "Short-term Deposit",
      duration: "3-6 months",
      minAmount: "100,000 XAF",
      interestRate: "3.5% - 4.0%",
      features: [
        "Quick maturity period",
        "Lower minimum deposit",
        "Flexible renewal options",
        "Early withdrawal allowed with penalty",
      ],
      recommended: false,
    },
    {
      icon: TrendingUp,
      title: "Medium-term Deposit",
      duration: "6-12 months",
      minAmount: "500,000 XAF",
      interestRate: "4.5% - 5.5%",
      features: [
        "Balanced growth and liquidity",
        "Better interest rates",
        "Partial withdrawal options",
        "Auto-renewal facility",
      ],
      recommended: true,
    },
    {
      icon: Target,
      title: "Long-term Deposit",
      duration: "12-36 months",
      minAmount: "1,000,000 XAF",
      interestRate: "6.0% - 7.5%",
      features: [
        "Highest interest rates",
        "Compound interest benefits",
        "Loan against deposit facility",
        "Guaranteed returns",
      ],
      recommended: false,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Guaranteed Returns",
      description:
        "Fixed interest rates ensure predictable returns on your investment",
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Higher interest rates compared to regular savings accounts",
    },
    {
      icon: Calendar,
      title: "Flexible Terms",
      description:
        "Choose from various deposit terms that suit your financial goals",
    },
    {
      icon: FileText,
      title: "Easy Process",
      description:
        "Simple documentation and quick processing for account opening",
    },
  ];

  const interestCalculation = [
    {
      amount: "100,000 XAF",
      duration: "6 months",
      rate: "4.0%",
      maturityValue: "102,000 XAF",
      interest: "2,000 XAF",
    },
    {
      amount: "500,000 XAF",
      duration: "12 months",
      rate: "5.5%",
      maturityValue: "527,500 XAF",
      interest: "27,500 XAF",
    },
    {
      amount: "1,000,000 XAF",
      duration: "24 months",
      rate: "7.0%",
      maturityValue: "1,140,000 XAF",
      interest: "140,000 XAF",
    },
  ];

  const features = [
    "Minimum deposit starts from 100,000 XAF",
    "Competitive interest rates up to 7.5% per annum",
    "Flexible deposit terms from 3 to 36 months",
    "Auto-renewal options available",
    "Loan facility against fixed deposits",
    "Premature withdrawal facility (with penalty)",
    "Interest payment options: monthly, quarterly, or at maturity",
    "No hidden charges or fees",
    "COBAK regulated and secured deposits",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Fixed Deposits
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Secure your future with guaranteed returns. Earn higher interest
              rates with our fixed deposit schemes tailored to your financial
              goals.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/apply/fixed-deposit">
                <Button
                  size="lg"
                  className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
                >
                  Open Fixed Deposit
                </Button>
              </Link>
              <Link to="/calculators/fixed-deposit">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-white text-banking-navy hover:text-banking-blue"
                >
                  Calculate Returns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Choose Your Deposit Plan
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Select from our range of fixed deposit plans designed to maximize
              your returns while providing the flexibility you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {depositPlans.map((plan, index) => (
              <Card
                key={plan.title}
                className={`group hover:shadow-banking transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-banking animate-fade-in relative ${
                  plan.recommended ? "ring-2 ring-banking-gold" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-banking-gold text-banking-navy px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-gradient-primary p-4 rounded-full group-hover:scale-110 transition-transform">
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-banking-navy group-hover:text-banking-blue transition-colors">
                        {plan.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {plan.duration} investment term
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-banking-gray">Minimum</div>
                        <div className="font-semibold text-banking-navy">
                          {plan.minAmount}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-banking-gray">
                          Interest Rate
                        </div>
                        <div className="font-semibold text-banking-success">
                          {plan.interestRate}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-banking-success flex-shrink-0" />
                          <span className="text-sm text-banking-gray">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to="/apply/fixed-deposit" className="block">
                      <Button
                        className={`w-full ${
                          plan.recommended
                            ? "bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
                            : "bg-banking-navy text-white hover:bg-banking-blue"
                        }`}
                      >
                        Choose This Plan
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Why Choose TAFCCUL Fixed Deposits?
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Our fixed deposit schemes offer the perfect combination of
              security, growth, and flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="text-center p-6 border-banking-blue/20 hover:shadow-banking transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-banking-gray">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Calculation Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Interest Calculation Examples
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              See how your money can grow with our competitive fixed deposit
              rates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-banking-navy/20">
              <CardHeader>
                <CardTitle className="text-banking-navy flex items-center space-x-2">
                  <Calculator className="h-6 w-6" />
                  <span>Sample Calculations</span>
                </CardTitle>
                <CardDescription>
                  Examples showing maturity values for different deposit amounts
                  and terms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-banking-navy/20">
                        <th className="text-left p-4 font-semibold text-banking-navy">
                          Deposit Amount
                        </th>
                        <th className="text-left p-4 font-semibold text-banking-navy">
                          Duration
                        </th>
                        <th className="text-left p-4 font-semibold text-banking-navy">
                          Interest Rate
                        </th>
                        <th className="text-left p-4 font-semibold text-banking-navy">
                          Interest Earned
                        </th>
                        <th className="text-left p-4 font-semibold text-banking-navy">
                          Maturity Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {interestCalculation.map((calc, index) => (
                        <tr
                          key={index}
                          className="border-b border-banking-gray/20 hover:bg-banking-gray/5"
                        >
                          <td className="p-4 text-banking-navy font-medium">
                            {calc.amount}
                          </td>
                          <td className="p-4 text-banking-gray">
                            {calc.duration}
                          </td>
                          <td className="p-4 text-banking-blue font-medium">
                            {calc.rate}
                          </td>
                          <td className="p-4 text-banking-success font-medium">
                            {calc.interest}
                          </td>
                          <td className="p-4 text-banking-navy font-bold">
                            {calc.maturityValue}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-banking-warning/10 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-banking-warning mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-banking-gray">
                      <strong>Note:</strong> Interest rates are subject to
                      change based on market conditions. The above calculations
                      are for illustration purposes only. Actual returns may
                      vary.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Fixed Deposit Features
              </h2>
              <p className="text-lg text-banking-gray">
                Our fixed deposit accounts come with a comprehensive set of
                features designed to provide maximum value and convenience.
              </p>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-banking-success mt-0.5 flex-shrink-0" />
                    <p className="text-banking-gray">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Link to="/apply/fixed-deposit">
                  <Button className="bg-banking-navy text-white hover:bg-banking-blue">
                    Open Fixed Deposit
                  </Button>
                </Link>
                <Link to="/calculators/fixed-deposit">
                  <Button
                    variant="outline"
                    className="text-banking-navy border-banking-navy hover:bg-banking-navy hover:text-white"
                  >
                    Calculate Returns
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-banking-success/20 bg-banking-success/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-8 w-8 text-banking-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-banking-navy mb-2">
                        100% Secure Investment
                      </h3>
                      <p className="text-banking-gray">
                        Your fixed deposits are fully protected under COBAK
                        regulations. Enjoy complete peace of mind with
                        guaranteed principal protection and assured returns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-banking-blue/20 bg-banking-blue/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-8 w-8 text-banking-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-banking-navy mb-2">
                        Loan Against Deposit
                      </h3>
                      <p className="text-banking-gray">
                        Need funds before maturity? Get instant loans up to 90%
                        of your fixed deposit value at attractive interest rates
                        without breaking your deposit.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-banking-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Growing Your Money Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let your money sit idle. Open a TAFCCUL fixed deposit and
            watch your savings grow with guaranteed returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply/fixed-deposit">
              <Button
                size="lg"
                className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90"
              >
                Open Fixed Deposit
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-banking-navy border-white hover:bg-white hover:text-banking-blue"
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

export default FixedDeposits;
