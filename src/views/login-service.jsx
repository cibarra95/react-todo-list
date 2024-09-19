export async function login({ email, password }) {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    return data.token;
  }

  return null;
}
