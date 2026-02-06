import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

function SongCard({ song, i }) {
  const activeSong = { title: "" }; // placeholder, removes VS Code error
  // console.log(song.images?.coverart)
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 
            ${activeSong?.title === song.title ? "flex bg-opacity-70" : "hidden group-hover:flex"}`}
        >
          <PlayPause />
        </div>

        <img
          src={song.attributes.artwork.url}
          alt={song.attributes.name}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
          <p className="font-semibold text-lg text-white truncate">
            <Link to={`/songs/${song.id}`}>{song.attributes.name}</Link>
          </p>
          <p className="text-sm truncate text-gray-300 mt-1">
           {/* Apple Music API only has artistName */}
          <Link to={`/artists/${encodeURIComponent(song.attributes.artistName)}`}>{song.attributes.artistName}</Link>
          </p>
      </div>
    </div>
  );
}

export default SongCard;
