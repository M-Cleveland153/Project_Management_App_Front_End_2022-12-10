import React from "react";

import "../components/selectCompany/SelectCompanyStyle.css";

import useAxios from "../services/useAxios";

const SelectCompany = () => {

  const { response, loading, error } = useAxios({

    method: 'get',
    url: 'companies'
  })

  return (
    <div id="select-company-container">
      {console.log(response)}
      <h1 id="select-company-h1">Select Company</h1>
      
        {/* <option value="fedEx">FedEx</option>
        <option value="cookSystems">Cook Systems</option>
        <option value="google">Google</option> */}
      {loading ? ( <p>loading...</p>) : 
       (
        <div>
            {error && (
                <div>
                    <p>{error.message}</p>
                </div>
            )}
            <select id="select-company-menu">
                <option value="" disabled selected hidden>
                  Pick an option
                </option>
            {response.map((c) => (
                <option key="company" value={c.company}>
                  {c.company}
                </option>
            ))}
            </select>
        </div>
      )}
    </div>
  );
};

export default SelectCompany;


