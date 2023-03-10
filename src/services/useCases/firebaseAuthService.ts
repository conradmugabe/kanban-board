import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { User } from "../../core/entities/User";
import { AuthService } from "./authService";

export class FirebaseAuthService implements AuthService {
  private Providers: Record<string, FirebaseAuthService.Provider> = {
    google: GoogleAuthProvider,
    facebook: FacebookAuthProvider,
  };

  private constructUserObject = (user: FirebaseUser): User => ({
    id: user.uid,
    name: user.displayName || "",
    email: user.email || "",
    profilePicture: user.photoURL || "",
  });

  loginWithProvider = async (
    props: AuthService.LoginWithProviderRequest
  ): Promise<AuthService.LoginWithProviderResponse> => {
    const Provider = this.Providers[props.provider];
    const userCredentials = await signInWithPopup(auth, new Provider());
    const credential = Provider.credentialFromResult(userCredentials);
    const token = credential?.accessToken || "";
    const user = this.constructUserObject(userCredentials.user);
    return { token, user };
  };

  getCurrentUser = async (): Promise<User> => {
    const errorMessage = "Please login to continue";
    onAuthStateChanged(auth, (user) => {
      if (user === null) throw new Error(errorMessage);
    });
    const user = auth.currentUser;
    if (user === null) throw new Error(errorMessage);
    return this.constructUserObject(user);
  };

  logout = async (): Promise<void> => {
    await signOut(auth);
  };
}
// @typescript-eslint/no-namespace
namespace FirebaseAuthService {
  export type Provider =
    | typeof GoogleAuthProvider
    | typeof FacebookAuthProvider;
}
