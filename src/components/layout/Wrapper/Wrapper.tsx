import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Wrapper.module.css";

class Wrapper extends React.Component {
  render(): React.ReactNode {
      return (
        <div className={styles.wrapper}>
          <Header/>
          <Outlet/>
        </div>
      )
  }
}

export default Wrapper;