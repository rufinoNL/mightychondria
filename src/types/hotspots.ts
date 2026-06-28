export type DigestiveHotspotId =
  | "mouth"
  | "esophagus"
  | "stomach"
  | "small-intestine"
  | "villi";

export interface DigestiveHotspot {
  id: DigestiveHotspotId;
  label: string;
  shortLabel: string;
  explanation: string;
}

export type CellHotspotId =
  | "cell-membrane"
  | "nutrient-transporter"
  | "cytoplasm"
  | "nucleus"
  | "mitochondrion";

export interface CellHotspot {
  id: CellHotspotId;
  label: string;
  shortLabel: string;
  explanation: string;
}

export type BloodstreamHotspotId =
  | "blood-vessel"
  | "nutrient-particles"
  | "oxygen-particles"
  | "cell-destination";

export interface BloodstreamHotspot {
  id: BloodstreamHotspotId;
  label: string;
  shortLabel: string;
  explanation: string;
}
