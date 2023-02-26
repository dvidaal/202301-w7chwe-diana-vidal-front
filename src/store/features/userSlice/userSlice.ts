import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  isLogged: false,
  token: "",
  username: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>): UserState => ({
      ...currentUserState,
      token: action.payload.token,
      username: action.payload.username,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
