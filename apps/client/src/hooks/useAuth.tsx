'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { UserProfile, LoginDto, RegisterDto } from '@/lib/api/types';
import { authAdapter } from '@/lib/api/auth.adapter';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  login: (data: LoginDto) => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const loadUser = useCallback(async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const profile = await authAdapter.me();
      setUser(profile);
    } catch (err) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = async (data: LoginDto) => {
    const res = await authAdapter.login(data);
    if (typeof window !== 'undefined') {
      // TODO(security-HAUT): JWTs in localStorage are vulnerable to XSS — any script on the page
      // can exfiltrate them. Recommended migration to httpOnly cookies:
      //   Backend: return Set-Cookie headers (httpOnly, secure, sameSite=strict) from POST /auth/login
      //   and POST /auth/refresh instead of JSON tokens.
      //   Frontend: remove all localStorage.setItem/getItem('access_token'/'refresh_token') calls.
      //   Add credentials: 'include' to all fetch/axios requests.
      //   Affected files: useAuth.tsx, lib/api.ts, lib/api/client.ts, hooks/useSocket.ts,
      //   hooks/useChat.ts, components/creator/CreatorProfileClient.tsx, components/live/LiveClient.tsx
      localStorage.setItem('access_token', res.accessToken);
      localStorage.setItem('refresh_token', res.refreshToken);
    }
    setUser(res.user);
    router.push('/feed');
  };

  const register = async (data: RegisterDto) => {
    const res = await authAdapter.register(data);
    if (typeof window !== 'undefined') {
      // TODO(security-HAUT): see login() comment above for httpOnly cookie migration plan
      localStorage.setItem('access_token', res.accessToken);
      localStorage.setItem('refresh_token', res.refreshToken);
    }
    setUser(res.user);
    router.push('/feed');
  };

  const logout = async () => {
    try {
      await authAdapter.logout();
    } finally {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
      setUser(null);
      router.push('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
