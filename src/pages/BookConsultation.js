import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CalendarIcon, Clock, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
const BookConsultation = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [date, setDate] = useState();
    const [timeSlot, setTimeSlot] = useState("");
    const [doctor, setDoctor] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const doctors = [
        { id: "1", name: "Dr. Sarah Mwangi", specialty: "General Practitioner" },
        { id: "2", name: "Dr. James Omondi", specialty: "Pediatrician" },
        { id: "3", name: "Dr. Grace Wanjiru", specialty: "Dermatologist" },
    ];
    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    ];
    const handleBooking = () => {
        if (!date || !timeSlot || !doctor) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields",
                variant: "destructive",
            });
            return;
        }
        toast({
            title: "Booking Confirmed!",
            description: "You'll receive a reminder 30 minutes before your appointment",
        });
        navigate("/dashboard");
    };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4", children: _jsxs("div", { className: "max-w-4xl mx-auto space-y-6 py-6", children: [_jsxs(Button, { variant: "ghost", onClick: () => navigate("/dashboard"), className: "mb-4", children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Dashboard"] }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold", children: "Book a Consultation" }), _jsx("p", { className: "text-muted-foreground", children: "Schedule a video call with our doctors" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs(Card, { className: "shadow-[var(--shadow-card)]", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(CalendarIcon, { className: "w-5 h-5 text-primary" }), "Select Date"] }), _jsx(CardDescription, { children: "Choose your preferred consultation date" })] }), _jsx(CardContent, { className: "flex justify-center", children: _jsx(Calendar, { mode: "single", selected: date, onSelect: setDate, disabled: (date) => date < new Date(), className: "rounded-md border" }) })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { className: "shadow-[var(--shadow-card)]", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(User2, { className: "w-5 h-5 text-primary" }), "Select Doctor"] }) }), _jsx(CardContent, { children: _jsxs(Select, { value: doctor, onValueChange: setDoctor, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a doctor" }) }), _jsx(SelectContent, { children: doctors.map((doc) => (_jsx(SelectItem, { value: doc.id, children: _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: doc.name }), _jsx("p", { className: "text-xs text-muted-foreground", children: doc.specialty })] }) }, doc.id))) })] }) })] }), _jsxs(Card, { className: "shadow-[var(--shadow-card)]", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-5 h-5 text-primary" }), "Select Time"] }) }), _jsx(CardContent, { children: _jsxs(Select, { value: timeSlot, onValueChange: setTimeSlot, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose a time slot" }) }), _jsx(SelectContent, { children: timeSlots.map((slot) => (_jsx(SelectItem, { value: slot, children: slot }, slot))) })] }) })] })] })] }), _jsxs(Card, { className: "shadow-[var(--shadow-card)]", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Describe Your Symptoms" }), _jsx(CardDescription, { children: "Help your doctor prepare for the consultation" })] }), _jsx(CardContent, { children: _jsx(Textarea, { placeholder: "Tell us what you're experiencing...", value: symptoms, onChange: (e) => setSymptoms(e.target.value), rows: 4 }) })] }), date && timeSlot && doctor && (_jsxs(Card, { className: "shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-accent/5", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Booking Summary" }) }), _jsxs(CardContent, { className: "space-y-2", children: [_jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-semibold", children: "Doctor:" }), " ", doctors.find((d) => d.id === doctor)?.name] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-semibold", children: "Date:" }), " ", date.toLocaleDateString()] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-semibold", children: "Time:" }), " ", timeSlot] }), _jsxs("p", { className: "text-sm", children: [_jsx("span", { className: "font-semibold", children: "Consultation Fee:" }), " KES 500"] })] })] })), _jsx(Button, { onClick: handleBooking, className: "w-full bg-gradient-to-r from-primary to-primary/90 shadow-[var(--shadow-primary)]", size: "lg", children: "Confirm Booking & Pay KES 500" })] }) }));
};
export default BookConsultation;
