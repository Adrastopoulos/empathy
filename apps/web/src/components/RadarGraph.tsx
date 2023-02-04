import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { PolarArea } from "react-chartjs-2";
import { RouterOutputs } from "~/utils/api";
import { Emotion, EmotionData } from "~/utils/types";
import { Card } from "./Card";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

type Props = {
  emotions: RouterOutputs["emotion"]["get"];
};

export const RadarGraph: React.FC<Props> = ({ emotions }) => {
  return (
    <Card>
      <div>
        <PolarArea
          data={{
            labels: Emotion as unknown as string[],
            datasets: [
              {
                label: "Emotion Levels",
                data: Object.values(emotions.emotion),
                backgroundColor: "rgba(255, 99, 132, 0.1)",
                borderColor: Object.values(EmotionData).map(
                  ({ rgbColor }) => rgbColor
                ),
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </Card>
  );
};
