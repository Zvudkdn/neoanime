import React, { useEffect } from "react";
import { updateCurrentlyWatching } from "../utils/localStorageHelper";

const EpisodePlayer = ({ anime, currentEpisode }) => {
  useEffect(() => {
    if (anime && currentEpisode) {
      updateCurrentlyWatching({
        id: anime.id,
        name: anime.name,
        poster: anime.poster,
        episode: currentEpisode,
      });
    }
  }, [anime, currentEpisode]);

  return (
    <div className="episode-player-container">
      <h1 className="text-2xl font-bold">{anime.name}</h1>
      <p className="text-lg text-gray-600">Playing Episode {currentEpisode}</p>
      {/* Add your video player or episode content here */}
    </div>
  );
};

export default EpisodePlayer;
