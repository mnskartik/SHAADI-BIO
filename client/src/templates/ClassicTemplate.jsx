import React from "react";
import "../styles/Templates.css";

const ClassicTemplate = ({data,photo,theme}) => {

return (

<div className="preview-card">

<h2 style={{color:theme.primaryColor}}>{data.name || "Your Name"}</h2>

{photo && (
<img
src={photo}
alt="profile"
style={{
width:"120px",
borderRadius:"8px",
margin:"10px 0"
}}
/>
)}

<p><b>Age:</b> {data.age}</p>
<p><b>Religion:</b> {data.religion}</p>
<p><b>Caste:</b> {data.caste}</p>
<p><b>Height:</b> {data.height}</p>
<p><b>Location:</b> {data.location}</p>

<h3>Family Details</h3>

<p><b>Father:</b> {data.fatherName}</p>
<p><b>Mother:</b> {data.motherName}</p>
<p><b>Siblings:</b> {data.siblings}</p>

<h3>Education & Career</h3>

<p><b>Education:</b> {data.education}</p>
<p><b>Profession:</b> {data.profession}</p>
<p><b>Company:</b> {data.company}</p>

<h3>About</h3>

<p>{data.about}</p>

</div>

);
};

export default ClassicTemplate;