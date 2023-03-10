import { lazy, Suspense } from "react";
import { useAuth } from "./ui/cache/auth";
import { useUser } from "./ui/context/userContext";
import FullPageSpinner from "./ui/components/compound/FullPageSpinner";
const AuthenticatedRouter = lazy(() => import("./ui/AuthenticatedRouter"));
const UnAuthenticatedRouter = lazy(() => import("./ui/UnAuthenticatedRouter"));

function App() {
  const { user } = useUser();
  const { useCurrentUser } = useAuth();
  const { isLoading } = useCurrentUser();

  if (isLoading) return <FullPageSpinner />;

  return user ? (
    <Suspense fallback={<FullPageSpinner />}>
      <AuthenticatedRouter />
    </Suspense>
  ) : (
    <Suspense fallback={<FullPageSpinner />}>
      <UnAuthenticatedRouter />
    </Suspense>
  );
}

export default App;
