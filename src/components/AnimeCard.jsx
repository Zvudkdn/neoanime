import React from "react";
import { updateCurrentlyWatching } from "../utils/localStorageHelper";

const AnimeCard = ({ anime }) => {
  const handleWatch = () => {
    const animeDetails = {
      id: anime.id,
      name: anime.name,
      poster: anime.poster,
      episode: anime.episode,
    };
    updateCurrentlyWatching(animeDetails);
  };

  return (
    <div className="anime-card flex flex-col items-center">
      <img src={anime.poster} alt={anime.name} className="w-32 h-48 object-cover rounded-md" />
      <h3 className="text-md font-semibold mt-2">{anime.name}</h3>
      <button
        onClick={handleWatch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
      >
        Watch Episode {anime.episode}
      </button>
    </div>
  );
};

export default AnimeCard;
