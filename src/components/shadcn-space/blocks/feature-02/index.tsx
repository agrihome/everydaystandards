"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import {
  Box,
  CirclePlay,
  CodeXml,
} from "lucide-react"

const featureData = [
  {
    icon: Box,
    title: "Stay on track daily",
    content: "Get gentle reminders and simple nudges to help you stay consistent—even on your busiest days—so you don’t lose track, fall behind, or forget the habits that matter most.",
  },
  {
    icon: CirclePlay,
    title: "Easily track your habits and daily progress",
    content: " Keep an eye on your habits and daily progress without overthinking it—just simple tracking that helps you stay consistent (and yes, avoid ghosting your goals)."
  },
  {
    icon: CodeXml,
    title: "Build habits that stick",
    content: "Focus on what truly matters and turn small daily actions into routines that actually last no overthinking, no complicated systems, just simple steps you can stick with every single day."
  }
];

const Feature02 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature02;
