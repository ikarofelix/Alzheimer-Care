exports.handler = async (event, _) => {
  if (event.httpMethod === "GET") {
    const cookies = event.headers.cookie || "";
    const accessTokenCookie = cookies
      .split(";")
      .find((cookie) => cookie.trim().startsWith("accessToken="));

    const accessToken = accessTokenCookie ? accessTokenCookie.split("=")[1] : "";

    const response = {
      statusCode: 200,
      body: JSON.stringify({ accessToken }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    return response;
  }

  if (event.httpMethod === "DELETE") {
    const response = {
      statusCode: 200,
      headers: {
        "Set-Cookie":
          "accessToken=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; HttpOnly; SameSite=Strict; Path=/",
      },
    };

    return response;
  }

  const requestBody = JSON.parse(event.body);

  const { value } = requestBody;

  const response = {
    statusCode: 200,
    headers: {
      "Set-Cookie": `accessToken=${value}; Max-Age=86400; Secure; HttpOnly; SameSite=Strict; Path=/`,
    },
  };

  return response;
};
