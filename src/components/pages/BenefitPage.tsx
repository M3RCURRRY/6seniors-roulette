import React from "react";
import { IValues } from "../../types/types";
import { benefits } from "../../utils/benefits";
import ActionCard from "../layout/ActionCard/ActionCard";
import Configurator from "../layout/Configurator/Configurator";
import Roulette from "../layout/Roulette/Roulette";
import styles from "./Page.module.css";
import dataset from "./../../store/dataset";
import { observer } from "mobx-react";

type BenefitState = {
  benefits: IValues[];
};

const BenefitPage = observer(
  class BenefitPage extends React.Component<{}, BenefitState> {
    state: BenefitState = {
      benefits: dataset.getBenefits(),
    };

    addAction = (
      tag: string,
      ru_description: string,
      en_description: string,
      color: string
    ) => {
      const nextId: number = this.state.benefits.length;
      const newAction: IValues = {
        id: nextId,
        tag: tag,
        ru_description: ru_description,
        en_description: en_description,
        color: color,
      };

      this.setState((prev) => ({
        benefits: [...prev.benefits, newAction],
      }));
    };

    removeAction = (id: number) => {
      dataset.removeBenefit(id);
    };

    render(): React.ReactNode {
      return (
        <div className={styles.mainLayout}>
          <Roulette values={this.state.benefits} />
          <div>
            {this.state.benefits.map((item) => {
              return (
                <ActionCard
                  key={item.tag + item.id}
                  data={item}
                  onRemove={this.removeAction}
                />
              );
            })}
            <Configurator
              values={this.state.benefits}
              onSubmit={this.addAction}
            />
          </div>
        </div>
      );
    }
  }
);

export default BenefitPage;

/*
{
  this.state.benefits.map(item => {
    return (
      <div key={item.id}>
        <b>{item.tag}</b>
        <br/>
        {item.ru_description}
        <br/>
        {item.en_description}
        <br/>
        <br/>
      </div>
    )
  })
}
*/
