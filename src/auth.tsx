import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export const AuthError = new Error("Not logged in");

export type AuthContext = {
  login: (apikey: string) => void;
  logout: () => void;
} & AuthContextState;

export type AuthContextState = {
  isAuthenticated: boolean;
  email?: string;
};

export const AuthContext = createContext<AuthContext>(null!);

export function AuthProvider(props: { children: ReactNode }) {
  const [state, setState] = useState<AuthContextState>({
    isAuthenticated: false,
  });

  const login = (email: string) => {
    setState({ isAuthenticated: true, email: email });
  };

  const logout = () => {
    setState({ isAuthenticated: false, email: undefined });
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      login,
      logout,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={contextValue} children={props.children} />
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
