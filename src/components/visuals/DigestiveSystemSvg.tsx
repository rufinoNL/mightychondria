import { VisualFrame } from "./VisualFrame";

type DigestiveStage = "mouth" | "esophagus" | "stomach" | "small-intestine";

interface DigestiveSystemSvgProps {
  stage: DigestiveStage;
}

const stageCopy: Record<DigestiveStage, string> = {
  mouth: "Mouth: chewing and saliva begin digestion",
  esophagus: "Esophagus: peristalsis moves food downward",
  stomach: "Stomach: acid and churning make chyme",
  "small-intestine": "Small intestine: nutrients are absorbed"
};

export function DigestiveSystemSvg({ stage }: DigestiveSystemSvgProps) {
  const isMouth = stage === "mouth";
  const isEsophagus = stage === "esophagus";
  const isStomach = stage === "stomach";
  const isIntestine = stage === "small-intestine";

  return (
    <VisualFrame title={stageCopy[stage]}>
      <circle
        cx="118"
        cy="58"
        r={isMouth ? "28" : "18"}
        fill={isMouth ? "#d89216" : "#f0c14b"}
        stroke={isMouth ? "#17211d" : "none"}
        strokeWidth="3"
      />
      <path
        d="M140 60c50 22 68 42 60 82"
        fill="none"
        stroke={isEsophagus ? "#2878b8" : "#8b5f3c"}
        strokeWidth={isEsophagus ? "18" : "12"}
        strokeLinecap="round"
      />
      <ellipse
        cx="210"
        cy="154"
        rx={isStomach ? "62" : "48"}
        ry={isStomach ? "38" : "30"}
        fill={isStomach ? "#f4b38a" : "#f7d7bd"}
        stroke="#17211d"
        strokeWidth="3"
      />
      <path
        d="M184 196c-44 6-48 54-2 58 52 4 66-52 20-58-52-6-66 48-20 58"
        fill="none"
        stroke={isIntestine ? "#1f7a5a" : "#8b5f3c"}
        strokeWidth={isIntestine ? "14" : "9"}
        strokeLinecap="round"
      />
      {isMouth ? (
        <>
          <path d="M92 44h52" stroke="#17211d" strokeWidth="4" strokeLinecap="round" />
          <circle cx="132" cy="70" r="6" fill="#2878b8" />
          <circle cx="108" cy="76" r="5" fill="#2878b8" />
        </>
      ) : null}
      {isEsophagus ? (
        <>
          <circle cx="168" cy="92" r="7" fill="#d89216" />
          <circle cx="186" cy="116" r="7" fill="#d89216" />
        </>
      ) : null}
      {isStomach ? (
        <>
          <path d="M176 154c20-16 48 16 70-2" fill="none" stroke="#d89216" strokeWidth="5" strokeLinecap="round" />
          <circle cx="214" cy="140" r="5" fill="#2878b8" />
          <circle cx="236" cy="162" r="5" fill="#2878b8" />
        </>
      ) : null}
      {isIntestine ? (
        <>
          <circle cx="150" cy="230" r="7" fill="#d89216" />
          <circle cx="224" cy="224" r="7" fill="#2878b8" />
          <circle cx="260" cy="242" r="7" fill="#1f7a5a" />
        </>
      ) : null}
      <text x="200" y="280" textAnchor="middle" className="fill-ink text-sm font-semibold">
        {stageCopy[stage]}
      </text>
    </VisualFrame>
  );
}
