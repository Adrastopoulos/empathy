import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { RouterOutputs } from "~/utils/api";
import { Emotion, EmotionData } from "~/utils/types";
import { Card } from "./Card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

type Props = {
  emotions: RouterOutputs["emotion"]["get"];
};

export const HistoryLineGraph: React.FC<Props> = ({ emotions }) => {
  const [accumulatedEmotions, setAccumulatedEmotions] = React.useState<{
    [key in (typeof Emotion)[number]]: number[];
  }>({
    anger: [],
    disgust: [],
    fear: [],
    happy: [],
    sad: [],
    surprise: [],
    neutral: [],
  });

  React.useEffect(() => {
    const newAccumulatedEmotions = {
      anger: [...accumulatedEmotions.anger, emotions.emotion.anger],
      disgust: [...accumulatedEmotions.disgust, emotions.emotion.disgust],
      fear: [...accumulatedEmotions.fear, emotions.emotion.fear],
      happy: [...accumulatedEmotions.happy, emotions.emotion.happy],
      sad: [...accumulatedEmotions.sad, emotions.emotion.sad],
      surprise: [...accumulatedEmotions.surprise, emotions.emotion.surprise],
      neutral: [...accumulatedEmotions.neutral, emotions.emotion.neutral],
    };
    setAccumulatedEmotions(newAccumulatedEmotions);
  }, [emotions]);

  const data: ChartData<"bar"> = {
    labels: accumulatedEmotions.anger.map((_, index) => `Photo ${index + 1}`),
    datasets: Object.entries(EmotionData).map(([name, { rgbColor }]) => ({
      label: name,
      data: accumulatedEmotions[name as (typeof Emotion)[number]],
      backgroundColor: rgbColor,
      borderColor: rgbColor,
    })),
  };

  return (
    <Card>
      <div className="w-full text-accent">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};
