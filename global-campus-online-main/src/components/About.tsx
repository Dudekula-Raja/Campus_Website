import { CheckCircle, Target, Users, Globe } from "lucide-react";
import campusImage from "@/assets/campus-exterior.jpg";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Internationally recognized curriculum preparing students for universities worldwide"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Students and faculty from over 65 countries creating a rich cultural environment"
    },
    {
      icon: Target,
      title: "Academic Excellence",
      description: "Small class sizes and personalized attention ensuring every student succeeds"
    }
  ];

  const values = [
    "International Baccalaureate (IB) World School",
    "Accredited by leading educational organizations",
    "State-of-the-art facilities and technology",
    "Comprehensive support services",
    "Strong university placement record"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Empowering Tomorrow's
                <span className="text-primary"> Leaders</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 25 years, Global Academy has been at the forefront of international 
                education, nurturing young minds to become thoughtful, engaged global citizens 
                ready to make a positive impact on the world.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={campusImage}
                alt="Global Academy Campus"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elegant border border-border">
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;