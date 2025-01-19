import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockProfiles from "../utils/mockData";

export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProfiles);
    }, 200);
  });
});

const profileSlice = createSlice({
    name: 'profiles',
    initialState: {
      data: [],
      status: 'idle',
      error: null,
      currentProfile:null,
    },
    reducers: {
      addProfile: (state, action) => {
        state.data.push(action.payload);
      },
      editProfile: (state, action) => {
        const index = state.data.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      },
      deleteProfile: (state, action) => {
        state.data = state.data.filter((p) => p.id !== action.payload);
      },
      currentProfileStatus:(state, action) =>{
        state.currentProfile = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProfiles.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProfiles.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchProfiles.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { addProfile, editProfile, deleteProfile, currentProfileStatus } = profileSlice.actions;
  export default profileSlice.reducer;