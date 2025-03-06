import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import PatientsList from "../patientsList/PatientsList";
import styles from "./RootLayout.module.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function RootLayout() {
  const [showPatientsList, setShowPatientsList] = useState(true);

  const togglePatientsList = () => {
    setShowPatientsList(!showPatientsList);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowPatientsList(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.rootComp}`}>
      <div className={`${styles.rootDiv}`}>
        <div className={`${styles.header}`}>
          <Header />
          <button onClick={togglePatientsList} className={styles.toggleButton}>
            {showPatientsList ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`${styles.dashDiv} `}>
          <div
            className={`${styles.patients} ${
              showPatientsList ? styles.show : ""
            }`}
          >
            <PatientsList />
          </div>
          <div className={`${styles.displayDetails}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
