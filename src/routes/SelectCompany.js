import React from "react";
import { useNavigate } from "react-router-dom";

import "../components/selectCompany/SelectCompanyStyle.css";

const SelectCompany = () => {
  const navigate = useNavigate();

  const changePage = (event) => {
    navigate("/home");
  };

  return (
    <div id="select-company-container">
      <h1 id="select-company-h1">Select Company</h1>
      <select id="select-company-menu" onChange={changePage}>
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
