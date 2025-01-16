import React, { useEffect, useState } from "react";
import { getCurrentlyWatching } from "../utils/localStorageHelper";

const HomeScreen = () => {
  const [currentlyWatching, setCurrentlyWatching] = useState(null);

  useEffect(() => {
    setCurrentlyWatching(getCurrentlyWatching());
  }, []);

  return (
    <div className="recent-watching-container p-4">
      {currentlyWatching ? (
        <div className="anime-card flex items-center gap-4 bg-gray-100 p-4 rounded-md">
          <img
            src={currentlyWatching.poster}
            alt={currentlyWatching.name}
            className="w-16 h-24 object-cover rounded-md"
          />
          <div>
            <h2 className="text-lg font-bold">{currentlyWatching.name}</h2>
            <p className="text-sm text-gray-600">
              Watching Episode {currentlyWatching.episode}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No anime currently being watched.</p>
      )}
    </div>
  );
};

export default HomeScreen;
