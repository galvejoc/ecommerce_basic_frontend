const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';

export async function registerUser(data: any) {
  try {
    const result = await fetch(`${BACKEND_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return result;
  } catch (error) {
    throw new Error();
  }
}

export async function getUser() {
  try {
    const result = await fetch(`${BACKEND_URL}/api/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}