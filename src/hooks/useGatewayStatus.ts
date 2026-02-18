'use client';

import { useState, useEffect, useCallback } from 'react';
import type { StatusState } from '@/lib/types';

const initialState: StatusState = {
  loaded: new Set(),
  gateway: null,
  sessions: null,
  channels: null,
  agents: null,
  heartbeat: null,
  os: null,
  error: null,
  updatedAt: null,
};

interface UseGatewayStatusReturn {
  state: StatusState;
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
}

export function useGatewayStatus(autoFetch = true): UseGatewayStatusReturn {
  const [state, setState] = useState<StatusState>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStatus = useCallback(async () => {
    setIsLoading(true);
    setState(initialState);

    try {
      const response = await fetch('/api/status');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json() as Record<string, any>;
      
      if (data.error) {
        throw new Error(data.error);
      }

      setState({
        loaded: new Set(['gateway', 'sessions', 'agents', 'heartbeat', 'os']),
        gateway: data.gateway,
        sessions: data.sessions,
        channels: data.channels || null,
        agents: data.agents,
        heartbeat: data.heartbeat,
        os: data.os,
        error: null,
        updatedAt: data.updatedAt,
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: err instanceof Error ? err.message : 'Unknown error',
      }));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoFetch) {
      fetchStatus();
    }
  }, [autoFetch, fetchStatus]);

  return {
    state,
    isLoading,
    error: state.error,
    refresh: fetchStatus,
  };
}
