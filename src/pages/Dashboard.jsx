import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Head } from "../components/UI";
import { gaps, programs } from "../data/demoData";
function Table({ choose }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {[
              "Training Program",
              "Trainees",
              "Completion",
              "Employment",
              "6M Retention",
            ].map((x) => (
              <th key={x}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {programs.map((r) => (
            <tr key={r[0]} onClick={() => choose(r)}>
              {r.map((x, i) => (
                <td key={x}>{i ? <>{x}</> : <b>{x}</b>}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default function Dashboard({ choose }) {
  return (
    <>
      <Head
        title="Outcome Intelligence Dashboard"
        sub="Track training outcomes, employment retention and emerging skill gaps."
      />
      <div className="stats">
        {[
          ["Total Trainees", "12,450", "Across 5 active programs"],
          ["Employed", "7,820", "62.8% employment outcome"],
          ["Self-Employed", "1,240", "10.0% of records"],
          ["Seeking Employment", "2,180", "17.5% require support"],
          ["Unreachable", "1,210", "9.7% follow-up pending"],
        ].map((x) => (
          <Card cls="stat" key={x[0]}>
            <small>{x[0]}</small>
            <strong>{x[1]}</strong>
            <p>{x[2]}</p>
          </Card>
        ))}
      </div>
      <div className="two">
        <Card>
          <h2>Employment Retention</h2>
          <p>Percentage of employed trainees remaining employed over time.</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={[
                { n: "3 Months", v: 82 },
                { n: "6 Months", v: 74 },
                { n: "12 Months", v: 64 },
              ]}
            >
              <XAxis dataKey="n" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="v" fill="#174a7e" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <small>
            Longitudinal tracking helps measure whether placement results are
            sustained.
          </small>
        </Card>
        <Card>
          <h2>Emerging Skill Gaps</h2>
          <p>Skills frequently missing relative to employment requirements.</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart layout="vertical" data={gaps}>
              <XAxis type="number" />
              <YAxis dataKey="n" type="category" width={110} />
              <Tooltip />
              <Bar dataKey="v" fill="#28745d" radius={[0, 5, 5, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <Card>
        <h2>Program Performance</h2>
        <Table choose={choose} />
      </Card>
      <Card>
        <h2>District Insights</h2>
        <div className="districts">
          {[
            ["Pune", "2,450", "1,680", "76%"],
            ["Nagpur", "1,920", "1,210", "71%"],
            ["Nashik", "1,680", "1,020", "68%"],
            ["Aurangabad", "1,420", "850", "65%"],
          ].map((x) => (
            <div key={x[0]}>
              <b>{x[0]}</b>
              <span>Trained {x[1]}</span>
              <span>Employed {x[2]}</span>
              <em>{x[3]} retention</em>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
