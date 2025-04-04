type LabType = {
  filteredResults: any;
};

import styles from "./LabResults.module.css";

let icon = "/images/downloadIcon.svg";

export default function LabResults({ filteredResults }: LabType) {
  return (
    <div className={`${styles.labResComp}`}>
      <strong> Lab Results </strong>

      <div className={`${styles.resultsDiv}`}>
        <ul className="list-unstyled">
          {filteredResults.lab_results.map((item: any, index: any) => (
            <div className={`${styles.resultDiv} `} key={index}>
              <span>
                <li> {item} </li>
              </span>

              <span>
                <img src={icon} alt="result" />
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
