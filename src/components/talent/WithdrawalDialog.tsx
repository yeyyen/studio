
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
import { Loader2, Landmark } from "lucide-react";

interface WithdrawalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  fee: number;
  rate: number;
  isWithdrawing: boolean;
  onConfirm: (bank: string) => void;
}

const banks = [
  "BDO Unibank",
  "Bank of the Philippine Islands (BPI)",
  "Metrobank",
  "Land Bank of the Philippines",
  "Security Bank",
  "GCash",
  "Maya",
];

const TOKEN_NAME = "CLT";

export function WithdrawalDialog({
  open,
  onOpenChange,
  amount,
  fee,
  rate,
  isWithdrawing,
  onConfirm,
}: WithdrawalDialogProps) {
  const [selectedBank, setSelectedBank] = useState<string>("");

  const totalDeduction = amount + fee;
  const finalAmountPHP = amount * rate;

  const handleConfirm = () => {
    if (selectedBank) {
      onConfirm(selectedBank);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Withdrawal</DialogTitle>
          <DialogDescription>
            Please review the details below and select your bank to complete the withdrawal.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2 rounded-lg border p-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount to withdraw:</span>
              <span className="font-medium">{amount.toFixed(2)} {TOKEN_NAME}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Transaction fee:</span>
              <span className="font-medium">{fee.toFixed(2)} {TOKEN_NAME}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total deduction:</span>
              <span>{totalDeduction.toFixed(2)} {TOKEN_NAME}</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">You will receive</p>
            <p className="text-3xl font-bold text-primary">₱{finalAmountPHP.toFixed(2)}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bank-select">Select Bank</Label>
            <Select onValueChange={setSelectedBank} value={selectedBank}>
              <SelectTrigger id="bank-select">
                <SelectValue placeholder="Choose a bank account" />
              </SelectTrigger>
              <SelectContent>
                {banks.map((bank) => (
                  <SelectItem key={bank} value={bank}>
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" disabled={isWithdrawing}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={handleConfirm}
            disabled={!selectedBank || isWithdrawing}
          >
            {isWithdrawing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Landmark className="mr-2 h-4 w-4" /> Confirm Withdrawal
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
