"use client";

import { useMemo, useState } from "react";
import { cellHotspotById, cellHotspots } from "@/content/cellHotspots";
import type { CellHotspotId } from "@/types/hotspots";
import { SvgHotspot } from "./SvgHotspot";
import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

interface CellSvgProps {
  metadata: VisualLayerMetadata;
  onHotspotSelect?: (hotspotId: CellHotspotId) => void;
}

const primaryHotspotId: CellHotspotId = "nutrient-transporter";

function renderCellHotspotMarker(
  cx: number,
  cy: number,
  isPrimary: boolean
) {
  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={isPrimary ? "11" : "8"}
        fill={isPrimary ? "#1f7a5a" : "#ffffff"}
        stroke={isPrimary ? "#ffffff" : "#1f7a5a"}
        strokeWidth="2.5"
        opacity={isPrimary ? "0.96" : "0.82"}
      />
      <circle
        cx={cx}
        cy={cy}
        r={isPrimary ? "4" : "3"}
        fill={isPrimary ? "#ffffff" : "#1f7a5a"}
        opacity="0.95"
      />
    </>
  );
}

export function CellSvg({ metadata, onHotspotSelect }: CellSvgProps) {
  const [selectedHotspotId, setSelectedHotspotId] =
    useState<CellHotspotId | null>(null);
  const selectedHotspot = selectedHotspotId
    ? cellHotspotById[selectedHotspotId]
    : null;
  const hotspotLabels = useMemo(
    () => cellHotspots.map((hotspot) => hotspot.shortLabel).join(", "),
    []
  );

  function selectHotspot(hotspotId: CellHotspotId) {
    setSelectedHotspotId(hotspotId);
    onHotspotSelect?.(hotspotId);
  }

  return (
    <VisualFrame
      title="Cells prepare nutrients for ATP pathways"
      metadata={metadata}
      interactive
      detailActive={Boolean(selectedHotspot)}
      detail={
        selectedHotspot ? (
          <div aria-live="polite">
            <p className="font-semibold text-ink">{selectedHotspot.label}</p>
            <p className="mt-1">{selectedHotspot.explanation}</p>
          </div>
        ) : (
          <p className="text-ink/65">
            Select a cell hotspot to learn more: {hotspotLabels}.
          </p>
        )
      }
    >
      <ellipse cx="200" cy="150" rx="132" ry="88" fill="#e9f7f1" opacity="0.9" />
      <ellipse
        cx="200"
        cy="150"
        rx="132"
        ry="88"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="4"
      />
      <ellipse cx="200" cy="150" rx="106" ry="66" fill="#f8fbff" opacity="0.35" />
      <circle cx="190" cy="144" r="36" fill="#dbeafe" opacity="0.92" />
      <circle
        cx="190"
        cy="144"
        r="36"
        fill="none"
        stroke="#2878b8"
        strokeWidth="3"
      />
      <circle cx="184" cy="138" r="10" fill="#2878b8" opacity="0.14" />
      <ellipse cx="278" cy="164" rx="34" ry="20" fill="#fbd6b7" opacity="0.95" />
      <ellipse
        cx="278"
        cy="164"
        rx="34"
        ry="20"
        fill="none"
        stroke="#8b5f3c"
        strokeWidth="3"
      />
      <path
        d="M254 164c10-12 20 12 30 0s18-10 28 2"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="88" cy="128" r="10" fill="#d89216" opacity="0.95" />
      <path
        d="M104 130h48"
        stroke="#d89216"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M144 122l12 8-12 8"
        fill="none"
        stroke="#d89216"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="150" y="116" width="14" height="30" rx="7" fill="#1f7a5a" />
      <rect x="154" y="122" width="6" height="18" rx="3" fill="#f8fbff" opacity="0.2" />
      <ZoomTargetRing cx={276} cy={164} r={40} />
      <SvgHotspot
        label={cellHotspotById["cell-membrane"].label}
        isSelected={selectedHotspotId === "cell-membrane"}
        onSelect={() => selectHotspot("cell-membrane")}
        marker={renderCellHotspotMarker(92, 170, false)}
        focusRing={
          <ellipse
            cx="200"
            cy="150"
            rx="143"
            ry="98"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <ellipse
            cx="200"
            cy="150"
            rx="137"
            ry="93"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <ellipse
          cx="200"
          cy="150"
          rx="139"
          ry="95"
          fill="none"
          stroke="transparent"
          strokeWidth="22"
        />
      </SvgHotspot>
      <SvgHotspot
        label={cellHotspotById["nutrient-transporter"].label}
        isSelected={selectedHotspotId === "nutrient-transporter"}
        onSelect={() => selectHotspot("nutrient-transporter")}
        marker={renderCellHotspotMarker(
          154,
          124,
          primaryHotspotId === "nutrient-transporter"
        )}
        focusRing={
          <circle
            cx="138"
            cy="130"
            r="54"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <circle
            cx="138"
            cy="130"
            r="46"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <rect
          x="76"
          y="106"
          width="98"
          height="48"
          rx="24"
          fill="transparent"
        />
      </SvgHotspot>
      <SvgHotspot
        label={cellHotspotById.cytoplasm.label}
        isSelected={selectedHotspotId === "cytoplasm"}
        onSelect={() => selectHotspot("cytoplasm")}
        marker={renderCellHotspotMarker(226, 112, false)}
        focusRing={
          <ellipse
            cx="210"
            cy="150"
            rx="97"
            ry="62"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <ellipse
            cx="210"
            cy="150"
            rx="89"
            ry="55"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <ellipse cx="210" cy="150" rx="95" ry="62" fill="transparent" />
      </SvgHotspot>
      <SvgHotspot
        label={cellHotspotById.nucleus.label}
        isSelected={selectedHotspotId === "nucleus"}
        onSelect={() => selectHotspot("nucleus")}
        marker={renderCellHotspotMarker(184, 138, false)}
        focusRing={
          <circle
            cx="190"
            cy="144"
            r="48"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <circle
            cx="190"
            cy="144"
            r="41"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <circle cx="190" cy="144" r="46" fill="transparent" />
      </SvgHotspot>
      <SvgHotspot
        label={cellHotspotById.mitochondrion.label}
        isSelected={selectedHotspotId === "mitochondrion"}
        onSelect={() => selectHotspot("mitochondrion")}
        marker={renderCellHotspotMarker(286, 154, false)}
        focusRing={
          <circle
            cx="278"
            cy="164"
            r="53"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <circle
            cx="278"
            cy="164"
            r="45"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <ellipse cx="278" cy="164" rx="48" ry="36" fill="transparent" />
      </SvgHotspot>
    </VisualFrame>
  );
}
