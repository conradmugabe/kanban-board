import { User } from "../core/entities/User";
import { AuthService } from "../services/useCases/authService";

export class AuthUseCases {
  constructor(private authService: AuthService) {}

  loginWithProvider = (
    props: AuthUseCases.LoginWithProviderRequest
  ): Promise<AuthUseCases.LoginWithProviderResponse> => {
    return this.authService.loginWithProvider(props);
  };

  getCurrentUser = (): Promise<User> => {
    return this.authService.getCurrentUser();
  };

  logout = (): Promise<void> => {
    return this.authService.logout();
  };
}

export namespace AuthUseCases {
  export type LoginWithProviderRequest = { provider: string };
  export type LoginWithProviderResponse = { user: User; token: string };
}
