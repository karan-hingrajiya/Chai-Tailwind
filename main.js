const elements = document.querySelectorAll("*");

const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
};

const colors = {
  red: {
    defaultCol: "#ef4444",
    50: "oklch(97.1% 0.013 17.38)",
    100: "oklch(93.6% 0.032 17.717)",
    200: "oklch(88.5% 0.062 18.334)",
    300: "oklch(80.8% 0.114 19.571)",
    400: "oklch(70.4% 0.191 22.216)",
    500: "oklch(63.7% 0.237 25.331)",
    600: "oklch(57.7% 0.245 27.325)",
    700: "oklch(50.5% 0.213 27.518)",
    800: "oklch(44.4% 0.177 26.899)",
    900: "oklch(39.6% 0.141 25.723)",
  },
  blue: {
    defaultCol: "#3b82f6",
    50: "oklch(97.0% 0.014 254.604)",
    100: "oklch(93.2% 0.032 255.585)",
    200: "oklch(88.2% 0.059 254.128)",
    300: "oklch(80.9% 0.105 251.813)",
    400: "oklch(70.7% 0.165 254.624)",
    500: "oklch(62.3% 0.214 259.815)",
    600: "oklch(54.6% 0.245 262.881)",
    700: "oklch(48.8% 0.243 264.376)",
    800: "oklch(42.4% 0.199 265.638)",
    900: "oklch(37.9% 0.146 265.522)",
  },
  green: {
    defaultCol: "#22c55e",
    50: "oklch(98.2% 0.018 155.826)",
    100: "oklch(96.2% 0.044 156.743)",
    200: "oklch(92.5% 0.084 155.995)",
    300: "oklch(87.1% 0.150 154.449)",
    400: "oklch(79.2% 0.209 151.711)",
    500: "oklch(72.3% 0.219 149.579)",
    600: "oklch(62.7% 0.194 149.214)",
    700: "oklch(52.7% 0.154 150.069)",
    800: "oklch(44.8% 0.119 151.328)",
    900: "oklch(39.3% 0.095 152.535)",
  },
  yellow: {
    defaultCol: "#eab308",
    50: "oklch(98.7% 0.026 102.212)",
    100: "oklch(97.3% 0.071 103.193)",
    200: "oklch(94.5% 0.129 101.540)",
    300: "oklch(90.5% 0.182 98.111)",
    400: "oklch(85.2% 0.199 91.936)",
    500: "oklch(79.5% 0.184 86.047)",
    600: "oklch(68.1% 0.162 75.834)",
    700: "oklch(55.4% 0.135 66.442)",
    800: "oklch(47.6% 0.114 61.907)",
    900: "oklch(42.1% 0.095 57.708)",
  },
  purple: {
    defaultCol: "#a855f7",
    50: "oklch(97.7% 0.014 308.299)",
    100: "oklch(94.6% 0.033 307.061)",
    200: "oklch(90.2% 0.063 306.703)",
    300: "oklch(82.7% 0.119 306.383)",
    400: "oklch(71.4% 0.203 305.504)",
    500: "oklch(62.7% 0.265 303.900)",
    600: "oklch(55.8% 0.288 302.321)",
    700: "oklch(49.6% 0.265 301.924)",
    800: "oklch(43.8% 0.218 303.724)",
    900: "oklch(38.1% 0.176 304.987)",
  },
  pink: {
    defaultCol: "#ec4899",
    50: "oklch(97.1% 0.014 343.198)",
    100: "oklch(94.8% 0.028 342.258)",
    200: "oklch(89.9% 0.061 343.231)",
    300: "oklch(82.3% 0.120 346.018)",
    400: "oklch(71.8% 0.202 349.761)",
    500: "oklch(65.6% 0.241 354.308)",
    600: "oklch(59.2% 0.249 0.584)",
    700: "oklch(52.5% 0.223 3.958)",
    800: "oklch(45.9% 0.187 3.815)",
    900: "oklch(40.8% 0.153 2.432)",
  },
  orange: {
    defaultCol: "#f97316",
    50: "oklch(98.0% 0.016 73.684)",
    100: "oklch(95.4% 0.038 75.164)",
    200: "oklch(90.1% 0.076 70.697)",
    300: "oklch(83.7% 0.128 66.290)",
    400: "oklch(75.0% 0.183 55.934)",
    500: "oklch(70.5% 0.213 47.604)",
    600: "oklch(64.6% 0.222 41.116)",
    700: "oklch(55.3% 0.195 38.402)",
    800: "oklch(47.0% 0.157 37.304)",
    900: "oklch(40.8% 0.123 38.172)",
  },
  gray: {
    defaultCol: "#6b7280",
    50: "oklch(98.5% 0.002 247.839)",
    100: "oklch(96.7% 0.003 264.542)",
    200: "oklch(92.8% 0.006 264.531)",
    300: "oklch(87.2% 0.010 258.338)",
    400: "oklch(70.7% 0.022 261.325)",
    500: "oklch(55.1% 0.023 264.364)",
    600: "oklch(44.6% 0.019 264.436)",
    700: "oklch(37.3% 0.015 264.436)",
    800: "oklch(27.8% 0.010 264.364)",
    900: "oklch(21.0% 0.006 264.364)",
  },
  white: {
    defaultCol: "#ffffff",
  },
  black: {
    defaultCol: "#000000",
  },
  teal: {
    defaultCol: "#14b8a6",
    50: "oklch(97.3% 0.017 180.7)",
    100: "oklch(94.9% 0.041 181.6)",
    200: "oklch(90.2% 0.078 182.0)",
    300: "oklch(83.1% 0.142 182.9)",
    400: "oklch(74.4% 0.198 184.1)",
    500: "oklch(68.3% 0.220 185.2)",
    600: "oklch(59.9% 0.210 186.0)",
    700: "oklch(50.5% 0.170 187.0)",
    800: "oklch(42.1% 0.140 188.5)",
    900: "oklch(37.1% 0.113 191.3)",
  },
  indigo: {
    defaultCol: "#6366f1",
    50: "oklch(97.4% 0.013 272.5)",
    100: "oklch(94.5% 0.031 272.3)",
    200: "oklch(89.7% 0.060 271.9)",
    300: "oklch(82.7% 0.111 272.1)",
    400: "oklch(72.5% 0.182 273.5)",
    500: "oklch(63.5% 0.238 273.8)",
    600: "oklch(55.2% 0.265 272.9)",
    700: "oklch(49.0% 0.257 271.4)",
    800: "oklch(42.9% 0.211 271.4)",
    900: "oklch(38.8% 0.168 272.6)",
  },
  sky: {
    defaultCol: "#0ea5e9",
    50: "oklch(97.8% 0.015 236.0)",
    100: "oklch(94.6% 0.039 237.5)",
    200: "oklch(89.5% 0.075 235.1)",
    300: "oklch(82.4% 0.145 233.9)",
    400: "oklch(73.4% 0.213 232.7)",
    500: "oklch(68.4% 0.232 231.6)",
    600: "oklch(59.7% 0.230 231.6)",
    700: "oklch(50.6% 0.179 232.4)",
    800: "oklch(42.3% 0.145 233.8)",
    900: "oklch(37.5% 0.112 236.0)",
  },
  slate: {
    defaultCol: "#64748b",
    50: "oklch(98.5% 0.002 264.4)",
    100: "oklch(96.7% 0.003 264.5)",
    200: "oklch(92.8% 0.005 264.8)",
    300: "oklch(87.7% 0.009 265.2)",
    400: "oklch(77.3% 0.018 265.9)",
    500: "oklch(63.0% 0.035 265.5)",
    600: "oklch(49.6% 0.031 265.5)",
    700: "oklch(40.6% 0.024 265.5)",
    800: "oklch(30.5% 0.016 264.1)",
    900: "oklch(23.3% 0.009 264.1)",
  },
  amber: {
    defaultCol: "#f59e0b",
    50: "oklch(97.9% 0.020 82.7)",
    100: "oklch(95.8% 0.054 82.9)",
    200: "oklch(91.6% 0.112 81.9)",
    300: "oklch(86.4% 0.168 79.9)",
    400: "oklch(79.0% 0.219 75.5)",
    500: "oklch(71.4% 0.239 68.1)",
    600: "oklch(62.2% 0.215 51.3)",
    700: "oklch(51.1% 0.165 42.5)",
    800: "oklch(42.7% 0.132 36.7)",
    900: "oklch(37.1% 0.107 32.3)",
  },
  rose: {
    defaultCol: "#f43f5e",
    50: "oklch(97.2% 0.013 354.4)",
    100: "oklch(94.7% 0.031 353.9)",
    200: "oklch(90.0% 0.065 354.3)",
    300: "oklch(82.4% 0.130 355.5)",
    400: "oklch(71.5% 0.215 359.9)",
    500: "oklch(62.0% 0.280 3.5)",
    600: "oklch(56.4% 0.270 7.3)",
    700: "oklch(49.0% 0.237 8.5)",
    800: "oklch(42.0% 0.193 9.3)",
    900: "oklch(37.4% 0.153 10.3)",
  },
  lime: {
    defaultCol: "#84cc16",
    50: "oklch(97.8% 0.025 119.0)",
    100: "oklch(95.9% 0.063 119.2)",
    200: "oklch(91.9% 0.121 119.1)",
    300: "oklch(86.3% 0.187 116.8)",
    400: "oklch(78.9% 0.258 112.5)",
    500: "oklch(72.1% 0.274 107.6)",
    600: "oklch(61.8% 0.243 99.4)",
    700: "oklch(50.2% 0.189 92.2)",
    800: "oklch(42.2% 0.143 86.4)",
    900: "oklch(36.9% 0.111 81.8)",
  },
  emerald: {
    defaultCol: "#10b981",
    50: "oklch(97.3% 0.018 167.4)",
    100: "oklch(95.2% 0.044 167.8)",
    200: "oklch(90.9% 0.085 168.2)",
    300: "oklch(84.7% 0.157 168.5)",
    400: "oklch(76.5% 0.220 169.0)",
    500: "oklch(69.5% 0.245 169.5)",
    600: "oklch(60.6% 0.220 170.0)",
    700: "oklch(50.8% 0.173 170.5)",
    800: "oklch(42.3% 0.137 171.0)",
    900: "oklch(37.0% 0.110 171.5)",
  },
};

