import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-sap-blue">
            SAP BTP Expert
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-sap-blue transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button className="btn-enterprise ml-4" asChild>
              <a href="https://drive.google.com/file/d/1unNQyv4hEnBSHBmDOv1zREJP1aKg3C3I/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-sap-blue transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-foreground hover:text-sap-blue transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button className="btn-enterprise w-fit mt-4" asChild>
              <a href="https://drive.google.com/file/d/1unNQyv4hEnBSHBmDOv1zREJP1aKg3C3I/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;