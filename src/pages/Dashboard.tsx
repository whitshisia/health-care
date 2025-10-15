import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, Pill, CreditCard, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Mwangi",
      specialty: "General Practitioner",
      time: "Today at 2:00 PM",
      type: "Video Consultation",
    },
  ];

  const recentPrescriptions = [
    {
      id: 1,
      medicine: "Paracetamol 500mg",
      dosage: "2 tablets, 3x daily",
      doctor: "Dr. Sarah Mwangi",
      date: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="max-w-6xl mx-auto space-y-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-muted-foreground">Your health dashboard</p>
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="w-5 h-5" />
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card 
            className="cursor-pointer hover:shadow-[var(--shadow-card)] transition-shadow"
            onClick={() => navigate("/book")}
          >
            <CardContent className="pt-6 text-center space-y-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold">Book Visit</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-[var(--shadow-card)] transition-shadow">
            <CardContent className="pt-6 text-center space-y-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Video className="w-6 h-6 text-accent" />
              </div>
              <p className="font-semibold">Join Call</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-[var(--shadow-card)] transition-shadow"
            onClick={() => navigate("/prescriptions")}
          >
            <CardContent className="pt-6 text-center space-y-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Pill className="w-6 h-6 text-secondary" />
              </div>
              <p className="font-semibold">Prescriptions</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-[var(--shadow-card)] transition-shadow"
            onClick={() => navigate("/orders")}
          >
            <CardContent className="pt-6 text-center space-y-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <p className="font-semibold">Order Meds</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>Your scheduled consultations</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-semibold">{appointment.doctor}</p>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        <p className="text-sm flex items-center gap-2 text-primary">
                          <Video className="w-4 h-4" />
                          {appointment.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{appointment.time}</p>
                        <Button size="sm" className="mt-2 bg-gradient-to-r from-primary to-primary/90">
                          Join Call
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No upcoming appointments
              </p>
            )}
          </CardContent>
        </Card>

        {/* Recent Prescriptions */}
        <Card className="shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-secondary" />
              Recent Prescriptions
            </CardTitle>
            <CardDescription>Available offline</CardDescription>
          </CardHeader>
          <CardContent>
            {recentPrescriptions.length > 0 ? (
              <div className="space-y-4">
                {recentPrescriptions.map((prescription) => (
                  <div
                    key={prescription.id}
                    className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-semibold">{prescription.medicine}</p>
                        <p className="text-sm text-muted-foreground">{prescription.dosage}</p>
                        <p className="text-xs text-muted-foreground">
                          Prescribed by {prescription.doctor}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{prescription.date}</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Order Refill
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No prescriptions yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;