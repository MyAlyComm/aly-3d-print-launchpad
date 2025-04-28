
import { AIHubLayout } from "@/components/ai-hub/AIHubLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Globe, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Aly Yu</h1>
              <p className="text-xl text-gray-600 mb-8">
                3D Printing Entrepreneur, Educator & Community Builder
              </p>
              <div className="flex gap-4">
                <Button variant="default" className="gap-2" asChild>
                  <a href="https://instagram.com/aly3dprints" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    Follow on Instagram
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://3dblueprint.io" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50 blur-xl" />
              <img 
                src="/lovable-uploads/d1a2c586-5f86-4edf-865e-d27b19a65ec9.png"
                alt="Aly Yu" 
                className="relative rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">The Journey Begins</h3>
                <p className="text-gray-600">
                  Starting with just a single $300 printer, I built a thriving business 
                  generating over $20K monthly. My journey taught me invaluable lessons 
                  about entrepreneurship, innovation, and perseverance in the 3D printing industry.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Mission & Vision</h3>
                <p className="text-gray-600">
                  Today, I'm dedicated to helping others achieve similar success. 
                  Through educational content, mentoring, and community building, 
                  I'm empowering the next generation of 3D printing entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">46K+</div>
              <div className="text-gray-600">Instagram Followers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Entrepreneurs Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$20K+</div>
              <div className="text-gray-600">Monthly Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <img 
                    src={`/lovable-uploads/e49ddb52-4568-42a4-9701-8bdb0ebd0833.png`}
                    alt={`Featured work ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">3D Printing Project {i}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Innovative 3D printing solution showcasing technical expertise and creativity.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">3D Printing</Badge>
                      <Badge variant="outline">Design</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Goals & Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Empower Creators",
                description: "Help entrepreneurs build successful 3D printing businesses"
              },
              {
                icon: Star,
                title: "Innovate Industry",
                description: "Push boundaries of what's possible with 3D printing technology"
              },
              {
                icon: Star,
                title: "Build Community",
                description: "Foster a supportive network of 3D printing enthusiasts"
              }
            ].map((goal, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <goal.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

