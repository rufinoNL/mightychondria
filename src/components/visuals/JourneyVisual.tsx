import type { JourneyVisualType } from "@/types/content";
import { ATPProductionSvg } from "./ATPProductionSvg";
import { BloodstreamSvg } from "./BloodstreamSvg";
import { CellSvg } from "./CellSvg";
import { DigestiveSystemSvg } from "./DigestiveSystemSvg";
import { ElectronTransportChainSvg } from "./ElectronTransportChainSvg";
import { HumanBodySvg } from "./HumanBodySvg";
import { MitochondrionSvg } from "./MitochondrionSvg";
import { getVisualLayerMetadata } from "./visualLayers";

interface JourneyVisualProps {
  type: JourneyVisualType;
}

export function JourneyVisual({ type }: JourneyVisualProps) {
  const metadata = getVisualLayerMetadata(type);

  switch (type) {
    case "human-body":
      return <HumanBodySvg metadata={metadata} />;
    case "mouth":
      return <DigestiveSystemSvg stage="mouth" metadata={metadata} />;
    case "esophagus":
      return <DigestiveSystemSvg stage="esophagus" metadata={metadata} />;
    case "stomach":
      return <DigestiveSystemSvg stage="stomach" metadata={metadata} />;
    case "small-intestine":
      return <DigestiveSystemSvg stage="small-intestine" metadata={metadata} />;
    case "bloodstream":
      return <BloodstreamSvg metadata={metadata} />;
    case "cell":
      return <CellSvg metadata={metadata} />;
    case "mitochondrion":
      return <MitochondrionSvg metadata={metadata} />;
    case "electron-transport-chain":
      return <ElectronTransportChainSvg metadata={metadata} />;
    case "atp-production":
      return <ATPProductionSvg metadata={metadata} />;
  }
}
