
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet, Landmark, ArrowRight, LineChart, BadgeCheck, Loader2 } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { useToast } from "@/hooks/use-toast";
import { WithdrawalDialog } from "@/components/talent/WithdrawalDialog";

const TOKEN_NAME = "CLT";
const TOKEN_TO_PHP_RATE = 1.00;
const TRANSACTION_FEE = 15;

const transactions = [
  { id: "txn-01", date: "2024-07-20", description: "Project Phoenix Completion", amount: `+500 ${TOKEN_NAME}`, status: "Completed" },
  { id: "txn-02", date: "2024-07-18", description: "UI Kit Design Gig", amount: `+150 ${TOKEN_NAME}`, status: "Completed" },
  { id: "txn-03", date: "2024-07-15", description: "Withdrawal to Bank", amount: `-₱300.00`, status: "Success" },
  { id: "txn-04", date: "2024-07-10", description: "Logo Design for WebCo", amount: `+200 ${TOKEN_NAME}`, status: "Completed" },
  { id: "txn-05", date: "2024-07-05", description: "Project Apollo Milestone 1", amount: `+300 ${TOKEN_NAME}`, status: "Completed" },
];

const chartData = [
  { month: "January", earnings: 1860 },
  { month: "February", earnings: 2050 },
  { month: "March", earnings: 2370 },
  { month: "April", earnings: 1980 },
  { month: "May", earnings: 2540 },
  { month: "June", earnings: 3120 },
]

const chartConfig = {
  earnings: {
    label: "Earnings (PHP)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export default function TalentEarningsPage() {
  const [tokenAmount, setTokenAmount] = useState("");
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [showWithdrawalDialog, setShowWithdrawalDialog] = useState(false);
  const { toast } = useToast();
  const phpValue = (parseFloat(tokenAmount) || 0) * TOKEN_TO_PHP_RATE;

  const handleWithdrawalRequest = () => {
    const amountToWithdraw = parseFloat(tokenAmount);
    if (!amountToWithdraw || amountToWithdraw <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid Amount",
        description: "Please enter a valid amount to withdraw.",
      });
      return;
    }
    setShowWithdrawalDialog(true);
  };
  
  const handleConfirmWithdraw = (bank: string) => {
    setIsWithdrawing(true);
    // Simulate API call for withdrawal
    setTimeout(() => {
      setIsWithdrawing(false);
      setShowWithdrawalDialog(false);
      const withdrawnPhpValue = (parseFloat(tokenAmount) || 0) * TOKEN_TO_PHP_RATE;
      setTokenAmount("");
      toast({
        title: "Withdrawal Successful!",
        description: `₱${withdrawnPhpValue.toFixed(2)} is being processed to your ${bank} account and will arrive within 3-5 business days.`,
      });
    }, 1500);
  };


  return (
    <>
      <WithdrawalDialog
        open={showWithdrawalDialog}
        onOpenChange={setShowWithdrawalDialog}
        amount={parseFloat(tokenAmount) || 0}
        fee={TRANSACTION_FEE}
        rate={TOKEN_TO_PHP_RATE}
        onConfirm={handleConfirmWithdraw}
        isWithdrawing={isWithdrawing}
      />
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent"><path d="M12 12c-2-2.3-2-6.3.3-8.5 2.2-2.1 5.6-2.1 7.8-.1 2.2 2.1 2.2 5.9 0 8-2.2 2.1-5.6 2.1-7.8 0z"/><path d="M12 12c2 2.3 2 6.3-.3 8.5-2.2 2.1-5.6 2.1-7.8.1-2.2-2.1-2.2-5.9 0 8 2.2-2.1 5.6-2.1 7.8 0z"/><path d="M12 22V2"/></svg>
            Earnings & Payouts
          </h1>
          <p className="text-muted-foreground">Track your earnings, convert tokens, and manage payouts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250 <span className="text-lg font-normal">{TOKEN_NAME}</span></div>
              <p className="text-xs text-muted-foreground">≈ ₱1,250.00 PHP</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Lifetime Earnings</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₱8,450.00</div>
              <p className="text-xs text-muted-foreground">From 23 completed projects</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Clearance</CardTitle>
              <BadgeCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">350 <span className="text-lg font-normal">{TOKEN_NAME}</span></div>
              <p className="text-xs text-muted-foreground">Available in 3 days</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Convert & Payout</CardTitle>
                <CardDescription>Convert your {TOKEN_NAME} tokens to PHP for withdrawal.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-end gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="token-amount">Amount ({TOKEN_NAME})</Label>
                    <Input 
                      id="token-amount" 
                      type="number" 
                      placeholder="e.g., 500" 
                      value={tokenAmount}
                      onChange={(e) => setTokenAmount(e.target.value)}
                      disabled={isWithdrawing}
                    />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground mb-2.5"/>
                  <div className="flex-1 space-y-2">
                    <Label>Value (PHP)</Label>
                    <div className="text-2xl font-bold h-10 flex items-center">
                      ₱{phpValue.toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Conversion Rate: 1 {TOKEN_NAME} = ₱{TOKEN_TO_PHP_RATE.toFixed(2)} PHP
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleWithdrawalRequest} disabled={isWithdrawing || !tokenAmount}>
                  <Landmark className="mr-2 h-4 w-4"/> Withdraw to Bank
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Earnings History</CardTitle>
                <CardDescription>A log of your recent transactions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.slice(0, 3).map((txn) => (
                      <TableRow key={txn.id}>
                        <TableCell className="text-muted-foreground">{txn.date}</TableCell>
                        <TableCell className="font-medium">{txn.description}</TableCell>
                        <TableCell className={`text-right font-semibold ${txn.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`}>
                          {txn.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Earnings Chart</CardTitle>
            <CardDescription>Your earnings in PHP for the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickFormatter={(value) => `₱${value}`}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideIndicator />}
                />
                <Bar dataKey="earnings" fill="var(--color-earnings)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
