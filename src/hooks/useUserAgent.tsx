import { useContext, useMemo } from 'react';
import UserAgentContexts from '../contexts/UserAgentContext';

const useUserAgent = () => {
  const { agent } = useContext(UserAgentContexts);

  return useMemo(
    () => ({
      agent,
      browser: agent?.browser ?? null,
      os: agent?.os ?? null,
      isMobile: agent?.isMobile ?? false,
    }),
    [agent],
  );
};

export default useUserAgent;
