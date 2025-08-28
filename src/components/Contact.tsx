import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-sap-blue" />,
      title: "Email",
      content: "uditutsav07@gmail.com",
      link: "mailto:uditutsav07@gmail.com"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-sap-blue" />,
      title: "LinkedIn",
      content: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/udit-utsav-95660a18b/"
    },
    {
      icon: <Github className="h-6 w-6 text-sap-blue" />,
      title: "GitHub",
      content: "View My Code",
      link: "https://github.com/utsav-07"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact
          </h2>
          <div className="w-24 h-1 bg-sap-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you'd like to connect or learn more about my work.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Phone className="h-6 w-6 text-sap-blue" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm open to discussing opportunities and connecting with fellow professionals in the SAP ecosystem.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
                      <div className="p-2 bg-sap-blue/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-sap-blue hover:text-sap-blue-dark transition-colors duration-300"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Professional Summary */}
            <Card className="enterprise-card bg-gradient-to-br from-sap-blue/5 to-sap-blue/10 border-sap-blue/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  About My Work
                </h3>
                <p className="text-muted-foreground mb-6">
                  Passionate about SAP BTP administration and cloud technologies. Always learning and 
                  exploring new ways to optimize enterprise cloud landscapes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="btn-enterprise flex-1" asChild>
                    <a href="mailto:uditutsav07@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button variant="outline" className="border-sap-blue text-sap-blue hover:bg-sap-blue hover:text-white" asChild>
                    <a href="https://www.linkedin.com/in/udit-utsav-95660a18b/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;