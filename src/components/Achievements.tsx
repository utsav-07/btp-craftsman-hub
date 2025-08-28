import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, CheckCircle, Target, Building } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Champion of the Month",
      organization: "Tata Technologies",
      description: "Recognized for outstanding performance and contributions to SAP BTP projects and team collaboration.",
      type: "Award"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Successful SSO/Mobile Deployments",
      organization: "Honda, Agratas, Jamipol",
      description: "Led and executed critical SSO implementations and mobile deployments across multiple enterprise clients.",
      type: "Project Success"
    }
  ];

  const certifications = [
    {
      title: "Cloud Identity Services",
      provider: "SAP",
      type: "BTP Training"
    },
    {
      title: "Build Process Automation",
      provider: "SAP",
      type: "BTP Training"
    },
    {
      title: "Integration Suite",
      provider: "SAP",
      type: "BTP Training"
    },
    {
      title: "Cloud ALM",
      provider: "SAP",
      type: "BTP Training"
    },
    {
      title: "Business Application Studio (BAS)",
      provider: "SAP",
      type: "BTP Training"
    }
  ];

  const clientLogos = [
    { name: "Honda", logo: "🚗" },
    { name: "Agratas", logo: "⚡" },
    { name: "Jamipol", logo: "🏭" },
    { name: "Tata Technologies", logo: "🔧" }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-sap-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized excellence in SAP BTP implementations and client deliveries
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Major Achievements */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="enterprise-card hover-lift animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-md">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {achievement.title}
                        </h3>
                        <Badge variant="outline" className="border-sap-blue text-sap-blue">
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-sap-blue font-semibold mb-3">
                        {achievement.organization}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* SAP BTP Certifications */}
          <Card className="enterprise-card mb-16 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <Star className="h-12 w-12 text-sap-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  SAP BTP Certifications & Training
                </h3>
                <p className="text-muted-foreground">
                  Continuous learning and skill development in SAP Business Technology Platform
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-sap-blue/5 rounded-lg border border-sap-blue/20 hover:bg-sap-blue/10 transition-colors duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.provider}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Client Portfolio */}
          <Card className="enterprise-card animate-slide-in-right">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <Building className="h-12 w-12 text-sap-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Trusted by Leading Organizations
                </h3>
                <p className="text-muted-foreground">
                  Successfully delivered SAP BTP solutions for enterprise clients
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {clientLogos.map((client, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-2">
                      {client.logo}
                    </div>
                    <p className="font-semibold text-sm text-foreground">
                      {client.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
        
        </div>
      </div>
    </section>
  );
};

export default Achievements;