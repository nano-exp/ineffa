'use client';

import { useState, useEffect, useCallback } from 'react';
import type { StatusState, GatewayData, SessionData, AgentsData, HeartbeatData, OSData } from '@/lib/types';

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
    setState(prev => ({
      ...prev,
      loaded: new Set(),
      error: null,
      updatedAt: null,
    }));

    try {
      const response = await fetch('/api/status');
      const reader = response.body?.getReader();
      
      if (!reader) {
        throw new Error('Failed to get stream reader');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.trim()) continue;
          
          try {
            const chunk = JSON.parse(line);
            
            setState(prev => {
              const newLoaded = new Set(prev.loaded);
              newLoaded.add(chunk.type);
              
              return {
                ...prev,
                loaded: newLoaded,
                [chunk.type === 'os' ? 'os' : 
                  chunk.type === 'complete' ? prev : chunk.type]: 
                  chunk.type === 'complete' ? prev : chunk.data,
                ...(chunk.type === 'complete' && { updatedAt: new Date().toISOString() }),
                ...(chunk.type === 'error' && { error: chunk.message }),
              };
            });
          } catch (e) {
            console.error('Failed to parse chunk:', line);
          }
        }
      }
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
