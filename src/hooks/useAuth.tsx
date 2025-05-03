
// Re-export useLocalAuth and its Provider for backwards compatibility
import { useLocalAuth, LocalAuthProvider } from './useLocalAuth';

export const useAuth = useLocalAuth;
export const AuthProvider = LocalAuthProvider;
