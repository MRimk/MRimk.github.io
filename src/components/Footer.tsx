// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f4f4f4",
        padding: "1rem",
        textAlign: "center",
        marginTop: "2rem",
        borderTop: "1px solid #ddd",
      }}
    >
      <p>© {new Date().getFullYear()} MRimk</p>
      <p>
        📧{" "}
        <a href="mailto:martynas.rimkevicius2001@gmail.com">
          martynas.rimkevicius2001@gmail.com
        </a>{" "}
        | 📞 <a href="mailto:martynas.rimkevicius2001@gmail.com">On request</a>
      </p>
    </footer>
  );
}
