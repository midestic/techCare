import { useContext, useState } from "react";
import styles from "./PatientsList.module.css";
import { fetchContext } from "../../dataContext/DataContext";
import { Link } from "react-router-dom";
let searchIcon = "/images/search.svg";

let details = "/images/details.svg";

export default function PatientsList() {
  let [backgroundColor, setBackgroundColor] = useState<number | null>(null);

  let context = useContext(fetchContext);
  if (!context) {
    return <div>Context not provided</div>;
  }

  const { data, error, loading } = context;
  if (error) {
    return <div>Error Please Wait</div>;
  }

  if (loading) {
    return <div>Fetching Data Please Wait.......</div>;
  }

  if (!data) {
    return <h1>No resource found</h1>;
  }

  return (
    <div className={styles.fullHeightContainer}>
      <div className={`${styles.patientListComp} `}>
        <div className={styles.heading}>
          <strong>Patients</strong> <img src={searchIcon} alt="" />
        </div>
        <div className={`${styles.lists}`}>
          <div>
            {data &&
              data.map((person: any, index: number) => (
                <Link to={`infopage/${person.name}`} key={person.name}>
                  <div
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
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
