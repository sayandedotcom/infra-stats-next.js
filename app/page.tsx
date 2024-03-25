import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <h1>Jenkins infra-statistics</h1>
      <p>Graphical representations of numbers and information around Jenkins</p>
      <h2>
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
      </h2>
    </>
  );
}
