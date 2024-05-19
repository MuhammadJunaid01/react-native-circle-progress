import React from "react";
import { StyleProp, ViewProps } from "react-native";
interface Props {
    color?: string;
    shadowColor?: string;
    bgColor?: string;
    radius: number;
    borderWidth?: number;
    percent: number;
    children?: React.ReactNode;
    containerStyle?: StyleProp<ViewProps>;
    outerCircleStyle?: StyleProp<ViewProps>;
}
declare const PercentageCircle: React.FC<Props>;
export default PercentageCircle;
