import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { RouterOutputs } from "~/utils/api";
import { Emotion, EmotionData } from "~/utils/types";
import { Card } from "./Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  emotions: RouterOutputs["emotion"]["get"];
};

export const BarGraph: React.FC<Props> = ({ emotions }) => {
  return (
    <Card>
      <div className="mx-auto h-full">
        <Bar
          data={{
            labels: Emotion as unknown as string[],
            datasets: [
              {
                label: "Emotion Levels",
                data: Object.values(emotions.emotion) ?? [],
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
