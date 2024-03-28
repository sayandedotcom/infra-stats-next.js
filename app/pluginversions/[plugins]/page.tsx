"use client";

import { PluginData } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

export default function Plugins({ params }: { params: { plugins: string } }) {
  const [data, setData] = useState<PluginData>(); // State to store fetched data
  const [error, setError] = useState<any>(null); // State to store any errors
  const baseUrl = "https://stats.jenkins.io/plugin-installation-trend/";
  const pluginName = `${params.plugins}.stats.json`;
  const url = `${baseUrl}${pluginName}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await axios.get(url)).data;
        setData(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  const option = {
    title: {
      text: data?.name,
    },
    color: ["#80FFA5"],
    xAxis: {
      type: "category",
      data: data?.installations && Object.keys(data.installations),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data:
          data?.installationsPercentage &&
          Object.keys(data.installationsPercentage),
        type: "line",
        areaStyle: {},
      },
    ],
  };

  const option2 = {
    xAxis: {
      type: "category",
      data:
        data?.installationsPerVersion &&
        Object.keys(data.installationsPerVersion),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data:
          data?.installationsPercentagePerVersion &&
          Object.keys(data.installationsPercentagePerVersion),
        type: "line",
        areaStyle: {},
      },
    ],
  };

  return (
    <>
      <ReactEcharts
        style={{ height: "300px", width: "100%" }}
        option={option}
      />
      <ReactEcharts option={option2} />
    </>
  );
}
