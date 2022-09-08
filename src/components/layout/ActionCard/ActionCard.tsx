import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { IValues } from "../../../types/types";

import styles from "./ActionCard.module.css";

type ActionCardProps = {
  data: IValues;
  onRemove: (id: number) => void;
};

class ActionCard extends React.Component<ActionCardProps> {
  removeHandler() {
    this.props.onRemove(this.props.data.id);
  }

  render(): React.ReactNode {
    return (
      <Card sx={{ maxWidth: 350, m: "10px" }}>
        <CardActionArea>
          <div
            className={styles.indicator}
            style={{ backgroundColor: this.props.data.color }}
          />
          <CardContent sx={{backgroundColor: "#181818", color: "#fff"}}>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center"}}>
              {this.props.data.tag}
            </Typography>
            <Typography variant="body2">
              {this.props.data.ru_description}
            </Typography>
            <br/>
            <Typography variant="body2">
              {this.props.data.en_description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{backgroundColor: "#181818"}}>
          <Button size="small" variant="outlined" color="error" onClick={() => this.removeHandler()}>
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ActionCard;

/*
<div className={styles.card} style={{background: this.props.data.color}}>
        <h3>{this.props.data.tag}</h3>
        <p>{this.props.data.ru_description}</p>
        <p>{this.props.data.en_description}</p>
        <button onClick={() => this.removeHandler()}>Remove action</button>
      </div>
*/
