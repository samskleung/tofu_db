import React from "react";
import TableHeaderList from "./TableHeaderList";
import TableDataList from "./TableDataList";
import { Button } from "react-bootstrap";
import "components/Table/tableStyles.scss";

export default function Table({
  tableHeaderArray,
  tableDataArray,
  deleteRow,
  deleteColumn,
  getApplicationData,
  createNewRow,
  createNewColumn,
  application_id,
  updateInputValue,
  saveInputValue,
  updateFieldValue,
  saveFieldValue,
  editStatus,
  tableTitle,
}) {
  return (
    <>
      <h1 className="tableTitle">{tableTitle}</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="align-middle editStatus">
              <>{editStatus}</>
            </th>
            <th className="align-middle">#</th>
            <TableHeaderList
              tableHeaderArray={tableHeaderArray}
              deleteColumn={deleteColumn}
              updateFieldValue={updateFieldValue}
              saveFieldValue={saveFieldValue}
              application_id={application_id}
            />
          </tr>
        </thead>
        <tbody>
          <TableDataList
            tableDataArray={tableDataArray}
            deleteRow={deleteRow}
            updateInputValue={updateInputValue}
            saveInputValue={saveInputValue}
            application_id={application_id}
            editStatus={editStatus}
          />
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    <section className="bottom-buttons">
        <Button onClick={() => createNewColumn(application_id)}>
        Add New Column
      </Button>{' '}
      <Button onClick={() => createNewRow(application_id)}>Add New Row</Button>
      </section>
    </>
      
  );
}
      
