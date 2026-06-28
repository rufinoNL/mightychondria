"use client";

import { useMemo, useState } from "react";
import {
  bloodstreamHotspotById,
  bloodstreamHotspots
} from "@/content/bloodstreamHotspots";
import type { BloodstreamHotspotId } from "@/types/hotspots";
import { SvgHotspot } from "./SvgHotspot";
import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

const particles: Array<{ cx: number; cy: number; fill: string }> = [
  { cx: 86, cy: 112, fill: "#d89216" },
  { cx: 142, cy: 136, fill: "#f0c14b" },
  { cx: 208, cy: 116, fill: "#1f7a5a" },
  { cx: 122, cy: 194, fill: "#1f7a5a" },
  { cx: 202, cy: 184, fill: "#d89216" },
  { cx: 260, cy: 166, fill: "#2878b8" }
];

interface BloodstreamSvgProps {
  metadata: VisualLayerMetadata;
}

const primaryHotspotId: BloodstreamHotspotId = "cell-destination";

function renderBloodstreamHotspotMarker(
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

export function BloodstreamSvg({ metadata }: BloodstreamSvgProps) {
  const [selectedHotspotId, setSelectedHotspotId] =
    useState<BloodstreamHotspotId | null>(null);
  const selectedHotspot = selectedHotspotId
    ? bloodstreamHotspotById[selectedHotspotId]
    : null;
  const hotspotLabels = useMemo(
    () => bloodstreamHotspots.map((hotspot) => hotspot.shortLabel).join(", "),
    []
  );

  return (
    <VisualFrame
      title="Nutrients and oxygen move through circulation"
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
            Select a bloodstream hotspot to learn more: {hotspotLabels}.
          </p>
        )
      }
    >
      <rect x="42" y="62" width="316" height="176" rx="34" fill="#f8fbff" opacity="0.92" />
      <path
        d="M58 116c48-34 98-34 148 0s98 34 146 0"
        fill="none"
        stroke="#c73535"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.94"
      />
      <path
        d="M58 184c48 34 98 34 148 0s98-34 146 0"
        fill="none"
        stroke="#2878b8"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.92"
      />
      <path
        d="M58 116c48-34 98-34 148 0s98 34 146 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.16"
      />
      <path
        d="M58 184c48 34 98 34 148 0s98-34 146 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.16"
      />
      {particles.map(({ cx, cy, fill }) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="9" fill={fill} opacity="0.95" />
      ))}
      <ellipse cx="306" cy="154" rx="36" ry="26" fill="#e9f7f1" opacity="0.95" />
      <ellipse
        cx="306"
        cy="154"
        rx="36"
        ry="26"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="3"
      />
      <circle cx="306" cy="154" r="10" fill="#dbeafe" stroke="#2878b8" strokeWidth="2" />
      <ZoomTargetRing cx={306} cy={154} r={40} />
      <path
        d="M320 104h24l-10-10"
        fill="none"
        stroke="#17211d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
      <path
        d="M80 196h-24l10 10"
        fill="none"
        stroke="#17211d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
      <SvgHotspot
        label={bloodstreamHotspotById["blood-vessel"].label}
        isSelected={selectedHotspotId === "blood-vessel"}
        onSelect={() => setSelectedHotspotId("blood-vessel")}
        marker={renderBloodstreamHotspotMarker(232, 96, false)}
        focusRing={
          <rect
            x="50"
            y="82"
            width="300"
            height="136"
            rx="42"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <rect
            x="56"
            y="88"
            width="288"
            height="124"
            rx="38"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <path
          d="M58 116c48-34 98-34 148 0s98 34 146 0"
          fill="none"
          stroke="transparent"
          strokeWidth="44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58 184c48 34 98 34 148 0s98-34 146 0"
          fill="none"
          stroke="transparent"
          strokeWidth="44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgHotspot>
      <SvgHotspot
        label={bloodstreamHotspotById["nutrient-particles"].label}
        isSelected={selectedHotspotId === "nutrient-particles"}
        onSelect={() => setSelectedHotspotId("nutrient-particles")}
        marker={renderBloodstreamHotspotMarker(144, 160, false)}
        focusRing={
          <ellipse
            cx="154"
            cy="154"
            rx="96"
            ry="64"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <ellipse
            cx="154"
            cy="154"
            rx="88"
            ry="56"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <ellipse cx="154" cy="154" rx="100" ry="68" fill="transparent" />
      </SvgHotspot>
      <SvgHotspot
        label={bloodstreamHotspotById["oxygen-particles"].label}
        isSelected={selectedHotspotId === "oxygen-particles"}
        onSelect={() => setSelectedHotspotId("oxygen-particles")}
        marker={renderBloodstreamHotspotMarker(260, 166, false)}
        focusRing={
          <circle
            cx="260"
            cy="166"
            r="40"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <circle
            cx="260"
            cy="166"
            r="33"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <circle cx="260" cy="166" r="36" fill="transparent" />
      </SvgHotspot>
      <SvgHotspot
        label={bloodstreamHotspotById["cell-destination"].label}
        isSelected={selectedHotspotId === "cell-destination"}
        onSelect={() => setSelectedHotspotId("cell-destination")}
        marker={renderBloodstreamHotspotMarker(
          318,
          146,
          primaryHotspotId === "cell-destination"
        )}
        focusRing={
          <circle
            cx="306"
            cy="154"
            r="53"
            fill="none"
            stroke="#2878b8"
            strokeWidth="3"
            strokeDasharray="2 6"
          />
        }
        selectedRing={
          <circle
            cx="306"
            cy="154"
            r="46"
            fill="none"
            stroke="#1f7a5a"
            strokeWidth="3"
            strokeDasharray="7 5"
          />
        }
      >
        <ellipse cx="306" cy="154" rx="52" ry="42" fill="transparent" />
      </SvgHotspot>
    </VisualFrame>
  );
}
