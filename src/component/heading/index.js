import "./index.css";

export default function Heading({ children, border }) {
  return (
    <strong className={`heading ${border ? "heading--border" : ""}`}>
      {children}
    </strong>
  );
}
