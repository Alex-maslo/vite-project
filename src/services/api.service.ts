export const getData = async (usersUrl: string) => {
  const resp = await fetch(usersUrl);
  return await resp.json();
};
