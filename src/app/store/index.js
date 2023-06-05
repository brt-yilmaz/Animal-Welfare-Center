import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { darkMode: false };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const darkModeActions = darkModeSlice.actions;

const store = configureStore({
  reducer: darkModeSlice.reducer,
});

export default store;
