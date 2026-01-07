import { useEffect } from "react";
import { useAppAuth0 } from "@core/hooks/useAppAuth0";
import { apiClient } from "./api-client";

/**
 * Hook to initialize API client with Auth0 token getter
 * Should be called once at the app root level
 */
export const useApiAuth = () => {
  const { getToken, isAuthenticated } = useAppAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      // Set the token getter function in the API client
      apiClient.setTokenGetter(async () => {
        try {
          return await getToken();
        } catch (error) {
          console.error("Failed to get token from Auth0:", error);
          return null;
        }
      });
    }
  }, [isAuthenticated, getToken]);
};
