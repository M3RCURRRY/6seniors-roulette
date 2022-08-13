import { benefits } from "../utils/benefits";
import { punishments } from "../utils/punishments";
import { IValues } from "../types/types";
import { makeAutoObservable } from "mobx";

export default class Dataset {
  private benefits: IValues[];
  private punishments: IValues[];

  constructor() {
    makeAutoObservable(this);
    this.benefits = benefits;
    this.punishments = punishments
  }

  getPunishments() {
    return this.punishments
  }

  getBenefits() {
    return this.benefits;
  }
}