import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    selectedCity: "",
    selectedForecast: "",
    lat: 0,
    lon: 0,
    exclude: "",
  },
  reducers: {
    handleCoordinates: (state, action) => {
      const {
        payload,
        payload: { lat, lon },
      } = action;

      state.selectedCity = payload;
      state.lat = lat;
      state.lon = lon;
    },
    handleForecast: (state, action) => {
      const {
        payload,
        payload: { exclude },
      } = action;

      state.selectedForecast = payload;
      state.exclude = exclude;
    },
  },
});

export const { handleCoordinates, handleForecast } = settingsSlice.actions;
export default settingsSlice.reducer;
