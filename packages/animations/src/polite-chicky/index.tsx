import { useLottie } from "lottie-react";
import { AnimateComponentProps } from "../props";
import animation from "./lottie.json";

export const PoliteChicky: React.FC<AnimateComponentProps> = ({
  height,
  width,
}) => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options, {
    width,
    height,
  });

  return <>{View}</>;
};
