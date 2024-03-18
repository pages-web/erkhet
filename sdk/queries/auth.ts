import { queries } from '../graphql/auth';
import { getClient } from '../ssClient';

export const getConfig = async () => {
  const { data, error } = await getClient().query({
    query: queries.currentConfig
  });
  const { currentConfig } = data || {};

  return { config: currentConfig, error_msg: error?.message };
};
