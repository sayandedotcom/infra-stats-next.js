import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Jenkins infra-statistics</h2>
      <h4>
        Graphical representations of numbers and information around Jenkins
      </h4>
      <h5>
        Welcome to Jenkins-stats. This page is dedicated to show graphics around
        facts on Jenkins (http://jenkins.io/).
        <br />
        <Link className="text-blue-600" href={"/stats"}>
          1. Statistics in detail
        </Link>
        <br />
        <Link className="text-blue-600" href={"/plugin-installation-trend"}>
          2. Plugin Installation Trend
        </Link>
        <br />
        <Link className="text-blue-600" href={"/pluginversions"}>
          3. Plugin Versions by Jenkins Version
        </Link>
        <br />
        <Link className="text-blue-600" href={"/plugin-dependency-graph"}>
          4. Jenkins plugin dependency graph
        </Link>
      </h5>
    </div>
  );
}
