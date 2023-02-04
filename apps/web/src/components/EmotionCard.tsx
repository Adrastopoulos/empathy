import clsx from "clsx";
import { Emotion, EmotionData } from "~/utils/types";
import { AnimatedNumber } from "./AnimatedNumber";

type Props = {
  emotion: (typeof Emotion)[number];
  value: number;
};

export const EmotionCard: React.FC<Props> = ({ emotion, value }) => {
  return (
    <div
      className={clsx(
        EmotionData[emotion].color,
        "rounded-md bg-opacity-90 p-3 text-primary-content w-full gap-3 flex flex-col min-w-[256px] flex-1"
      )}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="text-opacity-70">{emotion}</div>
          <span className="font-bold text-lg flex gap-1">
            <AnimatedNumber number={value} />%
          </span>
        </div>
        <div className="text-5xl">{EmotionData[emotion].icon}</div>
      </div>
      <div className="w-full flex justify-between">
        <div className="text-xs font-light text-opacity-50">
          {EmotionData[emotion].description}
        </div>
      </div>
    </div>
  );
};
