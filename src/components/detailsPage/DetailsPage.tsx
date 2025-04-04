import BloodPressureChart from "../chart/BloodPressureChart";
import styles from "./DetailsPage.module.css";
import { useContext } from "react";
import { fetchContext } from "../dataContext/DataContext";
import ProfileInfo from "../profileInfo/ProfileInfo";
import DiagList from "../diagList/DiagList";
import LabResults from "../labResults/LabResults";
import { useParams } from "react-router-dom";

let resp = "/images/respiratory-rate.svg";
let temp = "/images/temperature.svg";
let bpm = "/images/HeartBPM.svg";

export default function DetailsPage() {
  let { name } = useParams();
  let context = useContext(fetchContext);

  if (!context?.data) {
    return <h1>Data is being fetched...</h1>;
  }

  let { error, loading, data } = context;

  console.log(data);

  if (error) {
    return <strong>There is an error</strong>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  let filteredResults = data.find(
    (person: any) =>
      person.name.trim().toLowerCase() === name?.trim().toLowerCase()
  );

  if (!filteredResults) {
    return <h1>No data found for {name}</h1>;
  }

  return (
    <div className={`${styles.detailsPageComp}`}>
      <strong style={{ marginBottom: "10px" }}>Diagnostic History</strong>

      <div className={`${styles.row} row `}>
        <div className={`${styles.colOne} col-lg-7 col-sm-12`}>
          <div className={`${styles.chartDiv}`}>
            <BloodPressureChart filteredResults={filteredResults} />
          </div>

          {/* Below Line Chart */}
          <div className={`${styles.chartDivTwo}`}>
            <div style={{ backgroundColor: "#e0f3fa" }}>
              <img src={resp} alt="" />
              <p>Respiratory Rate</p>
              <h2>
                {filteredResults.diagnosis_history[0]?.heart_rate?.value ||
                  "N/A"}{" "}
                bpm
              </h2>
              <small>
                {filteredResults.diagnosis_history[0]?.heart_rate?.levels ||
                  "N/A"}
              </small>
            </div>
            <div style={{ backgroundColor: "#ffe6e9" }}>
              <img src={temp} alt="" />
              <p>Temperature</p>
              <h2>
                {filteredResults.diagnosis_history[0]?.temperature?.value ||
                  "N/A"}{" "}
                F
              </h2>
              <small>
                {filteredResults.diagnosis_history[0].temperature?.levels ||
                  "N/A"}
              </small>
            </div>
            <div style={{ backgroundColor: "#ffe6e9" }}>
              <img src={bpm} alt="" />
              <p>Heart Rate</p>
              <h2>
                {filteredResults.diagnosis_history[0].heart_rate?.value ||
                  "N/A"}{" "}
                bpm
              </h2>
              <small>
                {filteredResults.diagnosis_history[0].heart_rate?.levels ||
                  "N/A"}
              </small>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className={`${styles.colTwo} container col-lg-4 col-sm-12`}>
          <ProfileInfo filteredResults={filteredResults} />
        </div>
      </div>

      {/* Second Row */}
      <div className={`${styles.secondRow} row`}>
        <div className={`${styles.diagList} col-lg-7 col-sm-12`}>
          <DiagList filteredResults={filteredResults} />
        </div>
        <div className={`${styles.labList} col-lg-4 col-sm-12`}>
          <LabResults filteredResults={filteredResults} />
        </div>
      </div>
    </div>
  );
}
