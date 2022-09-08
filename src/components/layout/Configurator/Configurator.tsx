import React, { ChangeEvent, FormEvent } from "react";
import { IValues } from "../../../types/types";
import styles from "./Configurator.module.css";
import dataset from "./../../../store/dataset";
import { observer } from "mobx-react";

type ConfiguratorProps = {
  values: IValues[];
  onSubmit: (
    newTask: IValues
  ) => void;
};

type ConfiguratorState = {
  tag: string;
  ru_description: string;
  en_description: string;
  color: string;
};

const Configurator = observer(
  class Configurator extends React.Component<
    ConfiguratorProps,
    ConfiguratorState
  > {
    constructor(props: ConfiguratorProps) {
      super(props);
    }

    state: ConfiguratorState = {
      tag: "",
      ru_description: "",
      en_description: "",
      color: "teal",
    };

    inputHandler(e: ChangeEvent<HTMLInputElement>) {
      const value: number | string = e.target.value;
      switch (e.target.name) {
        case "tag":
          this.setState({
            tag: value,
          });
          break;
        case "ru":
          this.setState({
            ru_description: value,
          });
          break;
        case "en":
          this.setState({
            en_description: value,
          });
          break;
        case "color":
          this.setState({
            color: value,
          });
          break;
      }
    }

    submitHandler(e: FormEvent) {
      e.preventDefault();
      const newValue: IValues = {
        id: dataset.getBenefits().at(-1)!.id + 1,
        tag: this.state.tag,
        ru_description: this.state.ru_description,
        en_description: this.state.en_description,
        color: this.state.color
      }
      this.props.onSubmit(newValue);
    }

    render(): React.ReactNode {
      return (
        <form onSubmit={(e) => this.submitHandler(e)} className={styles.layout}>
          <label>
            Tag:
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={(e) => this.inputHandler(e)}
            />
          </label>
          <label>
            Russian description:
            <input
              type="text"
              name="ru"
              value={this.state.ru_description}
              onChange={(e) => this.inputHandler(e)}
            />
          </label>
          <label>
            English description:
            <input
              type="text"
              name="en"
              value={this.state.en_description}
              onChange={(e) => this.inputHandler(e)}
            />
          </label>
          <label>
            Color:
            <input
              type="color"
              name="color"
              value={this.state.color}
              onChange={(e) => this.inputHandler(e)}
            />
          </label>
          <input type="submit" value="Add action" />
        </form>
      );
    }
  }
);

export default Configurator;
