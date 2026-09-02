import { ShieldCheck, Check, X } from "lucide-react";
import { Card, Head, Badge, Info } from "../components/UI";
export function Profile({ verified, setVerified, back }) {
  let events = [
    [
      "January 2026",
      "Training Completed",
      "Full Stack Web Development completed successfully.",
    ],
    [
      "February 2026",
      "Certification Issued",
      "Certificate verified by training provider.",
    ],
    [
      "April 2026",
      "Job 1: Junior Web Developer",
      "ABC Technologies · INR 20,000/month",
    ],
    ["July 2026", "3-Month Follow-up: Employed", "Employer: ABC Technologies"],
    [
      "September 2026",
      "Job 2: Junior Developer",
      "XYZ Solutions · INR 26,000/month",
    ],
    [
      "December 2026",
      "6-Month Follow-up: Employed",
      "Salary progression recorded: INR 26,000/month",
    ],
  ];
  return (
    <>
      <button className="link" onClick={back}>
        ← Back to trainees
      </button>
      <Head
        title="Rahul Sharma"
        sub="KS-10245 · Pune · Consent-Based Longitudinal Record"
      >
        <Badge v={verified ? "Employer Verified" : "Pending Verification"} />
      </Head>
      <div className="two">
        <Card>
          <h2>Profile Summary</h2>
          <Info
            a={[
              ["Training Provider", "Maharashtra Skills Training Centre"],
              ["Completion Date", "15 January 2026"],
              ["Certification", "Verified"],
              ["Skills", "HTML · CSS · JavaScript · React"],
            ]}
          />
        </Card>
        <Card>
          <h2>Employment Record</h2>
          <Info
            a={[
              ["Current Employer", "XYZ Solutions"],
              ["Position", "Junior Developer"],
              ["Salary", "INR 26,000/month"],
              ["Reported By", "Trainee"],
            ]}
          />
          <div className="verify">
            <Badge
              v={verified ? "Employer Verified" : "Pending Verification"}
            />
            {verified ? (
              <small>Verified by XYZ Solutions · 02 September 2026</small>
            ) : (
              <button onClick={() => setVerified(true)}>
                <ShieldCheck size={16} />
                Verify Employment
              </button>
            )}
          </div>
        </Card>
      </div>
      <Card>
        <h2>Employment Journey</h2>
        <p>Every employment outcome remains part of the longitudinal record.</p>
        <div className="timeline">
          {events.map((x, i) => (
            <div className="event" key={x[0]}>
              <i>{i + 1}</i>
              <div>
                <small>{x[0]}</small>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h2>Audit Trail</h2>
        <p>
          <b>02 Sep 2026, 10:42 AM</b> · Employment status updated · Employer
          Verification Portal
        </p>
        <p>
          <b>01 Sep 2026, 3:15 PM</b> · Employment record submitted · Source:
          Trainee
        </p>
        <small>Prototype Mode · Synthetic Demo Data</small>
      </Card>
    </>
  );
}
export function SkillGap({ toast }) {
  let current = ["HTML", "CSS", "JavaScript", "React"],
    required = [...current, "SQL", "AWS", "Docker"];
  return (
    <>
      <Head
        title="Skill Gap Intelligence"
        sub="Compare trainee skills with skills required by target employment opportunities."
      />
      <div className="two">
        {[
          ["Current Skills", current],
          ["Required Skills", required],
        ].map((x) => (
          <Card key={x[0]}>
            <small>
              {x[0] === "Required Skills"
                ? "Target Job · Full Stack Developer"
                : "Rahul Sharma"}
            </small>
            <h2>{x[0]}</h2>
            {x[1].map((v) => (
              <div
                className={"skill " + (current.includes(v) ? "yes" : "no")}
                key={v}
              >
                {current.includes(v) ? <Check size={16} /> : <X size={16} />}{" "}
                {v}
              </div>
            ))}
          </Card>
        ))}
      </div>
      <Card cls="gap">
        <div>
          <small>Transparent baseline matching</small>
          <h2>Skill Gap Detected</h2>
          <b>SQL · AWS · Docker</b>
          <p>
            Skill gap = required job skills not currently present in the trainee
            profile.
          </p>
        </div>
        <strong>
          57%<small>Skill Match</small>
        </strong>
      </Card>
      <Card>
        <h2>Recommended Upskilling</h2>
        {[
          ["SQL Fundamentals", "High"],
          ["AWS Basics", "High"],
          ["Docker Fundamentals", "Medium"],
        ].map((x) => (
          <div className="course" key={x[0]}>
            <b>{x[0]}</b>
            <Badge v={x[1] + " Priority"} />
            <button
              className="outline"
              onClick={() =>
                toast("Development plan updated with demo recommendation.")
              }
            >
              Add to Development Plan
            </button>
          </div>
        ))}
      </Card>
    </>
  );
}
