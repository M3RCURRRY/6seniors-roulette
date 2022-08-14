import { values } from "mobx";
import React from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { IValues } from "../../../types/types";

type RouletteProps = {
  values: IValues[]
};

class Roulette extends React.Component<RouletteProps> {

  componentDidMount() {
    this.constructCanvas();
  }
  
  componentDidUpdate() {
    this.constructCanvas();
  }

  constructCanvas() {
    const canvas = document.getElementById("roulette") as HTMLCanvasElement;
    canvas.width = 650;
    canvas.height = 650;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const sectionsDegree = 2 * Math.PI * 1 / (this.props.values.length);


    this.drawPieSlice(ctx, 325,325, 325, 0, Math.PI*2, "#151515");

    let lastPoint = Math.PI * 3 / 2;
    for(let item of this.props.values) {
      this.drawPieSlice(ctx, 325, 325, 323, lastPoint, lastPoint + sectionsDegree, item.color);
      lastPoint += sectionsDegree;
    }
    this.drawPieSlice(ctx, 325,325,280, 0, Math.PI*2, "#151515");
    this.drawPieSlice(ctx, 325,325,278, 0, Math.PI*2, "#202020");
  }

  drawPieSlice(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: string ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }

  render(): React.ReactNode {
    return (
      <div>
        <canvas id="roulette"></canvas>
      </div>
    );
  }
}

export default Roulette;
