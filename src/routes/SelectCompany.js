import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "../components/selectCompany/SelectCompanyStyle.css";

const SelectCompany = () => {
  return (
    <div id="select-company-container">
      <h1 id="select-company-h1">Select Company</h1>
      <select id="select-company-menu">
        <option value="" disabled selected hidden>
          Pick an option
        </option>
        <option value="fedEx">FedEx</option>
        <option value="cookSystems">Cook Systems</option>
        <option value="google">Google</option>
      </select>
    </div>
  );
};

export default SelectCompany;
