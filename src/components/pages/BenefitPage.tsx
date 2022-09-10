import React from "react";
import { IValues } from "../../types/types";
import ActionCard from "../layout/ActionCard/ActionCard";
import Configurator from "../layout/Configurator/Configurator";
import Roulette from "../layout/Roulette/Roulette";
import styles from "./BenefitPage.module.css";
import dataset from "../../store/dataset";
import { observer } from "mobx-react";

type BenefitState = {
  benefits: IValues[];
};

const BenefitPage = observer(
  class BenefitPage extends React.Component<{}, BenefitState> {
    state: BenefitState = {
      benefits: dataset.getBenefits(),
    };

    addAction = (newTask: IValues) => {
      dataset.addBenefit(newTask);
    };

    removeAction = (id: number) => {
      dataset.removeBenefit(id);
    };

    render(): React.ReactNode {
      return (
        <div className={styles.mainLayout}>
          <div>
            <Roulette values={this.state.benefits} />
            <Configurator
              values={this.state.benefits}
              onSubmit={this.addAction}
            />
          </div>

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
