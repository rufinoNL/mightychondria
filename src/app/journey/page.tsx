import type { Metadata } from "next";
import { JourneyExperience } from "@/components/journey/JourneyExperience";
import { PageHeader } from "@/components/layout/PageHeader";
import { journeySteps } from "@/content/journey";
import { simulationRecipes } from "@/content/simulationRecipes";

export const metadata: Metadata = {
  title: "Interactive Journey",
  description:
    "Follow food from digestion through cellular metabolism and mitochondrial ATP production."
};

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Interactive journey"
        title="Follow food from meal to ATP"
        description="Move step by step through digestion, bloodstream delivery, cellular entry, mitochondrial electron transport, and ATP production."
      />
      <JourneyExperience steps={journeySteps} recipes={simulationRecipes} />
    </>
  );
}
