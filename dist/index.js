"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var direction = react_native_1.I18nManager.isRTL ? "right" : "left";
var opDirection = react_native_1.I18nManager.isRTL ? "Left" : "Right";
var styles = react_native_1.StyleSheet.create({
    outerCircle: {
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    leftWrap: (_a = {
            position: "absolute",
            top: 0
        },
        _a["".concat(direction)] = 0,
        _a),
    halfCircle: (_b = {
            position: "absolute",
            top: 0,
            left: 0
        },
        _b["borderTop".concat(opDirection, "Radius")] = 0,
        _b["borderBottom".concat(opDirection, "Radius")] = 0,
        _b),
});
var percentToDegrees = function (percent) { return percent * 3.6; };
var PercentageCircle = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#f00" : _b, _c = _a.shadowColor, shadowColor = _c === void 0 ? "#999" : _c, _d = _a.bgColor, bgColor = _d === void 0 ? "#e9e9ef" : _d, radius = _a.radius, _e = _a.borderWidth, borderWidth = _e === void 0 ? 2 : _e, percent = _a.percent, _f = _a.children, children = _f === void 0 ? null : _f, _g = _a.containerStyle, containerStyle = _g === void 0 ? null : _g, _h = _a.outerCircleStyle, outerCircleStyle = _h === void 0 ? null : _h;
    var _j = react_1.default.useState(0), halfCircle1Degree = _j[0], setHalfCircle1Degree = _j[1];
    var _k = react_1.default.useState(0), halfCircle2Degree = _k[0], setHalfCircle2Degree = _k[1];
    var _l = react_1.default.useState({
        backgroundColor: color,
    }), halfCircle2Styles = _l[0], setHalfCircle2Styles = _l[1];
    react_1.default.useEffect(function () {
        var clampedPercent = Math.max(Math.min(100, percent), 0);
        var needHalfCircle2 = clampedPercent > 50;
        var halfCircle1Degree;
        var halfCircle2Degree;
        if (needHalfCircle2) {
            halfCircle1Degree = 180;
            halfCircle2Degree = percentToDegrees(clampedPercent);
        }
        else {
            halfCircle1Degree = percentToDegrees(clampedPercent);
            halfCircle2Degree = 0;
        }
        setHalfCircle1Degree(halfCircle1Degree);
        setHalfCircle2Degree(halfCircle2Degree);
        setHalfCircle2Styles({
            backgroundColor: needHalfCircle2 ? color : shadowColor,
        });
    }, [percent, color, shadowColor]);
    var renderHalfCircle = function (rotateDegrees, halfCircleStyles) {
        if (halfCircleStyles === void 0) { halfCircleStyles = {}; }
        return (react_1.default.createElement(react_native_1.View, { style: [
                styles.leftWrap,
                {
                    width: radius,
                    height: radius * 2,
                },
            ] },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.halfCircle,
                    __assign({ width: radius, height: radius * 2, borderRadius: radius, overflow: "hidden", transform: [
                            { translateX: radius / 2 },
                            { rotate: "".concat(rotateDegrees, "deg") },
                            { translateX: -radius / 2 },
                        ], backgroundColor: color }, halfCircleStyles),
                ] })));
    };
    var renderInnerCircle = function () {
        var radiusMinusBorder = radius - borderWidth;
        return (react_1.default.createElement(react_native_1.View, { style: [
                styles.innerCircle,
                {
                    width: radiusMinusBorder * 2,
                    height: radiusMinusBorder * 2,
                    borderRadius: radiusMinusBorder,
                    backgroundColor: bgColor,
                },
                containerStyle,
            ] }, children));
    };
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles.outerCircle,
            {
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
                backgroundColor: shadowColor,
            },
            outerCircleStyle,
        ] },
        renderHalfCircle(halfCircle1Degree),
        renderHalfCircle(halfCircle2Degree, halfCircle2Styles),
        renderInnerCircle()));
};
exports.default = PercentageCircle;
