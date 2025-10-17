import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Pill } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Prescriptions = () => {
    const navigate = useNavigate();
    const prescriptions = [
        {
            id: 1,
            medicine: "Paracetamol 500mg",
            dosage: "2 tablets, 3x daily",
            duration: "5 days",
            doctor: "Dr. Sarah Mwangi",
            date: "2024-01-15",
        },
        {
            id: 2,
            medicine: "Amoxicillin 250mg",
            dosage: "1 capsule, 2x daily",
            duration: "7 days",
            doctor: "Dr. James Omondi",
            date: "2024-01-10",
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4", children: _jsxs("div", { className: "max-w-4xl mx-auto space-y-6 py-6", children: [_jsxs(Button, { variant: "ghost", onClick: () => navigate("/dashboard"), children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back"] }), _jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold flex items-center gap-2", children: [_jsx(Pill, { className: "w-8 h-8 text-secondary" }), "My Prescriptions"] }), _jsx("p", { className: "text-muted-foreground", children: "Available offline" })] }), _jsx("div", { className: "space-y-4", children: prescriptions.map((prescription) => (_jsxs(Card, { className: "shadow-[var(--shadow-card)]", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center justify-between", children: [_jsx("span", { children: prescription.medicine }), _jsxs(Button, { size: "sm", variant: "outline", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download"] })] }) }), _jsxs(CardContent, { className: "space-y-2", children: [_jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-semibold", children: "Dosage:" }), " ", prescription.dosage] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-semibold", children: "Duration:" }), " ", prescription.duration] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-semibold", children: "Prescribed by:" }), " ", prescription.doctor] }), _jsxs("p", { className: "text-xs text-muted-foreground", children: ["Date: ", prescription.date] }), _jsx(Button, { className: "w-full mt-4 bg-gradient-to-r from-accent to-accent/90", children: "Order Refill" })] })] }, prescription.id))) })] }) }));
};
export default Prescriptions;
