type GetUserType = (params: { variables: { userToken: string } }) => Promise<any>;
type DispatchType = (action: any) => void;
type SetCurrentUserType = (user: any) => void;

export const fetchUserHandler = async (
  getUser: GetUserType,
  dispatch: DispatchType,
  setCurrentUser: SetCurrentUserType
): Promise<void> => {
  try {
    const response = await fetch(
      "https://alzheimer-care.netlify.app/.netlify/functions/cookie-function",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const { accessToken }: { accessToken: string } = await response.json();

      if (accessToken) {
        const response = await getUser({
          variables: {
            userToken: accessToken,
          },
        });

        if (response.data && response.data.user) {
          dispatch(setCurrentUser(response.data.user));
        }
      } else {
        async function deleteCookie() {
          try {
            await fetch("https://alzheimer-care.netlify.app/.netlify/functions/cookie-function", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
          } catch (error) {
            console.error("Error occurred while deleting cookie:", error);
          }
        }
        deleteCookie();
      }
    } else {
      console.error("Failed to retrieve accessToken:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
