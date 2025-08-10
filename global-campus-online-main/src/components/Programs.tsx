import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Beaker, Palette, Calculator, Globe2, Music } from "lucide-react";
import scienceImage from "@/assets/science-lab.jpg";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "International Baccalaureate",
      description: "Comprehensive IB Diploma Programme preparing students for top universities worldwide",
      highlights: ["Theory of Knowledge", "Extended Essay", "CAS Programme", "Six Subject Groups"]
    },
    {
      icon: Beaker,
      title: "STEM Excellence",
      description: "State-of-the-art laboratories and innovative teaching methods in science and mathematics",
      highlights: ["Advanced Labs", "Research Projects", "Robotics Club", "Math Olympiad"]
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Nurturing artistic expression through visual arts, music, drama, and digital media",
      highlights: ["Art Studios", "Music Rooms", "Theatre", "Digital Design"]
    },
    {
      icon: Globe2,
      title: "Languages",
      description: "Multilingual education with native speaker teachers and cultural immersion",
      highlights: ["12 Languages", "Native Teachers", "Exchange Programs", "Cultural Events"]
    }
  ];

  const achievements = [
    { number: "98%", label: "University Acceptance" },
    { number: "42", label: "Average IB Score" },
    { number: "15", label: "AP Courses" },
    { number: "100%", label: "Graduation Rate" }
  ];

  return (
    <section id="academics" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Academic <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our rigorous academic programs combine international curricula with innovative 
            teaching methods to prepare students for success in higher education and beyond.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {program.description}
                </p>
                <ul className="space-y-1">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <div className="text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={scienceImage}
            alt="Students in science laboratory"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg text-white">
                <h3 className="text-2xl font-bold mb-4">
                  World-Class Facilities
                </h3>
                <p className="mb-6">
                  From cutting-edge science laboratories to professional-grade art studios, 
                  our facilities provide the perfect environment for learning and discovery.
                </p>
                <Button variant="accent">
                  Virtual Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;