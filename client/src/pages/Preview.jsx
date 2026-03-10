import React, { useEffect, useState, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

import ClassicTemplate from "../templates/ClassicTemplate";


import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Preview = () => {

  const { id } = useParams();
  const [data,setData] = useState(null);

  const previewRef = useRef();

  useEffect(()=>{

    const fetchData = async ()=>{

      const docRef = doc(db,"biodatas",id);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        setData(docSnap.data());
      }

    };

    fetchData();

  },[id]);

  const downloadPDF = async () => {

    const canvas = await html2canvas(previewRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p","mm","a4");

    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData,"PNG",10,10,imgWidth,imgHeight);

    pdf.save("shaadi-biodata.pdf");

  };

  if(!data) return <h2>Loading...</h2>;

  return(

    <div style={{padding:"40px"}}>

      <div ref={previewRef}>

        <ClassicTemplate data={data} />

      </div>

      <button onClick={downloadPDF}>
        Download PDF
      </button>

    </div>

  );

};

export default Preview;