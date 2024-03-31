import Echart from "@/components/echart";
import { PluginData } from "@/types";

async function getData(baseUrl: any, pluginName: any) {
  const res = await fetch(`${baseUrl}${pluginName}`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Pluginversions() {
  const baseUrl = "https://stats.jenkins.io/plugin-installation-trend/";
  const pluginName = "DotCi.stats.json";
  const data: PluginData = await getData(baseUrl, pluginName);

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

  return (
    <>
      <h1>Plugin Versions by Jenkins Version</h1>
      <Echart option={option} />
    </>
  );
}
