import React from "react";
import { IValues } from "../../types/types";
import { benefits } from "../../utils/benefits";
import ActionCard from "../layout/ActionCard/ActionCard";
import Configurator from "../layout/Configurator/Configurator";

type BenefitState = {
  benefits: IValues[]
}

class BenefitPage extends React.Component<{}, BenefitState> {

  state: BenefitState = {
    benefits: benefits
  }

  addAction = (tag: string, ru_description: string, en_description: string) => {
    const nextId: number = this.state.benefits.length;
    const newAction: IValues = {
      id: nextId,
      tag: tag,
      ru_description: ru_description,
      en_description: en_description
    }

    this.setState((prev) => ({
      benefits: [...prev.benefits, newAction]
    }));
  }

  removeAction = (tag: string) => {
    const nextState = this.state.benefits.filter(item => item.tag !== tag);

    this.setState({
      benefits: nextState
    });
  }

  render(): React.ReactNode {
      return (
        <div>
          {
            this.state.benefits.map(item => {
              return <ActionCard key={item.tag + item.id} data={item} onRemove={this.removeAction}/>
            })
          }
          <Configurator values={this.state.benefits} onSubmit={this.addAction}/>
        </div>
      )
  }
}

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