const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';

export async function loginUser(data: any) {
  try {
    const result = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    return result;
  } catch (error) {
    throw new Error();
  }
}

export async function logoutUser() {
  try {
    await fetch(`${BACKEND_URL}/api/auth/logout`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
  } catch (error) {
    throw new Error()
  }
}