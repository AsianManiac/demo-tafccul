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
import React, { useCallback, useMemo, useState } from "react";
// import { Separator } from '@/components/ui/separator';
import { Calculator, DollarSign, PieChart, TrendingUp } from "lucide-react";

// Types for loan calculation
interface LoanInput {
  principal: number;
  annualRate: number;
  termMonths: number;
  currency: string;
  loanType: string;
}

interface LoanResult {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
  amortizationSchedule: AmortizationEntry[];
}

interface AmortizationEntry {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

// Currency configurations
const CURRENCIES = {
  XAF: { symbol: "XAF", name: "Central African Franc", rate: 1 },
  USD: { symbol: "$", name: "US Dollar", rate: 600 },
  EUR: { symbol: "€", name: "Euro", rate: 650 },
};

// TAFCCUL loan types with interest rates
const LOAN_TYPES = {
  savings: { name: "Savings/Short-term Loan", rate: 1.0 },
  salary: { name: "Salary Loan", rate: 1.2 },
  collateral: { name: "Collateral Loan", rate: 1.4 },
  personal: { name: "Personal Loan", rate: 8.5 },
  business: { name: "Business Loan", rate: 10.0 },
  housing: { name: "Housing Loan", rate: 7.5 },
  education: { name: "Education Loan", rate: 6.0 },
  agricultural: { name: "Agricultural Loan", rate: 9.0 },
};

/**
 * Industrial-grade Loan Calculator Component
 *
 * Features:
 * - Multi-currency support
 * - Multiple loan types with different rates
 * - Flexible term calculations (months/years)
 * - Detailed amortization schedule
 * - Real-time calculations
 * - Responsive design
 * - Accessibility compliant
 * - Performance optimized with memoization
 */
const LoanCalculator: React.FC = () => {
  const [loanInput, setLoanInput] = useState<LoanInput>({
    principal: 1000000,
    annualRate: 1.0,
    termMonths: 12,
    currency: "XAF",
    loanType: "savings",
  });

  const [showSchedule, setShowSchedule] = useState(false);

  /**
   * Calculate loan payments using TAFCCUL's method
   * TAFCCUL uses simple interest: Monthly Interest = Principal * (Annual Rate / 100) / 12
   * Total Interest = Monthly Interest * Term
   * Monthly Payment = (Principal + Total Interest) / Term
   */
  const calculateLoan = useCallback((input: LoanInput): LoanResult => {
    const { principal, annualRate, termMonths } = input;

    let monthlyPayment: number;
    let totalInterest: number;

    if (annualRate === 0) {
      // Handle 0% interest rate
      monthlyPayment = principal / termMonths;
      totalInterest = 0;
    } else {
      // TAFCCUL simple interest calculation
      const monthlyInterestRate = annualRate / 100 / 12;
      const monthlyInterestAmount = principal * monthlyInterestRate;
      totalInterest = monthlyInterestAmount * termMonths;
      monthlyPayment = (principal + totalInterest) / termMonths;
    }

    const totalAmount = principal + totalInterest;

    // Generate amortization schedule for TAFCCUL simple interest
    const amortizationSchedule: AmortizationEntry[] = [];
    let remainingBalance = principal;
    const monthlyInterestRate = annualRate / 100 / 12;

    for (let month = 1; month <= termMonths; month++) {
      const interestPayment = principal * monthlyInterestRate; // Fixed interest on original principal
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      amortizationSchedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance),
      });
    }

