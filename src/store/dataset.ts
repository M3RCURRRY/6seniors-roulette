import { benefits } from "../utils/benefits";
import { punishments } from "../utils/punishments";
import { IValues } from "../types/types";
import { makeAutoObservable } from "mobx";

export default new class Dataset {
  private benefits: IValues[];
  private punishments: IValues[];

  constructor() {
    makeAutoObservable(this);
    this.benefits = benefits;
    this.punishments = punishments;
  }

  getPunishments() {
    return this.punishments
  }

  getBenefits() {
    return this.benefits;
  }

  addPunishment(newPunishment: IValues) {
    punishments.push(newPunishment);
  }

  addBenefit(newBenefit: IValues) {
    benefits.push(newBenefit);
  }

  removePunishment(id: number) {
    for(let index in this.punishments) {
      if (this.punishments[index].id === id) {
        this.punishments.splice(+index, 1);
        break;
      }
    }
  }

  removeBenefit(id: number) {
    for(let index in this.benefits) {
      if (this.benefits[index].id === id) {
        this.benefits.splice(+index, 1);
        break;
      }
    }
  }
}