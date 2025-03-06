import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { fetchContext } from "../dataContext/DataContext";
import styles from "./DiagList.module.css";

export default function DiagList() {
  let context = useContext(fetchContext);
  if (!context) {
    return <div>Table not Found.......</div>;
  }

  let { filteredData } = context;

  return (
    <div className={`${styles.diagListComp} mt-4`}>
      <h4>Diagnostic List</h4>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData &&
              filteredData[0].diagnostic_list.map((item: any, index: any) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
