export async function request<T = any>(url: string, token: string) {
  const fet = await fetch(url, {
    headers: {
      token,
    },
  });
  const res = await fet.json();
  return res as T;
}
