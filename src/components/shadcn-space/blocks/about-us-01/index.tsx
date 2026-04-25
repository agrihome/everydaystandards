"use client";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import { Target, WandSparkles, Zap } from "lucide-react";

const aboutusData = [
    {
      icon: Zap,
      title: "Consistency",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: WandSparkles,
      title: "Simplicity",
      color: "bg-teal-400/10 text-teal-400" 
    },
    {
      icon: Target,
      title: "Growth",
      color: "bg-orange-400/10 text-orange-400" 
    }
];

const statisticsCounter = [
    {
        title: "Habits Tracked",
        count: 100
    },
    {
        title: "Community Members",
        count: 50
    },
    {
        title: "Days Consistent",
        count: 365
    },
]

const AboutAndStats01 = () => {
  return (
    <>
      <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
    </>
  );
};

export default AboutAndStats01;
