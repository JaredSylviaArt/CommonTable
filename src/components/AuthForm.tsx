import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

type AuthMode = 'login' | 'signup' | 'reset';

interface AuthFormProps {
  onSuccess?: () => void;
  defaultMode?: AuthMode;
}

const AuthForm: React.FC<AuthFormProps> = ({ 
  onSuccess, 
  defaultMode = 'login' 
}) => {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  
  const { signIn, signUp, signInWithGoogle, resetPassword } = useAuth();
  
  const validateForm = (): boolean => {
    setError(null);
    
    if (!email) {
      setError('Email is required');
      return false;
    }
    
    if (mode !== 'reset') {
      if (!password) {
        setError('Password is required');
        return false;
      }
      
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return false;
      }
    }
    
    if (mode === 'signup') {
      if (!name) {
        setError('Name is required');
        return false;
      }
      
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
    }
    
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError(null);
    setMessage(null);
    
    try {
      if (mode === 'login') {
        await signIn(email, password);
        if (onSuccess) onSuccess();
      } else if (mode === 'signup') {
        await signUp(email, password, name);
        if (onSuccess) onSuccess();
      } else if (mode === 'reset') {
        await resetPassword(email);
        setMessage('Password reset email sent. Check your inbox.');
        setMode('login');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await signInWithGoogle();
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message || 'An error occurred with Google sign in');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        {mode !== 'reset' && (
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}
        
        {mode === 'signup' && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}
        
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Processing...' : mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Sign Up' : 'Reset Password'}
          </button>
        </div>
      </form>
      
      <div className="mt-4">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 13.43c-.92 2.36-3.2 4.04-5.89 4.04-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51C13.83 9.44 12.73 9 11.5 9c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c2.11 0 3.87-1.47 4.33-3.43H11.5v-2h7.43c.14.63.22 1.28.22 1.96 0 1.77-.59 3.4-1.58 4.7z"
            />
          </svg>
          Continue with Google
        </button>
      </div>
      
      <div className="mt-4 text-center text-sm">
        {mode === 'login' ? (
          <>
            <button
              type="button"
              onClick={() => setMode('reset')}
              className="text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </button>
            <span className="mx-2">•</span>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className="text-indigo-600 hover:text-indigo-500"
            >
              Create account
            </button>
          </>
        ) : mode === 'signup' ? (
          <button
            type="button"
            onClick={() => setMode('login')}
            className="text-indigo-600 hover:text-indigo-500"
          >
            Already have an account? Sign in
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setMode('login')}
            className="text-indigo-600 hover:text-indigo-500"
          >
            Back to sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthForm; 