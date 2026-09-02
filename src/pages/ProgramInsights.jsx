import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, Head } from "../components/UI";
export default function ProgramInsights() {
  let d = [
      { reason: "Insufficient Skills", count: 34 },
      { reason: "No Suitable Jobs", count: 24 },
      { reason: "Location Mismatch", count: 17 },
      { reason: "Salary Mismatch", count: 12 },
      { reason: "Interview Difficulty", count: 8 },
      { reason: "Other", count: 5 },
    ],
    c = ["#174a7e", "#28745d", "#d69b39", "#71859a", "#a16e51", "#b6c0c8"];
  return (
    <>
      <Head
        title="Program & Policy Insights"
        sub="Evidence for improving training programs and resource allocation."
      />
      <Card cls="program">
        <div>
          <small>Program performance</small>
          <h2>Full Stack Development</h2>
          <p>Longitudinal outcome view for 500 trainees.</p>
        </div>
        <div>
          {[
            ["Trainees", "500"],
            ["Completion", "92%"],
            ["Employment", "68%"],
            ["6-Month Retention", "74%"],
            ["Starting Salary", "INR 20,000"],
            ["Current Salary", "INR 26,000"],
          ].map((x) => (
            <span key={x[0]}>
              <small>{x[0]}</small>
              <b>{x[1]}</b>
            </span>
          ))}
        </div>
      </Card>
      <div className="two">
        <Card>
          <h2>Reasons for Non-Placement</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={d}
                dataKey="count"
                nameKey="reason"
                innerRadius={55}
                outerRadius={92}
              >
                {d.map((x, i) => (
                  <Cell key={x.reason} fill={c[i]} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  const entry = payload?.[0]?.payload;
                  return active && entry ? (
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid #dfe7ee",
                        borderRadius: 6,
                        boxShadow: "0 4px 14px rgba(23, 74, 126, 0.12)",
                        color: "#1b3047",
                        display: "grid",
                        gap: 4,
                        padding: "10px 12px",
                      }}
                    >
                      <strong>{entry.reason}</strong>
                      <span>{entry.count} trainees</span>
                    </div>
                  ) : null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <small>Prototype Insight</small>
          <h2>Program Insight</h2>
          <p>
            Full Stack Development shows strong completion but moderate
            employment retention. SQL and cloud skills appear frequently in
            target job requirements but are missing from a significant portion
            of trainee profiles.
          </p>
          <hr />
          <small>Suggested Action</small>
          <h3>
            Consider adding SQL, cloud fundamentals and deployment skills to the
            training curriculum.
          </h3>
        </Card>
      </div>
    </>
  );
}
