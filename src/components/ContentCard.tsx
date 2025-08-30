import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ExternalLink, Github, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { ContentItem, BlogPost, Project } from '@/data/posts';

interface ContentCardProps {
  item: ContentItem;
  featured?: boolean;
}

const ContentCard = ({ item, featured = false }: ContentCardProps) => {
  const isBlog = item.type === 'blog';
  const blogPost = item as BlogPost;
  const project = item as Project;

  const cardClasses = featured 
    ? "group hover:shadow-cosmic transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 shadow-card"
    : "group hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 bg-card border border-border";

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'planned': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    }
  };

  return (
    <Card className={cardClasses}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 mb-2">
            {isBlog ? (
              <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">B</span>
              </div>
            ) : (
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-accent" />
              </div>
            )}
            <Badge variant="secondary" className="text-xs">
              {isBlog ? 'Blog Post' : 'Project'}
            </Badge>
          </div>
          
          {!isBlog && project.status && (
            <Badge className={getStatusColor(project.status)}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </Badge>
          )}
        </div>

        <Link 
          to={isBlog ? `/blog/${item.id}` : `/projects/${item.id}`}
          className="group-hover:text-primary transition-colors"
        >
          <h3 className={`font-bold leading-tight ${featured ? 'text-xl' : 'text-lg'}`}>
            {item.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-muted-foreground leading-relaxed mb-4">
          {isBlog ? blogPost.excerpt : project.description}
        </p>

        {/* Tags/Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(isBlog ? blogPost.tags : project.technologies).slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {(isBlog ? blogPost.tags.length : project.technologies.length) > 3 && (
            <Badge variant="outline" className="text-xs">
              +{(isBlog ? blogPost.tags.length : project.technologies.length) - 3} more
            </Badge>
          )}
        </div>

        {/* Metadata */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
          
          {isBlog && (
            <>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{blogPost.author}</span>
              </div>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <div className="flex items-center justify-between w-full">
          <Button asChild variant="default" size="sm">
            <Link to={isBlog ? `/blog/${item.id}` : `/projects/${item.id}`}>
              Read More
            </Link>
          </Button>

          {!isBlog && (
            <div className="flex space-x-2">
              {project.demoUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;