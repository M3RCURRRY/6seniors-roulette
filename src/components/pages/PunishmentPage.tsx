import React from "react";
import { IValues } from "../../types/types";
import { punishments } from "../../utils/punishments";

type PunishmentState = {
  punishments: IValues[]
}

class PunishmentPage extends React.Component<{}, PunishmentState> {

  state: PunishmentState = {
    punishments: punishments
  }

  addAction() {
    const id: number = punishments.length;
    
  }

  render(): React.ReactNode {
      return(
        <div>
          Test Punishments
        </div>
      )
  }
}

export default PunishmentPage;