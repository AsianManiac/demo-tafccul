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
  Award,
  Eye,
  Handshake,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Member-Centric",
      description:
        "We put our members' needs and success at the heart of everything we do.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Building lasting relationships through transparent and secure banking practices.",
    },
    {
      icon: Handshake,
      title: "Community Focus",
      description:
        "Supporting local communities and fostering economic development.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Embracing technology to provide modern and convenient banking solutions.",
    },
  ];

  const milestones = [
    { year: "1999", event: "TAFCCUL was founded with 50 founding members" },
    { year: "2005", event: "Opened our first branch in Douala" },
    { year: "2010", event: "Launched mobile banking services" },
    { year: "2015", event: "Reached 25,000 active members" },
    { year: "2020", event: "Introduced online banking platform" },
    {
      year: "2024",
      event: "Celebrating 25+ years of service with 50,000+ members",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              About TAFCCUL
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Over 25 years of trusted financial partnership, building stronger
              communities through cooperative banking excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-banking-navy">
                Our Story
              </h2>
              <p className="text-lg text-banking-gray leading-relaxed">
                TAFCCUL (Tafem Cooperative Credit Union Limited) was established
                in 1999 with a simple but powerful vision: to provide
                accessible, member-owned financial services that strengthen our
                communities.
              </p>
              <p className="text-lg text-banking-gray leading-relaxed">
                Starting with just 50 founding members, we have grown to serve
                over 50,000 members across Cameroon. Our cooperative model
                ensures that every decision we make is guided by the needs and
                interests of our member-owners.
              </p>
              <p className="text-lg text-banking-gray leading-relaxed">
                Today, TAFCCUL stands as one of the leading cooperative credit
                unions in Cameroon, offering a full range of financial services
                while maintaining our commitment to community development and
                member success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-banking-blue/20">
                <Users className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-banking-navy">
                  50,000+
                </div>
                <div className="text-banking-gray">Active Members</div>
              </Card>
              <Card className="text-center p-6 border-banking-blue/20">
                <Award className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-banking-navy">25+</div>
                <div className="text-banking-gray">Years of Service</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-card-banking">
              <CardHeader className="text-center">
                <Target className="h-16 w-16 text-banking-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-banking-navy">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-banking-gray text-lg leading-relaxed">
                  To provide innovative, member-focused financial services that
                  empower individuals, families, and businesses to achieve their
                  financial goals while fostering sustainable community
                  development across Cameroon.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-card-banking">
              <CardHeader className="text-center">
                <Eye className="h-16 w-16 text-banking-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-banking-navy">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-banking-gray text-lg leading-relaxed">
                  To be the leading cooperative credit union in Central Africa,
                  recognized for our exceptional service, innovative solutions,
                  and positive impact on the communities we serve.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-banking-gray max-w-2xl mx-auto">
              These values guide every decision we make and every service we
              provide to our members and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center p-6 border-banking-blue/20 hover:shadow-banking transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-12 w-12 text-banking-blue mx-auto mb-4" />
                <h3 className="font-semibold text-banking-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-banking-gray text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-banking-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Key milestones in our 25+ year journey of serving our members and
              communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-banking-gold text-banking-navy font-bold text-xl px-6 py-3 rounded-lg min-w-[100px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-white/90">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-banking-navy mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-banking-gray mb-8 max-w-2xl mx-auto">
            Experience the TAFCCUL difference. Join thousands of satisfied
            members who trust us with their financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply/membership">
              <Button
                size="lg"
                className="bg-banking-navy text-white hover:bg-banking-blue"
              >
                Become a Member
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-banking-navy border-banking-navy hover:bg-banking-navy hover:text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
