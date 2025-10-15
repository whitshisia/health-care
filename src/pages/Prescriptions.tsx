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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-6">
        <Button variant="ghost" onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Pill className="w-8 h-8 text-secondary" />
            My Prescriptions
          </h1>
          <p className="text-muted-foreground">Available offline</p>
        </div>

        <div className="space-y-4">
          {prescriptions.map((prescription) => (
            <Card key={prescription.id} className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{prescription.medicine}</span>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm"><span className="font-semibold">Dosage:</span> {prescription.dosage}</p>
                <p className="text-sm"><span className="font-semibold">Duration:</span> {prescription.duration}</p>
                <p className="text-sm"><span className="font-semibold">Prescribed by:</span> {prescription.doctor}</p>
                <p className="text-xs text-muted-foreground">Date: {prescription.date}</p>
                <Button className="w-full mt-4 bg-gradient-to-r from-accent to-accent/90">
                  Order Refill
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;