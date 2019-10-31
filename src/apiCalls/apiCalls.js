export const getRocketData = async () => {
  const url = `https://api.spacexdata.com/v3/rockets`
  const response = await fetch(url);
  const data = response.json();
  return data;
}