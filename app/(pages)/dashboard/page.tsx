import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { LiveActivities } from "@/components/live-activities";
import { NewsGrid } from "@/components/new-grids";
import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <HeroSection />
      <LiveActivities />
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default Dashboard;
