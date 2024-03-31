"use client";

import Echart from "@/components/echart";
import { plugins } from "@/config/plugins-list";
import { fetchData, renderOption } from "@/lib/fetch";
import { PluginData } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Stats() {
  const [data, setData] = useState<PluginData>(); // State to store fetched data
  const [error, setError] = useState<any>(null); // State to store any errors
  const baseUrl = "https://stats.jenkins.io/plugin-installation-trend/";
  const pluginName = "DotCi.stats.json";
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

  // const opt = renderOption(data?.installations, data?.installationsPerVersion);

  const option = {
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
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        areaStyle: {},
      },
    ],
  };
  return (
    <>
      <h1>Installation Trends JSON</h1>
      <h1>Plugins</h1>
      {plugins.map((name, id) => (
        <Link
          className="block text-blue-700"
          key={id}
          href={`/plugin-installation-trend/${name}`}
        >
          {name}
        </Link>
      ))}
      <Echart option={option} />
      <Echart option={option2} />
    </>
  );
}
