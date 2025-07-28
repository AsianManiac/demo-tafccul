import { TooltipProvider } from "@/components/ui/tooltip";
import {
  AboutPage,
  AccountApplicationPage,
  CareersPage,
  CobakPage,
  ContactPage,
  CurrentAccountsPage,
  EmergencyContactPage,
  FixedDepositsPage,
  HomePage,
  LeadershipPage,
  LoanApplicationPage,
  LoanCalculatorPage,
  LoansPage,
  LoginPage,
  MembershipApplicationPage,
  MobileBankingPage,
  NotFoundPage,
  OnlineBankingPage,
  ReportsComplaintsPage,
  SavingsPage,
} from "@/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cobak" element={<CobakPage />} />
          <Route path="/auth/login" element={<LoginPage />} />

          <Route path="/apply/account" element={<AccountApplicationPage />} />
          <Route path="/apply/loan" element={<LoanApplicationPage />} />
          <Route
            path="/apply/membership"
            element={<MembershipApplicationPage />}
          />

          <Route path="/company/careers" element={<CareersPage />} />
          <Route path="/company/leadership" element={<LeadershipPage />} />

          <Route
            path="/support/emergency-contact"
            element={<EmergencyContactPage />}
          />
          <Route
            path="/support/reports-complaints"
            element={<ReportsComplaintsPage />}
          />

          <Route path="/services/loans" element={<LoansPage />} />
          <Route path="/services/savings" element={<SavingsPage />} />
          <Route
            path="/services/current-account"
            element={<CurrentAccountsPage />}
          />
          <Route
            path="/services/fixed-deposits"
            element={<FixedDepositsPage />}
          />
          <Route
            path="/services/mobile-banking"
            element={<MobileBankingPage />}
          />
          <Route
            path="/services/online-banking"
            element={<OnlineBankingPage />}
          />
          <Route
            path="/services/loan-calculator"
            element={<LoanCalculatorPage />}
          />

          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
