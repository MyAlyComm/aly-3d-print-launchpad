
// Re-export useLocalAuth as useAuth for backwards compatibility
import { useLocalAuth } from './useLocalAuth';

export const useAuth = useLocalAuth;
export const AuthProvider = useLocalAuth.Provider;
