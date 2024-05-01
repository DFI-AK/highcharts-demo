import { configureStore } from "@reduxjs/toolkit";
import chartSlice from "../features/chart-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const chartStore = configureStore({
    reducer: {
        chartSlice
    }
});

export type RootState = ReturnType<typeof chartStore.getState>;
export type AppDispatch = typeof chartStore.dispatch;
export const useChart: TypedUseSelectorHook<RootState> = useSelector;