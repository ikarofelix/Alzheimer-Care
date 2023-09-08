import { AuthPage } from "./pages/auth/auth-page";
import { useLazyQuery } from "@apollo/client";
import { USER_DASHBOARD_QUERY } from "./queries/queries";
import { useState, useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setCurrentUser } from "./redux/user/user-slice";
import { DashboardPage } from "./pages/dashboard/dashboard-page";
import { LoaderComponent } from "./components/loader/loader-component";
import { fetchUserHandler } from "./handlers/fetch-user";

function App() {
  const dispatch = useAppDispatch();
  const [getUser, { loading, data }] = useLazyQuery(USER_DASHBOARD_QUERY);
  const [renderAuth, setRenderAuth] = useState(false);

  useEffect(() => {
    fetchUserHandler(getUser, dispatch, setCurrentUser)
      .then(() => {
        if (!data && !loading) {
          setRenderAuth(true);
        } else if (loading || data) {
          setRenderAuth(false);
        }
      })
      .catch((error) => {
        console.error("Error loading user data:", error);
      });
  }, [loading]);

  return (
    <>
      {loading && <LoaderComponent />}
      {renderAuth && <AuthPage />}
      {data && <DashboardPage />}
    </>
  );
}

export default App;
