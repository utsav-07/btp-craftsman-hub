import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              SAP BTP Expert
            </h3>
            <p className="text-background/80 leading-relaxed">
              Driving digital transformation through expert SAP BTP administration, 
              cloud integrations, and innovative enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-background/80 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Expertise Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Expertise Areas
            </h4>
            <div className="space-y-2 text-background/80">
              <p>• SAP BTP Administration</p>
              <p>• Cloud Identity & SSO</p>
              <p>• Integration Suite</p>
              <p>• Process Automation</p>
              <p>• Fiori & Mobile Solutions</p>
              <p>• Enterprise Monitoring</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © {currentYear} SAP BTP Expert Portfolio. Crafted with passion for enterprise technology.
          </p>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;