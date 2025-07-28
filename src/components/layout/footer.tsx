import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-banking-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-banking-gold p-2 rounded-lg">
                <span className="text-banking-navy font-bold text-lg">T</span>
              </div>
              <div>
                <div className="font-bold text-xl">TAFCCUL</div>
                <div className="text-sm opacity-90">
                  Cooperative Credit Union
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              TAFCCUL is a leading cooperative credit union committed to
              providing exceptional financial services to our members and
              communities across Cameroon.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:text-banking-gold hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:text-banking-gold hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:text-banking-gold hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:text-banking-gold hover:bg-white/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                About TAFCCUL
              </Link>
              <Link
                to="/services"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/loans"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Loan Products
              </Link>
              <Link
                to="/apply/account"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Open Account
              </Link>
              <Link
                to="/contact"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/company/careers"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <Link
                to="/services/savings"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Savings Accounts
              </Link>
              <Link
                to="/services/loans"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Personal Loans
              </Link>
              <Link
                to="/services/business"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Business Banking
              </Link>
              <Link
                to="/services/mobile-banking"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Mobile Banking
              </Link>
              <Link
                to="/investments"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Investment Plans
              </Link>
              <Link
                to="/insurance"
                className="block text-white/80 hover:text-banking-gold transition-colors"
              >
                Insurance Services
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-banking-gold" />
                <div className="text-sm text-white/80">
                  123 Banking Street
                  <br />
                  Yaoundé, Cameroon
                  <br />
                  P.O. Box 1234
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-banking-gold" />
                <span className="text-sm text-white/80">+237 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-banking-gold" />
                <span className="text-sm text-white/80">info@tafccul.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-banking-gold" />
                <div className="text-sm text-white/80">
                  Mon - Fri: 8:00 AM - 5:00 PM
                  <br />
                  Sat: 9:00 AM - 1:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-white/80 text-sm">
                Subscribe to our newsletter for the latest updates on our
                services and financial tips.
              </p>
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/60">
            © 2024 TAFCCUL Cooperative Credit Union. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-white/60 hover:text-banking-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/60 hover:text-banking-gold transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/compliance"
              className="text-white/60 hover:text-banking-gold transition-colors"
            >
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
