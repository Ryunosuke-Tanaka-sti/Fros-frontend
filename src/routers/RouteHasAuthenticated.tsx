import { useEffect, useState } from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';

import { useAuth } from '@/hooks/useAuth';
import { LoadingComponent } from '@/utilities/LoadingComponent';

type Props = {
  children: React.ReactNode;
};

export const RouteHasAuthenticated = (props: Props) => {
  const { children } = props;
  const { auth, signInAction } = useAuth();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (getAuthUser: User | null) => {
      if (getAuthUser == null) signInAction();
      setLoading(false);
    });
    return unsubscribe;
  });

  if (loading || auth.currentUser == null) return <LoadingComponent />;

  return <>{children}</>;
};
