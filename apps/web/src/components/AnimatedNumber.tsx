import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

type Props = {
  number: number;
};

export const AnimatedNumber: React.FC<Props> = ({ number }) => {
  return (
    <AnimatedNumbers
      includeComma
      animateToNumber={number}
      configs={[
        { mass: 1, tension: 220, friction: 50 },
        { mass: 1, tension: 180, friction: 65 },
        { mass: 1, tension: 280, friction: 45 },
        { mass: 1, tension: 180, friction: 65 },
        { mass: 1, tension: 260, friction: 50 },
        { mass: 1, tension: 210, friction: 90 },
      ]}
    />
  );
};
