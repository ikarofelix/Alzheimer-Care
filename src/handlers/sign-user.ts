export const signInUserHandler = async (accessToken: string): Promise<void> => {
  const requestBody = { value: accessToken };
  try {
    const response = await fetch(
      "https://alzheimer-care.netlify.app/.netlify/functions/cookie-function",
      {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      window.location.reload();
    }
  } catch (err) {
    console.error("Fetch Error:", err as Error);
    alert("Ocorreu um erro. Tente novamente.");
  }
};

export const signOutUserHandler = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://alzheimer-care.netlify.app/.netlify/functions/cookie-function",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      window.location.reload();
    }
  } catch (err) {
    console.error("Fetch Error:", err as Error);
    alert("Ocorreu um erro. Tente novamente.");
  }
};
