// Approximate positions on a lat/long grid: x = 60 + (lon - 78) * 400, y = 508 - (lat - 29.5) * 462.
const PLACES = [
  { name: "Nainital", cx: 646, cy: 564, x: 636, y: 594, anchor: "end" },
  { name: "Bhimtal", cx: 682, cy: 579, x: 694, y: 602, anchor: "start" },
  { name: "Mukteshwar", cx: 719, cy: 521, x: 719, y: 504, anchor: "middle" },
  { name: "Ranikhet", cx: 633, cy: 442, x: 620, y: 436, anchor: "end" },
  { name: "Kausani", cx: 701, cy: 350, x: 713, y: 345, anchor: "start" },
  { name: "Rishikesh", cx: 167, cy: 237, x: 180, y: 232, anchor: "start" },
  { name: "Haridwar", cx: 126, cy: 303, x: 114, y: 330, anchor: "middle" },
  { name: "Mussoorie", cx: 86, cy: 68, x: 99, y: 74, anchor: "start" },
] as const;

export function JourneysMap() {
  return (
    <figure className="m-0 rounded-card border border-sand-line bg-forest p-[clamp(14px,2.4vw,26px)]">
      <svg viewBox="0 0 800 640" role="img" aria-labelledby="map-title" className="block h-auto w-full">
        <title id="map-title">Destinations Jungle Diaries plans trips to, mapped from Jim Corbett</title>
        <g className="stroke-sand-line" strokeWidth="1">
          {[508, 277, 46].map((y) => (
            <line key={y} x1="0" y1={y} x2="800" y2={y} />
          ))}
          {[60, 260, 460, 660].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="640" />
          ))}
        </g>
        <g className="fill-sand-soft font-sans" fontSize="15" letterSpacing="1">
          <text x="6" y="502">29.5° N</text>
          <text x="6" y="271">30° N</text>
          <text x="6" y="40">30.5° N</text>
          <text x="66" y="632">78° E</text>
          <text x="266" y="632">78.5° E</text>
          <text x="466" y="632">79° E</text>
          <text x="666" y="632">79.5° E</text>
        </g>
        <g className="fill-none stroke-marigold" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.55">
          <circle cx="510" cy="557" r="208" />
          <circle cx="510" cy="557" r="416" />
          <circle cx="510" cy="557" r="623" />
        </g>
        <g
          className="fill-marigold stroke-forest font-sans"
          fontSize="15"
          fontWeight="600"
          letterSpacing="1"
          paintOrder="stroke"
          strokeWidth="5"
        >
          <text x="516" y="343">50 km</text>
          <text x="516" y="135">100 km</text>
          <text x="74" y="122">150 km</text>
        </g>
        <g className="fill-sand-soft stroke-forest font-hand" fontSize="30" opacity="0.8" paintOrder="stroke" strokeWidth="6">
          <text x="250" y="190">Garhwal</text>
          <text x="540" y="392">Kumaon</text>
        </g>
        <g className="fill-sand">
          {PLACES.map((p) => (
            <circle key={p.name} cx={p.cx} cy={p.cy} r="6" />
          ))}
        </g>
        <circle cx="510" cy="557" r="18" className="fill-marigold" opacity="0.25" />
        <circle cx="510" cy="557" r="9" className="fill-marigold" />
        <g className="fill-sand stroke-forest font-sans" fontSize="21" fontWeight="500" paintOrder="stroke" strokeWidth="5">
          <text x="496" y="590" textAnchor="end" fontWeight="700">
            Jim Corbett
          </text>
          <text x="496" y="612" textAnchor="end" fontSize="16" className="fill-sand-soft">
            Ramnagar · our base
          </text>
          {PLACES.map((p) => (
            <text key={p.name} x={p.x} y={p.y} textAnchor={p.anchor}>
              {p.name}
            </text>
          ))}
        </g>
      </svg>
      <figcaption className="mt-2.5 flex flex-wrap justify-between gap-3 text-[0.82rem] text-sand-soft">
        <span>Rings: straight-line distance from Ramnagar</span>
        <span>Positions approximate</span>
      </figcaption>
    </figure>
  );
}
