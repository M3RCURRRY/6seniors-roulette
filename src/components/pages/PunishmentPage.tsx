import React from "react";
import { IValues } from "../../types/types";
import ActionCard from "../layout/ActionCard/ActionCard";
import Configurator from "../layout/Configurator/Configurator";
import Roulette from "../layout/Roulette/Roulette";
import styles from "./Page.module.css";
import dataset from "../../store/dataset";
import { observer } from "mobx-react";

type PunishmentState = {
  punishments: IValues[];
};

const PunishmentPage = observer(
  class PunishmentPage extends React.Component<{}, PunishmentState> {
    state: PunishmentState = {
      punishments: dataset.getPunishments(),
    };

    addAction = (newTask: IValues) => {
      dataset.addPunishment(newTask);
    };

    removeAction = (id: number) => {
      dataset.removeBenefit(id);
    };

    render(): React.ReactNode {
      return (
        <div className={styles.mainLayout}>
          <Roulette values={this.state.punishments} />
          {this.state.punishments.map((item) => {
            return (
              <ActionCard
                key={item.tag + item.id}
                data={item}
                onRemove={this.removeAction}
              />
            );
          })}
          <Configurator
            values={this.state.punishments}
            onSubmit={this.addAction}
          />
        </div>
      );
    }
  }
);

export default PunishmentPage;
