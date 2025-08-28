import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      link: "#"
    },
    {
      icon: <Github className="h-6 w-6 text-sap-blue" />,
      title: "GitHub",
      content: "View My Code",
      link: "#"
    },
    {
      icon: <MapPin className="h-6 w-6 text-sap-blue" />,
      title: "Location",
      content: "Available for Remote Work",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-sap-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your SAP BTP requirements or explore collaboration opportunities? 
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Phone className="h-6 w-6 text-sap-blue" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, or 
                  sharing insights about SAP BTP administration and cloud integrations.
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
            
            {/* Quick Contact CTA */}
            <Card className="enterprise-card bg-gradient-to-br from-sap-blue/5 to-sap-blue/10 border-sap-blue/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Ready to Start Your SAP BTP Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether you need BTP administration, cloud integrations, or Fiori implementations, 
                  I'm here to help transform your enterprise landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="btn-enterprise flex-1">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me Directly
                  </Button>
                  <Button variant="outline" className="border-sap-blue text-sap-blue hover:bg-sap-blue hover:text-white">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="enterprise-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="h-6 w-6 text-sap-blue" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-sap-blue/20 focus:border-sap-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                        className="border-sap-blue/20 focus:border-sap-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., SAP BTP Implementation Discussion"
                      required
                      className="border-sap-blue/20 focus:border-sap-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project requirements, timeline, or any specific questions you have about SAP BTP..."
                      required
                      className="min-h-[120px] border-sap-blue/20 focus:border-sap-blue resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-enterprise text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;