import { useMemo } from 'react';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithRedirect, signOut } from 'firebase/auth';

import { firebaseConfig } from '@/constants/authConfig';

export const useAuth = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    hd: 'sios.com',
  });

  const signInAction = () => {
    signInWithRedirect(auth, provider).catch((err) => {
      alert(err);
    });
  };
  const singOutAction = () => {
    signOut(auth);
  };
  // const uid: string = useMemo(() => (auth.currentUser ? auth.currentUser.uid : ''), [auth]);
  const uid = '3E8620E8-BA38-1407-AC2D-AFC36AEAECF0';

  const user = useMemo(() => auth.currentUser, [auth]);

  return { auth, signInAction, singOutAction, uid, user };
};
