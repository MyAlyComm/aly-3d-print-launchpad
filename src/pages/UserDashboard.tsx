
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Settings, BookOpen, CreditCard } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { UserProfile } from "@/components/user-dashboard/UserProfile";
import { UserSubscriptions } from "@/components/user-dashboard/UserSubscriptions";
import { UserPurchases } from "@/components/user-dashboard/UserPurchases";
import { UserSettings } from "@/components/user-dashboard/UserSettings";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  
  if (!user) {
    navigate("/auth");
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
          <p className="text-gray-500 mt-2">
            Manage your profile, subscriptions, and purchases
          </p>
        </header>
        
        <Card className="border-none shadow-sm">
          <CardHeader className="bg-white border-b border-gray-100 rounded-t-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Hello, {user.email?.split('@')[0] || 'there'}</CardTitle>
                <CardDescription>
                  Member since {new Date(user.created_at || Date.now()).toLocaleDateString()}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="profile" className="data-[state=active]:bg-white">
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="subscriptions" className="data-[state=active]:bg-white">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Subscriptions</span>
                </TabsTrigger>
                <TabsTrigger value="purchases" className="data-[state=active]:bg-white">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">My Purchases</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-white">
                  <Settings className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <CardContent className="p-0">
              <TabsContent value="profile" className="m-0 p-6">
                <UserProfile user={user} />
              </TabsContent>
              <TabsContent value="subscriptions" className="m-0 p-6">
                <UserSubscriptions user={user} />
              </TabsContent>
              <TabsContent value="purchases" className="m-0 p-6">
                <UserPurchases user={user} />
              </TabsContent>
              <TabsContent value="settings" className="m-0 p-6">
                <UserSettings user={user} />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
