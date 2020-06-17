import React from "react";

export default (props) => {
  return (
    <div>
      <h1 className="display-4"> Contact manager</h1>

      <h2>{props.match.params.id}</h2>
      <p>Simple app to manage contact</p>
    </div>
  );
};
