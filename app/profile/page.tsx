import ProfileEdit from '@/components/profile/profile-edit/profile-edit';
import ProfileLayout from './profile-layout';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import ProfileTabsList from '@/components/profile/profile-tab-trigger';
import ChangePhone from '@/components/profile/profile-edit/change-phone';
import ChangeEmail from '@/components/profile/profile-edit/change-email';
import ChangePassword from '@/components/profile/profile-edit/change-password';

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
        <TabsContent value="password">
          <ChangePassword />
        </TabsContent>
        <TabsContent value="phone">
          <ChangePhone />
        </TabsContent>
        <TabsContent value="email">
          <ChangeEmail />
        </TabsContent>
      </Tabs>
    </ProfileLayout>
  );
};

export default Profile;
