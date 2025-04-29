
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { toast } from "sonner";
import { AlertCircle, Trash } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/hooks/useAuth";

interface UserSettingsProps {
  user: User;
}

export const UserSettings = ({ user }: UserSettingsProps) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Account deletion states
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error("New passwords don't match");
      return;
    }
    
    setIsChangingPassword(true);
    
    try {
      // In a real implementation, we would verify the current password first
      // and then update the password with Supabase
      
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (error) throw error;
      
      toast.success("Password updated successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error("Failed to update password");
      console.error("Error updating password:", error);
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== user.email) {
      toast.error("Email confirmation does not match");
      return;
    }

    setIsDeleting(true);

    try {
      // Delete the user account - this will cascade to all related data
      // Use Supabase Functions.invoke instead of rpc
      const { error } = await supabase.functions.invoke('delete_user', {
        method: 'POST'
      });
      
      if (error) throw error;
      
      // Sign out the user
      await signOut();
      
      // Show success message and redirect
      toast.success("Your account has been deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Failed to delete account. Please try again later.");
      setIsDeleting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
        <p className="text-gray-500">Manage your account preferences and security</p>
      </div>
      
      <div className="grid gap-6">
        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Update your password and security settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isChangingPassword || !currentPassword || !newPassword || !confirmPassword}
              >
                {isChangingPassword ? "Updating..." : "Change Password"}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-gray-500">
                  Receive updates, offers, and news via email
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-gray-500 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              You can change your notification preferences at any time
            </p>
          </CardFooter>
        </Card>
        
        {/* Delete Account */}
        <Card className="border-red-100">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
            <CardDescription>
              Permanently delete your account and all associated data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              This action is irreversible. All your data will be permanently removed.
            </p>
            <Button 
              variant="destructive"
              onClick={() => setShowDeleteConfirm(true)}
              className="flex gap-2 items-center"
            >
              <Trash className="h-4 w-4" />
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Delete confirmation dialog */}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove all your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Label htmlFor="delete-confirmation" className="text-sm font-medium">
              Type your email <span className="font-semibold">{user.email}</span> to confirm:
            </Label>
            <Input 
              id="delete-confirmation"
              className="mt-2"
              placeholder={user.email}
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAccount}
              disabled={deleteConfirmation !== user.email || isDeleting}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isDeleting ? "Deleting..." : "Delete Account"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
