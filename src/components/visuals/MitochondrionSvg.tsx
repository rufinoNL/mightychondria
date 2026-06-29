"use client";

import { useMemo, useState } from "react";
import {
  mitochondrionHotspotById,
  mitochondrionHotspots
} from "@/content/mitochondrionHotspots";
import type { MitochondrionHotspotId } from "@/types/hotspots";
import { SvgHotspot } from "./SvgHotspot";
import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

interface MitochondrionSvgProps {
  metadata: VisualLayerMetadata;
  onHotspotSelect?: (hotspotId: MitochondrionHotspotId) => void;
}

const primaryHotspotId: MitochondrionHotspotId = "etc-zoom-target";

function renderMitochondrionHotspotMarker(
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

export function MitochondrionSvg({
  metadata,
  onHotspotSelect
}: MitochondrionSvgProps) {
  const [selectedHotspotId, setSelectedHotspotId] =
    useState<MitochondrionHotspotId | null>(null);
  const selectedHotspot = selectedHotspotId
    ? mitochondrionHotspotById[selectedHotspotId]
    : null;
  const hotspotLabels = useMemo(
    () =>
      mitochondrionHotspots
        .map((hotspot) => hotspot.shortLabel)
        .join(", "),
    []
  );

  function selectHotspot(hotspotId: MitochondrionHotspotId) {
    setSelectedHotspotId(hotspotId);
    onHotspotSelect?.(hotspotId);
  }

  return (
    <VisualFrame
      title="Mitochondria convert nutrient energy into ATP"
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
            Select a mitochondrion hotspot to learn more: {hotspotLabels}.
          </p>
        )
      }
    >
      <ellipse cx="200" cy="150" rx="132" ry="74" fill="#fbd6b7" opacity="0.72" />
      <ellipse
        cx="200"
        cy="150"
        rx="132"
        ry="74"
        fill="none"
        stroke="#8b5f3c"
        strokeWidth="4"
      />
      <ellipse cx="200" cy="150" rx="106" ry="52" fill="#fff4e8" opacity="0.92" />
      <ellipse
        cx="200"
        cy="150"
        rx="106"
        ry="52"
        fill="none"
        stroke="#8b5f3c"
        strokeWidth="2.5"
      />
      <path
        d="M112 148c18-26 38-26 56 0s38 26 56 0 38-26 56 0"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128 174c16-18 34-18 50 0s34 18 50 0 34-18 50 0"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <circle cx="136" cy="118" r="10" fill="#d89216" opacity="0.92" />
      <circle cx="160" cy="124" r="8" fill="#2878b8" opacity="0.9" />
      <text x="126" y="98" className="fill-ink text-xs font-semibold">
        NADH
      </text>
      <text x="168" y="108" className="fill-ink text-xs font-semibold">
        FADH2
      </text>
      <text x="200" y="132" textAnchor="middle" className="fill-ink text-xs font-semibold">
        cristae
      </text>
      <ZoomTargetRing cx={220} cy={150} r={58} />
      <SvgHotspot
        label={mitochondrionHotspotById["outer-membrane"].label}
        isSelected={selectedHotspotId === "outer-membrane"}
        onSelect={() => selectHotspot("outer-membrane")}
        marker={renderMitochondrionHotspotMarker(82, 150, false)}
        focusRing={
          <ellipse
            cx="200"
            cy="150"
            rx="144"
            ry="84"
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
            ry="79"
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
          rx="138"
          ry="80"
          fill="none"
          stroke="transparent"
          strokeWidth="22"
        />
      </SvgHotspot>
      <SvgHotspot
        label={mitochondrionHotspotById["inner-membrane"].label}
        isSelected={selectedHotspotId === "inner-membrane"}
        onSelect={() => selectHotspot("inner-membrane")}
        marker={renderMitochondrionHotspotMarker(292, 128, false)}
        focusRing={
          <ellipse
            cx="200"
            cy="150"
            rx="118"
            ry="62"
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
            rx="111"
            ry="57"
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
          rx="112"
          ry="58"
          fill="none"
          stroke="transparent"
          strokeWidth="22"
        />
      </SvgHotspot>
      <SvgHotspot
        label={mitochondrionHotspotById.cristae.label}
        isSelected={selectedHotspotId === "cristae"}
        onSelect={() => selectHotspot("cristae")}
        marker={renderMitochondrionHotspotMarker(204, 134, false)}
        focusRing={
          <ellipse
            cx="196"
            cy="154"
            rx="99"
            ry="46"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <ellipse
            cx="196"
            cy="154"
            rx="91"
            ry="39"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <path
          d="M112 148c18-26 38-26 56 0s38 26 56 0 38-26 56 0"
          fill="none"
          stroke="transparent"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M128 174c16-18 34-18 50 0s34 18 50 0 34-18 50 0"
          fill="none"
          stroke="transparent"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgHotspot>
      <SvgHotspot
        label={mitochondrionHotspotById.matrix.label}
        isSelected={selectedHotspotId === "matrix"}
        onSelect={() => selectHotspot("matrix")}
        marker={renderMitochondrionHotspotMarker(246, 184, false)}
        focusRing={
          <ellipse
            cx="248"
            cy="178"
            rx="58"
            ry="28"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <ellipse
            cx="248"
            cy="178"
            rx="50"
            ry="21"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <ellipse cx="248" cy="178" rx="60" ry="30" fill="transparent" />
      </SvgHotspot>
      <SvgHotspot
        label={mitochondrionHotspotById["electron-carriers"].label}
        isSelected={selectedHotspotId === "electron-carriers"}
        onSelect={() => selectHotspot("electron-carriers")}
        marker={renderMitochondrionHotspotMarker(156, 112, false)}
        focusRing={
          <ellipse
            cx="154"
            cy="113"
            rx="55"
            ry="34"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <ellipse
            cx="154"
            cy="113"
            rx="47"
            ry="27"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <rect
          x="102"
          y="86"
          width="112"
          height="58"
          rx="22"
          fill="transparent"
        />
      </SvgHotspot>
      <SvgHotspot
        label={mitochondrionHotspotById["etc-zoom-target"].label}
        isSelected={selectedHotspotId === "etc-zoom-target"}
        onSelect={() => selectHotspot("etc-zoom-target")}
        marker={renderMitochondrionHotspotMarker(
          260,
          150,
          primaryHotspotId === "etc-zoom-target"
        )}
        focusRing={
          <circle
            cx="220"
            cy="150"
            r="68"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <circle
            cx="220"
            cy="150"
            r="60"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <circle cx="220" cy="150" r="66" fill="transparent" />
      </SvgHotspot>
    </VisualFrame>
  );
}
