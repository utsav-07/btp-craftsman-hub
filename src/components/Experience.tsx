import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <Briefcase className="h-6 w-6 text-sap-blue" />,
      title: "Analyst – SAP BTP Administrator",
      company: "Current Role",
      period: "Present",
      description: "Managing subaccounts, entitlements, role collections, Cloud Identity, SSO (Azure AD + IAS), Cloud Connector, Integration Suite, Build Process Automation, Cloud ALM, Cloud Transport Management, Destinations, Fiori Spaces & Pages, workflow/My Inbox, and monitoring dashboards.",
      skills: ["BTP Administration", "Cloud Identity", "SSO Implementation", "Integration Suite", "Process Automation"]
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-sap-blue" />,
      title: "Graduate Engineer Trainee (GET)",
      company: "SAP BASIS & Development",
      period: "Training Period",
      description: "Comprehensive training in SAP BASIS, Fiori Spaces & Pages, initial BTP exposure, and custom UI5/React application development. Built foundation in enterprise SAP landscape management.",
      skills: ["SAP BASIS", "Fiori Development", "UI5/React", "BTP Fundamentals", "System Administration"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-sap-blue mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-sap-blue/20"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-sap-blue rounded-full flex items-center justify-center shadow-lg">
                  {exp.icon}
                </div>
                
                {/* Content Card */}
                <div className={`enterprise-card p-6 ml-12 md:ml-0 ${index % 2 === 1 ? 'md:mr-12' : 'md:ml-12'} hover-lift`}>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sap-blue font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <span className="skill-badge">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-sap-blue/10 text-sap-blue rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;