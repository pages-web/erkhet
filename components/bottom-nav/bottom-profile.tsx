import { usePathname } from 'next/navigation';
import { type LucideIcon } from 'lucide-react';
import { BottomNavItem } from './bottom-nav';
import { currentUserAtom } from '@/store/user.store';
import { useAtomValue } from 'jotai';

const BottomProfile = ({ Icon }: { Icon: LucideIcon }) => {
  const pathname = usePathname();
  const currentUser = useAtomValue(currentUserAtom);

  return (
    <BottomNavItem
      Icon={Icon}
      path={currentUser ? '/profile' : '/login'}
      pathname={pathname}
      label={currentUser ? 'Profile' : 'Login'}
    />
  );
};

export default BottomProfile;
