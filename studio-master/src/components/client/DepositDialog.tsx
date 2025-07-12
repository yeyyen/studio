
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";

interface DepositDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  rate: number;
  isDepositing: boolean;
  onConfirm: (paymentMethod: string) => void;
}

const paymentMethods = [
  "BDO Unibank",
  "Bank of the Philippine Islands (BPI)",
  "Metrobank",
  "Land Bank of the Philippines",
  "Security Bank",
  "GCash",
  "Maya",
];

const TOKEN_NAME = "CLT";

export function DepositDialog({
  open,
  onOpenChange,
  amount,
  rate,
  isDepositing,
  onConfirm,
}: DepositDialogProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const finalTokenAmount = amount * rate;

  const handleConfirm = () => {
    if (selectedMethod) {
      onConfirm(selectedMethod);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Deposit</DialogTitle>
          <DialogDescription>
            Please review the details below and select your payment method to complete the deposit.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2 rounded-lg border p-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount to deposit:</span>
              <span className="font-medium">₱{amount.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">You will receive</p>
            <p className="text-3xl font-bold text-primary">{finalTokenAmount.toFixed(2)} {TOKEN_NAME}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment-method-select">Select Payment Method</Label>
            <Select onValueChange={setSelectedMethod} value={selectedMethod}>
              <SelectTrigger id="payment-method-select">
                <SelectValue placeholder="Choose a payment method" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethods.map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" disabled={isDepositing}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={handleConfirm}
            disabled={!selectedMethod || isDepositing}
          >
            {isDepositing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-4 w-4" /> Confirm Deposit
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
