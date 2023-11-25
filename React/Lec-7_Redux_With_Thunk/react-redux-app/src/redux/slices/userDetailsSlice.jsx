import { createSlice } from "@reduxjs/toolkit";

const UserDetailsSlice = createSlice({

    name: 'userDetails',

    initialState: {
      data: null,
      error: null,
      isLoading: false
    },

    reducers: {
      fetchDataStart: (state) => {
        state.isLoading = true;
        state.error = null;
      },

      fetchDataSuccess: (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      },

      fetchDataFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    }
});

export default UserDetailsSlice.reducer;

export const {fetchDataStart, fetchDataSuccess, fetchDataFailure} = UserDetailsSlice.actions;