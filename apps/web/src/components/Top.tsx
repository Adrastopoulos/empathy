import React from "react";
import { FaPercentage } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { RouterOutputs } from "~/utils/api";
import { Emotion } from "~/utils/types";
import { AnimatedNumber } from "./AnimatedNumber";
import { Card } from "./Card";

type Props = {
  emotions: RouterOutputs["emotion"]["get"];
};

export const Top: React.FC<Props> = ({ emotions }) => {
  const [topEmotion, setTopEmotion] = React.useState<{
    emotion: number;
    name: (typeof Emotion)[number];
  } | null>(null);

  React.useEffect(() => {
    const topEmotionReduced = Object.values(emotions.emotion).reduce(
      (prev, curr, index) => {
        if (curr > prev.emotion) {
          return {
            emotion: curr,
            name: Emotion[index],
          };
        }
        return prev;
      },
      { emotion: 0, name: Emotion[0] }
    );
    if (JSON.stringify(topEmotionReduced) !== JSON.stringify(topEmotion))
      setTopEmotion(topEmotionReduced);
  }, [emotions]);

  // Play sound of new top emotion
  React.useEffect(() => {
    if (topEmotion) {
      new Audio("/audio/" + topEmotion.name + ".mp3").play();
    }
  }, [topEmotion]);

  return (
    <Card>
      <h1 className="text-2xl my-5">
        Dominant Emotion:{" "}
        <span className="text-secondary tracking-tighter text-3xl uppercase font-bold">
          {emotions.dominant_emotion}
        </span>
      </h1>
      <table className="table table-zebra w-full table-fixed">
        <thead>
          <tr>
            <th />
            <th>Ranking</th>
            <th>
              <FaPercentage />
            </th>
            <th>Emotion</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(emotions.emotion)
            .map((emotion, index) => ({
              emotion,
              name: Emotion[index],
            }))
            .sort((a, b) => b.emotion - a.emotion)
            .slice(0, 3)
            .map((emotion, index) => (
              <tr key={index}>
                <td>
                  <button
                    className="btn btn-ghost btn-square"
                    onClick={() => {
                      new Audio("/audio/" + emotion.name + ".mp3").play();
                    }}
                  >
                    <HiSpeakerWave className="w-6 h-6" />
                  </button>
                </td>
                <td className="font-mono text-xl">{index + 1}</td>
                <td>
                  <span className="font-bold text-lg">
                    <AnimatedNumber number={emotion.emotion} />
                  </span>
                </td>
                <td>
                  <span className="uppercase font-bold">{emotion.name}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};
