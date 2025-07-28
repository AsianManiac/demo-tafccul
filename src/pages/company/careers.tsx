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
  Briefcase,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  MapPin,
  Upload,
  Users,
} from "lucide-react";
import { useState } from "react";

const Careers = () => {
  const [applicationData, setApplicationData] = useState({
    position: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    coverLetter: "",
  });

  const openPositions = [
    {
      title: "Loan Officer",
      department: "Credit Department",
      location: "Yaoundé",
      type: "Full-time",
      experience: "2-5 years",
      salary: "XAF 180,000 - 250,000",
      deadline: "2024-02-15",
      requirements: [
        "Bachelor's degree in Finance, Banking, or related field",
        "2+ years experience in loan processing",
        "Knowledge of credit analysis",
        "Strong communication skills in English and French",
        "Customer service orientation",
      ],
    },
    {
      title: "Customer Service Representative",
      department: "Member Services",
      location: "Douala",
      type: "Full-time",
      experience: "1-3 years",
      salary: "XAF 120,000 - 180,000",
      deadline: "2024-02-20",
      requirements: [
        "High school diploma minimum",
        "1+ years customer service experience",
        "Excellent interpersonal skills",
        "Computer literacy",
        "Fluency in English, French, and local languages",
      ],
    },
    {
      title: "IT Support Specialist",
      department: "Information Technology",
      location: "Yaoundé",
      type: "Full-time",
      experience: "3-5 years",
      salary: "XAF 200,000 - 300,000",
      deadline: "2024-02-25",
      requirements: [
        "Bachelor's degree in Computer Science or IT",
        "3+ years experience in IT support",
        "Knowledge of banking systems",
        "Network administration skills",
        "Problem-solving abilities",
      ],
    },
    {
      title: "Branch Manager",
      department: "Operations",
      location: "Bamenda",
      type: "Full-time",
      experience: "5+ years",
      salary: "XAF 300,000 - 450,000",
      deadline: "2024-03-01",
      requirements: [
        "Bachelor's degree in Business or Finance",
        "5+ years banking experience",
        "Leadership and management skills",
        "Strong analytical abilities",
        "Community engagement experience",
      ],
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-banking-success" />,
      title: "Competitive Salary",
      description:
        "Market-competitive salaries with annual reviews and performance bonuses",
    },
    {
      icon: <Heart className="h-6 w-6 text-banking-purple" />,
      title: "Health Benefits",
      description:
        "Comprehensive health insurance coverage for employees and immediate family",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-banking-blue" />,
      title: "Professional Development",
      description:
        "Training programs, workshops, and educational assistance for career growth",
    },
    {
      icon: <Clock className="h-6 w-6 text-banking-warning" />,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements, annual leave, and family-friendly policies",
    },
  ];

  const culture = [
    "Collaborative and supportive work environment",
    "Commitment to member service excellence",
    "Innovation and continuous improvement",
    "Diversity and inclusion",
    "Community impact and social responsibility",
    "Integrity and ethical conduct",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Build Your Career With Us
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Join TAFCCUL and be part of a team that makes a difference in our
              community
            </p>
            <div
              className="flex justify-center"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" variant="secondary" className="animate-fade-in">
                <Briefcase className="h-5 w-5 mr-2" />
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Why Choose TAFCCUL?
              </h2>
              <p className="text-banking-gray">
                We offer more than just a job - we offer a career with purpose
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-banking-blue/20 text-center"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-banking-gray">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-banking-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-banking-success/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-banking-success" />
                </div>
                <CardTitle className="text-2xl text-banking-navy">
                  Our Culture
                </CardTitle>
                <CardDescription>
                  What makes TAFCCUL a great place to work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {culture.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-banking-success rounded-full mt-2"></div>
                        <span className="text-sm text-banking-gray">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {culture.slice(3).map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-banking-success rounded-full mt-2"></div>
                        <span className="text-sm text-banking-gray">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Current Openings
              </h2>
              <p className="text-banking-gray">
                Explore exciting career opportunities at TAFCCUL
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="border-banking-blue/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-banking-navy">
                          {position.title}
                        </CardTitle>
                        <CardDescription className="text-banking-blue font-medium">
                          {position.department}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{position.type}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="flex items-center space-x-1 text-sm text-banking-gray">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-banking-gray">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-banking-gray">
                        <DollarSign className="h-4 w-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-banking-navy mb-2">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-banking-gray flex items-start space-x-2"
                          >
                            <span className="text-banking-blue">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm text-banking-gray">
                        Deadline: {position.deadline}
                      </span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-banking-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-banking-navy">
                  Submit Your Application
                </CardTitle>
                <CardDescription>
                  Complete the form below to apply for a position at TAFCCUL
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applying For *</Label>
                    <Select
                      value={applicationData.position}
                      onValueChange={(value) =>
                        setApplicationData((prev) => ({
                          ...prev,
                          position: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map((position) => (
                          <SelectItem
                            key={position.title}
                            value={position.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}
                          >
                            {position.title} - {position.location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={applicationData.firstName}
                      onChange={(e) =>
                        setApplicationData((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={applicationData.lastName}
                      onChange={(e) =>
                        setApplicationData((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      placeholder="Enter your last name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationData.email}
                      onChange={(e) =>
                        setApplicationData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={applicationData.phone}
                      onChange={(e) =>
                        setApplicationData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select
                      value={applicationData.experience}
                      onValueChange={(value) =>
                        setApplicationData((prev) => ({
                          ...prev,
                          experience: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Highest Education Level</Label>
                    <Select
                      value={applicationData.education}
                      onValueChange={(value) =>
                        setApplicationData((prev) => ({
                          ...prev,
                          education: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={(e) =>
                      setApplicationData((prev) => ({
                        ...prev,
                        coverLetter: e.target.value,
                      }))
                    }
                    placeholder="Tell us why you're interested in this position and why you'd be a great fit for TAFCCUL..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Resume/CV Upload</Label>
                  <div className="border-2 border-dashed border-banking-gray/30 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-banking-gray mx-auto mb-4" />
                    <p className="text-sm text-banking-gray mb-2">
                      Drop your resume here, or{" "}
                      <span className="text-banking-blue cursor-pointer">
                        browse files
                      </span>
                    </p>
                    <p className="text-xs text-banking-gray">
                      Supported formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
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

export default Careers;
