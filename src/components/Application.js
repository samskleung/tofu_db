import React, { useEffect } from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import Grid from "./Template/Grid";
import List from "./Template/List";
import AppList from "./AppList/AppList";
import Status from "./Table/Status";
import AppMenu from "./AppMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFieldsById } from "helpers/selectors";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import useVisualMode from 'hooks/useVisualMode';
import Button from "./Button";
export default function Application() {

  const { getApplicationData, setConfig, state, setApp, setPositions, layouts, setPrimaryField, setSecondaryField, createNewRow, createNewColumn, deleteRow, deleteColumn, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue, setApplication, createNewApplication, deleteApplication, updateApplicationData, saveApplicationData } = useApplicationData();
  const { mode, setMode } = useVisualMode("Default");
  console.log("application.js", state)
  const tableHeaderArray = ((state.currentApplication.fields)) ? state.currentApplication.fields : [];
  const tableRecordArray = ((state.currentApplication.records)) ? state.currentApplication.records : [];
  const applicationID = state.selectedApplication
  const applicationName = state.currentApplication.application ? state.currentApplication.application.app_name : "";
  const applicationDescription = state.currentApplication.application ? state.currentApplication.application.description : "";
  const applicationBackgroundImage = state.currentApplication.application ? state.currentApplication.application.img_url : "";
  const applicationFontSize = state.currentApplication.application ? state.currentApplication.application.font : "";
  const applicationTheme = state.currentApplication.application ? state.currentApplication.application.display_theme : "";
  let fetchItem = [{ key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1 }, { key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2 }, { key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3 }]
  let appId = parseInt(state.selectedApplication)
  let fields = getFieldsById(state, appId)
  //console.log(state.selectedApplication)
  //console.log(state.selectedRecords)
  // setPrimaryField("Building")
  return (
    <Router>
      <main className="layout">
        <section className="sidebar">
          {mode === "Default" &&<AppList getApplicationData={getApplicationData} createNewApplication={createNewApplication} deleteApplication={deleteApplication} applications_array={state.applications} setMode={setMode} />}
          {mode === "AppDetails-Data" && <AppMenu setMode={setMode}/>}
          {mode === "AppDetails-Customize" && <AppMenu setMode={setMode}/>}
          <hr className="sidebar__separator sidebar--centered" />
          {mode === "AppDetails-Customize" &&
            <NavBarConfig
              value={state.config}
              configs={state.configs}
              onChange={setConfig}
              fields={fields}
              setPrimaryField={setPrimaryField}
              setSecondaryField={setSecondaryField}
              updateApplicationData={updateApplicationData}
              applicationID={applicationID}
              appName={applicationName}
              appDescription={applicationDescription}
              appBackgroundImage={applicationBackgroundImage}
              appFontSize={applicationFontSize}
              applicationTheme={applicationTheme}
              applicationID={appId}
              saveApplicationData={saveApplicationData}
            />
          }
        </section>
        <div className="body">
          <section className="table">
            {mode === "AppDetails-Data" &&
              <Table
                tableHeaderArray={tableHeaderArray}
                tableDataArray={tableRecordArray}
                deleteRow={deleteRow}
                deleteColumn={deleteColumn}
                getApplicationData={getApplicationData}
                createNewRow={createNewRow}
                createNewColumn={createNewColumn}
                application_id={applicationID}
                updateInputValue={updateInputValue}
                saveInputValue={saveInputValue}
                updateFieldValue={updateFieldValue}
                saveFieldValue={saveFieldValue}
                editStatus={state.editStatus}
                tableTitle={state.selectedApplicationName}
              />
            }
            <button class="btn btn-primary" onClick={() => console.log(state)}>Check State</button>
            <button class="btn btn-primary" onClick={() => console.log(applicationID)}>Check applicationID</button>
            <button class="btn btn-primary" onClick={() => console.log(mode)}>Check mode</button>
          </section>
          <section className="schedule">
            {mode === "AppDetails-Customize" &&
              <Grid
                setPositions={setPositions}
                layouts={layouts}
                selectedRecords={state.selectedRecords}
              />
            }
          </section></div>
      </main>
    </Router>
  );
}
