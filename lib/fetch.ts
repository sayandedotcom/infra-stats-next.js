import { PluginData } from "@/types";
import axios from "axios";

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;

    // This data can be used to generate the charts as shown previously
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const renderOption = (x: any, y: any) => {
  return {
    xAxis: {
      type: "version",
      data: Object.values(x),
    },
    yAxis: {
      type: "installations",
    },
    series: [
      {
        data: Object.values(y),
        type: "line",
        areaStyle: {},
      },
    ],
  };
};
// ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
