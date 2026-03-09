import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {

  const [biodatas, setBiodatas] = useState([]);
  const navigate = useNavigate();

  const fetchBiodatas = async () => {

    const snapshot = await getDocs(collection(db, "biodatas"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setBiodatas(data);
  };

  useEffect(() => {
    fetchBiodatas();
  }, []);

  const deleteBiodata = async (id) => {

    if(window.confirm("Delete this biodata?")){

      await deleteDoc(doc(db, "biodatas", id));

      fetchBiodatas();
    }

  };

  return (

    <div className="dashboard-container">

      <h1>Your Saved Biodatas</h1>

      <button
      className="create-btn"
      onClick={() => navigate("/create-biodata")}
      >
        + Create New Biodata
      </button>

      <div className="biodata-grid">

        {biodatas.map((bio) => (

          <div className="biodata-card" key={bio.id}>

            <h3>{bio.name}</h3>

            <p><b>Age:</b> {bio.age}</p>

            <p><b>Profession:</b> {bio.profession}</p>

            <p><b>Location:</b> {bio.location}</p>

            <div className="card-buttons">

              <button
              onClick={() => navigate(`/edit/${bio.id}`)}
              >
                Edit
              </button>

              <button
              onClick={() => deleteBiodata(bio.id)}
              className="delete-btn"
              >
                Delete
              </button>
              <button
onClick={() => navigate(`/preview/${bio.id}`)}
>
Download PDF
</button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Dashboard;