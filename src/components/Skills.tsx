import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Code, Wrench, Users, Cloud, Shield, Workflow, Monitor } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cloud className="h-6 w-6 text-sap-blue" />,
      title: "SAP & BTP",
      skills: [
        "BTP Administration", "SAP BASIS", "Fiori", "UI5", "Cloud Identity", 
        "Cloud Connector", "ALM", "Integration Suite", "Build Process Automation", 
        "Destinations", "Work Zone", "Mobile Start", "Cloud Transport Mgmt", 
        "GRDC", "Advanced Financial Closing"
      ]
    },
    {
      icon: <Code className="h-6 w-6 text-sap-blue" />,
      title: "Development",
      skills: ["React.js", "Node.js", "UI5/SAPUI5", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      icon: <Wrench className="h-6 w-6 text-sap-blue" />,
      title: "Tools & Platforms",
      skills: ["BTP Cockpit", "BAS", "GitHub", "VS Code", "Postman", "Azure AD", "SAML", "OAuth"]
    },
    {
      icon: <Users className="h-6 w-6 text-sap-blue" />,
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Adaptability", "Problem-Solving", "Leadership", "Training"]
    }
  ];

  const expertiseAreas = [
    {
      icon: <Shield className="h-8 w-8 text-sap-blue" />,
      title: "Security & Identity",
      description: "SSO, Cloud Identity Services, Role Management, Azure AD Integration"
    },
    {
      icon: <Workflow className="h-8 w-8 text-sap-blue" />,
      title: "Process Automation",
      description: "Build Process Automation, Workflow Configuration, My Inbox Setup"
    },
    {
      icon: <Server className="h-8 w-8 text-sap-blue" />,
      title: "Cloud Integration",
      description: "Integration Suite, Cloud Connector, S/4HANA Connectivity"
    },
    {
      icon: <Monitor className="h-8 w-8 text-sap-blue" />,
      title: "Monitoring & ALM",
      description: "Cloud ALM, Real-time Dashboards, Performance Optimization"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-sap-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning SAP BTP administration, cloud integrations, and modern development
          </p>
        </div>
        
        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index}
              className="enterprise-card hover-lift text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="mx-auto mb-4 p-3 bg-sap-blue/10 rounded-lg w-fit">
                  {area.icon}
                </div>
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="enterprise-card hover-lift animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="skill-badge hover-lift"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
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

export default Skills;