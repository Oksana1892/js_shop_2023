import { configureStore } from "@reduxjs/toolkit";
import { userSliceName, userSliceReduser } from './User/slice';

export const store = configureStore({ reducer: {[userSliceName]: userSliceReduser,}, devTools: true });
export type RootStateType = ReturnType<typeof store.getState>;
