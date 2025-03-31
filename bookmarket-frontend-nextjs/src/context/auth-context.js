"use client";

import { createContext, useContext, useState, useEffect } from "react";
import AuthService from "@/services/auth-service";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // ✅ la bonne importation

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (AuthService.isAuthenticated()) {
          const userData = await AuthService.getCurrentUser();
          setUser(userData);
        }
      } catch (error) {
        console.error("Erreur lors de l'initialisation de l'authentification", error);
        AuthService.logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await AuthService.login(email, password);
      setUser(response.user || { email });
      toast("Connexion réussie !");
      return { success: true };
    } catch (error) {
      console.error("Erreur de connexion", error);
      toast("Échec de la connexion : Identifiants incorrects");
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      await AuthService.register(userData);
      toast("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      return { success: true };
    } catch (error) {
      console.error("Erreur d'inscription", error);
      toast("Erreur lors de l'inscription !");
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    toast("Déconnexion réussie !");
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
