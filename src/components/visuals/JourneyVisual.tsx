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
  onHotspotSelect?: (hotspotId: string | null) => void;
}

export function JourneyVisual({ type, onHotspotSelect }: JourneyVisualProps) {
  const metadata = getVisualLayerMetadata(type);

  switch (type) {
    case "human-body":
      return <HumanBodySvg metadata={metadata} />;
    case "mouth":
      return (
        <DigestiveSystemSvg
          stage="mouth"
          metadata={metadata}
          onHotspotSelect={onHotspotSelect}
        />
      );
    case "esophagus":
      return (
        <DigestiveSystemSvg
          stage="esophagus"
          metadata={metadata}
          onHotspotSelect={onHotspotSelect}
        />
      );
    case "stomach":
      return (
        <DigestiveSystemSvg
          stage="stomach"
          metadata={metadata}
          onHotspotSelect={onHotspotSelect}
        />
      );
    case "small-intestine":
      return (
        <DigestiveSystemSvg
          stage="small-intestine"
          metadata={metadata}
          onHotspotSelect={onHotspotSelect}
        />
      );
    case "bloodstream":
      return (
        <BloodstreamSvg
          metadata={metadata}
          onHotspotSelect={onHotspotSelect}
        />
      );
    case "cell":
      return <CellSvg metadata={metadata} onHotspotSelect={onHotspotSelect} />;
    case "mitochondrion":
      return (
        <MitochondrionSvg
          metadata={metadata}
          onHotspotSelect={onHotspotSelect}
        />
      );
    case "electron-transport-chain":
      return <ElectronTransportChainSvg metadata={metadata} />;
    case "atp-production":
      return <ATPProductionSvg metadata={metadata} />;
  }
}
