import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CreditCard, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Orders = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleMpesaPayment = () => {
    if (!phoneNumber.match(/^254\d{9}$/)) {
      toast({
        title: "Invalid phone number",
        description: "Enter valid M-Pesa number (254...)",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "M-Pesa Payment Initiated",
      description: "Check your phone to complete payment",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-6">
        <Button variant="ghost" onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ShoppingCart className="w-8 h-8 text-accent" />
            Order Medicine
          </h1>
        </div>

        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Cart Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span>Paracetamol 500mg (20 tablets)</span>
              <span className="font-semibold">KES 200</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Delivery Fee</span>
              <span className="font-semibold">KES 150</span>
            </div>
            <div className="flex justify-between py-2 text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">KES 350</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-accent" />
              Pay with M-Pesa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="tel"
              placeholder="254712345678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button onClick={handleMpesaPayment} className="w-full bg-gradient-to-r from-accent to-accent/90 shadow-[var(--shadow-primary)]" size="lg">
              Pay KES 350 via M-Pesa
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Orders;