export const githubUserUrl = async (imgPath) => {
  if (!imgPath) {
    return '';
  }

  const userId = imgPath?.split("/")[imgPath.split("/").length-1].split("?")[0];
  const res = await fetch(`https://api.github.com/user/${userId}`);
  const data = await res.json();
  return data.html_url;
  
}