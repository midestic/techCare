import { useContext } from "react";
import { fetchContext } from "../dataContext/DataContext";
import styles from "./ProfileInfo.module.css";

const calenderIcon = "./images/calender.svg";
const FemaleIcon = "./images/FemaleIcon.svg";
const PhoneIcon = "./images/PhoneIcon.svg";
const InsuranceIcon = "./images/InsuranceIcon.svg";

export default function ProfileInfo() {
  let context = useContext(fetchContext);
  if (!context) {
    return <div>No Context Passed.....</div>;
  }

  let { filteredData } = context;

  return (
    <div className={`${styles.profileComp} `}>
      <div className={`${styles.imgDiv}`}>
        <img src={filteredData[0].profile_picture} alt="jessse" /> <br /> <br />
        <strong>{filteredData[0].name}</strong>
      </div>

      <div className={`${styles.info} container `}>
        <div>
          <img className={styles.calender} src={calenderIcon} alt="" />
          <small className={styles.calenderLabel}>Date Of Birth</small> <br />
          <small>
            <b> {filteredData[0].date_of_birth}</b>
          </small>
        </div>

        <div>
          <img src={FemaleIcon} alt="" />
          <small>Gender</small> <br />
          <small>
            <b> {filteredData[0].gender}</b>
          </small>
        </div>
        <div>
          <img src={PhoneIcon} alt="" />
          <small>Contact info</small> <br />
          <small>
            <b> {filteredData[0].phone_number}</b>
          </small>
        </div>

        <div>
          <img src={PhoneIcon} alt="" />
          <small>Emergency Contacts</small> <br />
          <small>
            <b> {filteredData[0].emergency_contact}</b>
          </small>
        </div>

        <div>
          <img src={InsuranceIcon} alt="" />
          <small>Emergency Contacts</small> <br />
          <small>
            <b> {filteredData[0].insurance_type}</b>
          </small>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button>Show All Information</button>
      </div>
    </div>
  );
}
