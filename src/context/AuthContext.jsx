import React, {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("bookVibeUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  // ==============================
  // LOGIN
  // ==============================

  const login = (userData) => {

    localStorage.setItem(
      "bookVibeUser",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  // ==============================
  // LOGOUT
  // ==============================

  const logout = () => {

    localStorage.removeItem("bookVibeUser");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {

  return useContext(AuthContext);

};