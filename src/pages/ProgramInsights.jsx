import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, Head } from "../components/UI";
export default function ProgramInsights() {
  let d = [
      { n: "Insufficient Skills", v: 34 },
      { n: "No Suitable Jobs", v: 24 },
      { n: "Location Mismatch", v: 17 },
      { n: "Salary Mismatch", v: 12 },
      { n: "Interview Difficulty", v: 8 },
      { n: "Other", v: 5 },
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
              <Pie data={d} dataKey="v" innerRadius={55} outerRadius={92}>
                {d.map((x, i) => (
                  <Cell key={x.n} fill={c[i]} />
                ))}
              </Pie>
              <Tooltip />
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
