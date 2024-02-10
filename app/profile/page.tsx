import ProfileEdit from '@/components/profile-edit/profile-edit';
import ProfileLayout from './profile-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LockIcon,
  LucideIcon,
  MailIcon,
  PhoneIcon,
  User2Icon,
} from 'lucide-react';

const Profile = () => {
  const triggerClassName = 'flex-1 h-12 justify-start gap-2';

  return (
    <ProfileLayout title="Profile" description="edit your personal info">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="w-full h-16 p-0 gap-3 bg-white overflow-x-auto overflow-y-visible">
          <ProfileTabTrigger
            value="info"
            Icon={User2Icon}
            description="Baterdene"
          >
            Info
          </ProfileTabTrigger>
          <ProfileTabTrigger
            value="phone"
            Icon={PhoneIcon}
            description="Verified"
          >
            Phone
          </ProfileTabTrigger>
          <ProfileTabTrigger
            value="email"
            Icon={MailIcon}
            description="Verified"
          >
            Email
          </ProfileTabTrigger>
          <ProfileTabTrigger
            value="password"
            Icon={LockIcon}
            description="Change password"
          >
            Password
          </ProfileTabTrigger>
        </TabsList>
        <TabsContent value="info">
          <ProfileEdit />
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </ProfileLayout>
  );
};

const ProfileTabTrigger = ({
  value,
  children,
  Icon,
  description,
}: React.PropsWithChildren & {
  value: string;
  description: string;
  Icon: LucideIcon;
}) => {
  return (
    <TabsTrigger
      value={value}
      className="flex-1 h-16 py-3 px-4 justify-start gap-2 items-start border data-[state=active]:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:border-transparent transition-colors min-w-40"
    >
      <Icon className="h-5 w-5 mt-1" strokeWidth={1.7} />
      <div className="text-left">
        {children}
        <div className="text-xs opacity-70 mt-0.5">{description}</div>
      </div>
    </TabsTrigger>
  );
};

export default Profile;
