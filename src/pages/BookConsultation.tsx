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
  const [date, setDate] = useState<Date>();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div>
          <h1 className="text-3xl font-bold">Book a Consultation</h1>
          <p className="text-muted-foreground">Schedule a video call with our doctors</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Date Selection */}
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                Select Date
              </CardTitle>
              <CardDescription>Choose your preferred consultation date</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Booking Details */}
          <div className="space-y-6">
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User2 className="w-5 h-5 text-primary" />
                  Select Doctor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={doctor} onValueChange={setDoctor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doc) => (
                      <SelectItem key={doc.id} value={doc.id}>
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.specialty}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Select Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Symptoms */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>Describe Your Symptoms</CardTitle>
            <CardDescription>Help your doctor prepare for the consultation</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Tell us what you're experiencing..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Booking Summary */}
        {date && timeSlot && doctor && (
          <Card className="shadow-[var(--shadow-card)] bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Doctor:</span>{" "}
                {doctors.find((d) => d.id === doctor)?.name}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Date:</span> {date.toLocaleDateString()}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Time:</span> {timeSlot}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Consultation Fee:</span> KES 500
              </p>
            </CardContent>
          </Card>
        )}

        <Button
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-primary to-primary/90 shadow-[var(--shadow-primary)]"
          size="lg"
        >
          Confirm Booking & Pay KES 500
        </Button>
      </div>
    </div>
  );
};

export default BookConsultation;