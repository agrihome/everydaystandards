"use client";

import { useState } from "react";
import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import BrandSlider, { BrandList } from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import type { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero";

export default function AgencyHeroSection() {
  const [activeTab, setActiveTab] = useState("Home");

  const avatarList: AvatarList[] = [
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
    },
    {
      image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
    },
  ];

  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "#hero",
      isActive: activeTab === "Home",
    },
    {
      title: "Products",
      href: "#pricing", // Pricing is often used for products in these demos
      isActive: activeTab === "Products",
    },
    {
      title: "Features",
      href: "#features",
      isActive: activeTab === "Features",
    },
    {
      title: "About us",
      href: "#faq",
      isActive: activeTab === "About us",
    },
    {
      title: "Contact",
      href: "#contact",
      isActive: activeTab === "Contact",
    },
  ];

  const brandList: BrandList[] = [
    {
      image: "/assets/logos/atomic-habits.png",
      lightimg: "/assets/logos/atomic-habits.png",
      name: "Atomic Habits",
    },
    {
      image: "/assets/logos/eat-that-frog.png",
      lightimg: "/assets/logos/eat-that-frog.png",
      name: "Eat That Frog",
    },
    {
      image: "/assets/logos/deep-work.png",
      lightimg: "/assets/logos/deep-work.png",
      name: "Deep Work",
    },
  ];

  return (
    <div className="relative">
      <Header navigationData={navigationData} onTabClick={setActiveTab} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}
