import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "About",
      items: [
        { title: "About TAFCCUL", href: "/about" },
        { title: "Our History", href: "/history" },
        { title: "Leadership", href: "/company/leadership" },
        { title: "COBAK Information", href: "/cobak" },
        { title: "Annual Reports", href: "/reports" },
      ],
    },
    {
      title: "Services",
      items: [
        { title: "Savings Accounts", href: "/services/savings" },
        { title: "Current Accounts", href: "/services/current-account" },
        { title: "Fixed Deposits", href: "/services/fixed-deposits" },
        { title: "Loans", href: "/services/loans" },
        { title: "Mobile Banking", href: "/services/mobile-banking" },
        { title: "Online Banking", href: "/services/online-banking" },
      ],
    },
    {
      title: "Loans",
      items: [
        { title: "Personal Loans", href: "/loans/personal" },
        { title: "Business Loans", href: "/loans/business" },
        { title: "Agricultural Loans", href: "/loans/agricultural" },
        { title: "Education Loans", href: "/loans/education" },
        { title: "Housing Loans", href: "/loans/housing" },
        { title: "Loan Calculator", href: "/services/loan-calculator" },
      ],
    },
    {
      title: "Investments",
      items: [
        { title: "Investment Plans", href: "/investments/plans" },
        { title: "Insurance Services", href: "/investments/insurance" },
        { title: "Retirement Planning", href: "/investments/retirement" },
        { title: "Youth Savings", href: "/investments/youth" },
      ],
    },
  ];

  return (
    <header className="bg-gradient-primary shadow-banking sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-banking-gold p-2 rounded-lg">
              <span className="text-banking-navy font-bold text-lg">T</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-xl">TAFCCUL</div>
              <div className="text-xs opacity-90">Cooperative Credit Union</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {menuItems.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuTrigger className="text-white hover:text-banking-gold bg-transparent hover:bg-white/10">
                    {menu.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {menu.items.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/auth/login">
              <Button
                variant="outline"
                className="border-white hover:bg-white text-banking-navy hover:text-banking-blue"
              >
                Login
              </Button>
            </Link>
            <Link to="/apply/account">
              <Button className="bg-banking-gold text-banking-navy hover:bg-banking-gold/90">
                Open Account
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="space-y-4">
              {menuItems.map((menu) => (
                <div key={menu.title} className="space-y-2">
                  <div className="flex items-center text-white font-medium">
                    <span>{menu.title}</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <div className="pl-4 space-y-2">
                    {menu.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block text-white/80 hover:text-banking-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-white hover:bg-white text-banking-navy hover:text-banking-blue"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/apply/account" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-banking-gold text-banking-navy hover:bg-banking-gold/90">
                    Open Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
