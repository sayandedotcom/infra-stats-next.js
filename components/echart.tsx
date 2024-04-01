"use client";

import ReactEcharts, { EChartsReactProps } from "echarts-for-react";

export default function Echart({ option, ...otherProps }: EChartsReactProps) {
  return <ReactEcharts option={option} {...otherProps} />;
}
