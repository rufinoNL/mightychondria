"use client";

import { useEffect, useMemo, useState } from "react";
import {
  digestiveHotspotById,
  digestiveHotspots
} from "@/content/digestiveHotspots";
import type { DigestiveHotspotId } from "@/types/hotspots";
import { SvgHotspot } from "./SvgHotspot";
import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

type DigestiveStage = "mouth" | "esophagus" | "stomach" | "small-intestine";

interface DigestiveSystemSvgProps {
  stage: DigestiveStage;
  metadata: VisualLayerMetadata;
}

const stageCopy: Record<DigestiveStage, string> = {
  mouth: "Mouth: chewing and saliva begin digestion",
  esophagus: "Esophagus: peristalsis moves food downward",
  stomach: "Stomach: acid and churning make chyme",
  "small-intestine": "Small intestine: nutrients are absorbed"
};

const activeColor = "#1f7a5a";
const inactiveStroke = "#8b5f3c";
const inactiveOpacity = "0.42";

function isActive(stage: DigestiveStage, target: DigestiveStage) {
  return stage === target;
}

export function DigestiveSystemSvg({
  stage,
  metadata
}: DigestiveSystemSvgProps) {
  const [selectedHotspotId, setSelectedHotspotId] =
    useState<DigestiveHotspotId | null>(null);
  const isMouth = stage === "mouth";
  const isEsophagus = stage === "esophagus";
  const isStomach = stage === "stomach";
  const isIntestine = stage === "small-intestine";
  const selectedHotspot = selectedHotspotId
    ? digestiveHotspotById[selectedHotspotId]
    : null;
  const hotspotLabels = useMemo(
    () =>
      digestiveHotspots
        .map((hotspot) => hotspot.shortLabel)
        .join(", "),
    []
  );

  useEffect(() => {
    setSelectedHotspotId(null);
  }, [stage]);

  return (
    <VisualFrame
      title={stageCopy[stage]}
      metadata={metadata}
      interactive
      detail={
        selectedHotspot ? (
          <div aria-live="polite">
            <p className="font-semibold text-ink">{selectedHotspot.label}</p>
            <p className="mt-1">{selectedHotspot.explanation}</p>
          </div>
        ) : (
          <p className="text-ink/65">
            Select a digestive hotspot to learn more: {hotspotLabels}.
          </p>
        )
      }
    >
      <path
        d="M118 82c10 20 28 34 52 48"
        fill="none"
        stroke="#17211d"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 7"
        opacity="0.18"
      />
      <path
        d="M152 70c40 22 58 46 58 84"
        fill="none"
        stroke={isEsophagus ? "#2878b8" : inactiveStroke}
        strokeWidth={isEsophagus ? "16" : "11"}
        strokeLinecap="round"
        opacity={isEsophagus ? "0.96" : inactiveOpacity}
      />
      <circle
        cx="118"
        cy="60"
        r="26"
        fill={isMouth ? "#f0c14b" : "#fde7a6"}
        stroke={isMouth ? activeColor : "#d89216"}
        strokeWidth={isMouth ? "4" : "2.5"}
        opacity={isMouth ? "1" : "0.7"}
      />
      <path
        d="M96 50h44"
        fill="none"
        stroke="#17211d"
        strokeWidth="3"
        strokeLinecap="round"
        opacity={isMouth ? "0.95" : "0.28"}
      />
      <circle cx="132" cy="72" r="5" fill="#2878b8" opacity={isMouth ? "0.95" : "0.28"} />
      <circle cx="108" cy="76" r="4" fill="#2878b8" opacity={isMouth ? "0.95" : "0.28"} />
      <path
        d="M160 84c16 12 26 28 30 46"
        fill="none"
        stroke="#17211d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
        opacity={isEsophagus ? "0.72" : "0.12"}
      />
      <path
        d="M210 122c34 0 62 20 62 46 0 28-30 46-66 42-32-4-54-24-54-48 0-22 22-40 58-40z"
        fill={isStomach ? "#f4b38a" : "#f7d7bd"}
        stroke={isStomach ? activeColor : "#8b5f3c"}
        strokeWidth={isStomach ? "4" : "2.5"}
        strokeLinejoin="round"
        opacity={isStomach ? "1" : "0.64"}
      />
      <path
        d="M176 160c18-14 42 12 64-2"
        fill="none"
        stroke="#d89216"
        strokeWidth="4"
        strokeLinecap="round"
        opacity={isStomach ? "0.95" : "0.18"}
      />
      <circle cx="214" cy="142" r="5" fill="#2878b8" opacity={isStomach ? "0.9" : "0.18"} />
      <circle cx="236" cy="164" r="5" fill="#2878b8" opacity={isStomach ? "0.9" : "0.18"} />
      <path
        d="M174 208c-32 0-44 30-16 42 34 14 72-14 50-38-18-20-58 0-46 24 12 26 78 26 98-2"
        fill="none"
        stroke={isIntestine ? activeColor : inactiveStroke}
        strokeWidth={isIntestine ? "13" : "8"}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={isIntestine ? "0.96" : inactiveOpacity}
      />
      <circle cx="170" cy="96" r="7" fill="#d89216" opacity={isEsophagus ? "0.95" : "0.22"} />
      <circle cx="188" cy="120" r="7" fill="#d89216" opacity={isEsophagus ? "0.95" : "0.22"} />
      <circle cx="158" cy="236" r="7" fill="#d89216" opacity={isIntestine ? "0.95" : "0.22"} />
      <circle cx="220" cy="224" r="7" fill="#2878b8" opacity={isIntestine ? "0.95" : "0.22"} />
      <circle cx="260" cy="236" r="7" fill="#1f7a5a" opacity={isIntestine ? "0.95" : "0.22"} />
      {[160, 182, 204, 226, 248].map((x) => (
        <path
          key={x}
          d={`M${x} 204l8 14 8-14`}
          fill="none"
          stroke="#17211d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={isIntestine ? "0.75" : "0.16"}
        />
      ))}
      {isIntestine ? <ZoomTargetRing cx={232} cy={226} r={48} /> : null}
      {(
        [
          ["mouth", 118, 60, 40],
          ["esophagus", 180, 106, 34],
          ["stomach", 212, 166, 68],
          ["small-intestine", 212, 226, 74]
        ] as const
      ).map(([target, cx, cy, r]) =>
        isActive(stage, target) ? (
          <circle
            key={target}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={activeColor}
            strokeWidth="3"
            strokeDasharray="7 7"
            opacity="0.85"
          />
        ) : null
      )}
      <SvgHotspot
        label={digestiveHotspotById.mouth.label}
        isSelected={selectedHotspotId === "mouth"}
        onSelect={() => setSelectedHotspotId("mouth")}
        focusRing={
          <circle
            cx="118"
            cy="60"
            r="45"
            fill="none"
            stroke="#17211d"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
        }
      >
        <circle cx="118" cy="60" r="38" fill="transparent" />
      </SvgHotspot>
      <SvgHotspot
        label={digestiveHotspotById.esophagus.label}
        isSelected={selectedHotspotId === "esophagus"}
        onSelect={() => setSelectedHotspotId("esophagus")}
        focusRing={
          <circle
            cx="180"
            cy="106"
            r="39"
            fill="none"
            stroke="#17211d"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
        }
      >
        <path
          d="M152 70c40 22 58 46 58 84"
          fill="none"
          stroke="transparent"
          strokeWidth="32"
          strokeLinecap="round"
        />
      </SvgHotspot>
      <SvgHotspot
        label={digestiveHotspotById.stomach.label}
        isSelected={selectedHotspotId === "stomach"}
        onSelect={() => setSelectedHotspotId("stomach")}
        focusRing={
          <circle
            cx="212"
            cy="166"
            r="74"
            fill="none"
            stroke="#17211d"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
        }
      >
        <path
          d="M210 122c34 0 62 20 62 46 0 28-30 46-66 42-32-4-54-24-54-48 0-22 22-40 58-40z"
          fill="transparent"
          stroke="transparent"
          strokeWidth="18"
          strokeLinejoin="round"
        />
      </SvgHotspot>
      <SvgHotspot
        label={digestiveHotspotById["small-intestine"].label}
        isSelected={selectedHotspotId === "small-intestine"}
        onSelect={() => setSelectedHotspotId("small-intestine")}
        focusRing={
          <circle
            cx="212"
            cy="226"
            r="83"
            fill="none"
            stroke="#17211d"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
        }
      >
        <path
          d="M174 208c-32 0-44 30-16 42 34 14 72-14 50-38-18-20-58 0-46 24 12 26 78 26 98-2"
          fill="none"
          stroke="transparent"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgHotspot>
      <SvgHotspot
        label={digestiveHotspotById.villi.label}
        isSelected={selectedHotspotId === "villi"}
        onSelect={() => setSelectedHotspotId("villi")}
        focusRing={
          <circle
            cx="210"
            cy="211"
            r="62"
            fill="none"
            stroke="#17211d"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
        }
      >
        <rect
          x="148"
          y="188"
          width="124"
          height="54"
          rx="18"
          fill="transparent"
        />
      </SvgHotspot>
    </VisualFrame>
  );
}
