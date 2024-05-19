import React from "react";
import {
  StyleSheet,
  View,
  I18nManager,
  StyleProp,
  ViewProps,
} from "react-native";

const direction = I18nManager.isRTL ? "right" : "left";
const opDirection = I18nManager.isRTL ? "Left" : "Right";
const styles = StyleSheet.create({
  outerCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  leftWrap: {
    position: "absolute",
    top: 0,
    [`${direction}`]: 0,
  },
  halfCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    [`borderTop${opDirection}Radius`]: 0,
    [`borderBottom${opDirection}Radius`]: 0,
  },
});

const percentToDegrees = (percent: number) => percent * 3.6;

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

const PercentageCircle: React.FC<Props> = ({
  color = "#f00",
  shadowColor = "#999",
  bgColor = "#e9e9ef",
  radius,
  borderWidth = 2,
  percent,
  children = null,
  containerStyle = null,
  outerCircleStyle = null,
}) => {
  const [halfCircle1Degree, setHalfCircle1Degree] = React.useState<number>(0);
  const [halfCircle2Degree, setHalfCircle2Degree] = React.useState<number>(0);
  const [halfCircle2Styles, setHalfCircle2Styles] = React.useState({
    backgroundColor: color,
  });

  React.useEffect(() => {
    const clampedPercent = Math.max(Math.min(100, percent), 0);
    const needHalfCircle2 = clampedPercent > 50;
    let halfCircle1Degree;
    let halfCircle2Degree;

    if (needHalfCircle2) {
      halfCircle1Degree = 180;
      halfCircle2Degree = percentToDegrees(clampedPercent);
    } else {
      halfCircle1Degree = percentToDegrees(clampedPercent);
      halfCircle2Degree = 0;
    }

    setHalfCircle1Degree(halfCircle1Degree);
    setHalfCircle2Degree(halfCircle2Degree);
    setHalfCircle2Styles({
      backgroundColor: needHalfCircle2 ? color : shadowColor,
    });
  }, [percent, color, shadowColor]);

  const renderHalfCircle = (rotateDegrees: number, halfCircleStyles = {}) => {
    return (
      <View
        style={[
          styles.leftWrap,
          {
            width: radius,
            height: radius * 2,
          },
        ]}
      >
        <View
          style={[
            styles.halfCircle,
            {
              width: radius,
              height: radius * 2,
              borderRadius: radius,
              overflow: "hidden",
              transform: [
                { translateX: radius / 2 },
                { rotate: `${rotateDegrees}deg` },
                { translateX: -radius / 2 },
              ],
              backgroundColor: color,
              ...halfCircleStyles,
            },
          ]}
        />
      </View>
    );
  };

  const renderInnerCircle = () => {
    const radiusMinusBorder = radius - borderWidth;
    return (
      <View
        style={[
          styles.innerCircle,
          {
            width: radiusMinusBorder * 2,
            height: radiusMinusBorder * 2,
            borderRadius: radiusMinusBorder,
            backgroundColor: bgColor,
          },
          containerStyle,
        ]}
      >
        {children}
      </View>
    );
  };

  return (
    <View
      style={[
        styles.outerCircle,
        {
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          backgroundColor: shadowColor,
        },
        outerCircleStyle,
      ]}
    >
      {renderHalfCircle(halfCircle1Degree)}
      {renderHalfCircle(halfCircle2Degree, halfCircle2Styles)}
      {renderInnerCircle()}
    </View>
  );
};

export default PercentageCircle;
