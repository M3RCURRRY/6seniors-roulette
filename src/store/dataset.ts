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
    this.punishments.push(newPunishment);
  }

  addBenefit(newBenefit: IValues) {
    this.benefits.push(newBenefit);
  }

  removePunishment(id: number) {
    // Лаконичный и одновременно проблемный код
    // this.punishments = this.punishments.filter(item => item.id !== id);

    // Рабочее мракобесие
    for(let item in this.punishments) {
      if (this.punishments[item].id === id) {
        this.punishments.splice(+item, 1);
        break;
      }
    }
  }

  removeBenefit(id: number) {
    // Лаконичный и одновременно проблемный код
    // this.benefits = this.benefits.filter(item => item.id !== id);

    // Рабочее мракобесие
    for(let item in this.benefits) {
      if (this.benefits[item].id === id) {
        this.benefits.splice(+item, 1);
        break;
      }
    }
  }
}