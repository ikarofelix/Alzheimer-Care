import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserDBType } from "../../types/user-types";

interface UserState {
  currentUser: UserDBType;
}

const initialState: UserState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserDBType>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const currentUserSelector = (state: RootState) => state.userSlice.currentUser;
export default userSlice.reducer;
