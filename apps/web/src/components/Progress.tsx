import React from "react";
import { RouterOutputs } from "~/utils/api";
import { Emotion, EmotionData } from "~/utils/types";
import { AnimatedNumber } from "./AnimatedNumber";
import { Card } from "./Card";

type Props = {
  emotions: RouterOutputs["emotion"]["get"];
};

export const Progress: React.FC<Props> = ({ emotions }) => {
  return (
    <Card>
      <div className="flex flex-col justify-between h-full gap-4">
        {Object.values(emotions.emotion).map((emotion, index) => (
          <div key={index} className="flex flex-col relative">
            <div className="flex justify-between">
              <span className="font-bold uppercase text-xl">
                {EmotionData[Emotion[index]].icon}
                {Emotion[index]}
              </span>
              <div className="flex gap-1 items-center">
                <span className="font-bold text-xl">
                  <AnimatedNumber number={emotion} />
                </span>
                <span className="font-light">%</span>
              </div>
            </div>
            <div className="h-3 relative rounded-full overflow-hidden">
              <div className="w-full h-full bg-base-300 absolute" />
              <div
                className="h-full bg-accent absolute rounded-full transition-all duration-1000"
                style={{
                  width: `${emotion}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
