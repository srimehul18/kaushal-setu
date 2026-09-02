import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Sparkles,
  ClipboardCheck,
  Building2,
  Search,
  Bell,
} from "lucide-react";

const navigation = [
  ["Overview", LayoutDashboard],
  ["Trainees", Users],
  ["Employment Verification", ShieldCheck],
  ["Skill Gap Intelligence", Sparkles],
  ["Follow-ups", ClipboardCheck],
  ["Program Insights", Building2],
];

const access = {
  "Government Analyst": navigation.map(([name]) => name),
  "Training Provider": [
    "Overview",
    "Trainees",
    "Skill Gap Intelligence",
    "Follow-ups",
  ],
  Trainee: ["Trainees", "Skill Gap Intelligence", "Follow-ups"],
  Employer: ["Employment Verification", "Skill Gap Intelligence"],
};

export default function Layout({
  page,
  setPage,
  profile,
  setProfile,
  role,
  onRoleChange,
  children,
}) {
  const visibleNavigation = navigation.filter(([name]) =>
    access[role].includes(name),
  );

  return (
    <div className="app">
      <aside>
        <div className="brand">
          <b>KAUSHAL SETU</b>
          <small>Skilling Outcomes Intelligence</small>
        </div>

        <nav>
          {visibleNavigation.map(([name, Icon]) => (
            <button
              key={name}
              className={page === name && !profile ? "active" : ""}
              onClick={() => {
                setPage(name);
                setProfile(role === "Trainee" && name === "Trainees");
              }}
            >
              <Icon size={18} />
              {name}
            </button>
          ))}
        </nav>

        <div className="proto">
          Prototype Mode
          <br />
          <b>Synthetic Demo Data</b>
        </div>
      </aside>

      <main>
        <header>
          <div className="search">
            <Search size={17} />
            <input placeholder="Search trainee records" />
          </div>

          <span className="demo-label">
            Prototype Mode · Synthetic Demo Data
          </span>

          <select
            value={role}
            onChange={(event) => onRoleChange(event.target.value)}
          >
            {Object.keys(access).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>

          <Bell size={19} />
          <b className="avatar">GA</b>
        </header>

        <div className="rolebar">
          Role-Based Access · <b>{role}</b> · Consent-based records require
          appropriate review
        </div>

        <div className="content">{children}</div>
      </main>
    </div>
  );
}
