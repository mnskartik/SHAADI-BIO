import React from "react";
import "../styles/Templates.css";

const ModernTemplate = ({data,photo,theme}) => {

  return (

    <div className="modern-template">

      <div className="modern-header">

        {photo && <img src={photo} alt="profile"/>}

        <div>
          <h2>{data.name}</h2>
          <p>{data.profession}</p>
          <p>{data.location}</p>
        </div>

      </div>

      <div className="modern-grid">

        <div>
          <h4>Personal</h4>
          <p>Age: {data.age}</p>
          <p>Religion: {data.religion}</p>
          <p>Caste: {data.caste}</p>
        </div>

        <div>
          <h4>Family</h4>
          <p>Father: {data.fatherName}</p>
          <p>Mother: {data.motherName}</p>
        </div>

        <div>
          <h4>Career</h4>
          <p>{data.education}</p>
          <p>{data.company}</p>
        </div>

      </div>

    </div>

  );
}

export default ModernTemplate;