import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Do you hear the people sing", duration: "4:05" },
    { title: "ZenZenZen", duration: "3:25" },
    { title: "Life is like a Boat", duration: "3:05" },
    { title: "I want it that way", duration: "5:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
