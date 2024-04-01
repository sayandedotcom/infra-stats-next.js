import Echart from "@/components/echart";

async function getData(plugin: any) {
  const res = await fetch(
    `https://echarts.apache.org/examples//data/asset/data/${plugin}.json`,
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

export default async function Page({ params, searchParams }: any) {
  const graph = await getData(params.plugin);

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
