import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4", children: _jsxs("div", { className: "max-w-4xl mx-auto space-y-6 py-6", children: [_jsxs(Button, { variant: "ghost", onClick: () => navigate("/dashboard"), children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back"] }), _jsx("div", { children: _jsxs("h1", { className: "text-3xl font-bold flex items-center gap-2", children: [_jsx(ShoppingCart, { className: "w-8 h-8 text-accent" }), "Order Medicine"] }) }), _jsxs(Card, { className: "shadow-[var(--shadow-card)]", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Cart Summary" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between py-2 border-b", children: [_jsx("span", { children: "Paracetamol 500mg (20 tablets)" }), _jsx("span", { className: "font-semibold", children: "KES 200" })] }), _jsxs("div", { className: "flex justify-between py-2 border-b", children: [_jsx("span", { children: "Delivery Fee" }), _jsx("span", { className: "font-semibold", children: "KES 150" })] }), _jsxs("div", { className: "flex justify-between py-2 text-lg font-bold", children: [_jsx("span", { children: "Total" }), _jsx("span", { className: "text-primary", children: "KES 350" })] })] })] }), _jsxs(Card, { className: "shadow-[var(--shadow-card)]", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(CreditCard, { className: "w-5 h-5 text-accent" }), "Pay with M-Pesa"] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx(Input, { type: "tel", placeholder: "254712345678", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value) }), _jsx(Button, { onClick: handleMpesaPayment, className: "w-full bg-gradient-to-r from-accent to-accent/90 shadow-[var(--shadow-primary)]", size: "lg", children: "Pay KES 350 via M-Pesa" })] })] })] }) }));
};
export default Orders;
