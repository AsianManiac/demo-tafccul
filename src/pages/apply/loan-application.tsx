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
import { AlertCircle, Calculator, CreditCard, Users } from "lucide-react";
import { useState } from "react";

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    loanType: "savings",
    loanAmount: "",
    purpose: "",
    currentSavings: "",
    monthlyIncome: "",
    employmentType: "",
    collateral: "",
    guarantor1: "",
    guarantor2: "",
  });

  const loanTypes = {
    savings: {
      name: "Savings/Short-term Loan",
      rate: 1.0,
      requirement: "1/5 of loan amount in savings",
    },
    salary: {
      name: "Salary Loan",
      rate: 1.2,
      requirement: "1/5 of loan amount in savings",
    },
    collateral: {
      name: "Collateral Loan",
      rate: 1.4,
      requirement: "1/5 + collateral",
    },
    personal: {
      name: "Personal Loan",
      rate: 8.5,
      requirement: "Good credit history",
    },
    business: {
      name: "Business Loan",
      rate: 10.0,
      requirement: "Business plan + guarantors",
    },
    housing: {
      name: "Housing Loan",
      rate: 7.5,
      requirement: "Property documents",
    },
    education: {
      name: "Education Loan",
      rate: 6.0,
      requirement: "Admission letter",
    },
    agricultural: {
      name: "Agricultural Loan",
      rate: 9.0,
      requirement: "Farm documentation",
    },
  };

  const calculateRequiredSavings = () => {
    const amount = parseFloat(formData.loanAmount) || 0;
    return amount * 0.2; // 1/5 of loan amount
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Apply for a Loan
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Get the financial support you need with our competitive loan
              products
            </p>
          </div>
        </div>
      </section>

      {/* Loan Eligibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-banking-blue/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-6 w-6 text-banking-blue" />
                  <CardTitle className="text-banking-navy">
                    Loan Eligibility Requirements
                  </CardTitle>
                </div>
                <CardDescription>
                  Important information about TAFCCUL loan eligibility and
                  policies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-banking-blue/5 p-6 rounded-lg">
                  <h3 className="font-semibold text-banking-navy mb-4">
                    Basic Eligibility Policy
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-banking-blue rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Savings Requirement:</p>
                        <p>
                          You must have at least <strong>1/5 (20%)</strong> of
                          the loan amount in your savings account
                        </p>
                        <p className="text-banking-gray">
                          Example: For XAF 1,000,000 loan → minimum XAF 200,000
                          in savings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-banking-success rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">Flexible Approach:</p>
                        <p>
                          Members with good records may receive assistance to
                          build required savings
                        </p>
                        <p className="text-banking-gray">
                          We can provide additional funds to meet savings
                          requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-banking-warning rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">
                          Multiple Account Integration:
                        </p>
                        <p>
                          Your savings, current, and deposit accounts work
                          together automatically
                        </p>
                        <p className="text-banking-gray">
                          No need to open separate accounts for different
                          services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {formData.loanAmount && (
                  <div className="bg-banking-success/5 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calculator className="h-5 w-5 text-banking-success" />
                      <span className="font-medium">
                        Required Savings Calculation
                      </span>
                    </div>
                    <p className="text-sm">
                      For a loan of{" "}
                      <strong>
                        XAF {parseFloat(formData.loanAmount).toLocaleString()}
                      </strong>
                      , you need at least{" "}
                      <strong>
                        XAF {calculateRequiredSavings().toLocaleString()}
                      </strong>{" "}
                      in savings.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Application Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-6 w-6 text-banking-blue" />
                  <CardTitle>Loan Application Form</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="loanType">Loan Type *</Label>
                    <Select
                      value={formData.loanType}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, loanType: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(loanTypes).map(([key, loan]) => (
                          <SelectItem key={key} value={key}>
                            {loan.name} ({loan.rate}% APR)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formData.loanType && (
                      <Badge variant="secondary" className="text-xs">
                        {
                          loanTypes[formData.loanType as keyof typeof loanTypes]
                            .requirement
                        }
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanAmount">Loan Amount (XAF) *</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      value={formData.loanAmount}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          loanAmount: e.target.value,
                        }))
                      }
                      placeholder="Enter loan amount"
                      min="10000"
                      step="10000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentSavings">
                      Current Savings Balance (XAF) *
                    </Label>
                    <Input
                      id="currentSavings"
                      type="number"
                      value={formData.currentSavings}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          currentSavings: e.target.value,
                        }))
                      }
                      placeholder="Enter current savings"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome">
                      Monthly Income (XAF) *
                    </Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          monthlyIncome: e.target.value,
                        }))
                      }
                      placeholder="Enter monthly income"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employmentType">Employment Type *</Label>
                    <Select
                      value={formData.employmentType}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          employmentType: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="government">
                          Government Employee
                        </SelectItem>
                        <SelectItem value="private">Private Sector</SelectItem>
                        <SelectItem value="self-employed">
                          Self Employed
                        </SelectItem>
                        <SelectItem value="business">Business Owner</SelectItem>
                        <SelectItem value="farmer">Farmer</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="collateral">
                      Collateral (if applicable)
                    </Label>
                    <Input
                      id="collateral"
                      value={formData.collateral}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          collateral: e.target.value,
                        }))
                      }
                      placeholder="Describe collateral offered"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="purpose">Loan Purpose *</Label>
                  <Textarea
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        purpose: e.target.value,
                      }))
                    }
                    placeholder="Describe the purpose of this loan..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-banking-blue" />
                    <Label className="text-base">
                      Guarantors (Required for some loan types)
                    </Label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guarantor1">
                        Guarantor 1 (Name & Contact)
                      </Label>
                      <Input
                        id="guarantor1"
                        value={formData.guarantor1}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            guarantor1: e.target.value,
                          }))
                        }
                        placeholder="Full name and phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guarantor2">
                        Guarantor 2 (Name & Contact)
                      </Label>
                      <Input
                        id="guarantor2"
                        value={formData.guarantor2}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            guarantor2: e.target.value,
                          }))
                        }
                        placeholder="Full name and phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1">
                    Submit Loan Application
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save as Draft
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

export default LoanApplication;
