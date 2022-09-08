import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./IndexPage.module.css";

export default class IndexPage extends React.Component {
  render(): React.ReactNode {
    return (
      <Container>
        <div className={styles.pageLayout}>
          <Typography variant="h5" color="white">
            Choose roulette mode
          </Typography>
          <div className={styles.buttonsLayout}>
            <Link to="benefits" style={{ textDecoration: "none", margin: "5px" }}>
              <Button variant="contained" color={"success"}>
                Benefits Page
              </Button>
            </Link>
            <Link to="punishments" style={{ textDecoration: "none", margin: "5px" }}>
              <Button variant="contained" color={"error"}>
                Punishment Page
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}
