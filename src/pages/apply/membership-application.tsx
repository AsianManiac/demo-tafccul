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
import { CreditCard, FileText, MapPin, UserPlus } from "lucide-react";
import { useState } from "react";

const MembershipApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    occupation: "",
    employer: "",
    monthlyIncome: "",
    accountType: "savings",
    initialDeposit: "30000",
    hasIdCard: false,
    hasPhotograph: false,
    hasLocationSketch: false,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Become a Member
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Join TAFCCUL today and access our comprehensive financial services
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-banking-navy">
                  Membership Requirements
                </CardTitle>
                <CardDescription>
                  Everything you need to become a TAFCCUL member
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Required Documents
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-banking-blue" />
                        <span>2 Passport-size photographs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-banking-blue" />
                        <span>Photocopy of National ID card</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-banking-blue" />
                        <span>
                          Location sketch (A4 paper drawing of your residence)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Membership Fees
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Initial Savings Deposit:</span>
                        <span className="font-medium">
                          XAF 50,000 (refundable)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Solidarity Fund:</span>
                        <span className="font-medium">
                          XAF 20,000 (COBAK regulation)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Building Fee:</span>
                        <span className="font-medium">XAF 10,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Documents:</span>
                        <span className="font-medium">XAF 7,500</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>XAF 87,500</span>
                      </div>
                      <p className="text-xs text-banking-gray mt-2">
                        *Minimum initial payment: XAF 30,000 to open account
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <UserPlus className="h-6 w-6 text-banking-blue" />
                  <CardTitle>Membership Application Form</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phoneNumber: e.target.value,
                        }))
                      }
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation *</Label>
                    <Input
                      id="occupation"
                      value={formData.occupation}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          occupation: e.target.value,
                        }))
                      }
                      placeholder="Enter your occupation"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer">Employer</Label>
                    <Input
                      id="employer"
                      value={formData.employer}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          employer: e.target.value,
                        }))
                      }
                      placeholder="Enter employer name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome">Monthly Income (XAF)</Label>
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
                    <Label htmlFor="accountType">Account Type</Label>
                    <Select
                      value={formData.accountType}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, accountType: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="savings">Savings Account</SelectItem>
                        <SelectItem value="current">Current Account</SelectItem>
                        <SelectItem value="deposit">Fixed Deposit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="initialDeposit">
                      Initial Deposit (XAF)
                    </Label>
                    <Select
                      value={formData.initialDeposit}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          initialDeposit: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30000">
                          XAF 30,000 (Minimum)
                        </SelectItem>
                        <SelectItem value="50000">XAF 50,000</SelectItem>
                        <SelectItem value="80875">
                          XAF 80,875 (Full Payment)
                        </SelectItem>
                        <SelectItem value="100000">XAF 100,000</SelectItem>
                        <SelectItem value="custom">Custom Amount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Additional Information</Label>
                  <Textarea
                    placeholder="Any additional information you'd like to provide..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1">
                    Submit Application
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

export default MembershipApplication;
