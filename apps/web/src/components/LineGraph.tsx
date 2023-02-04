import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { RouterOutputs } from "~/utils/api";
import { Emotion, EmotionData } from "~/utils/types";
import { Card } from "./Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  emotions: RouterOutputs["emotion"]["get"];
};

export const LineGraph: React.FC<Props> = ({ emotions }) => {
  return (
    <Card>
      <div className="w-full text-accent">
        <Line
          data={{
            labels: Emotion as unknown as string[],
            datasets: [
              {
                fill: true,
                label: "Emotion Levels",
                data: Object.values(emotions.emotion),
                backgroundColor: Object.values(EmotionData).map(
                  ({ rgbColor }) => rgbColor
                ),
              },
            ],
          }}
        />
      </div>
    </Card>
  );
};
