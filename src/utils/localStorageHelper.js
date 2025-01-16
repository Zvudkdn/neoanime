export const updateCurrentlyWatching = (anime) => {
  localStorage.setItem("currentlyWatching", JSON.stringify(anime));
};

export const getCurrentlyWatching = () => {
  const savedAnime = localStorage.getItem("currentlyWatching");
  return savedAnime ? JSON.parse(savedAnime) : null;
};
