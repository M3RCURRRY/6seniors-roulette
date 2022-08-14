import { IValues } from "../types/types";

export const punishments: IValues[] = [
  {
    id: 0,
    tag: "event",
    ru_description: "Дополнительная обязанность провести или поучаствовать в LC или R&D",
    en_description: "Additional duty to host or participate in LC or R&D",
    color: "red",
  },
  {
    id: 1,
    tag: "offtop",
    ru_description: "Провести оффтоп встречу",
    en_description: "You have to host offtop meeting",
    color: "green"
  },
  {
    id: 2,
    tag: "face-emoji",
    ru_description: "Добавить эмодзи на сервер со своим лицом",
    en_description: "You have to add emoji with your face",
    color: "purple"
  },
  {
    id: 3,
    tag: "yourself",
    ru_description: "Отправить последнее фото/видео с собой в 6seniors",
    en_description: "Send your last photo/video in 6seniors Discord",
    color: "black"
  },
  {
    id: 4,
    tag: "adds",
    ru_description: "Расклеить 10 листовок на столбах с рекламой 6seniors в своём городе",
    en_description: "Paste 10 flyers with advertising to 6seniors group in your city",
    color: "blue"
  }
];