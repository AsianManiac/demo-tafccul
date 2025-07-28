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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TafcculLoader from "@/components/ui/loader";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  Briefcase,
  Check,
  DollarSign,
  FileText,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

const AccountApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    nationality: "Cameroonian",

    // Contact Information
    phone: "",
    email: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",

    // Employment Information
    employmentStatus: "",
    employer: "",
    jobTitle: "",
    monthlyIncome: "",
    workAddress: "",

    // Account Preferences
    accountType: "",
    initialDeposit: "",
    referralSource: "",

    // Documents
    idType: "",
    idNumber: "",

    // Terms
    termsAccepted: false,
    marketingConsent: false,
  });

  const steps = [
    {
      id: 1,
      title: "Personal Information",
      icon: User,
      description: "Basic personal details",
    },
    {
      id: 2,
      title: "Contact Information",
      icon: MapPin,
      description: "Address and contact details",
    },
    {
      id: 3,
      title: "Employment Information",
      icon: Briefcase,
      description: "Work and income details",
    },
    {
      id: 4,
      title: "Account Setup",
      icon: DollarSign,
      description: "Account type and preferences",
    },
    {
      id: 5,
      title: "Documentation",
      icon: FileText,
      description: "Identity verification",
    },
  ];

  const accountTypes = [
    {
      id: "basic-savings",
      name: "Basic Savings Account",
      description:
        "Perfect for everyday banking with competitive interest rates",
      minimumDeposit: "5,000 XAF",
      features: [
        "No monthly fees",
        "Online banking",
        "Mobile banking",
        "Debit card",
      ],
    },
    {
      id: "premium-savings",
      name: "Premium Savings Account",
      description: "Higher interest rates with additional benefits",
      minimumDeposit: "50,000 XAF",
      features: [
        "Higher interest rates",
        "Priority customer service",
        "Free checks",
        "Investment advice",
      ],
    },
    {
      id: "youth-savings",
      name: "Youth Savings Account",
      description: "Special account for young savers (under 25)",
      minimumDeposit: "1,000 XAF",
      features: [
        "Low minimum balance",
        "Financial education",
        "No maintenance fees",
        "Online resources",
      ],
    },
    {
      id: "business-account",
      name: "Business Account",
      description: "Designed for businesses and entrepreneurs",
      minimumDeposit: "25,000 XAF",
      features: [
        "Business banking",
        "Merchant services",
        "Business loans",
        "Cash management",
      ],
    },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle success
    }, 3000);
  };

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <TafcculLoader size="lg" className="text-white mb-4" />
          <p className="text-white text-lg">Processing your application...</p>
          <p className="text-white/80 text-sm mt-2">
            This may take a few moments
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
                Open Your TAFCCUL Account
              </h1>
              <p className="text-lg text-banking-gray">
                Join thousands of satisfied members and start your journey to
                financial success.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                        currentStep >= step.id
                          ? "bg-banking-navy border-banking-navy text-white"
                          : "border-gray-300 text-gray-400"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        <step.icon className="h-6 w-6" />
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <div
                        className={`text-sm font-medium ${
                          currentStep >= step.id
                            ? "text-banking-navy"
                            : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500 hidden md:block">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-banking-navy h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Content */}
            <Card className="shadow-banking border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-banking-navy">
                  Step {currentStep}: {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription>
                  {steps[currentStep - 1].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="middleName">Middle Name</Label>
                      <Input
                        id="middleName"
                        value={formData.middleName}
                        onChange={(e) =>
                          handleInputChange("middleName", e.target.value)
                        }
                        placeholder="Enter your middle name (optional)"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                            handleInputChange("dateOfBirth", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Gender *</Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={(value) =>
                            handleInputChange("gender", value)
                          }
                        >
                          <div className="flex space-x-6">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" />
                              <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" />
                              <Label htmlFor="female">Female</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="maritalStatus">Marital Status</Label>
                        <Select
                          value={formData.maritalStatus}
                          onValueChange={(value) =>
                            handleInputChange("maritalStatus", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select marital status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single</SelectItem>
                            <SelectItem value="married">Married</SelectItem>
                            <SelectItem value="divorced">Divorced</SelectItem>
                            <SelectItem value="widowed">Widowed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality *</Label>
                        <Input
                          id="nationality"
                          value={formData.nationality}
                          onChange={(e) =>
                            handleInputChange("nationality", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+237 123 456 789"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Home Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        placeholder="Enter your complete home address"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          placeholder="City"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="region">Region *</Label>
                        <Select
                          value={formData.region}
                          onValueChange={(value) =>
                            handleInputChange("region", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="centre">Centre</SelectItem>
                            <SelectItem value="littoral">Littoral</SelectItem>
                            <SelectItem value="west">West</SelectItem>
                            <SelectItem value="northwest">Northwest</SelectItem>
                            <SelectItem value="southwest">Southwest</SelectItem>
                            <SelectItem value="east">East</SelectItem>
                            <SelectItem value="adamawa">Adamawa</SelectItem>
                            <SelectItem value="north">North</SelectItem>
                            <SelectItem value="far-north">Far North</SelectItem>
                            <SelectItem value="south">South</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) =>
                            handleInputChange("postalCode", e.target.value)
                          }
                          placeholder="Postal code"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Employment Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="employmentStatus">
                        Employment Status *
                      </Label>
                      <Select
                        value={formData.employmentStatus}
                        onValueChange={(value) =>
                          handleInputChange("employmentStatus", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select employment status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employed">
                            Employed (Full-time)
                          </SelectItem>
                          <SelectItem value="part-time">
                            Employed (Part-time)
                          </SelectItem>
                          <SelectItem value="self-employed">
                            Self-employed
                          </SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {(formData.employmentStatus === "employed" ||
                      formData.employmentStatus === "part-time") && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="employer">Employer Name *</Label>
                            <Input
                              id="employer"
                              value={formData.employer}
                              onChange={(e) =>
                                handleInputChange("employer", e.target.value)
                              }
                              placeholder="Company/Organization name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="jobTitle">Job Title *</Label>
                            <Input
                              id="jobTitle"
                              value={formData.jobTitle}
                              onChange={(e) =>
                                handleInputChange("jobTitle", e.target.value)
                              }
                              placeholder="Your job title"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="workAddress">Work Address</Label>
                          <Textarea
                            id="workAddress"
                            value={formData.workAddress}
                            onChange={(e) =>
                              handleInputChange("workAddress", e.target.value)
                            }
                            placeholder="Enter your work address"
                          />
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="monthlyIncome">
                        Monthly Income (XAF) *
                      </Label>
                      <Select
                        value={formData.monthlyIncome}
                        onValueChange={(value) =>
                          handleInputChange("monthlyIncome", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select income range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="below-100000">
                            Below 100,000 XAF
                          </SelectItem>
                          <SelectItem value="100000-250000">
                            100,000 - 250,000 XAF
                          </SelectItem>
                          <SelectItem value="250000-500000">
                            250,000 - 500,000 XAF
                          </SelectItem>
                          <SelectItem value="500000-1000000">
                            500,000 - 1,000,000 XAF
                          </SelectItem>
                          <SelectItem value="above-1000000">
                            Above 1,000,000 XAF
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Account Setup */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Choose Your Account Type *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {accountTypes.map((account) => (
                          <Card
                            key={account.id}
                            className={`cursor-pointer transition-all ${
                              formData.accountType === account.id
                                ? "border-banking-blue bg-banking-blue/5"
                                : "border-gray-200 hover:border-banking-blue/50"
                            }`}
                            onClick={() =>
                              handleInputChange("accountType", account.id)
                            }
                          >
                            <CardContent className="p-4">
                              <h3 className="font-semibold text-banking-navy mb-2">
                                {account.name}
                              </h3>
                              <p className="text-sm text-banking-gray mb-3">
                                {account.description}
                              </p>
                              <div className="text-sm font-medium text-banking-blue mb-2">
                                Minimum Deposit: {account.minimumDeposit}
                              </div>
                              <div className="space-y-1">
                                {account.features.map((feature, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center text-xs text-banking-gray"
                                  >
                                    <Check className="h-3 w-3 mr-2 text-banking-success" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="initialDeposit">
                        Initial Deposit Amount (XAF) *
                      </Label>
                      <Input
                        id="initialDeposit"
                        type="number"
                        value={formData.initialDeposit}
                        onChange={(e) =>
                          handleInputChange("initialDeposit", e.target.value)
                        }
                        placeholder="Enter amount"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referralSource">
                        How did you hear about TAFCCUL?
                      </Label>
                      <Select
                        value={formData.referralSource}
                        onValueChange={(value) =>
                          handleInputChange("referralSource", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="friend">Friend/Family</SelectItem>
                          <SelectItem value="advertisement">
                            Advertisement
                          </SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="social-media">
                            Social Media
                          </SelectItem>
                          <SelectItem value="branch">Branch Visit</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 5: Documentation */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="idType">ID Document Type *</Label>
                        <Select
                          value={formData.idType}
                          onValueChange={(value) =>
                            handleInputChange("idType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select ID type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="national-id">
                              National ID Card
                            </SelectItem>
                            <SelectItem value="passport">Passport</SelectItem>
                            <SelectItem value="drivers-license">
                              Driver's License
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="idNumber">ID Number *</Label>
                        <Input
                          id="idNumber"
                          value={formData.idNumber}
                          onChange={(e) =>
                            handleInputChange("idNumber", e.target.value)
                          }
                          placeholder="Enter ID number"
                          required
                        />
                      </div>
                    </div>

                    <Card className="p-4 border-blue-200 bg-blue-50">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-blue-800 mb-2">
                            Required Documents
                          </h3>
                          <div className="space-y-1 text-sm text-blue-700">
                            <div>
                              • Valid government-issued ID (original and copy)
                            </div>
                            <div>
                              • Proof of address (utility bill, lease agreement)
                            </div>
                            <div>• Passport-sized photographs (2)</div>
                            <div>• Employment letter (if employed)</div>
                            <div>• Income statement (last 3 months)</div>
                          </div>
                          <p className="text-sm text-blue-600 mt-3">
                            Please bring these documents when you visit our
                            branch to complete your account opening.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "termsAccepted",
                              checked as boolean
                            )
                          }
                        />
                        <Label
                          htmlFor="terms"
                          className="text-sm leading-relaxed"
                        >
                          I agree to the{" "}
                          <a
                            href="/terms"
                            className="text-banking-blue hover:underline"
                          >
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            className="text-banking-blue hover:underline"
                          >
                            Privacy Policy
                          </a>
                          . I understand that TAFCCUL is regulated by COBAK and
                          my deposits are protected. *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.marketingConsent}
                          onCheckedChange={(checked) =>
                            handleInputChange(
                              "marketingConsent",
                              checked as boolean
                            )
                          }
                        />
                        <Label htmlFor="marketing" className="text-sm">
                          I consent to receive marketing communications about
                          TAFCCUL products and services via email, SMS, and
                          phone calls. (Optional)
                        </Label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="text-banking-navy border-banking-navy"
                  >
                    Previous
                  </Button>

                  {currentStep < steps.length ? (
                    <Button
                      onClick={handleNext}
                      className="bg-banking-navy text-white hover:bg-banking-blue"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-banking-navy text-white hover:bg-banking-blue"
                      disabled={!formData.termsAccepted}
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-8 p-6 border-banking-blue/20 bg-banking-blue/5">
              <div className="text-center">
                <h3 className="font-semibold text-banking-navy mb-4">
                  Need Help?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5 text-banking-blue" />
                    <span className="text-banking-gray">+237 123 456 789</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-5 w-5 text-banking-blue" />
                    <span className="text-banking-gray">
                      accounts@tafccul.org
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountApplication;
