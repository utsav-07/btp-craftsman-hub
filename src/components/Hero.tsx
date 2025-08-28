import { Button } from "@/components/ui/button";
import { Github, Linkedin, Eye } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";
import profilePhoto from "@/assets/utsav.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(33, 150, 243, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-6 z-10 text-center text-white">
        <div className="animate-fade-in-up">
          {/* Profile Photo */}
          <div className="mb-8">
            <img 
              src={profilePhoto} 
              alt="Professional Profile" 
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl hover-lift"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            SAP BTP
            <span className="block text-white/90">Administrator</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            SAP BTP Administrator | Fiori & Mobile | Cloud Integrations
          </p>
          
          {/* Brief Description */}
          <p className="text-lg mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed">
            Experienced in managing enterprise cloud landscapes with SAP Business Technology Platform, 
            specializing in secure integrations and optimized user experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-sap-blue hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="https://drive.google.com/file/d/1fSPtbBjFqwmg3pN8De6riC7YKKX1oSeR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-5 w-5 text-sap-blue" />
                View Resume
              </a>
            </Button>
            
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-white text-sap-blue hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 p-6"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/udit-utsav-95660a18b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-sap-blue" />
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white text-sap-blue hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 p-6"
                asChild
              >
                <a
                  href="https://github.com/utsav-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 text-sap-blue" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;