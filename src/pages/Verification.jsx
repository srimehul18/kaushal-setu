import { Send } from "lucide-react";
import { Card, Head, Badge, Info } from "../components/UI";
export function Verification({ verified, setVerified, review }) {
  let rows = [
    [
      "Rahul Sharma",
      "XYZ Solutions",
      "Junior Developer",
      "Trainee",
      verified ? "Employer Verified" : "Pending Verification",
    ],
    [
      "Priya Patil",
      "DataWorks",
      "Data Analyst",
      "Provider",
      "Employer Verified",
    ],
    ["Amit Kumar", "SolarTech", "Technician", "Trainee", "Disputed"],
  ];
  return (
    <>
      <Head
        title="Employment Verification"
        sub="Review and validate employment outcomes reported by trainees and providers."
      />
      <div className="stats four">
        {[
          ["Pending Verification", verified ? "33" : "34"],
          ["Employer Verified", verified ? "183" : "182"],
          ["Self-Reported", "76"],
          ["Disputed", "8"],
        ].map((x) => (
          <Card cls="stat" key={x[0]}>
            <small>{x[0]}</small>
            <strong>{x[1]}</strong>
            <p>Prototype workflow state</p>
          </Card>
        ))}
      </div>
      <Card>
        <div className="table">
          <table>
            <thead>
              <tr>
                {[
                  "Trainee",
                  "Employer",
                  "Position",
                  "Reported By",
                  "Status",
                  "Action",
                ].map((x) => (
                  <th key={x}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((x) => (
                <tr key={x[0]}>
                  {x.slice(0, 4).map((v) => (
                    <td key={v}>{v}</td>
                  ))}
                  <td>
                    <Badge v={x[4]} />
                  </td>
                  <td>
                    <button className="outline" onClick={() => review(x)}>
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
export function FollowUps({ toast }) {
  return (
    <>
      <Head
        title="Outcome Follow-ups"
        sub="Track trainee outcomes at 3, 6 and 12 months."
      >
        <button onClick={() => toast("Demo reminder queued successfully.")}>
          <Send size={16} />
          Send Reminder
        </button>
      </Head>
      <div className="three">
        {[
          [
            "3 Month Follow-up",
            "Completed",
            "Employed · INR 20,000 · ABC Technologies",
          ],
          [
            "6 Month Follow-up",
            "Completed",
            "Employed · INR 26,000 · XYZ Solutions",
          ],
          ["12 Month Follow-up", "Pending", "Awaiting trainee response"],
        ].map((x) => (
          <Card key={x[0]}>
            <h2>{x[0]}</h2>
            <Badge v={x[1]} />
            <p>{x[2]}</p>
          </Card>
        ))}
      </div>
      <Card>
        <small>Follow-up Status</small>
        <h2>Assisted response workflow</h2>
        <div className="flow">
          <b>Reminder 1 · Sent</b>
          <b>Reminder 2 · Sent</b>
          <b>Human Follow-up · Pending</b>
        </div>
        <p>
          No response after automated reminders. Escalated for assisted
          follow-up.
        </p>
        <button
          className="outline"
          onClick={() => toast("Response form opened in prototype mode.")}
        >
          Record Response
        </button>
      </Card>
    </>
  );
}
export function Review({ record, close, verify }) {
  return (
    <>
      <small>Verification review</small>
      <h2>
        {record[0]} · {record[2]}
      </h2>
      <p>
        Reported employment outcome with {record[1]}. Verification status
        indicates the source and confidence of the reported employment outcome.
      </p>
      <Info
        a={[
          ["Reported By", record[3]],
          [
            "Review Threshold",
            "Configurable Verification Confidence Threshold",
          ],
          ["Current Status", record[4]],
        ]}
      />
      <div className="actions">
        <button className="outline" onClick={close}>
          Mark Disputed
        </button>
        <button onClick={verify}>Approve / Verify</button>
      </div>
    </>
  );
}
