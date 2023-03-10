import { User } from "../../core/entities/User";

export abstract class AuthService {
  abstract loginWithProvider(
    props: AuthService.LoginWithProviderRequest
  ): Promise<AuthService.LoginWithProviderResponse>;

  abstract getCurrentUser(): Promise<User>;

  abstract logout(): Promise<void>;
}

export namespace AuthService {
  export type LoginWithProviderRequest = { provider: string };
  export type LoginWithProviderResponse = { user: User; token: string };
}
