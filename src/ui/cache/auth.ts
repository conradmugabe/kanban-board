import { useMutation, useQuery } from "@tanstack/react-query";
import { useToken } from "../context/tokenContext";
import { useUseCases } from "../context/useCasesContext";
import { useUser } from "../context/userContext";

export const useAuth = () => {
  const { authUseCases } = useUseCases();
  const { setToken } = useToken();
  const { setUser } = useUser();

  const useLoginWithProvider = () => {
    const { mutate, isLoading, isError, isSuccess } = useMutation({
      mutationFn: authUseCases.loginWithProvider,
      onSuccess: ({ token, user }) => {
        setToken(token);
        setUser(user);
      },
    });
    return { mutate, isLoading, isError, isSuccess };
  };

  const useCurrentUser = () => {
    const { isLoading } = useQuery({
      queryFn: authUseCases.getCurrentUser,
      onSuccess: (user) => {
        setUser(user);
      },
      refetchOnWindowFocus: false,
    });
    return { isLoading };
  };

  const useLogout = () => {
    const { mutate, isLoading, isError, isSuccess } = useMutation({
      mutationFn: authUseCases.logout,
    });
    return { mutate, isLoading, isError, isSuccess };
  };

  return { useLoginWithProvider, useCurrentUser, useLogout };
};
