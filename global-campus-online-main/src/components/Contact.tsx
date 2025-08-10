import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      info: "123 Education Boulevard, International District, Singapore 238123"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+65 6234 5678"
    },
    {
      icon: Mail,
      title: "Email",
      info: "admissions@globalacademy.edu.sg"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Monday - Friday: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our programs or admissions process? We're here to help. 
            Contact us today to learn more about Global Academy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="Enter your email address" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="What is this regarding?" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-32"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Schedule a Campus Tour</h3>
                <p className="mb-4 opacity-90">
                  Experience our world-class facilities and vibrant community firsthand.
                </p>
                <div className="space-y-3">
                  <Button variant="accent" className="w-full">
                    Book Virtual Tour
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Schedule In-Person Visit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Campus Map</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      View Full Map
                    </Button>
                  </div>
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