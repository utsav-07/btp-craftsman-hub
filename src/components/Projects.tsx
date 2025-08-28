import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cloud, Shield, Smartphone, Workflow, BarChart, Settings } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Cloud className="h-8 w-8 text-sap-blue" />,
      title: "BTP Services Administration & Integration with S/4HANA",
      description: "Comprehensive SAP BTP environment setup and configuration with seamless S/4HANA integration for enterprise-grade cloud operations.",
      tags: ["Subaccounts", "Cloud ALM", "Build Process Automation", "Integration Suite", "GRDC", "Cloud Transport Management"],
      highlights: ["Multi-tenant architecture", "Automated deployment", "Real-time monitoring"]
    },
    {
      icon: <Shield className="h-8 w-8 text-sap-blue" />,
      title: "Single Sign-On (SSO) Implementation (Agratas)",
      description: "Enterprise-wide SSO solution integrating IAS, Azure AD, and SAML across Fiori, SAP GUI, and WebGUI for seamless user experience.",
      tags: ["IAS", "Azure AD", "SAML", "Fiori", "SAP GUI", "WebGUI"],
      highlights: ["Zero-downtime deployment", "Enhanced security", "User adoption: 100%"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-sap-blue" />,
      title: "Fiori & Mobile Implementation (Agratas)",
      description: "Modern user experience transformation through Fiori Spaces & Pages configuration and SAP Mobile Start deployment.",
      tags: ["Spaces & Pages", "Work Zone", "SAP Mobile Start", "UX Design"],
      highlights: ["Mobile-first design", "Productivity increase: 40%", "User-centric approach"]
    },
    {
      icon: <Workflow className="h-8 w-8 text-sap-blue" />,
      title: "Workflow & My Inbox Configuration (Jamipol)",
      description: "Streamlined approval processes with optimized workflow setup and My Inbox configuration for enhanced productivity.",
      tags: ["Workflow Management", "My Inbox", "Process Optimization", "User Training"],
      highlights: ["Approval time reduced: 60%", "Automated routing", "Enhanced compliance"]
    },
    {
      icon: <Settings className="h-8 w-8 text-sap-blue" />,
      title: "GRC UI5 Project for SOD Checks",
      description: "Real-time compliance dashboard for Segregation of Duties monitoring with advanced UI5 development and GRC integration.",
      tags: ["UI5 Development", "GRC", "Compliance", "Real-time Dashboard"],
      highlights: ["Real-time monitoring", "Compliance automation", "Risk reduction: 75%"]
    },
    {
      icon: <BarChart className="h-8 w-8 text-sap-blue" />,
      title: "SAP BTP Monitoring Dashboard",
      description: "Comprehensive monitoring solution combining Cloud ALM and UI5 for real-time BTP environment health and performance tracking.",
      tags: ["Cloud ALM", "UI5", "Monitoring", "Performance Analytics"],
      highlights: ["360° visibility", "Proactive alerts", "Performance optimization"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-sap-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing enterprise-grade SAP BTP implementations and integrations that drive digital transformation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="enterprise-card hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sap-blue/10 rounded-lg group-hover:bg-sap-blue/20 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-sap-blue transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-sap-blue rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-sap-blue/10 text-sap-blue hover:bg-sap-blue/20 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
              
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;