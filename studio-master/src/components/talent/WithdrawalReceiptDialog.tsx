
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { BadgeCheck, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TOKEN_NAME = "CLT";

export type ReceiptData = {
  amount: number;
  bank: string;
  transactionId: string;
  date: Date;
  fee: number;
};

interface WithdrawalReceiptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  receipt: ReceiptData;
}

export function WithdrawalReceiptDialog({
  open,
  onOpenChange,
  receipt,
}: WithdrawalReceiptDialogProps) {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard!" });
  };
    
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <BadgeCheck className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center mt-4">Withdrawal Successful</DialogTitle>
        </DialogHeader>
        <div className="py-4 text-sm">
            <div className="text-center mb-6">
                <p className="text-4xl font-bold text-primary">₱{receipt.amount.toFixed(2)}</p>
                <p className="text-muted-foreground">Successfully sent to {receipt.bank}</p>
            </div>
          <div className="space-y-3 rounded-lg border bg-secondary/30 p-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-medium">₱{receipt.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Fee:</span>
              <span className="font-medium">{receipt.fee.toFixed(2)} {TOKEN_NAME}</span>
            </div>
             <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{receipt.date.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Transaction ID:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs">{receipt.transactionId}</span>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleCopy(receipt.transactionId)}>
                    <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" className="w-full">
              Done
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

