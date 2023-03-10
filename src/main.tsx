import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthUseCases } from "./useCases/authUseCases";
import { FirebaseAuthService } from "./services/useCases/firebaseAuthService";
import { UseCasesProvider } from "./ui/context/useCasesContext";
import { TokenProvider } from "./ui/context/tokenContext";
import App from "./App";
import { UserProvider } from "./ui/context/userContext";

const queryClient = new QueryClient();

const authService = new FirebaseAuthService();
const authUseCases = new AuthUseCases(authService);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UseCasesProvider useCases={{ authUseCases }}>
      <QueryClientProvider client={queryClient}>
        <TokenProvider>
          <UserProvider>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </UserProvider>
        </TokenProvider>
      </QueryClientProvider>
    </UseCasesProvider>
  </React.StrictMode>
);
