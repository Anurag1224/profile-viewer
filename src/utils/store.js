import { configureStore } from "@reduxjs/toolkit";
import profileReducer, { fetchProfiles } from "../utils/profileSlice";

const appStore = configureStore({
    reducer: {
      profiles: profileReducer,
    },
  });

  appStore.dispatch(fetchProfiles());
  export default appStore;