const borderStyling = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
};
const opacities = {
  0: "0",
  25: "0.25",
  50: "0.5",
  75: "0.75",
  100: "1",
};

const zIndexes = {
  0: "0",
  10: "10",
  20: "20",
  50: "50",
  100: "100",
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
};

const fontWeights = {
  thin: "100",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  black: "900",
};

const lineHeights = {
  none: "1",
  tight: "1.25",
  normal: "1.5",
  loose: "2",
};

const properties = {
  p: { cssProp: "padding", map: spacing, type: "spacing" },
  m: { cssProp: "margin", map: spacing, type: "spacing" },
  bg: { cssProp: "background-color", map: colors, type: "color" },
  textcol: { cssProp: "color", map: colors, type: "color" },
  flex: { cssProp: "display", val: "flex", type: "static" },
  inline: { cssProp: "display", val: "inline", type: "static" },
  // grid: { cssProp: "display", val: "grid", type: "static" },
  hidden: { cssProp: "display", val: "none", type: "static" },
  gap: { cssProp: "gap", map: spacing, type: "spacing" },
  h: { cssProp: "height", map: spacing, type: "spacing" },
  w: { cssProp: "width", map: spacing, type: "spacing" },
  pt: { cssProp: "padding-top", map: spacing, type: "spacing" },
  pb: { cssProp: "padding-bottom", map: spacing, type: "spacing" },
  pl: { cssProp: "padding-left", map: spacing, type: "spacing" },
  pr: { cssProp: "padding-right", map: spacing, type: "spacing" },
  mt: { cssProp: "margin-top", map: spacing, type: "spacing" },
  mb: { cssProp: "margin-bottom", map: spacing, type: "spacing" },
  ml: { cssProp: "margin-left", map: spacing, type: "spacing" },
  mr: { cssProp: "margin-right", map: spacing, type: "spacing" },
  bold: { cssProp: "font-weight", val: "bold", type: "static" },
  italic: { cssProp: "font-style", val: "italic", type: "static" },
  underline: { cssProp: "text-decoration", val: "underline", type: "static" },
  relative: { cssProp: "position", val: "relative", type: "static" },
  absolute: { cssProp: "position", val: "absolute", type: "static" },
  block: { cssProp: "display", val: "block", type: "static" },
  text: { cssProp: "font-size", map: fontSizes, type: "spacing" },
  rounded: { cssProp: "border-radius", map: borderStyling, type: "spacing" },
  bordercol: { cssProp: "border-color", map: colors, type: "color" },
  border: { cssProp: "border-width", map: spacing, type: "spacing" },
  "border-solid": { cssProp: "border-style", val: "solid", type: "static" },
  "border-dashed": { cssProp: "border-style", val: "dashed", type: "static" },
  bt: { cssProp: "border-top-width", map: spacing, type: "spacing" },
  bb: { cssProp: "border-bottom-width", map: spacing, type: "spacing" },
  bl: { cssProp: "border-left-width", map: spacing, type: "spacing" },
  br: { cssProp: "border-right-width", map: spacing, type: "spacing" },
  "flex-col": { cssProp: "flex-direction", val: "column", type: "static" },
  "flex-row": { cssProp: "flex-direction", val: "row", type: "static" },
  "flex-wrap": { cssProp: "flex-wrap", val: "wrap", type: "static" },
  "flex-nowrap": { cssProp: "flex-wrap", val: "nowrap", type: "static" },
  "inline-flex": { cssProp: "display", val: "inline-flex", type: "static" },
  "inline-block": { cssProp: "display", val: "inline-block", type: "static" },
  "items-center": { cssProp: "align-items", val: "center", type: "static" },
  "items-start": { cssProp: "align-items", val: "flex-start", type: "static" },
  "items-end": { cssProp: "align-items", val: "flex-end", type: "static" },
  "justify-between": {
    cssProp: "justify-content",
    val: "space-between",
    type: "static",
  },
  "justify-center": {
    cssProp: "justify-content",
    val: "center",
    type: "static",
  },
  "justify-end": {
    cssProp: "justify-content",
    val: "flex-end",
    type: "static",
  },
  "justify-start": {
    cssProp: "justify-content",
    val: "flex-start",
    type: "static",
  },
  "text-center": { cssProp: "text-align", val: "center", type: "static" },
  "text-left": { cssProp: "text-align", val: "left", type: "static" },
  "text-right": { cssProp: "text-align", val: "right", type: "static" },
  "font-bold": { cssProp: "font-weight", val: "700", type: "static" },
  "font-normal": { cssProp: "font-weight", val: "400", type: "static" },
  "font-light": { cssProp: "font-weight", val: "300", type: "static" },
  "border-solid": { cssProp: "border-style", val: "solid", type: "static" },
  "border-dashed": { cssProp: "border-style", val: "dashed", type: "static" },
  "border-none": { cssProp: "border-style", val: "none", type: "static" },
  "overflow-hidden": { cssProp: "overflow", val: "hidden", type: "static" },
  "overflow-scroll": { cssProp: "overflow", val: "scroll", type: "static" },
  "overflow-auto": { cssProp: "overflow", val: "auto", type: "static" },
  grid: { cssProp: "display", val: "grid", type: "static" },
  opacity: { cssProp: "opacity", map: opacities, type: "spacing" },
  grow: { cssProp: "flex-grow", val: "1", type: "static" },
  shrink: { cssProp: "flex-shrink", val: "1", type: "static" },
  z: { cssProp: "z-index", map: zIndexes, type: "spacing" },
  text: { cssProp: "font-size", map: fontSizes, type: "spacing" },
  font: { cssProp: "font-weight", map: fontWeights, type: "spacing" },
  "line-height": { cssProp: "line-height", map: lineHeights, type: "spacing" },
  "shadow-sm": {
    cssProp: "box-shadow",
    val: "0 1px 2px rgba(0,0,0,0.05)",
    type: "static",
  },
  "shadow-md": {
    cssProp: "box-shadow",
    val: "0 4px 6px rgba(0,0,0,0.1)",
    type: "static",
  },
  "shadow-lg": {
    cssProp: "box-shadow",
    val: "0 10px 15px rgba(0,0,0,0.1)",
    type: "static",
  },
  "shadow-xl": {
    cssProp: "box-shadow",
    val: "0 20px 25px rgba(0,0,0,0.15)",
    type: "static",
  },
  "shadow-none": { cssProp: "box-shadow", val: "none", type: "static" },
  // Transform Properties
  scale: {
    cssProp: "transform",
    map: {
      50: "scale(0.5)",
      75: "scale(0.75)",
      90: "scale(0.9)",
      95: "scale(0.95)",
      100: "scale(1)",
      105: "scale(1.05)",
      110: "scale(1.1)",
      125: "scale(1.25)",
      150: "scale(1.5)",
    },
    type: "spacing",
  },
  "scale-x": {
    cssProp: "transform",
    map: {
      50: "scaleX(0.5)",
      75: "scaleX(0.75)",
      100: "scaleX(1)",
      125: "scaleX(1.25)",
      150: "scaleX(1.5)",
    },
    type: "spacing",
  },
  "scale-y": {
    cssProp: "transform",
    map: {
      50: "scaleY(0.5)",
      75: "scaleY(0.75)",
      100: "scaleY(1)",
      125: "scaleY(1.25)",
      150: "scaleY(1.5)",
    },
    type: "spacing",
  },
  rotate: {
    cssProp: "transform",
    map: {
      0: "rotate(0deg)",
      1: "rotate(1deg)",
      2: "rotate(2deg)",
      3: "rotate(3deg)",
      6: "rotate(6deg)",
      12: "rotate(12deg)",
      45: "rotate(45deg)",
      90: "rotate(90deg)",
      180: "rotate(180deg)",
    },
    type: "spacing",
  },
  "-rotate": {
    cssProp: "transform",
    map: {
      1: "rotate(-1deg)",
      2: "rotate(-2deg)",
      3: "rotate(-3deg)",
      6: "rotate(-6deg)",
      12: "rotate(-12deg)",
      45: "rotate(-45deg)",
      90: "rotate(-90deg)",
    },
    type: "spacing",
  },
  "translate-x": { cssProp: "transform", map: spacing, type: "spacing" },
  "translate-y": { cssProp: "transform", map: spacing, type: "spacing" },
  skew: {
    cssProp: "transform",
    map: {
      1: "skew(1deg)",
      2: "skew(2deg)",
      3: "skew(3deg)",
      6: "skew(6deg)",
      12: "skew(12deg)",
    },
    type: "spacing",
  },
  "skew-x": {
    cssProp: "transform",
    map: {
      1: "skewX(1deg)",
      2: "skewX(2deg)",
      3: "skewX(3deg)",
      6: "skewX(6deg)",
      12: "skewX(12deg)",
    },
    type: "spacing",
  },
  "skew-y": {
    cssProp: "transform",
    map: {
      1: "skewY(1deg)",
      2: "skewY(2deg)",
      3: "skewY(3deg)",
      6: "skewY(6deg)",
      12: "skewY(12deg)",
    },
    type: "spacing",
  },
  // Transitions & Animation
  transition: {
    cssProp: "transition",
    map: {
      all: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      colors: "color 150ms, background-color 150ms, border-color 150ms",
      opacity: "opacity 150ms",
      transform: "transform 150ms",
      none: "none",
    },
    type: "spacing",
  },
  duration: {
    cssProp: "transition-duration",
    map: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    type: "spacing",
  },
  ease: {
    cssProp: "transition-timing-function",
    map: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    type: "spacing",
  },
  // Text Transform
  uppercase: { cssProp: "text-transform", val: "uppercase", type: "static" },
  lowercase: { cssProp: "text-transform", val: "lowercase", type: "static" },
  capitalize: { cssProp: "text-transform", val: "capitalize", type: "static" },
  "normal-case": { cssProp: "text-transform", val: "none", type: "static" },
  // Cursor
  "cursor-pointer": { cssProp: "cursor", val: "pointer", type: "static" },
  "cursor-default": { cssProp: "cursor", val: "default", type: "static" },
  "cursor-not-allowed": {
    cssProp: "cursor",
    val: "not-allowed",
    type: "static",
  },
  "cursor-wait": { cssProp: "cursor", val: "wait", type: "static" },
  "cursor-move": { cssProp: "cursor", val: "move", type: "static" },
  // Object Fit
  "object-contain": { cssProp: "object-fit", val: "contain", type: "static" },
  "object-cover": { cssProp: "object-fit", val: "cover", type: "static" },
  "object-fill": { cssProp: "object-fit", val: "fill", type: "static" },
  "object-scale-down": {
    cssProp: "object-fit",
    val: "scale-down",
    type: "static",
  },
  // User Select
  "select-none": { cssProp: "user-select", val: "none", type: "static" },
  "select-text": { cssProp: "user-select", val: "text", type: "static" },
  "select-auto": { cssProp: "user-select", val: "auto", type: "static" },
  // Pointer Events
  "pointer-events-none": {
    cssProp: "pointer-events",
    val: "none",
    type: "static",
  },
  "pointer-events-auto": {
    cssProp: "pointer-events",
    val: "auto",
    type: "static",
  },
  // Filters
  blur: {
    cssProp: "filter",
    map: {
      sm: "blur(4px)",
      md: "blur(12px)",
      lg: "blur(20px)",
      xl: "blur(40px)",
      "2xl": "blur(60px)",
    },
    type: "spacing",
  },
  brightness: {
    cssProp: "filter",
    map: {
      50: "brightness(0.5)",
      75: "brightness(0.75)",
      100: "brightness(1)",
      125: "brightness(1.25)",
      150: "brightness(1.5)",
      200: "brightness(2)",
    },
    type: "spacing",
  },
  contrast: {
    cssProp: "filter",
    map: {
      50: "contrast(0.5)",
      75: "contrast(0.75)",
      100: "contrast(1)",
      125: "contrast(1.25)",
      150: "contrast(1.5)",
      200: "contrast(2)",
    },
    type: "spacing",
  },
  saturate: {
    cssProp: "filter",
    map: {
      0: "saturate(0)",
      50: "saturate(0.5)",
      100: "saturate(1)",
      150: "saturate(1.5)",
      200: "saturate(2)",
    },
    type: "spacing",
  },
  // Letter Spacing
  "tracking-tight": {
    cssProp: "letter-spacing",
    val: "-0.02em",
    type: "static",
  },
  "tracking-normal": { cssProp: "letter-spacing", val: "0em", type: "static" },
  "tracking-wide": { cssProp: "letter-spacing", val: "0.02em", type: "static" },
  "tracking-wider": {
    cssProp: "letter-spacing",
    val: "0.05em",
    type: "static",
  },
  // Tab Size
  "tab-4": { cssProp: "tab-size", val: "4", type: "static" },
  "tab-8": { cssProp: "tab-size", val: "8", type: "static" },
};

