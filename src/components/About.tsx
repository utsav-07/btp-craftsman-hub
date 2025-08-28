import { Shield, Cloud, Settings, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="h-8 w-8 text-sap-blue" />,
      title: "Cloud Architecture",
      description: "Expert in SAP BTP service configuration and cloud-native integrations"
    },
    {
      icon: <Shield className="h-8 w-8 text-sap-blue" />,
      title: "Security & Access",
      description: "Specialized in SSO, role management, and secure enterprise connections"
    },
    {
      icon: <Settings className="h-8 w-8 text-sap-blue" />,
      title: "Process Automation",
      description: "Build Process Automation and workflow optimization expertise"
    },
    {
      icon: <Users className="h-8 w-8 text-sap-blue" />,
      title: "User Experience",
      description: "Fiori Spaces & Pages configuration for enhanced user productivity"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-sap-blue mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="enterprise-card p-8 mb-12 animate-slide-in-left">
            <p className="text-lg leading-relaxed text-muted-foreground">
              SAP BTP Administrator with expertise in managing subaccounts, entitlements, and user access. 
              Skilled in configuring core BTP services including Cloud Identity, SSO, Cloud Connector, ALM, 
              BAS, Integration Suite, and Build Process Automation. Experienced in role management, 
              connectivity setup, and integrating BTP services with on-premise S/4HANA and cloud applications 
              to ensure secure and optimized enterprise landscapes.
            </p>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="enterprise-card p-6 text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;