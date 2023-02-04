import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { RouterOutputs } from "~/utils/api";
import { Emotion, EmotionData } from "~/utils/types";
import { Card } from "./Card";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  emotions: RouterOutputs["emotion"]["get"];
};

export const DoughnutGraph: React.FC<Props> = ({ emotions }) => {
  return (
    <Card>
      <div className="w-full">
        <Doughnut
          data={{
            labels: Emotion as unknown as string[],
            datasets: [
              {
                label: "Emotion Levels",
                data: Object.values(emotions.emotion),
                backgroundColor: Object.values(EmotionData).map(
                  ({ rgbColor }) => rgbColor
                ),
                hoverOffset: 1,
              },
            ],
          }}
        />
      </div>
    </Card>
  );
};
