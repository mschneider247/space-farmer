const getRocketData = async () => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong getting your rockets!  Please try again...');
  }
  const data = response.json();
  return data;
};

export default getRocketData;
