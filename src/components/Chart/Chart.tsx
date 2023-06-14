import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props: any) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
      ))}
    </div>
  );
};

export default Chart;
