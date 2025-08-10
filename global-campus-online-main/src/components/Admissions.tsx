import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, GraduationCap, Clock, CheckCircle } from "lucide-react";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Complete our comprehensive online application with all required documents"
    },
    {
      icon: Calendar,
      title: "Assessment Day",
      description: "Attend our assessment day including interviews and academic evaluations"
    },
    {
      icon: Users,
      title: "Family Interview",
      description: "Meet with our admissions team to discuss your child's educational journey"
    },
    {
      icon: GraduationCap,
      title: "Enrollment",
      description: "Receive your acceptance letter and complete the enrollment process"
    }
  ];

  const requirements = [
    "Previous academic transcripts",
    "English proficiency assessment",
    "Letters of recommendation",
    "Personal statement",
    "Portfolio (for arts programs)",
    "Medical and immunization records"
  ];

  const intakes = [
    {
      semester: "Fall Semester",
      deadline: "March 31st",
      startDate: "September",
      availability: "All Grades"
    },
    {
      semester: "Spring Semester",
      deadline: "October 31st",
      startDate: "February",
      availability: "Limited Spaces"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your journey with Global Academy. Our admissions process is designed 
            to understand your child's unique potential and educational needs.
          </p>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Application Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Application Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Please ensure you have the following documents ready before starting your application:
              </p>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  Download Checklist
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Intake Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Admission Intakes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {intakes.map((intake, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{intake.semester}</h4>
                        <span className="text-sm text-muted-foreground">{intake.availability}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Application Deadline</div>
                          <div className="font-medium">{intake.deadline}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Semester Starts</div>
                          <div className="font-medium">{intake.startDate}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
                <p className="mb-4 opacity-90">
                  Start your application today and take the first step towards an exceptional international education.
                </p>
                <div className="space-y-3">
                  <Button variant="accent" size="lg" className="w-full">
                    Start Application
                  </Button>
                  <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Schedule Campus Visit
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

export default Admissions;