export function Badge({ v }) {
  let c = v.includes("Verified")
    ? "green"
    : v.includes("Pending")
      ? "amber"
      : v.includes("Disputed")
        ? "red"
        : v.includes("Self")
          ? "blue"
          : "slate";
  return <span className={"badge " + c}>{v}</span>;
}
export function Card({ children, cls = "" }) {
  return <section className={"card " + cls}>{children}</section>;
}
export function Head({ title, sub, children }) {
  return (
    <div className="head">
      <div>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
      {children}
    </div>
  );
}
export function Info({ a }) {
  return (
    <div className="info">
      {a.map((x) => (
        <div key={x[0]}>
          <small>{x[0]}</small>
          <b>{x[1]}</b>
        </div>
      ))}
    </div>
  );
}
export function Modal({ children, close }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button className="close" onClick={close}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
