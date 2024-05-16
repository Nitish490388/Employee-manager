import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axiosClient.js";

const initialState = {
  admin: null,
}

export const getAdmin = createAsyncThunk("/dashboard/get-admin", async (_, { getState }) => {
  try {
    const response = await axiosClient.get("/dashboard/get-admin");
    console.log(response);
    return response.data.message;
  } catch (error) {
    throw error;
  }
})

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.admin = action.payload
    })
  }
})

export default adminSlice.reducer;