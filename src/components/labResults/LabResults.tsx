import { useContext } from "react";
import styles from "./LabResults.module.css";
import { fetchContext } from "../dataContext/DataContext";

let downloadIcon = "./images/downloadIcon.svg";

export default function LabResults() {
  let context = useContext(fetchContext);

  if (!context) {
    return <div>No Context.....</div>;
  }

  let { filteredData } = context;

  return (
    <div className={`${styles.labResComp}`}>
      <strong> Lab Results </strong>

      <div className={`${styles.resultsDiv}`}>
        <ul className="list-unstyled">
          {filteredData &&
            filteredData[0].lab_results.map((item: any, index: any) => (
              <div className={`${styles.resultDiv} `} key={index}>
                <span>
                  <li> {item} </li>
                </span>

                <span>
                  <img src={downloadIcon} alt="result" />
                </span>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
