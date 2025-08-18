import AppCard from "./AppCard";

const apps = [
  {
    id: "1",
    name: "TaskFlow Pro",
    tagline: "Revolutionary task management with AI-powered insights and team collaboration features",
    category: "Productivity",
    upvotes: 1247,
    comments: 89,
    featured: true,
    logo: "TF"
  },
  {
    id: "2", 
    name: "CodeSnap",
    tagline: "Beautiful code screenshots and sharing platform for developers worldwide",
    category: "Developer Tools",
    upvotes: 892,
    comments: 45,
    featured: false,
    logo: "CS"
  },
  {
    id: "3",
    name: "VoiceAI Writer",
    tagline: "Transform your voice recordings into polished articles using advanced AI technology",
    category: "AI Tools",
    upvotes: 1156,
    comments: 67,
    featured: true,
    logo: "VA"
  },
  {
    id: "4",
    name: "DesignSync",
    tagline: "Real-time design collaboration tool for remote teams with version control",
    category: "Design",
    upvotes: 734,
    comments: 32,
    featured: false,
    logo: "DS"
  },
  {
    id: "5",
    name: "CryptoTracker Plus",
    tagline: "Advanced cryptocurrency portfolio tracking with predictive analytics and alerts",
    category: "Finance",
    upvotes: 956,
    comments: 78,
    featured: false,
    logo: "CT"
  },
  {
    id: "6",
    name: "MindMap Studio",
    tagline: "Interactive mind mapping tool with collaborative features and export options",
    category: "Productivity",
    upvotes: 623,
    comments: 41,
    featured: false,
    logo: "MM"
  }
];

const AppDirectory = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-inter text-3xl font-bold sm:text-4xl">
            Discover Amazing Apps
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-caldera-text-secondary">
            Explore the latest and greatest apps from innovative developers around the world.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 px-6 py-3 text-sm font-medium transition-colors">
            Load More Apps
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDirectory;