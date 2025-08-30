import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, Github, Cpu, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getContentById, projects } from '@/data/posts';
import type { Project } from '@/data/posts';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = getContentById(id!) as Project;

  if (!project || project.type !== 'project') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.technologies.some(tech => project.technologies.includes(tech)))
    .slice(0, 3);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'planned': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" onClick={() => navigate('/projects')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <Badge className={getStatusColor(project.status)}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>{new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <div className="flex gap-3">
              {project.demoUrl && (
                <Button asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  <Tag className="w-3 h-3 mr-1" />
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        <Separator className="mb-12" />

        {/* Project Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: project.content
                .replace(/\n/g, '<br />')
                .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                .replace(/# /g, '<h1 class="text-3xl font-bold mt-8 mb-6">')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/- /g, '• ')
            }}
          />
        </article>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-16">
            <Separator className="mb-8" />
            <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.id}`}
                  className="group block p-6 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-accent" />
                    </div>
                    <Badge className={getStatusColor(relatedProject.status)} variant="outline">
                      {relatedProject.status}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {relatedProject.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(relatedProject.date).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-16 flex justify-between">
          <Button variant="outline" onClick={() => navigate('/projects')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Projects
          </Button>
          <Button asChild>
            <Link to="/blog">
              View Blog Posts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;