    return {
      monthlyPayment,
      totalInterest,
      totalAmount,
      amortizationSchedule,
    };
  }, []);

  // Memoized loan calculation for performance
  const loanResult = useMemo(
    () => calculateLoan(loanInput),
    [loanInput, calculateLoan]
  );

  // Format currency display
  const formatCurrency = useCallback(
    (amount: number, currency: string = loanInput.currency): string => {
      const currencyConfig = CURRENCIES[currency as keyof typeof CURRENCIES];
      return `${currencyConfig.symbol} ${amount.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}`;
    },
    [loanInput.currency]
  );

  // Handle input changes
  const updateLoanInput = useCallback(
    (field: keyof LoanInput, value: string | number) => {
      setLoanInput((prev) => {
        const updated = { ...prev, [field]: value };

        // Auto-update interest rate when loan type changes
        if (field === "loanType") {
          updated.annualRate =
            LOAN_TYPES[value as keyof typeof LOAN_TYPES].rate;
        }

        return updated;
      });
    },
    []
  );

  const handleTermYearsChange = useCallback(
    (years: string) => {
      const yearsNum = parseFloat(years) || 0;
      updateLoanInput("termMonths", yearsNum * 12);
    },
    [updateLoanInput]
  );

  return (
    <div className="space-y-6">
      {/* Calculator Input Section */}
      <Card className="border-banking-blue/20">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-banking-blue" />
            <CardTitle className="text-banking-navy">
              TAFCCUL Loan Calculator
            </CardTitle>
          </div>
          <CardDescription>
            Calculate your loan payments with our comprehensive calculator
            supporting multiple currencies and loan types.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Principal Amount */}
            <div className="space-y-2">
              <Label htmlFor="principal">Loan Amount</Label>
              <Input
                id="principal"
                type="number"
                value={loanInput.principal}
                onChange={(e) =>
                  updateLoanInput("principal", parseFloat(e.target.value) || 0)
                }
                className="text-lg"
                min="0"
                step="10000"
              />
            </div>

            {/* Currency Selection */}
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select
                value={loanInput.currency}
                onValueChange={(value) => updateLoanInput("currency", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(CURRENCIES).map(([code, config]) => (
                    <SelectItem key={code} value={code}>
                      {config.symbol} - {config.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Loan Type */}
            <div className="space-y-2">
              <Label htmlFor="loanType">Loan Type</Label>
              <Select
                value={loanInput.loanType}
                onValueChange={(value) => updateLoanInput("loanType", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(LOAN_TYPES).map(([key, config]) => (
                    <SelectItem key={key} value={key}>
                      {config.name} ({config.rate}% APR)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <Label htmlFor="rate">Annual Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                value={loanInput.annualRate}
                onChange={(e) =>
                  updateLoanInput("annualRate", parseFloat(e.target.value) || 0)
                }
                step="0.1"
                min="0"
                max="50"
              />
            </div>

            {/* Loan Term (Years) */}
            <div className="space-y-2">
              <Label htmlFor="termYears">Loan Term (Years)</Label>
              <Input
                id="termYears"
                type="number"
                value={loanInput.termMonths / 12}
                onChange={(e) => handleTermYearsChange(e.target.value)}
                step="0.5"
                min="0.1"
                max="25"
              />
            </div>

            {/* Loan Term (Months) */}
            <div className="space-y-2">
              <Label htmlFor="termMonths">Loan Term (Months)</Label>
              <Input
                id="termMonths"
                type="number"
                value={loanInput.termMonths}
                onChange={(e) =>
                  updateLoanInput("termMonths", parseInt(e.target.value) || 0)
                }
                min="1"
                max="300"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-banking-success/20">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-banking-success" />
              <CardTitle className="text-lg">Monthly Payment</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-banking-success">
              {formatCurrency(loanResult.monthlyPayment)}
            </div>
          </CardContent>
        </Card>

        <Card className="border-banking-warning/20">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-banking-warning" />
              <CardTitle className="text-lg">Total Interest</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-banking-warning">
              {formatCurrency(loanResult.totalInterest)}
            </div>
          </CardContent>
        </Card>

        <Card className="border-banking-blue/20">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <PieChart className="h-5 w-5 text-banking-blue" />
              <CardTitle className="text-lg">Total Amount</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-banking-blue">
              {formatCurrency(loanResult.totalAmount)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Amortization Schedule */}
      <Card className="border-banking-navy/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-banking-navy">
              Payment Schedule
            </CardTitle>
            <Button
              variant="outline"
              onClick={() => setShowSchedule(!showSchedule)}
              className="text-banking-navy border-banking-navy"
            >
              {showSchedule ? "Hide" : "Show"} Schedule
            </Button>
          </div>
        </CardHeader>
        {showSchedule && (
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-banking-navy/20">
                    <th className="text-left p-2 font-semibold text-banking-navy">
                      Month
                    </th>
                    <th className="text-right p-2 font-semibold text-banking-navy">
                      Payment
                    </th>
                    <th className="text-right p-2 font-semibold text-banking-navy">
                      Principal
                    </th>
                    <th className="text-right p-2 font-semibold text-banking-navy">
                      Interest
                    </th>
                    <th className="text-right p-2 font-semibold text-banking-navy">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loanResult.amortizationSchedule.map((entry) => (
                    <tr
                      key={entry.month}
                      className="border-b border-banking-gray/20 hover:bg-banking-gray/5"
                    >
                      <td className="p-2 text-banking-navy">{entry.month}</td>
                      <td className="p-2 text-right text-banking-gray">
                        {formatCurrency(entry.payment)}
                      </td>
                      <td className="p-2 text-right text-banking-success">
                        {formatCurrency(entry.principal)}
                      </td>
                      <td className="p-2 text-right text-banking-warning">
                        {formatCurrency(entry.interest)}
                      </td>
                      <td className="p-2 text-right text-banking-navy font-medium">
                        {formatCurrency(entry.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Disclaimer */}
      <Card className="border-banking-gray/20 bg-banking-gray/5">
        <CardContent className="pt-6">
          <p className="text-sm text-banking-gray text-center">
            <strong>Disclaimer:</strong> This calculator provides estimates
            based on the information you provide. Actual loan terms may vary
            based on creditworthiness, collateral, and other factors. Contact
            TAFCCUL for personalized loan quotes and terms.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanCalculator;
