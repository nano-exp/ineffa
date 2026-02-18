export interface GatewayData {
  running: boolean;
  mode: string;
  url: string;
  reachable: boolean;
  error?: string;
  service: {
    installed: boolean;
    runtime: string;
  };
}

export interface SessionData {
  total: number;
  recent: Array<{
    agentId: string;
    model: string;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
    percentUsed: number;
  }>;
}

export interface AgentsData {
  total: number;
  defaultId: string;
}

export interface HeartbeatData {
  enabled: boolean;
  interval: string;
}

export interface OSData {
  platform: string;
  arch: string;
  release: string;
}

export interface StatusState {
  loaded: Set<string>;
  gateway: GatewayData | null;
  sessions: SessionData | null;
  channels: string[] | null;
  agents: AgentsData | null;
  heartbeat: HeartbeatData | null;
  os: OSData | null;
  error: string | null;
  updatedAt: string | null;
}
