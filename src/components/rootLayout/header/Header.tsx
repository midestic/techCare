import styles from "./Header.module.css";

let logo = "/images/TestLogo.svg";
let homeIcon = "/images/home.svg";
let patientsIcon = "/images/patients.svg";
export let calenderIcon = "/images/calender.svg";
let messageIcon = "/images/message.svg";
let creditCardIcon = "/images/creditCard.svg";
let settingsIcon = "/images/settings.svg";
let moreIcon = "/images/moreIcon.svg";
let doctor = "/images/dr.png";

export default function Header() {
  return (
    <div className={`${styles.headerComp} `}>
      <div className={`${styles.logoDiv} `}>
        <img className="img-fluid" src={logo} alt="tech" />
      </div>

      <div className={`${styles.menuItemsDiv}`}>
        <small>
          <b>
            <img src={homeIcon} alt="" /> Overview
          </b>
        </small>
        <small>
          <b>
            <img src={patientsIcon} alt="" /> Patients
          </b>
        </small>
        <small>
          <b>
            <img src={calenderIcon} alt="" /> Schedule
          </b>
        </small>
        <small>
          <b>
            <img src={messageIcon} alt="" /> Message
          </b>
        </small>
        <small>
          <b>
            <img src={creditCardIcon} alt="" /> Transactions
          </b>
        </small>
      </div>

      <div className={`${styles.drDiv}`}>
        <img src={doctor} alt="doctor" />
        <div className={`${styles.drNameDiv}`}>
          <small>
            <b>Dr. Jose Simmons</b> <br /> <small>General Practitional</small>
          </small>
        </div>
        <div className={`${styles.moreDiv}`}>
          <img src={settingsIcon} alt="settings" />
          <img src={moreIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
