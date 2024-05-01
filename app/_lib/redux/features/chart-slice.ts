import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Datapoints = { timstamp: number, value: number; };

type ChartInitialiState = {
    cpu: Array<Datapoints>;
    memory: Array<Datapoints>;
    networkReceived: Array<Datapoints>;
    networkSent: Array<Datapoints>;
};

const initialState: ChartInitialiState = {
    cpu: [],
    memory: [],
    networkReceived: [],
    networkSent: []
};

type Action = { type: "cpu", payload: Datapoints; }
    | { type: "memory", payload: Datapoints; }
    | { type: "network-received", payload: Datapoints; }
    | { type: "network-sent", payload: Datapoints; };

const chartSlice = createSlice({
    name: "chart-slice",
    initialState,
    reducers: {
        setDatapoints: (state, action: PayloadAction<Action>) => {
            const maxReducer = 10;
            switch (action.payload.type) {
                case "cpu": {
                    const updatedValue = [...state.cpu, action.payload.payload];
                    if (updatedValue.length > maxReducer) updatedValue.splice(0, updatedValue.length - maxReducer);
                    state.cpu = updatedValue;
                    break;
                }
                case "memory": {
                    const updatedValue = [...state.memory, action.payload.payload];
                    if (updatedValue.length > maxReducer) updatedValue.splice(0, updatedValue.length - maxReducer);
                    state.memory = updatedValue;
                    break;
                }
                case "network-received": {
                    const updatedValue = [...state.networkReceived, action.payload.payload];
                    if (updatedValue.length > maxReducer) updatedValue.splice(0, updatedValue.length - maxReducer);
                    state.networkReceived = updatedValue;
                    break;
                }
                case "network-sent": {
                    const updatedValue = [...state.networkSent, action.payload.payload];
                    if (updatedValue.length > maxReducer) updatedValue.splice(0, updatedValue.length - maxReducer);
                    state.networkSent = updatedValue;
                    break;
                }
                default:
                    break;
            }
        }
    }
});

export const { setDatapoints } = chartSlice.actions;
export default chartSlice.reducer;