import ProfileEdit from '@/components/profile/profile-edit/profile-edit';
import ProfileLayout from './profile-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LockIcon,
  LucideIcon,
  MailIcon,
  PhoneIcon,
  User2Icon,
} from 'lucide-react';
import ProfileTabsList from '@/components/profile/profile-tab-trigger';

const Profile = () => {
  return (
    <ProfileLayout
      title="Profile"
      description="edit your personal informations"
    >
      <Tabs defaultValue="info" className="w-full">
        <ProfileTabsList />

        <TabsContent value="info">
          <ProfileEdit />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </ProfileLayout>
  );
};

export default Profile;
