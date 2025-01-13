export const getApiData = async () => {
  const data = await fetch("https://ajax.test-danit.com/api/swapi/films").then(
    (res) => res.json(),
  );
  return data;
};
