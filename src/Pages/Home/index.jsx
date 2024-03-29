import React from "react";
import Card from "../../Components/Card";
import styles from "./Home.module.css";
import Layout from "../../Components/Layout";

function Home() {
  return (
    <div classname={styles.pag}>
      <Layout>
        <h1>Insurance Company Event report</h1>
        <div className={styles.firstLine}>
          <Card
            image="./assets/forklifts.jpg"
            title="Equipment Mobile"
            navLink="/mobile-equipment"
          />
          <Card
            image="./assets/incidentEquipmentMobile.jpg"
            title="Equipment Mobile incident"
            navLink="/incident-mobile-equipment"
          />
        </div>
        <div className={styles.secondLine}>
          <Card
            image="./assets/ThirdParty.jpg"
            title="Damage to a Third Party"
            navLink="/damage-Third"
          />
          <Card
            image="./assets/incidentAutomobile.jpg"
            title="Incident Automobile"
            navLink="/incident-automobile"
          />
        </div>
        <div className={styles.tirthLine}>
          <Card
            image="./assets/StaffIncident.jpg"
            title="Staff Incident"
            navLink="/staff-incident"
          />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
