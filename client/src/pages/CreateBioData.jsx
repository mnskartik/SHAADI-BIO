import React, { useState , useRef } from "react";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/BiodataForm.css";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";



const CreateBiodata = () => {
  const { id } = useParams();
  const navigate = useNavigate();

useEffect(() => {

  const fetchBiodata = async () => {

    if(!id) return;

    const docRef = doc(db,"biodatas",id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      const data = docSnap.data();

      setFormData({
        ...formData,
        ...data
      });

      if(data.photo){
        setPhotoPreview(data.photo);
      }
    }

  };

  fetchBiodata();

},[id]);

const saveBiodata = async () => {

  try{

    if(id){

      // UPDATE EXISTING
      await updateDoc(doc(db,"biodatas",id),{
        ...formData,
        updatedAt:new Date()
      });

      alert("Biodata updated successfully");

    }else{

      // CREATE NEW
      await addDoc(collection(db,"biodatas"),{
        ...formData,
        createdAt:new Date()
      });

      alert("Biodata saved successfully");

    }

    navigate("/dashboard");

  }catch(error){

    console.error(error);
    alert("Error saving biodata");

  }

};
const previewRef = useRef();
const [theme, setTheme] = useState({
  primaryColor: "#6b2c1f",
  fontFamily: "serif"
});

  const [template, setTemplate] = useState("classic");

  const [formData, setFormData] = useState({
    name:"",
    dob:"",
    age:"",
    gender:"",
    religion:"",
    caste:"",
    height:"",
    maritalStatus:"",
    location:"",
    about:"",

    fatherName:"",
    fatherOccupation:"",
    motherName:"",
    motherOccupation:"",
    siblings:"",
    familyType:"",

    education:"",
    profession:"",
    company:"",
    income:"",
    workLocation:""
  });

  const [photoPreview,setPhotoPreview] = useState(null);

  const calculateAge = (dob)=>{
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();

    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }

    return age;
  }

  const handleChange = (e)=>{
    const {name,value} = e.target;

    if(name === "dob"){
      const age = calculateAge(value);
      setFormData({...formData,dob:value,age});
    }else{
      setFormData({...formData,[name]:value});
    }
  }

  const handlePhotoUpload = (e)=>{
    const file = e.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onloadend = ()=>{
        setPhotoPreview(reader.result);
      }

      reader.readAsDataURL(file);
    }
  }
  const downloadPDF = async () => {

  const element = previewRef.current;

  const canvas = await html2canvas(element);

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p","mm","a4");

  const imgWidth = 190;

  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData,"PNG",10,10,imgWidth,imgHeight);

  pdf.save("shaadi-biodata.pdf");

};

  return (

    <div className="biodata-layout">

      {/* LEFT SIDE FORM */}

      <div className="form-section">

        <h1>Create Biodata</h1>
        <h3>Customize Template</h3>

<label>Primary Color</label>
<input
type="color"
value={theme.primaryColor}
onChange={(e)=>setTheme({...theme,primaryColor:e.target.value})}
/>

<label>Font Style</label>

<select
onChange={(e)=>setTheme({...theme,fontFamily:e.target.value})}
>

<option value="serif">Classic</option>
<option value="sans-serif">Modern</option>
<option value="cursive">Elegant</option>

</select>

        <select
        className="template-select"
        onChange={(e)=>setTemplate(e.target.value)}
        >
          <option value="classic">Classic Template</option>
          <option value="modern">Modern Template</option>
        </select>

        <input name="name" placeholder="Full Name"  value={formData.name}    onChange={handleChange}/>
        <input type="date" name="dob"  value={formData.dob} onChange={handleChange}/>
        <input name="age" value={formData.age} readOnly placeholder="Age"/>
        <input name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange}/>
        <input name="caste" placeholder="Caste" value={formData.caste} onChange={handleChange}/>
        <input name="height" placeholder="Height" value={formData.height} onChange={handleChange}/>
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange}/>

        <textarea name="about" placeholder="About" onChange={handleChange}/>

        <h3>Family</h3>

        <input name="fatherName" placeholder="Father Name" onChange={handleChange}/>
        <input name="motherName" placeholder="Mother Name" onChange={handleChange}/>
        <input name="siblings" placeholder="Siblings" onChange={handleChange}/>

        <h3>Career</h3>

        <input name="education" placeholder="Education" onChange={handleChange}/>
        <input name="profession" placeholder="Profession" onChange={handleChange}/>
        <input name="company" placeholder="Company" onChange={handleChange}/>

        <h3>Photo</h3>

        <input type="file" onChange={handlePhotoUpload}/>

        <button className="save-btn" onClick={saveBiodata}>
  {id ? "Update Biodata" : "Save Biodata"}
</button>

      </div>


      {/* RIGHT SIDE PREVIEW */}

      <div className="preview-section">

  <div ref={previewRef}>

  {template === "classic"
  ? <ClassicTemplate
data={formData}
photo={photoPreview}
theme={theme}
/>
  : <ModernTemplate
data={formData}
photo={photoPreview}
theme={theme}
/>}

  </div>

  <button className="download-btn" onClick={downloadPDF}>
    Download PDF
  </button>

</div>

    </div>
  );
};

export default CreateBiodata;