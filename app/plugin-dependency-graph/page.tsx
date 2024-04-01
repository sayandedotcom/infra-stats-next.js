import Echart from "@/components/echart";

async function getData() {
  const res = await fetch(
    "https://echarts.apache.org/examples//data/asset/data/les-miserables.json",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const graph = await getData();

  const option = {
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a: { name: string }) {
          return a.name;
        }),
      },
    ],
    series: [
      {
        name: "Les Miserables",
        type: "graph",
        layout: "none",
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          show: true,
          position: "right",
          formatter: "{b}",
        },
        labelLayout: {
          hideOverlap: true,
        },
        scaleLimit: {
          min: 0.4,
          max: 2,
        },
        lineStyle: {
          color: "source",
          curveness: 0.3,
        },
      },
    ],
  };
  return (
    <>
      <h1>Jenkins plugin dependency graph</h1>
      <Echart option={option} style={{ height: "700px", width: "100%" }} />
    </>
  );
}
