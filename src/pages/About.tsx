import { Mail, Github, Twitter, Linkedin, Code, Palette, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 95 },
    { name: 'UI/UX Design', icon: Palette, level: 88 },
    { name: 'Performance Optimization', icon: Rocket, level: 92 }
  ];

  const technologies = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'Python',
    'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-cosmic rounded-full mx-auto mb-8 flex items-center justify-center shadow-glow">
            <Code className="w-16 h-16 text-primary-foreground animate-glow" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-cosmic bg-clip-text text-transparent">Alex</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer and technology enthusiast dedicated to building 
            innovative solutions and sharing knowledge with the community.
          </p>
        </section>

        {/* About Content */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to my corner of the internet! I'm a software engineer with over 5 years 
                  of experience building web applications that make a difference. My journey started 
                  with curiosity about how websites work, and it's evolved into a passion for 
                  creating digital experiences that delight users.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or writing about my discoveries. I believe in the power 
                  of sharing knowledge and helping others grow in their development journey.
                </p>
                <p>
                  This blog serves as both a personal learning journal and a resource for fellow 
                  developers. Whether you're just starting out or looking to dive deeper into 
                  specific technologies, I hope you find something valuable here.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Skills & Expertise</h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-cosmic h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Technologies I Work With</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in connecting with fellow developers, discussing new opportunities, 
            or just having a chat about technology. Feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:alex@cosmicstudio.dev">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="bg-gradient-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold mb-3">Open to Opportunities</h3>
            <p className="text-muted-foreground">
              Currently open to freelance projects and full-time opportunities. 
              Let's build something amazing together!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;