function parseCss(CssString) {
  let prefixValues = CssString.split("-");
  prefixValues.shift(); // Remove "chai" prefix

  let prop;
  let value;
  let colShade;

  // Try 4-part property (e.g., "pointer-events-none")
  if (prefixValues.length >= 3) {
    let fourWordProp =
      prefixValues[0] + "-" + prefixValues[1] + "-" + prefixValues[2];
    if (properties[fourWordProp]) {
      prop = fourWordProp;
      value = prefixValues[3];
      colShade = prefixValues[4];
      return { prop, value, colShade };
    }
  }

  // Try 3-part property (e.g., "tracking-tight", "text-left", "flex-col")
  if (prefixValues.length >= 2) {
    let threeWordProp = prefixValues[0] + "-" + prefixValues[1];
    if (properties[threeWordProp]) {
      prop = threeWordProp;
      value = prefixValues[2];
      colShade = prefixValues[3];
      return { prop, value, colShade };
    }
  }

  // Try 2-part property (e.g., "bg-blue", "rounded-lg", "shadow-md")
  if (prefixValues.length >= 1) {
    let twoWordProp = prefixValues[0];
    if (properties[twoWordProp]) {
      prop = twoWordProp;
      value = prefixValues[1];
      colShade = prefixValues[2];
      return { prop, value, colShade };
    }
  }

  console.error(
    "property you are trying to use is not defined yet: " + CssString,
  );
  return { prop: null, value: null, colShade: null };
}

