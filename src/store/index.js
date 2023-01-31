import { configureStore } from "@reduxjs/toolkit";
import PlaylistReducer from "./playListSlice";

export const store = configureStore({
  reducer: {
    playlist: PlaylistReducer,
  },
});
