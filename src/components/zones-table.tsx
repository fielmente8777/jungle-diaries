import { cx } from "./ui";

const ZONES = [
  { name: "Dhela", season: "Open through the year", open: true, room: "–" },
  { name: "Jhirna", season: "Open through the year", open: true, room: "Jhirna Room" },
  { name: "Bijrani", season: "Opens 15 October", open: false, room: "Bijrani Room" },
  { name: "Durga Devi", season: "Opens 15 October", open: false, room: "Durgadevi Room" },
  { name: "Dhikala", season: "Opens 15 November", open: false, room: "Dhikala Family Suite" },
];

export function ZonesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {["Zone", "Season", "Amaltas room"].map((h, i) => (
              <th
                key={h}
                scope="col"
                className={cx(
                  "border-b-[1.5px] border-ink pr-3 pb-3 text-left text-label font-semibold tracking-[0.14em] text-ink-soft uppercase",
                  i === 2 && "hidden sm:table-cell",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ZONES.map((z) => (
            <tr key={z.name}>
              <td className="border-b border-line py-[18px] pr-3 font-display text-[1.35rem] leading-[1.1] whitespace-nowrap sm:text-[1.6rem]">
                {z.name}
              </td>
              <td className="border-b border-line py-[18px] pr-3">
                <span className="inline-flex items-center gap-2 text-small font-semibold whitespace-nowrap">
                  <span
                    aria-hidden="true"
                    className={cx(
                      "size-2.5 flex-none rounded-full border-2",
                      z.open ? "border-gold bg-gold" : "border-ink-soft",
                    )}
                  />
                  {z.season}
                </span>
              </td>
              <td className="hidden border-b border-line py-[18px] pr-3 text-small text-ink-soft sm:table-cell">{z.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
