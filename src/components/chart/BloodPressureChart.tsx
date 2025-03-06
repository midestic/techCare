import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import styles from "./BloodPressureChart.module.css";

const data = [
  { month: "Oct, 2023", systolic: 120, diastolic: 80 },
  { month: "Nov, 2023", systolic: 140, diastolic: 90 },
  { month: "Dec, 2023", systolic: 160, diastolic: 100 },
  { month: "Jan, 2024", systolic: 130, diastolic: 85 },
  { month: "Feb, 2024", systolic: 150, diastolic: 75 },
  { month: "Mar, 2024", systolic: 160, diastolic: 78 },
];

export default function BloodPressureChart() {
  return (
    <div className={`card p-4 ${styles.chartContainer}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-semibold">Blood Pressure</h3>
        <span className="text-muted">Last 6 months ▼</span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[60, 180]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#D81B60"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="diastolic"
            stroke="#5C6BC0"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 d-flex justify-content-between">
        <div className={styles.systolic}>
          <span className="fw-bold fs-4">160</span>
          <p className="small">Higher than Average</p>
        </div>
        <div className={styles.diastolic}>
          <span className="fw-bold fs-4">78</span>
          <p className="small">Lower than Average</p>
        </div>
      </div>
    </div>
  );
}