function resolveValue(prop, val, shade) {
  // look up the actual CSS value
  if (!prop || !properties[prop]) {
    return null;
  }

  const lookup = properties[prop];
  const cssProp = lookup.cssProp;

  if (!lookup.map && !lookup.val) {
    return null;
  }

  if (lookup.type === "spacing") {
    if (lookup.map && lookup.map[val]) {
      return { cssProp, cssVal: lookup.map[val] };
    }
    return null;
  }

  if (lookup.type === "color") {
    if (lookup.map && lookup.map[val]) {
      if (shade && lookup.map[val][shade]) {
        return { cssProp, cssVal: lookup.map[val][shade] };
      }
      return { cssProp, cssVal: lookup.map[val].defaultCol };
    }
    return null;
  }

  if (lookup.type === "static") {
    return { cssProp, cssVal: lookup.val };
  }

  return null;
}

const set = new Set();
const style = document.createElement("style");
document.head.appendChild(style);
elements.forEach((elem) => {
  let classes = elem.classList;

  classes.forEach((e) => {
    if (e.startsWith("chai-")) {
      let res = parseCss(e);

      let finalresult = resolveValue(res.prop, res.value, res.colShade);
      if (finalresult) {
        style.innerHTML += `.${e}{ ${finalresult.cssProp}:${finalresult.cssVal}; }\n`;
      }
    }
  });
});
