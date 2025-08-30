export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  readTime: string;
  image?: string;
  type: 'blog';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  technologies: string[];
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  type: 'project';
}

export type ContentItem = BlogPost | Project;

export const blogPosts: BlogPost[] = [
  {
    id: "react-best-practices",
    title: "React Best Practices for Modern Applications",
    excerpt: "Explore the latest React patterns and techniques that will make your applications more maintainable and performant.",
    content: `# React Best Practices for Modern Applications

React has evolved significantly over the years, and with it, the best practices for building robust applications. Here are some key principles to follow:

## 1. Use Functional Components and Hooks

Functional components with hooks are now the preferred way to write React components. They're more concise and offer better performance optimizations.

## 2. Implement Proper Error Boundaries

Error boundaries help catch JavaScript errors anywhere in the component tree and display fallback UI instead of crashing the entire app.

## 3. Optimize Performance with React.memo and useMemo

Use React.memo for component memoization and useMemo for expensive calculations to prevent unnecessary re-renders.

## 4. Follow the Single Responsibility Principle

Keep components focused on a single responsibility. This makes them easier to test, maintain, and reuse.

## Conclusion

Following these practices will help you build more maintainable and scalable React applications.`,
    author: "Alex Chen",
    date: "2024-01-15",
    tags: ["React", "JavaScript", "Best Practices", "Performance"],
    readTime: "8 min read",
    type: 'blog'
  },
  {
    id: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns You Should Know",
    excerpt: "Master advanced TypeScript features including conditional types, mapped types, and template literal types.",
    content: `# Advanced TypeScript Patterns You Should Know

TypeScript offers powerful type system features that can help you write more robust code. Let's explore some advanced patterns:

## Conditional Types

Conditional types allow you to create types that depend on a condition.

## Mapped Types

Mapped types allow you to create new types by transforming properties of existing types.

## Template Literal Types

Template literal types enable creating types based on string templates.

These patterns unlock new possibilities for type safety and developer experience.`,
    author: "Sarah Kim",
    date: "2024-01-10",
    tags: ["TypeScript", "Advanced", "Types", "Programming"],
    readTime: "12 min read",
    type: 'blog'
  },
  {
    id: "css-grid-mastery",
    title: "Mastering CSS Grid Layout",
    excerpt: "Learn how to create complex layouts with CSS Grid and unlock the full potential of modern web design.",
    content: `# Mastering CSS Grid Layout

CSS Grid is one of the most powerful layout systems available in CSS. It allows you to create complex, responsive layouts with ease.

## Grid Basics

Understanding the fundamental concepts of grid containers and grid items.

## Advanced Grid Techniques

Explore advanced features like grid areas, implicit grids, and subgrid.

## Real-world Examples

See how CSS Grid can solve common layout challenges in web development.`,
    author: "Mike Rodriguez",
    date: "2024-01-05",
    tags: ["CSS", "Grid", "Layout", "Web Design"],
    readTime: "10 min read",
    type: 'blog'
  }
];

export const projects: Project[] = [
  {
    id: "ai-chat-application",
    title: "AI-Powered Chat Application",
    description: "A real-time chat application with AI assistant integration, built with React, Node.js, and OpenAI API.",
    content: `# AI-Powered Chat Application

This project demonstrates the integration of artificial intelligence into a real-time chat application.

## Features

- Real-time messaging with WebSocket
- AI assistant powered by OpenAI GPT
- User authentication and authorization
- Message history and search
- Responsive design for all devices

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB
- **AI**: OpenAI GPT-4 API
- **Authentication**: JWT tokens

## Key Learnings

Building this application taught me about real-time communication, AI integration, and scalable architecture patterns.

## Future Enhancements

- Voice message support
- File sharing capabilities
- Advanced AI personas
- Multi-language support`,
    technologies: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
    date: "2024-01-20",
    status: "completed",
    demoUrl: "https://ai-chat-demo.vercel.app",
    githubUrl: "https://github.com/username/ai-chat-app",
    type: 'project'
  },
  {
    id: "e-commerce-platform",
    title: "Modern E-commerce Platform",
    description: "A full-stack e-commerce platform with advanced features like inventory management, payment processing, and analytics.",
    content: `# Modern E-commerce Platform

A comprehensive e-commerce solution built with modern web technologies.

## Core Features

- Product catalog with advanced filtering
- Shopping cart and checkout process
- Payment integration with Stripe
- User accounts and order history
- Admin dashboard for inventory management
- Real-time analytics and reporting

## Architecture

Built using a microservices architecture for scalability and maintainability.

## Challenges Overcome

- Implementing secure payment processing
- Building scalable inventory management
- Creating responsive design for all devices
- Optimizing performance for large product catalogs`,
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    date: "2024-01-12",
    status: "in-progress",
    githubUrl: "https://github.com/username/ecommerce-platform",
    type: 'project'
  },
  {
    id: "data-visualization-dashboard",
    title: "Interactive Data Visualization Dashboard",
    description: "A powerful dashboard for visualizing complex datasets with interactive charts and real-time updates.",
    content: `# Interactive Data Visualization Dashboard

This project focuses on creating intuitive and interactive data visualizations.

## Visualization Types

- Line charts for time series data
- Bar charts for categorical comparisons
- Heat maps for correlation analysis
- Geographic maps for location-based data
- Custom interactive components

## Technical Highlights

- Real-time data updates via WebSocket
- Efficient data processing with Web Workers
- Responsive design with CSS Grid
- Accessibility features for screen readers

## Data Sources

Integration with multiple data sources including APIs, CSV files, and databases.`,
    technologies: ["React", "D3.js", "Python", "FastAPI", "WebSocket"],
    date: "2024-01-08",
    status: "completed",
    demoUrl: "https://data-viz-dashboard.netlify.app",
    githubUrl: "https://github.com/username/data-viz-dashboard",
    type: 'project'
  }
];

export const allContent: ContentItem[] = [...blogPosts, ...projects];

export const getContentById = (id: string): ContentItem | undefined => {
  return allContent.find(item => item.id === id);
};

export const getContentByType = (type: 'blog' | 'project'): ContentItem[] => {
  return allContent.filter(item => item.type === type);
};

export const searchContent = (query: string): ContentItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return allContent.filter(item => {
    const title = item.title.toLowerCase();
    const description = item.type === 'blog' ? item.excerpt : item.description;
    const tags = item.type === 'blog' ? item.tags : item.technologies;
    
    return title.includes(lowercaseQuery) ||
           description.toLowerCase().includes(lowercaseQuery) ||
           tags.some(tag => tag.toLowerCase().includes(lowercaseQuery));
  });
};