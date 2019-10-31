const apiKey = 'yslOAYd9gX47YKpdmsC57cqMA3Agopvd8kmWvVfa'

export const getNasaData = asyn () => {
  const url = `https://api.nasa.gov/planetary/apod?${apiKey}`
  const response = await fetch(url);
  const data = response.json();
  return data;
}