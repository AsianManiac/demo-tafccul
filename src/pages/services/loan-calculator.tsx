import LoanCalculator from "@/components/calculators/loan-calculator";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const LoanCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Loan Calculator
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Plan your finances with precision. Calculate your loan payments,
              explore different scenarios, and find the perfect loan for your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <LoanCalculator />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoanCalculatorPage;
