type ProfileType = {
  filteredResults: {
    profile_picture: string;
    name: string;
    date_of_birth: string;
    gender: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
  };
};

import styles from "./ProfileInfo.module.css";

const calenderIcon = "/images/calender.svg";
const FemaleIcon = "/images/FemaleIcon.svg";
const PhoneIcon = "/images/PhoneIcon.svg";
const InsuranceIcon = "/images/InsuranceIcon.svg";

export default function ProfileInfo({ filteredResults }: ProfileType) {
  return (
    <div className={`${styles.profileComp} `}>
      <div className={`${styles.imgDiv}`}>
        <img src={filteredResults.profile_picture} alt="jessse" /> <br /> <br />
        <strong>{filteredResults.name}</strong>
      </div>

      <div className={`${styles.info} container `}>
        <div>
          <img className={styles.calender} src={calenderIcon} alt="" />
          <small className={styles.calenderLabel}>Date Of Birth</small> <br />
          <small>
            <b> {filteredResults.date_of_birth}</b>
          </small>
        </div>

        <div>
          <img src={FemaleIcon} alt="" />
          <small>Gender</small> <br />
          <small>
            <b> {filteredResults.gender}</b>
          </small>
        </div>
        <div>
          <img src={PhoneIcon} alt="" />
          <small>Contact info</small> <br />
          <small>
            <b> {filteredResults.phone_number}</b>
          </small>
        </div>

        <div>
          <img src={PhoneIcon} alt="" />
          <small>Emergency Contacts</small> <br />
          <small>
            <b> {filteredResults.emergency_contact}</b>
          </small>
        </div>

        <div>
          <img src={InsuranceIcon} alt="" />
          <small>Emergency Contacts</small> <br />
          <small>
            <b> {filteredResults.insurance_type}</b>
          </small>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button>Show All Information</button>
      </div>
    </div>
  );
}
