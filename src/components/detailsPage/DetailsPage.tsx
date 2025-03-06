import BloodPressureChart from "../chart/BloodPressureChart";
import styles from "./DetailsPage.module.css";
import { useContext } from "react";
import { fetchContext } from "../dataContext/DataContext";
import ProfileInfo from "../profileInfo/ProfileInfo";
import DiagList from "../diagList/DiagList";
import LabResults from "../labResults/LabResults";

let resp = "./images/respiratory-rate.svg";
let temp = "./images/temperature.svg";
let bpm = "./images/HeartBPM.svg";

export default function DetailsPage() {
  let context = useContext(fetchContext);

  if (!context) {
    return <h1>data being fetched..........</h1>;
  }

  let { error, loading, filteredData } = context;

  if (error) {
    return <strong>There is an error</strong>;
  }

  if (loading) {
    return <div>LOADING.......</div>;
  }

  return (
    <div className={`${styles.detailsPageComp}`}>
      <strong style={{ marginBottom: "10px" }}>Diagnostic History</strong>

      <div className={`${styles.row} row `}>
        <div className={`${styles.colOne} col-lg-7 col-sm-12`}>
          <div className={`${styles.chartDiv}`}>
            <BloodPressureChart />
          </div>

          {/* below line chart */}

          <div className={`${styles.chartDivTwo}  `}>
            <div style={{ backgroundColor: "#e0f3fa" }}>
              <img src={resp} alt="" />

              <p>respiratory Rate</p>

              <h2>
                {filteredData &&
                  filteredData[0].diagnosis_history[0].respiratory_rate
                    .value}{" "}
                bpm
              </h2>
              <small>
                {filteredData &&
                  filteredData[0].diagnosis_history[0].respiratory_rate
                    .levels}{" "}
              </small>
            </div>
            <div style={{ backgroundColor: "#ffe6e9" }}>
              <img src={temp} alt="" />
              <p>Temperature</p>
              <h2>
                {filteredData &&
                  filteredData[0].diagnosis_history[0].temperature.value}
                F
              </h2>
              <small>
                {filteredData &&
                  filteredData[0].diagnosis_history[0].temperature.levels}
              </small>
            </div>
            <div style={{ backgroundColor: "#ffe6e9" }}>
              <img src={bpm} alt="" />
              <p>Heart Rate</p>
              <h2>
                {filteredData &&
                  filteredData[0].diagnosis_history[0].heart_rate.value}{" "}
                bpm
              </h2>
              <small>
                {filteredData &&
                  filteredData[0].diagnosis_history[0].heart_rate.levels}{" "}
              </small>
            </div>
          </div>
        </div>

        {/* jessica profile picture right side div */}
        <div className={`${styles.colTwo}  container col-lg-4 col-sm-12`}>
          <ProfileInfo />
        </div>
      </div>
      {/* second row */}

      <div className={`${styles.secondRow} row  `}>
        <div className={`${styles.diagList}  col-lg-7 col-sm-12  `}>
          <DiagList />
        </div>
        <div className={`${styles.labList} col-lg-4 col-sm-12 `}>
          <LabResults />
        </div>
      </div>
    </div>
  );
}
