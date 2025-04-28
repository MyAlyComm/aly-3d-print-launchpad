
import React, { useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { AIHubHero } from "@/components/ai-hub/AIHubHero";
import { NewFeaturesAlert } from "@/components/ai-hub/NewFeaturesAlert";
import { PopularWorkflows } from "@/components/ai-hub/PopularWorkflows";
import { WorkflowTabs } from "@/components/ai-hub/WorkflowTabs";

const AIHub = () => {
  useEffect(() => {
    // SEO Optimizations
    document.title = "3D Print Business AI Hub | Integrated AI Tools for 3D Print Businesses";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'All-in-one AI tools for 3D printing business owners. Generate product ideas, create listings, design marketing visuals, and more without leaving the platform.');
    }
  }, []);

  return (
    <DashboardLayout title="3D Print Business AI Hub">
      <div className="max-w-7xl mx-auto py-6 space-y-8">
        <AIHubHero />
        <NewFeaturesAlert />
        <PopularWorkflows />
        <WorkflowTabs />
      </div>
    </DashboardLayout>
  );
};

export default AIHub;
