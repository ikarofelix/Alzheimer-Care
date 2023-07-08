import { AuthPage } from "./pages/auth/auth-page";
import { useQuery } from "@apollo/client";
import { USER_DASHBOARD_QUERY } from "./queries/queries";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setCurrentUser } from "./redux/user/user-slice";
import { DashboardPage } from "./pages/dashboard/dashboard-page";
import { LoaderComponent } from "./components/loader/loader-component";

function App() {
  const dispatch = useAppDispatch();

  const { loading, data } = useQuery(USER_DASHBOARD_QUERY);

  useEffect(() => {
    if (!loading && data) {
      dispatch(setCurrentUser(data.user));
    }
  }, [loading]);

  return (
    <div>
      {loading && <LoaderComponent />}
      {!loading && !data && <AuthPage />}
      {!loading && data && <DashboardPage />}
    </div>
  );
}

export default App;
