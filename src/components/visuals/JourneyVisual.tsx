import type { JourneyVisualType } from "@/types/content";
import { ATPProductionSvg } from "./ATPProductionSvg";
import { BloodstreamSvg } from "./BloodstreamSvg";
import { CellSvg } from "./CellSvg";
import { DigestiveSystemSvg } from "./DigestiveSystemSvg";
import { ElectronTransportChainSvg } from "./ElectronTransportChainSvg";
import { HumanBodySvg } from "./HumanBodySvg";
import { MitochondrionSvg } from "./MitochondrionSvg";

interface JourneyVisualProps {
  type: JourneyVisualType;
}

export function JourneyVisual({ type }: JourneyVisualProps) {
  switch (type) {
    case "human-body":
      return <HumanBodySvg />;
    case "mouth":
      return <DigestiveSystemSvg stage="mouth" />;
    case "esophagus":
      return <DigestiveSystemSvg stage="esophagus" />;
    case "stomach":
      return <DigestiveSystemSvg stage="stomach" />;
    case "small-intestine":
      return <DigestiveSystemSvg stage="small-intestine" />;
    case "bloodstream":
      return <BloodstreamSvg />;
    case "cell":
      return <CellSvg />;
    case "mitochondrion":
      return <MitochondrionSvg />;
    case "electron-transport-chain":
      return <ElectronTransportChainSvg />;
    case "atp-production":
      return <ATPProductionSvg />;
  }
}
