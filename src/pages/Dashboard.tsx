import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import FloatingNavbar from '@/components/FloatingNavbar';
import { 
  Plus, 
  Upload, 
  Star, 
  BarChart3, 
  Users, 
  Zap, 
  Crown, 
  Globe, 
  Settings,
  Eye,
  Edit,
  Trash2,
  ExternalLink
} from 'lucide-react';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [apps, setApps] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [currentPlan] = useState('Free'); // This would come from user data
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    website: '',
    github: '',
    image: '',
    tags: ''
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmitApp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check plan limits
    const planLimits = {
      'Free': 1,
      'Pro': 10,
      'Enterprise': Infinity
    };

    if (apps.length >= planLimits[currentPlan as keyof typeof planLimits]) {
      toast({
        title: "Plan limit reached",
        description: `Your ${currentPlan} plan allows ${planLimits[currentPlan as keyof typeof planLimits]} app${planLimits[currentPlan as keyof typeof planLimits] === 1 ? '' : 's'}. Upgrade to submit more apps.`,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newApp = {
        id: Date.now(),
        ...formData,
        status: 'pending',
        createdAt: new Date().toISOString(),
        views: 0,
        likes: 0
      };

      setApps(prev => [newApp, ...prev]);
      setFormData({
        name: '',
        description: '',
        category: '',
        website: '',
        github: '',
        image: '',
        tags: ''
      });
      setShowSubmitDialog(false);

      toast({
        title: "App submitted successfully!",
        description: "Your app is now under review and will be live soon.",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case 'Pro': return <Zap className="h-4 w-4" />;
      case 'Enterprise': return <Crown className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Pro': return 'from-primary to-primary-glow';
      case 'Enterprise': return 'from-purple-500 to-pink-500';
      default: return 'from-slate-500 to-gray-500';
    }
  };

  const categories = [
    'Productivity', 'Entertainment', 'Education', 'Social', 'Business', 
    'Health', 'Finance', 'Travel', 'Photography', 'Games', 'Utilities', 'Other'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <FloatingNavbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Welcome back, {user.email?.split('@')[0]}!
                </h1>
                <p className="text-xl text-caldera-text-secondary">
                  Manage your apps and grow your audience
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-6 md:mt-0">
                <Badge variant="outline" className={`bg-gradient-to-r ${getPlanColor(currentPlan)} text-white border-none px-4 py-2`}>
                  {getPlanIcon(currentPlan)}
                  <span className="ml-2">{currentPlan} Plan</span>
                </Badge>
                <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
                      <Plus className="h-4 w-4 mr-2" />
                      Submit App
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Submit Your App</DialogTitle>
                      <DialogDescription>
                        Fill out the form below to submit your app for review.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitApp} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">App Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter app name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map(category => (
                                <SelectItem key={category} value={category.toLowerCase()}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Describe your app..."
                          className="min-h-[100px]"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="website">Website URL *</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleInputChange}
                            placeholder="https://your-app.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="github">GitHub URL (optional)</Label>
                          <Input
                            id="github"
                            name="github"
                            type="url"
                            value={formData.github}
                            onChange={handleInputChange}
                            placeholder="https://github.com/username/repo"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="image">App Screenshot URL *</Label>
                        <Input
                          id="image"
                          name="image"
                          type="url"
                          value={formData.image}
                          onChange={handleInputChange}
                          placeholder="https://example.com/screenshot.png"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="tags">Tags (comma-separated)</Label>
                        <Input
                          id="tags"
                          name="tags"
                          value={formData.tags}
                          onChange={handleInputChange}
                          placeholder="web app, productivity, react"
                        />
                      </div>
                      
                      <div className="flex justify-end gap-4">
                        <Button type="button" variant="outline" onClick={() => setShowSubmitDialog(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting} className="bg-gradient-primary">
                          {isSubmitting ? "Submitting..." : "Submit App"}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>

          <Tabs defaultValue="apps" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="apps">My Apps</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="apps" className="space-y-6">
              {/* Stats Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                <Card className="glass-effect border-caldera-border">
                  <CardHeader className="flex flex-row items-center justify-between pb-3">
                    <CardTitle className="text-sm font-medium">Total Apps</CardTitle>
                    <Upload className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{apps.length}</div>
                    <p className="text-xs text-caldera-text-secondary">
                      {currentPlan === 'Free' ? `${1 - apps.length} remaining` : currentPlan === 'Pro' ? `${10 - apps.length} remaining` : 'Unlimited'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-caldera-border">
                  <CardHeader className="flex flex-row items-center justify-between pb-3">
                    <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                    <Eye className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0</div>
                    <p className="text-xs text-caldera-text-secondary">All time</p>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-caldera-border">
                  <CardHeader className="flex flex-row items-center justify-between pb-3">
                    <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
                    <Star className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0</div>
                    <p className="text-xs text-caldera-text-secondary">All time</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Apps List */}
              {apps.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="text-center py-12 glass-effect border-caldera-border">
                    <CardContent>
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No apps yet</h3>
                      <p className="text-caldera-text-secondary mb-6">
                        Submit your first app to get started
                      </p>
                      <Button onClick={() => setShowSubmitDialog(true)} className="bg-gradient-primary">
                        <Plus className="h-4 w-4 mr-2" />
                        Submit Your First App
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {apps.map((app: any, index) => (
                    <motion.div
                      key={app.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="glass-effect border-caldera-border hover:shadow-elevated transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">{app.name}</CardTitle>
                              <CardDescription>{app.category}</CardDescription>
                            </div>
                            <Badge variant={app.status === 'approved' ? 'default' : 'secondary'}>
                              {app.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-caldera-text-secondary mb-4 line-clamp-2">
                            {app.description}
                          </p>
                          <div className="flex items-center justify-between text-sm text-caldera-text-secondary mb-4">
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {app.views}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1" />
                              {app.likes}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="text-center py-12 glass-effect border-caldera-border">
                  <CardContent>
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Analytics Coming Soon</h3>
                    <p className="text-caldera-text-secondary mb-6">
                      Detailed analytics will be available once you have submitted apps
                    </p>
                    {currentPlan === 'Free' && (
                      <Button variant="outline" onClick={() => navigate('/pricing')}>
                        Upgrade for Advanced Analytics
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-effect border-caldera-border">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Email</Label>
                      <Input value={user.email || ''} disabled className="mt-2" />
                    </div>
                    <div>
                      <Label>Current Plan</Label>
                      <div className="mt-2">
                        <Badge variant="outline" className={`bg-gradient-to-r ${getPlanColor(currentPlan)} text-white border-none`}>
                          {getPlanIcon(currentPlan)}
                          <span className="ml-2">{currentPlan} Plan</span>
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" onClick={() => navigate('/pricing')}>
                      Upgrade Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </motion.div>
  );
};

export default Dashboard;