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
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";

const ReportsComplaints = () => {
  const [formData, setFormData] = useState({
    type: "complaint",
    category: "",
    priority: "medium",
    memberNumber: "",
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    description: "",
    affectedAccount: "",
    incidentDate: "",
    previousReference: "",
  });

  const complaintCategories = [
    "Account Services",
    "ATM/Card Issues",
    "Online Banking",
    "Mobile Banking",
    "Loan Services",
    "Staff Conduct",
    "Transaction Disputes",
    "Fees and Charges",
    "Service Delivery",
    "Other",
  ];

  const reportCategories = [
    "Fraud Alert",
    "System Issues",
    "Security Concerns",
    "Service Improvement",
    "Compliance Issues",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Reports & Complaints
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Your feedback helps us improve our services. We're here to listen
              and resolve any issues.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-banking-gray">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-banking-blue/20 text-center">
                <CardContent className="pt-6">
                  <Phone className="h-8 w-8 text-banking-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-banking-navy mb-2">
                    Phone
                  </h3>
                  <p className="text-sm text-banking-gray mb-4">
                    Speak directly with our support team
                  </p>
                  <p className="font-medium">+237 678 901 234</p>
                  <Badge variant="secondary" className="mt-2">
                    Mon-Fri 8AM-6PM
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-banking-success/20 text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-banking-success mx-auto mb-4" />
                  <h3 className="font-semibold text-banking-navy mb-2">
                    Email
                  </h3>
                  <p className="text-sm text-banking-gray mb-4">
                    Send detailed complaints via email
                  </p>
                  <p className="font-medium">complaints@tafccul.cm</p>
                  <Badge variant="secondary" className="mt-2">
                    24-48 hour response
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-banking-warning/20 text-center">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-banking-warning mx-auto mb-4" />
                  <h3 className="font-semibold text-banking-navy mb-2">
                    Online Form
                  </h3>
                  <p className="text-sm text-banking-gray mb-4">
                    Submit complaints using our secure form
                  </p>
                  <p className="font-medium">Available 24/7</p>
                  <Badge variant="secondary" className="mt-2">
                    Immediate confirmation
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Report/Complaint Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-banking-blue" />
                  <CardTitle>Submit a Report or Complaint</CardTitle>
                </div>
                <CardDescription>
                  Please provide as much detail as possible to help us address
                  your concern effectively
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="type">Type *</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, type: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="report">Report</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, category: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {(formData.type === "complaint" ||
                        formData.type === "feedback"
                          ? complaintCategories
                          : reportCategories
                        ).map((category) => (
                          <SelectItem
                            key={category}
                            value={category.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, priority: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="memberNumber">Member Number</Label>
                    <Input
                      id="memberNumber"
                      value={formData.memberNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          memberNumber: e.target.value,
                        }))
                      }
                      placeholder="Your TAFCCUL member number"
                    />
                  </div>

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
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="Your contact number"
                      required
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
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affectedAccount">
                      Affected Account (if applicable)
                    </Label>
                    <Input
                      id="affectedAccount"
                      value={formData.affectedAccount}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          affectedAccount: e.target.value,
                        }))
                      }
                      placeholder="Account number or type"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="incidentDate">Incident Date</Label>
                    <Input
                      id="incidentDate"
                      type="date"
                      value={formData.incidentDate}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          incidentDate: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousReference">
                      Previous Reference Number
                    </Label>
                    <Input
                      id="previousReference"
                      value={formData.previousReference}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          previousReference: e.target.value,
                        }))
                      }
                      placeholder="If this is a follow-up"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                    placeholder="Brief summary of your issue"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Please provide a detailed description of your complaint or report. Include relevant dates, amounts, and any other pertinent information."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1">
                    Submit Report/Complaint
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Process Information */}
            <Card className="border-banking-success/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-banking-success" />
                  <CardTitle className="text-banking-navy">
                    Our Resolution Process
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-banking-blue/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-banking-blue font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      Acknowledgment
                    </h3>
                    <p className="text-sm text-banking-gray">
                      We acknowledge receipt within 24 hours
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-banking-success/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-banking-success font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      Investigation
                    </h3>
                    <p className="text-sm text-banking-gray">
                      Our team investigates the issue thoroughly
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-banking-warning/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-banking-warning font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      Resolution
                    </h3>
                    <p className="text-sm text-banking-gray">
                      We work to resolve the issue promptly
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-banking-purple/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-banking-purple" />
                    </div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      Follow-up
                    </h3>
                    <p className="text-sm text-banking-gray">
                      We ensure your satisfaction with the resolution
                    </p>
                  </div>
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

export default ReportsComplaints;
