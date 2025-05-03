
import { ProfileForm } from "./ProfileForm";

// Update the UserProfileProps to use a more generic User type
interface UserProfileProps {
  user: {
    id?: string;
    email?: string;
    created_at?: string;
    user_metadata?: Record<string, any>;
    [key: string]: any;
  };
}

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Profile Information</h2>
        <p className="text-gray-500">Update your profile information and social links</p>
      </div>
      
      <ProfileForm user={user} />
    </div>
  );
};
