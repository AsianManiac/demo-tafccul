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
  BookOpen,
  Building2,
  FileText,
  Phone,
  Scale,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const COBAK = () => {
  const services = [
    {
      icon: Shield,
      title: "Regulatory Oversight",
      description:
        "COBAK ensures all cooperative credit unions operate within regulatory frameworks.",
    },
    {
      icon: BookOpen,
      title: "Training & Education",
      description:
        "Providing training programs for cooperative members and management.",
    },
    {
      icon: Scale,
      title: "Audit & Compliance",
      description:
        "Regular audits to ensure financial transparency and compliance.",
    },
    {
      icon: Users,
      title: "Member Protection",
      description:
        "Protecting the interests and investments of cooperative members.",
    },
  ];

  const benefits = [
    "Regulatory compliance and oversight",
    "Access to training and capacity building programs",
    "Protection of member deposits and investments",
    "Technical assistance and guidance",
    "Networking opportunities with other cooperatives",
    "Access to government and international funding",
    "Legal support and advocacy",
    "Best practice sharing and knowledge transfer",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              About COBAK
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Cooperative Societies Central Union of Cameroon - The umbrella
              organization regulating and supporting cooperative credit unions
              in Cameroon.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-6">
                What is COBAK?
              </h2>
              <p className="text-lg text-banking-gray leading-relaxed mb-6">
                COBAK (Cooperative Societies Central Union of Cameroon) is the
                apex organization that serves as the umbrella body for all
                cooperative credit unions in Cameroon. Established to promote,
                regulate, and support the cooperative movement in the country.
              </p>
              <p className="text-lg text-banking-gray leading-relaxed">
                As a member of COBAK, TAFCCUL operates under their regulatory
                framework and benefits from their extensive support services,
                training programs, and advocacy efforts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Building2 className="h-12 w-12 text-banking-blue mb-4" />
                <h3 className="text-xl font-semibold text-banking-navy mb-3">
                  Established
                </h3>
                <p className="text-banking-gray">
                  COBAK was established to strengthen the cooperative movement
                  in Cameroon and ensure the sustainable development of credit
                  unions nationwide.
                </p>
              </Card>

              <Card className="p-6 border-banking-blue/20 hover:shadow-banking transition-shadow">
                <Target className="h-12 w-12 text-banking-blue mb-4" />
                <h3 className="text-xl font-semibold text-banking-navy mb-3">
                  Mission
                </h3>
                <p className="text-banking-gray">
                  To promote, regulate, and support cooperative credit unions
                  while fostering financial inclusion and economic development
                  in Cameroon.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* COBAK Services */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              COBAK Services
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              Comprehensive support services provided by COBAK to its member
              cooperative credit unions across Cameroon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="text-center p-6 border-0 shadow-card-banking hover:shadow-banking transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-banking-gray text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Benefits of COBAK Membership
              </h2>
              <p className="text-lg text-banking-gray">
                As a COBAK member, TAFCCUL enjoys numerous benefits that enhance
                our ability to serve our members effectively and sustainably.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="bg-banking-blue/10 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-banking-blue rounded-full"></div>
                    </div>
                    <p className="text-banking-gray">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 border-banking-blue/20 shadow-banking">
              <CardHeader className="text-center">
                <FileText className="h-16 w-16 text-banking-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-banking-navy">
                  Regulatory Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-banking-gray text-lg leading-relaxed">
                  COBAK's regulatory framework ensures that all member credit
                  unions operate with transparency, accountability, and in the
                  best interests of their members while maintaining financial
                  stability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TAFCCUL and COBAK Partnership */}
      <section className="py-16 bg-banking-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              TAFCCUL & COBAK Partnership
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              TAFCCUL has been a proud member of COBAK since our establishment
              in 1999. This partnership has been instrumental in our growth and
              ability to serve our members with confidence and competence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-banking-gold text-banking-navy font-bold text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  25+
                </div>
                <h3 className="font-semibold mb-2">Years of Membership</h3>
                <p className="text-white/80 text-sm">
                  Trusted partnership since 1999
                </p>
              </div>

              <div className="text-center">
                <div className="bg-banking-gold text-banking-navy font-bold text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  100%
                </div>
                <h3 className="font-semibold mb-2">Compliance Rate</h3>
                <p className="text-white/80 text-sm">
                  Full regulatory compliance
                </p>
              </div>

              <div className="text-center">
                <div className="bg-banking-gold text-banking-navy font-bold text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  A+
                </div>
                <h3 className="font-semibold mb-2">Rating</h3>
                <p className="text-white/80 text-sm">
                  Excellent performance rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact COBAK */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-6">
              Learn More About COBAK
            </h2>
            <p className="text-lg text-banking-gray mb-8">
              For more information about COBAK and their services, or to
              understand how their regulatory framework benefits cooperative
              credit union members.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 border-banking-blue/20">
                <Phone className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Contact COBAK
                </h3>
                <p className="text-banking-gray text-sm mb-4">
                  For direct inquiries about COBAK services and regulations
                </p>
                <Button
                  variant="outline"
                  className="text-banking-blue border-banking-blue"
                >
                  COBAK Contact Info
                </Button>
              </Card>

              <Card className="p-6 border-banking-blue/20">
                <FileText className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  Regulatory Documents
                </h3>
                <p className="text-banking-gray text-sm mb-4">
                  Access important regulatory documents and guidelines
                </p>
                <Button
                  variant="outline"
                  className="text-banking-blue border-banking-blue"
                >
                  View Documents
                </Button>
              </Card>
            </div>

            <div className="mt-8">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-banking-navy text-white hover:bg-banking-blue"
                >
                  Contact TAFCCUL for More Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default COBAK;
