import React from "react";
import { IValues } from "../../../types/types";

import styles from "./ActionCard.module.css";

type ActionCardProps = {
  data: IValues;
  onRemove: (tag: string) => void
}

class ActionCard extends React.Component<ActionCardProps> {
  removeHandler() {
    this.props.onRemove(this.props.data.tag);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.card} style={{background: this.props.data.color}}>
        <h3>{this.props.data.tag}</h3>
        <p>{this.props.data.ru_description}</p>
        <p>{this.props.data.en_description}</p>
        <button onClick={() => this.removeHandler()}>Remove action</button>
      </div>
    );
  }
}

export default ActionCard;
