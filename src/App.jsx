import { useState } from "react";
import "./index.css";

import Layout from "./components/Layout";
import { Modal, Info } from "./components/UI";
import Dashboard from "./pages/Dashboard";
import Trainees from "./pages/Trainees";
import { Profile, SkillGap } from "./pages/TraineeProfile";
import { Verification, FollowUps, Review } from "./pages/Verification";
import ProgramInsights from "./pages/ProgramInsights";

const roleLandingPage = {
  "Government Analyst": "Overview",
  "Training Provider": "Overview",
  Trainee: "Trainees",
  Employer: "Employment Verification",
};

export default function App() {
  const [page, setPage] = useState("Overview");
  const [profile, setProfile] = useState(false);
  const [verified, setVerified] = useState(false);
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState(null);
  const [role, setRole] = useState("Government Analyst");

  const say = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  const changeRole = (nextRole) => {
    setRole(nextRole);
    setPage(roleLandingPage[nextRole]);
    setProfile(nextRole === "Trainee");
    say(`${nextRole} prototype view selected`);
  };

  let content;

  if (profile) {
    content = (
      <Profile
        verified={verified}
        setVerified={setVerified}
        back={() => {
          setProfile(false);
          setPage("Trainees");
        }}
      />
    );
  } else if (page === "Overview") {
    content = <Dashboard choose={setModal} />;
  } else if (page === "Trainees") {
    content = <Trainees open={() => setProfile(true)} />;
  } else if (page === "Employment Verification") {
    content = (
      <Verification
        verified={verified}
        setVerified={setVerified}
        review={setModal}
      />
    );
  } else if (page === "Skill Gap Intelligence") {
    content = <SkillGap toast={say} />;
  } else if (page === "Follow-ups") {
    content = <FollowUps toast={say} />;
  } else {
    content = <ProgramInsights />;
  }

  return (
    <>
      <Layout
        page={page}
        setPage={setPage}
        profile={profile}
        setProfile={setProfile}
        role={role}
        onRoleChange={changeRole}
      >
        {content}
      </Layout>

      {toast && <div className="toast">{toast}</div>}

      {modal && (
        <Modal close={() => setModal(null)}>
          {modal[0] === "Rahul Sharma" ? (
            <Review
              record={modal}
              close={() => setModal(null)}
              verify={() => {
                setVerified(true);
                setModal(null);
                say("Rahul Sharma is now Employer Verified");
              }}
            />
          ) : (
            <>
              <small>Prototype program cohort details</small>
              <h2>{modal[0]}</h2>
              <Info
                a={[
                  ["Trainees", modal[1]],
                  ["Completion", modal[2]],
                  ["Employment", modal[3]],
                  ["6M Retention", modal[4]],
                ]}
              />
            </>
          )}
        </Modal>
      )}
    </>
  );
}
