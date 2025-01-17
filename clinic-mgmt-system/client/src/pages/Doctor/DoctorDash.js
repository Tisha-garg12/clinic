import React, { useEffect, useState } from "react";
import styles from "../../styles/page/ReceptionistDash.module.css";
import DocNavBar from "../../components/Doctor/DocNavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DoctorDash() {
  const api = "http://localhost:1400";
  const initialData = {
    _id: "",
    name: "",
    email: "",
    password: "",
    age: 8,
    phno: "",
    gender: "",
    patConsult: [],
    __v: 0,
  };

  const [ localData,setLocalData] = useState({ data: { data: initialData } });
  const [data, setData] = useState([]);
  const [pat, setPat] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const temp = localStorage.getItem("docData");
      if (temp) {
        const parsedData = JSON.parse(temp);
        setLocalData((prevLocalData) => {
          if (JSON.stringify(prevLocalData) !== JSON.stringify(parsedData)) {
            return { data: parsedData };
          }
          return prevLocalData;
        });
        const fetchID = parsedData?.data?._id;
        if (fetchID) {
          const response = await axios.post(`${api}/api/docs/retdoc`, { id: fetchID });
          setData(response.data.data.patConsult);
          setPat(response.data.data.patConsult.length);
        }
      } else {
        navigate("/");
      }
    };

    fetchData();
  }, [navigate, api]);

  return (
    <>
      <DocNavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Dashboard</h1>
            <div className={styles.patAttend}>
              <h2>No. Of Patients: {pat}</h2>
            </div>
          </div>
          <br />
          <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
            All Patients And Doctor Records
          </h1>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name Of Patient</th>
                  <th>Ph No</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody className={styles.patient}>
                {data &&
                  data.map((item, index) => (
                    <tr key={index} className={styles.patDetails}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.phno}</td>
                      <td>{item.gender}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDash;
