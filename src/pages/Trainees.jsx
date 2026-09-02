import { useState } from "react";
import { Search } from "lucide-react";
import { Card, Head, Badge } from "../components/UI";
import { people } from "../data/demoData";
export default function Trainees({ open }) {
  let [q, setQ] = useState("");
  let list = people.filter((x) =>
    x.join(" ").toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <Head
        title="Trainees"
        sub="View consent-based longitudinal trainee records."
      />
      <div className="filters">
        <label>
          <Search size={17} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search trainee, ID or program"
          />
        </label>
        <select>
          <option>All districts</option>
          <option>Pune</option>
          <option>Nagpur</option>
        </select>
        <select>
          <option>All programs</option>
          <option>Full Stack Development</option>
        </select>
        <select>
          <option>All statuses</option>
          <option>Employed</option>
        </select>
      </div>
      <Card>
        <div className="table">
          <table>
            <thead>
              <tr>
                {[
                  "Trainee",
                  "Trainee ID",
                  "Training Program",
                  "District",
                  "Current Status",
                  "Verification",
                  "Last Follow-up",
                ].map((x) => (
                  <th key={x}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map((x) => (
                <tr key={x[1]} onClick={open}>
                  {x.map((v, i) => (
                    <td key={i}>
                      {i === 0 ? (
                        <b>{v}</b>
                      ) : i === 4 || i === 5 ? (
                        <Badge v={v} />
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
