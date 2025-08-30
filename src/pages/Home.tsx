import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ContentCard from '@/components/ContentCard';
import { allContent, blogPosts, projects } from '@/data/posts';

const Home = () => {
  const [featuredContent, setFeaturedContent] = useState(allContent.slice(0, 6));

  useEffect(() => {
    // Shuffle and select featured content
    const shuffled = [...allContent].sort(() => 0.5 - Math.random());
    setFeaturedContent(shuffled.slice(0, 6));
  }, []);

  const stats = [
    { label: 'Blog Posts', value: blogPosts.length, icon: Code },
    { label: 'Projects', value: projects.length, icon: Palette },
    { label: 'Technologies', value: '15+', icon: Rocket }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-space opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Star className="w-3 h-3 mr-1" />
              Welcome to Cosmic Studio
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Code, Create, 
              </span>
              <br />
              <span className="text-foreground">
                Innovate
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Dive into a universe of modern web development, cutting-edge projects, 
              and insights that push the boundaries of technology and creativity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-gradient-cosmic hover:shadow-glow transition-all duration-300">
                <Link to="/projects">
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  Read Blog
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the latest insights, projects, and innovations from the world of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredContent.map((item) => (
              <ContentCard key={item.id} item={item} featured />
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  View All Blog Posts
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Cosmic Studio</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Welcome to a space where technology meets creativity. Cosmic Studio is 
                a platform dedicated to exploring the frontiers of web development, 
                sharing knowledge, and building innovative solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're here to learn about the latest React patterns, explore 
                cutting-edge projects, or get inspired by creative coding, you'll find 
                content that pushes the boundaries of what's possible.
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-cosmic rounded-2xl shadow-cosmic flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
                <div className="text-center text-primary-foreground">
                  <Code className="w-16 h-16 mx-auto mb-4 animate-glow" />
                  <h3 className="text-2xl font-bold">Code with Purpose</h3>
                  <p className="text-primary-foreground/80 mt-2">Building the future, one line at a time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;