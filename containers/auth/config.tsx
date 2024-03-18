import ConfigProvider from '@/components/layouts/config';
import { getConfig } from '@/sdk/queries/auth';

const Config = async ({ children }: React.PropsWithChildren) => {
  return <ConfigProvider config={config}>{children}</ConfigProvider>;
};

export default Config;
