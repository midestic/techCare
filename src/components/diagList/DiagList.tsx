type DiagType = {
  filteredResults: any;
};

import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./DiagList.module.css";

export default function DiagList({ filteredResults }: DiagType) {
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
            {filteredResults &&
              filteredResults.diagnostic_list.map((item: any, index: any) => (
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
