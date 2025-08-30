import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentCard from '@/components/ContentCard';
import { searchContent, allContent } from '@/data/posts';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState(allContent);

  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    
    if (query.trim()) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults(allContent);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const blogResults = results.filter(item => item.type === 'blog');
  const projectResults = results.filter(item => item.type === 'project');

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Search Results</h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search posts and projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                size="sm"
              >
                Search
              </Button>
            </div>
          </form>
        </div>

        {/* Results */}
        {searchQuery && (
          <div className="mb-8">
            <p className="text-lg text-muted-foreground">
              {results.length > 0 ? (
                <>Found <span className="font-semibold text-foreground">{results.length}</span> results for "<span className="font-semibold text-foreground">{searchQuery}</span>"</>
              ) : (
                <>No results found for "<span className="font-semibold text-foreground">{searchQuery}</span>"</>
              )}
            </p>
          </div>
        )}

        {results.length > 0 ? (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="all">All ({results.length})</TabsTrigger>
              <TabsTrigger value="blog">Blog ({blogResults.length})</TabsTrigger>
              <TabsTrigger value="projects">Projects ({projectResults.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="blog">
              {blogResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogResults.map((item) => (
                    <ContentCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No blog posts match your search.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="projects">
              {projectResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectResults.map((item) => (
                    <ContentCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No projects match your search.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        ) : searchQuery ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground mb-6">
              Try searching with different keywords or browse our content below
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <a href="/blog">Browse Blog Posts</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/projects">Browse Projects</a>
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">Start your search</h3>
            <p className="text-muted-foreground">
              Enter a keyword above to find relevant blog posts and projects
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;