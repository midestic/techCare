import { useContext, useState } from "react";
import styles from "./PatientsList.module.css";
import { fetchContext } from "../../dataContext/DataContext";
import { NavLink } from "react-router-dom";
let searchIcon = "./images/search.svg";

let details = "./images/details.svg";

export default function PatientsList() {
  let [backgroundColor, setBackgroundColor] = useState<number | null>(null);

  let context = useContext(fetchContext);
  if (!context) {
    return <div>Context not provided</div>;
  }

  const { otherPatients, error, loading, filteredData } = context;
  if (error) {
    return <div>Error Please Wait</div>;
  }

  if (loading) {
    return <div>Fetching Data Please Wait.......</div>;
  }

  return (
    <div className={styles.fullHeightContainer}>
      <div className={`${styles.patientListComp} `}>
        <div className={styles.heading}>
          <strong>Patients</strong> <img src={searchIcon} alt="" />
        </div>
        <div className={`${styles.lists}`}>
          <div>
            {filteredData &&
              filteredData.map((person: any, index: any) => (
                <NavLink to="infopage">
                  <div
                    key={index}
                    className={`${styles.eachName} ${
                      backgroundColor === index ? styles.change : ""
                    }`}
                    onClick={() => setBackgroundColor(index)}
                  >
                    <div className={`${styles.eachDiv} `}>
                      <img src={person.profile_picture} alt={person.name} />
                      <small>
                        <b>{person.name}</b> <br />
                        <small>
                          {person.gender} {person.age}
                        </small>
                      </small>
                    </div>
                    <div className={`${styles.details}  `}>
                      <img src={details} alt="details" />
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
          <div className={`${styles.secondList}`}>
            {otherPatients &&
              otherPatients.map((other: any, index: any) => (
                <a>
                  <div
                    key={index}
                    className={`${styles.eachName} ${
                      backgroundColor === index ? styles.change : ""
                    }`}
                    onClick={() => setBackgroundColor(index)}
                  >
                    <div className={`${styles.eachDiv} `}>
                      <img src={other.profile_picture} alt={other.name} />
                      <small>
                        <b>{other.name}</b> <br />
                        <small>
                          {other.gender} {other.age}
                        </small>
                      </small>
                    </div>
                    <div className={`${styles.details}  `}>
                      <img src={details} alt="details" />
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
