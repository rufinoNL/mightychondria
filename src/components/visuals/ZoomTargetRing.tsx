interface ZoomTargetRingProps {
  cx: number;
  cy: number;
  r: number;
  label?: string;
  labelX?: number;
  labelY?: number;
}

export function ZoomTargetRing({
  cx,
  cy,
  r,
  label,
  labelX = cx,
  labelY = cy - r - 10
}: ZoomTargetRingProps) {
  return (
    <g aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="#1f7a5a" opacity="0.08" />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="3"
        strokeDasharray="7 7"
        opacity="0.86"
      />
      <circle
        cx={cx}
        cy={cy}
        r={Math.max(4, r * 0.18)}
        fill="#1f7a5a"
        opacity="0.26"
      />
      {label ? (
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          className="fill-ink text-xs font-semibold"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}
