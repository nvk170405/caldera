import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Upload,
  BarChart3,
  Settings,
  User,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Crown,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DashboardSidebarProps {
  currentPlan?: string;
}

const DashboardSidebar = ({ currentPlan = 'Free' }: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getPlanIcon = (plan: string) => {
    switch (plan) {
      case 'Pro': return <Zap className="h-3 w-3" />;
      case 'Enterprise': return <Crown className="h-3 w-3" />;
      default: return <Star className="h-3 w-3" />;
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Pro': return 'from-primary to-primary-glow';
      case 'Enterprise': return 'from-purple-500 to-pink-500';
      default: return 'from-slate-500 to-gray-500';
    }
  };

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      tab: 'apps'
    },
    {
      name: 'Submit App',
      icon: Upload,
      href: '/dashboard',
      tab: 'submit'
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      href: '/dashboard',
      tab: 'analytics'
    },
    {
      name: 'Settings',
      icon: Settings,
      href: '/dashboard',
      tab: 'settings'
    },
    {
      name: 'Profile',
      icon: User,
      href: '/dashboard',
      tab: 'profile'
    },
    {
      name: 'Support',
      icon: HelpCircle,
      href: '/dashboard',
      tab: 'support'
    }
  ];

  const isActive = (item: any) => {
    const urlParams = new URLSearchParams(location.search);
    const currentTab = urlParams.get('tab') || 'apps';
    return currentTab === item.tab;
  };

  const handleNavigation = (item: any) => {
    navigate(`${item.href}?tab=${item.tab}`);
  };

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 top-0 h-full bg-card/95 backdrop-blur-xl border-r border-caldera-border z-40 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-caldera-border">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center space-x-2"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center"
                >
                  <span className="text-sm font-bold text-primary-foreground font-montserrat">C</span>
                </motion.div>
                <span className="font-bold text-lg font-montserrat text-primary">Caldera</span>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 hover:bg-white/10"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Plan Badge */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4"
          >
            <Badge 
              variant="outline" 
              className={`w-full justify-center bg-gradient-to-r ${getPlanColor(currentPlan)} text-white border-none px-3 py-2`}
            >
              {getPlanIcon(currentPlan)}
              <span className="ml-2">{currentPlan} Plan</span>
            </Badge>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item, index) => (
          <motion.button
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation(item)}
            className={`w-full flex items-center px-3 py-3 rounded-lg text-left transition-all duration-200 ${
              isActive(item)
                ? 'bg-primary/20 text-primary border-r-2 border-primary'
                : 'text-foreground hover:text-primary hover:bg-white/5'
            }`}
          >
            <item.icon className={`h-5 w-5 flex-shrink-0 ${isCollapsed ? '' : 'mr-3'}`} />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-medium font-montserrat"
                >
                  {item.name}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </nav>

      {/* Upgrade Section */}
      <AnimatePresence>
        {!isCollapsed && currentPlan === 'Free' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="p-4 border-t border-caldera-border"
          >
            <div className="bg-gradient-to-r from-primary/20 to-primary-glow/10 rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">Upgrade to Pro</h3>
              <p className="text-xs text-caldera-text-secondary mb-3">
                Unlock advanced analytics and more apps
              </p>
              <Button
                size="sm"
                onClick={() => navigate('/pricing')}
                className="w-full bg-gradient-primary text-primary-foreground"
              >
                Upgrade Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DashboardSidebar;
