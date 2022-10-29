export const dateFormat = (timestamp) => {
  // timestamp * 1000 since new Date must be supplied with milliseconds value.
  // and the date returned by the api is in Unix timestamp
  const date = new Date(timestamp * 1000); 
  return date.toLocaleDateString();
}