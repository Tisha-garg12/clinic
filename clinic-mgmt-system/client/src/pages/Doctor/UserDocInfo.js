import React, { useEffect, useState } from "react";
import DocNavBar from "../../components/Doctor/DocNavBar";
import styles from "../../styles/page/UserInfo.module.css";
import { useNavigate } from "react-router-dom";

const UserDocInfo = () => {
  const navigate = useNavigate();
  const [receptData, setReceptData] = useState({});

  useEffect(() => {
    const localData = localStorage.getItem("docData");
    if (!localData) return navigate("/");
    const parsedData = JSON.parse(localData);
    console.log("local data", parsedData);
    setReceptData(parsedData);
  }, [navigate]);

  return (
    <>
      <DocNavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.subHead}>Doctor</p>
          <h2>Name: {receptData.data?.name}</h2>
          <h2>Age: {receptData.data?.age}</h2>
          <h2>Gender: {receptData.data?.gender}</h2>
          <h2>Ph No: {receptData.data?.phno}</h2>
          <h2>Email: {receptData.data?.email}</h2>
        </div>
      </div>
    </>
  );
};

export default UserDocInfo;
