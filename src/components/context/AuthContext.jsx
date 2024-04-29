import { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange, signInWithGoogle, signOutWithGoogle } from '../../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user)
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider value={{ user, signInWithGoogle, signOutWithGoogle }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
