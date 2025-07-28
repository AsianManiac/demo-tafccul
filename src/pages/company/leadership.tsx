import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";

const Leadership = () => {
  const boardMembers = [
    {
      name: "Dr. Emmanuel Ngassa",
      position: "Chairman of the Board",
      experience: "25+ years",
      education: "PhD in Economics, University of Yaoundé",
      background:
        "Former Deputy Governor of Central Bank, Expert in Cooperative Finance",
      specialization: "Strategic Planning & Governance",
    },
    {
      name: "Mrs. Josephine Mbuye",
      position: "Vice Chairwoman",
      experience: "20+ years",
      education: "Master's in Business Administration",
      background:
        "Former Regional Director of Microfinance, Community Development Expert",
      specialization: "Operations & Member Services",
    },
    {
      name: "Mr. Paul Nkemba",
      position: "Treasurer",
      experience: "18+ years",
      education: "Chartered Accountant (FCCA)",
      background: "Senior Financial Analyst, Risk Management Specialist",
      specialization: "Financial Planning & Risk Management",
    },
    {
      name: "Dr. Marie Fombe",
      position: "Secretary",
      experience: "15+ years",
      education: "PhD in Agricultural Economics",
      background: "Agricultural Development Consultant, Rural Finance Expert",
      specialization: "Agricultural Finance & Development",
    },
  ];

  const executiveTeam = [
    {
      name: "Mr. Jean-Claude Fotso",
      position: "General Manager",
      experience: "22+ years",
      education: "Master's in Banking & Finance",
      background:
        "Former Branch Manager at Commercial Bank, Credit Union Leadership",
      achievements: [
        "Increased membership by 150%",
        "Launched digital banking platform",
        "Expanded to 5 branches",
      ],
    },
    {
      name: "Mrs. Grace Achu",
      position: "Deputy General Manager",
      experience: "19+ years",
      education: "Master's in Financial Management",
      background: "Operations Manager, Process Improvement Specialist",
      achievements: [
        "Streamlined loan processing",
        "Implemented quality management system",
        "Led staff training programs",
      ],
    },
    {
      name: "Mr. Samuel Tiku",
      position: "Head of Credit",
      experience: "16+ years",
      education: "Bachelor's in Finance, Professional Risk Manager",
      background: "Credit Analyst, Loan Portfolio Manager",
      achievements: [
        "Maintained 97% loan recovery rate",
        "Developed SME loan products",
        "Reduced processing time by 50%",
      ],
    },
    {
      name: "Mrs. Comfort Njoya",
      position: "Head of Operations",
      experience: "14+ years",
      education: "Bachelor's in Business Administration",
      background: "Customer Service Manager, Branch Operations Specialist",
      achievements: [
        "Improved customer satisfaction to 95%",
        "Digitized member records",
        "Enhanced security protocols",
      ],
    },
  ];

  const committees = [
    {
      name: "Audit Committee",
      purpose:
        "Oversight of financial reporting, internal controls, and compliance",
      members: 5,
      frequency: "Quarterly meetings",
    },
    {
      name: "Credit Committee",
      purpose:
        "Review and approval of loan applications above specified limits",
      members: 7,
      frequency: "Weekly meetings",
    },
    {
      name: "Investment Committee",
      purpose: "Management of surplus funds and investment strategies",
      members: 4,
      frequency: "Monthly meetings",
    },
    {
      name: "Education Committee",
      purpose: "Member financial education and cooperative training programs",
      members: 6,
      frequency: "Bi-monthly meetings",
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-banking-blue" />,
      title: "Collaborative Leadership",
      description:
        "Our leaders work together to serve the best interests of our members and community",
    },
    {
      icon: <Award className="h-8 w-8 text-banking-success" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in governance, service delivery, and financial management",
    },
    {
      icon: <Target className="h-8 w-8 text-banking-warning" />,
      title: "Accountability",
      description:
        "Our leadership is accountable to members through transparent reporting and democratic processes",
    },
    {
      icon: <Heart className="h-8 w-8 text-banking-purple" />,
      title: "Community Focus",
      description:
        "Every decision is made with our members' welfare and community development in mind",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Our Leadership
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Meet the dedicated leaders guiding TAFCCUL toward a prosperous
              future for all members
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Leadership Values
              </h2>
              <p className="text-banking-gray">
                The principles that guide our leadership team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-banking-blue/20 text-center"
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="font-semibold text-banking-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-banking-gray">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-banking-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Board of Directors
              </h2>
              <p className="text-banking-gray">
                Our board provides strategic oversight and governance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="border-banking-blue/20">
                  <CardHeader>
                    <CardTitle className="text-banking-navy">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="font-medium text-banking-blue">
                      {member.position}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">{member.experience}</Badge>
                      <Badge variant="outline">{member.specialization}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-banking-navy">
                        Education
                      </h4>
                      <p className="text-sm text-banking-gray">
                        {member.education}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-banking-navy">
                        Background
                      </h4>
                      <p className="text-sm text-banking-gray">
                        {member.background}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Executive Management Team
              </h2>
              <p className="text-banking-gray">
                Our experienced management team leads daily operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {executiveTeam.map((executive, index) => (
                <Card key={index} className="border-banking-success/20">
                  <CardHeader>
                    <CardTitle className="text-banking-navy">
                      {executive.name}
                    </CardTitle>
                    <CardDescription className="font-medium text-banking-success">
                      {executive.position}
                    </CardDescription>
                    <Badge variant="secondary" className="w-fit">
                      {executive.experience}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-banking-navy">
                        Education
                      </h4>
                      <p className="text-sm text-banking-gray">
                        {executive.education}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-banking-navy">
                        Background
                      </h4>
                      <p className="text-sm text-banking-gray">
                        {executive.background}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-banking-navy">
                        Key Achievements
                      </h4>
                      <ul className="text-sm text-banking-gray space-y-1">
                        {executive.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-banking-success">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16 bg-banking-gray/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-banking-navy mb-4">
                Board Committees
              </h2>
              <p className="text-banking-gray">
                Specialized committees ensuring effective governance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.map((committee, index) => (
                <Card key={index} className="border-banking-warning/20">
                  <CardHeader>
                    <CardTitle className="text-banking-navy">
                      {committee.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">
                        {committee.members} members
                      </Badge>
                      <Badge variant="secondary">{committee.frequency}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-banking-gray">
                      {committee.purpose}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-banking-navy/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-banking-navy">
                  Democratic Governance
                </CardTitle>
                <CardDescription>
                  TAFCCUL operates under cooperative principles of democratic
                  member control
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Member Rights
                    </h3>
                    <ul className="space-y-2 text-sm text-banking-gray">
                      <li>• One member, one vote principle</li>
                      <li>• Annual General Meeting participation</li>
                      <li>• Board election voting rights</li>
                      <li>• Access to financial reports</li>
                      <li>• Right to petition and raise concerns</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-banking-navy">
                      Transparency
                    </h3>
                    <ul className="space-y-2 text-sm text-banking-gray">
                      <li>• Quarterly financial statements</li>
                      <li>• Annual audited reports</li>
                      <li>• Board meeting minutes</li>
                      <li>• Strategic plan updates</li>
                      <li>• Regulatory compliance reports</li>
                    </ul>
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

export default Leadership;
