import React, { ChangeEvent, FormEvent } from "react";
import { IValues } from "../../../types/types";

type ConfiguratorProps = {
  values: IValues[];
  onSubmit: (tag: string, ru_description: string, en_description: string) => void;
}

type ConfiguratorState = {
  tag: string;
  ru_description: string;
  en_description: string
}

class Configurator extends React.Component<ConfiguratorProps, ConfiguratorState> {
  constructor(props: ConfiguratorProps) {
    super(props);
  }

  state: ConfiguratorState = {
    tag: "",
    ru_description: "",
    en_description: ""
  }

  inputHandler(e: ChangeEvent<HTMLInputElement>) {
    const value: number | string = e.target.value;
    switch(e.target.name) {
      case "tag":
        this.setState({
          tag: value
        })
        break;
      case "ru":
        this.setState({
          ru_description: value
        })
        break;
      case "en":
        this.setState({
          en_description: value
        })
        break;
    }
  }

  submitHandler(e: FormEvent) {
    e.preventDefault();
    this.props.onSubmit(this.state.tag, this.state.ru_description, this.state.en_description);
  }

  render(): React.ReactNode {
    return(
      <form onSubmit={(e) => this.submitHandler(e)}>
        <label>
          Tag:
          <input type="text" name="tag" value={this.state.tag} onChange={e => this.inputHandler(e)}/>
        </label>
        <label>
          Russian description:
          <input type="text" name="ru" value={this.state.ru_description} onChange={e => this.inputHandler(e)}/>
        </label>
        <label>
          English description:
          <input type="text" name="en" value={this.state.en_description} onChange={e => this.inputHandler(e)}/>
        </label>
        <input type="submit" value="Add action" />
      </form>
    )
  }
}

export default Configurator;