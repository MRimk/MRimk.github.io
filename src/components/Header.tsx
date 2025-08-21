// src/components/Header.tsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "1rem",
        borderBottom: "1px solid #eee",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.25rem" }}>Martynas Rimkevičius</h1>
      <nav>
        <NavLink to="/" style={{ marginRight: 12 }}>
          Main
        </NavLink>
        <NavLink to="/cv" style={{ marginRight: 12 }}>
          CV
        </NavLink>
        <NavLink to="/projects" style={{ marginRight: 12 }}>
          Projects
        </NavLink>
        <NavLink to="/interests">Interests</NavLink>
      </nav>
    </header>
  );
}
