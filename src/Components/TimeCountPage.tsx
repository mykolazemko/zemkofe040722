import { time } from "console";
import { copyFileSync } from "fs";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, useEffect, Key } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChart } from "../Redux/ChartSlice";
import { RootState } from "../Redux/store";

export const TimeCountPage = () => {
  const [timeChart, setTimeChart] = useState<any>();
  const chart = useSelector((state: RootState) => state.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    chart && setTimeChart(chart);
  }, [chart]);

  const handleClick = () => {
    let randomTime;
    timeChart != undefined &&
      (randomTime = timeChart.chart.map((t: { time: number }) => {
        return (t = { time: +(Math.random() * 10).toFixed(1) });
      }));
    dispatch(updateChart(randomTime));
  };

  return (
    <div>
      {timeChart != undefined &&
        timeChart.chart.map((ch: any, index: Key | null | undefined) => {
          return <div key={index}>{ch.time}</div>;
        })}
      <button onClick={handleClick}>Update time</button>
    </div>
  );
};
