'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import * as authService from '../lib/auth';
import { getUser, User } from '../lib/firestore';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: User | null;
  isLoading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<User | null>;
  signIn: (email: string, password: string) => Promise<FirebaseUser>;
  signInWithGoogle: () => Promise<FirebaseUser>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = authService.onUserStateChanged(async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Fetch the user profile from Firestore
        try {
          const userDoc = await getUser(user.uid);
          setUserProfile(userDoc);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        setUserProfile(null);
      }
      
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    isLoading,
    signUp: authService.signUp,
    signIn: authService.signIn,
    signInWithGoogle: authService.signInWithGoogle,
    signOut: authService.signOut,
    resetPassword: authService.resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}; 