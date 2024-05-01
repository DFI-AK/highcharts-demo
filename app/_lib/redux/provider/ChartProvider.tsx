'use client';

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { chartStore } from "../store/chartStore";

const ChartProvider = ({ children }: { children: ReactNode; }) => <Provider store={chartStore}>{children}</Provider>;

export default ChartProvider;