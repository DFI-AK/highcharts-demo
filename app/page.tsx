'use client';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./_lib/redux/store/chartStore";
import { setDatapoints } from "./_lib/redux/features/chart-slice";
import ChartComponent from "./_lib/components/ChartComponent";

export default function Home() {

  const generateRandomValue = (angle: number) => Math.ceil(Math.random() * 100 * Math.cos(angle));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setDatapoints({
        type: "cpu",
        payload: {
          value: generateRandomValue(13),
          timstamp: new Date().getTime()
        }
      }));

      dispatch(setDatapoints({
        type: "memory",
        payload: {
          value: generateRandomValue(13),
          timstamp: new Date().getTime()
        }
      }));

      dispatch(setDatapoints({
        type: "network-received",
        payload: {
          value: generateRandomValue(14),
          timstamp: new Date().getTime()
        }
      }));

      dispatch(setDatapoints({
        type: "network-sent",
        payload: {
          value: generateRandomValue(12),
          timstamp: new Date().getTime()
        }
      }));

    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-indigo-500">High chart demo</h1>
      <ChartComponent />
    </>
  );
}
