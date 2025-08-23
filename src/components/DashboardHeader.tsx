import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { 
  Bell, 
  User, 
  LogOut, 
  Settings, 
  Crown,
  CheckCircle,
  Info,
  AlertTriangle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DashboardHeaderProps {
  sidebarCollapsed?: boolean;
}

const DashboardHeader = ({ sidebarCollapsed = false }: DashboardHeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out.",
      });
      navigate('/');
    }
  };

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'App Approved',
      message: 'Your app "TaskManager Pro" has been approved and is now live!',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'info',
      title: 'Analytics Update',
      message: 'Your weekly analytics report is ready to view.',
      time: '1 day ago',
      read: true
    },
    {
      id: 3,
      type: 'warning',
      title: 'Plan Limit',
      message: 'You\'re approaching your Free plan limit. Consider upgrading.',
      time: '2 days ago',
      read: false
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default: return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 right-0 h-16 bg-card/95 backdrop-blur-xl border-b border-caldera-border z-30 transition-all duration-300 ${
        sidebarCollapsed ? 'left-16' : 'left-64'
      }`}
    >
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - could be breadcrumbs or page title */}
        <div className="flex items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold font-montserrat"
          >
            Dashboard
          </motion.h1>
        </div>

        {/* Right side - Profile and Notifications */}
        <div className="flex items-center space-x-3">
          {/* Notifications Dropdown */}
          <DropdownMenu open={notificationOpen} onOpenChange={setNotificationOpen}>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative p-2 hover:bg-white/10"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs text-white font-medium">
                        {unreadCount}
                      </span>
                    </motion.div>
                  )}
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-card/95 backdrop-blur-xl border-caldera-border">
              <div className="p-3 border-b border-caldera-border">
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-sm text-caldera-text-secondary">
                  You have {unreadCount} unread notifications
                </p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DropdownMenuItem className="p-4 cursor-pointer hover:bg-white/5">
                      <div className="flex items-start space-x-3 w-full">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium truncate">
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0 ml-2" />
                            )}
                          </div>
                          <p className="text-xs text-caldera-text-secondary hover:text-black mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-caldera-text-secondary hover:text-black mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    {index < notifications.length - 1 && (
                      <div className="border-b border-caldera-border/50" />
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="p-3 border-t border-caldera-border">
                <Button variant="ghost" size="sm" className="w-full text-sm">
                  Mark all as read
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Dropdown */}
          <DropdownMenu open={profileOpen} onOpenChange={setProfileOpen}>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 p-2 hover:bg-white/10"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">
                      {user?.email?.split('@')[0] || 'User'}
                    </p>
                    <p className="text-xs text-caldera-text-secondary">
                      {user?.email}
                    </p>
                  </div>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-xl border-caldera-border">
              <div className="p-3 border-b border-caldera-border">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {user?.email?.split('@')[0] || 'User'}
                    </p>
                    <p className="text-sm text-caldera-text-secondary">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
              
              <DropdownMenuItem 
                onClick={() => navigate('/dashboard?tab=profile')}
                className="font-montserrat cursor-pointer"
              >
                <User className="h-4 w-4 mr-2" />
                Profile Settings
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={() => navigate('/dashboard?tab=settings')}
                className="font-montserrat cursor-pointer"
              >
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={() => navigate('/pricing')}
                className="font-montserrat cursor-pointer"
              >
                <Crown className="h-4 w-4 mr-2" />
                Upgrade Plan
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem 
                onClick={handleSignOut}
                className="font-montserrat cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
