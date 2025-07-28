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
import { Clock, Computer, Eye, EyeOff, Shield, Smartphone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("online"); // online, mobile, phone

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center">
        <div className="text-center">
          <TafcculLoader size="lg" className="text-white mb-4" />
          <p className="text-white text-lg">Securing your connection...</p>
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
                Welcome Back
              </h1>
              <p className="text-lg text-banking-gray">
                Sign in to access your TAFCCUL account and manage your finances
                securely.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Login Methods */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-xl font-semibold text-banking-navy">
                  Choose Login Method
                </h2>

                <div className="space-y-4">
                  <Card
                    className={`cursor-pointer transition-all ${
                      loginType === "online"
                        ? "border-banking-blue bg-banking-blue/5"
                        : "border-gray-200 hover:border-banking-blue/50"
                    }`}
                    onClick={() => setLoginType("online")}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Computer className="h-6 w-6 text-banking-blue" />
                        <div>
                          <h3 className="font-semibold text-banking-navy">
                            Online Banking
                          </h3>
                          <p className="text-sm text-banking-gray">
                            Full access to all features
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all ${
                      loginType === "mobile"
                        ? "border-banking-blue bg-banking-blue/5"
                        : "border-gray-200 hover:border-banking-blue/50"
                    }`}
                    onClick={() => setLoginType("mobile")}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-6 w-6 text-banking-blue" />
                        <div>
                          <h3 className="font-semibold text-banking-navy">
                            Mobile Banking
                          </h3>
                          <p className="text-sm text-banking-gray">
                            Quick access on mobile
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Security Features */}
                <Card className="p-4 border-banking-success/20 bg-banking-success/5">
                  <h3 className="font-semibold text-banking-navy mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-banking-success" />
                    Security Features
                  </h3>
                  <div className="space-y-2 text-sm text-banking-gray">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-banking-success rounded-full"></div>
                      <span>256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-banking-success rounded-full"></div>
                      <span>Two-factor authentication</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-banking-success rounded-full"></div>
                      <span>Automatic session timeout</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Login Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-banking border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-banking-navy">
                      {loginType === "online"
                        ? "Online Banking Login"
                        : "Mobile Banking Login"}
                    </CardTitle>
                    <CardDescription>
                      Enter your credentials to access your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="username">
                          Username or Member Number
                        </Label>
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter your username or member number"
                          className="h-12"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-12 pr-12"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-12 w-12"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remember" />
                          <Label htmlFor="remember" className="text-sm">
                            Remember me
                          </Label>
                        </div>
                        <Link
                          to="/auth/forgot-password"
                          className="text-sm text-banking-blue hover:text-banking-navy transition-colors"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-banking-navy text-white hover:bg-banking-blue text-lg"
                      >
                        Sign In Securely
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-banking-gray">
                          Don't have an account?{" "}
                          <Link
                            to="/apply/account"
                            className="text-banking-blue hover:text-banking-navy transition-colors font-semibold"
                          >
                            Open Account
                          </Link>
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 border-banking-blue/20 hover:shadow-banking transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-8 w-8 text-banking-blue" />
                      <div>
                        <h3 className="font-semibold text-banking-navy">
                          Download Mobile App
                        </h3>
                        <p className="text-sm text-banking-gray">
                          Bank on the go
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-banking-blue/20 hover:shadow-banking transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-8 w-8 text-banking-blue" />
                      <div>
                        <h3 className="font-semibold text-banking-navy">
                          24/7 Support
                        </h3>
                        <p className="text-sm text-banking-gray">
                          Get help anytime
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <Card className="mt-8 p-6 border-yellow-200 bg-yellow-50">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Security Notice
                  </h3>
                  <p className="text-sm text-yellow-700 leading-relaxed">
                    For your security, TAFCCUL will never ask for your login
                    credentials via email, phone, or text message. Always ensure
                    you're on the official TAFCCUL website before entering your
                    information. If you suspect fraudulent activity, contact us
                    immediately at +237 123 456 789.
                  </p>
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

export default Login;
