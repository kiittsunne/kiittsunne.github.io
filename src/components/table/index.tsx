import React from "react";
import * as styles from "./index.module.scss";

export type tableProps = {
  headerRow: string[];
  rows: string[][];
  tallyRow?: string[];
};

const Table = (props: tableProps) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            {props.headerRow &&
              props.headerRow.map((header) => <th>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.rows &&
            props.rows.map((row) => (
              <tr>
                {row.map((cell) => {
                  const image = new RegExp("cloudinary");
                  return image.test(cell) ? (
                    <td>
                      <img src={cell} />
                    </td>
                  ) : (
                    <td>{cell}</td>
                  );
                })}
              </tr>
            ))}
          {props.tallyRow &&
            props.tallyRow.map((row) => (
              <tr className={styles.activeRow}>{row}</tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
