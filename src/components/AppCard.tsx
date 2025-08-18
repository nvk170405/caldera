import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, MessageCircle, Crown, ExternalLink } from "lucide-react";

interface AppCardProps {
  id: string;
  name: string;
  tagline: string;
  category: string;
  upvotes: number;
  comments: number;
  featured?: boolean;
  logo: string;
}

const AppCard = ({ 
  name, 
  tagline, 
  category, 
  upvotes, 
  comments, 
  featured = false,
  logo 
}: AppCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-caldera-border hover:border-primary/20 transition-all duration-300 hover:shadow-card transform hover:-translate-y-1">
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <Crown className="mr-1 h-3 w-3" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary p-0.5">
              <div className="h-full w-full rounded-xl bg-card flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{logo}</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-caldera-text-primary group-hover:text-primary transition-colors">
                {name}
              </h3>
              <Badge variant="secondary" className="bg-secondary/50 text-caldera-text-secondary text-xs">
                {category}
              </Badge>
            </div>
            
            <p className="text-sm text-caldera-text-secondary line-clamp-2 mb-4">
              {tagline}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 text-caldera-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <ArrowUp className="h-4 w-4" />
                  {upvotes}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1 text-caldera-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  {comments}
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-primary/10"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppCard;