import React from "react";
import { IValues } from "../../types/types";
import { punishments } from "../../utils/punishments";
import ActionCard from "../layout/ActionCard/ActionCard";
import Configurator from "../layout/Configurator/Configurator";
import Roulette from "../layout/Roulette/Roulette";
import styles from "./Page.module.css";
import dataset from "../../store/dataset";

type PunishmentState = {
  punishments: IValues[];
};

export default class PunishmentPage extends React.Component<{}, PunishmentState> {
  state: PunishmentState = {
    punishments: dataset.getPunishments(),
  };

  addAction = (
    tag: string,
    ru_description: string,
    en_description: string,
    color: string
  ) => {
    const nextId: number = this.state.punishments.length;
    const newAction: IValues = {
      id: nextId,
      tag: tag,
      ru_description: ru_description,
      en_description: en_description,
      color: color,
    };

    this.setState((prev) => ({
      punishments: [...prev.punishments, newAction],
    }));
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
        <Configurator values={this.state.punishments} onSubmit={this.addAction} />
      </div>
    );
  }
}
