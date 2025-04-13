'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from '@/components/AuthForm';
import { useAuth } from '@/context/AuthContext';

export default function SignupPage() {
  const router = useRouter();
  const { currentUser } = useAuth();
  
  // If user is already logged in, redirect to dashboard
  React.useEffect(() => {
    if (currentUser) {
      router.push('/dashboard');
    }
  }, [currentUser, router]);
  
  const handleSignupSuccess = () => {
    router.push('/dashboard');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">CommonTable</h1>
          <p className="mt-2 text-gray-600">Create a new account</p>
        </div>
        
        <AuthForm onSuccess={handleSignupSuccess} defaultMode="signup" />
      </div>
    </div>
  );
} 