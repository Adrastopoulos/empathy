export const Emotion = [
  "anger",
  "disgust",
  "fear",
  "happy",
  "neutral",
  "sad",
  "surprise",
] as const;

export const EmotionData: Record<
  (typeof Emotion)[number],
  {
    icon: string;
    color: string;
    rgbColor: string;
    description: string;
  }
> = {
  anger: {
    icon: "😡",
    color: "bg-red-500",
    rgbColor: "rgb(239 68 68)",
    description: "Anger is a strong feeling of displeasure and hostility.",
  },
  disgust: {
    icon: "🤢",
    color: "bg-green-500",
    rgbColor: "rgb(34 197 94)",
    description: "Disgust is a feeling of intense dislike.",
  },
  fear: {
    icon: "😨",
    color: "bg-purple-500",
    rgbColor: "rgb(168 85 247)",
    description:
      "Fear is induced by a perceived threat, which causes a change in behavior.",
  },
  happy: {
    icon: "😃",
    color: "bg-yellow-500",
    rgbColor: "rgb(234 179 8)",
    description:
      "Happiness is a feeling or state of well-being and contentment.",
  },
  neutral: {
    icon: "😐",
    color: "bg-gray-500",
    rgbColor: "rgb(107 114 128)",
    description: "Neutral is a state of not feeling or showing much emotion.",
  },
  sad: {
    icon: "😢",
    color: "bg-blue-500",
    rgbColor: "rgb(59 130 246)",
    description: "Sadness is a mental state of being sad.",
  },
  surprise: {
    icon: "😮",
    color: "bg-pink-500",
    rgbColor: "rgb(236 72 153)",
    description: "Surprise is a feeling of being shocked or surprised.",
  },
};
