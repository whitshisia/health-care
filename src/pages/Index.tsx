import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Smartphone, Video, Pill, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MobiClinic
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Quality healthcare, right from your phone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-xl bg-card shadow-[var(--shadow-card)]">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Video Consultations</h3>
              <p className="text-sm text-muted-foreground">Connect with certified doctors instantly</p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-[var(--shadow-card)]">
              <Pill className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Prescriptions</h3>
              <p className="text-sm text-muted-foreground">Digital prescriptions, available offline</p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow-[var(--shadow-card)]">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">M-Pesa Payments</h3>
              <p className="text-sm text-muted-foreground">Secure, convenient mobile payments</p>
            </div>
          </div>

          <Button
            onClick={() => navigate("/auth")}
            size="lg"
            className="mt-8 bg-gradient-to-r from-primary to-primary/90 shadow-[var(--shadow-primary)] text-lg px-8"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;